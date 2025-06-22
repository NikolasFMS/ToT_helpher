const CACHE_NAME = 'ToTv1'; // Уникальное имя для кэша
const URLS_TO_CACHE = [
    '/', // Добавь корневой путь, если твой index.html доступен по нему
    'index.html',
    'audio/click.mp3',
    'css/styles.css',
    'manifest.json',
    'scripts/script.js',
    'service-worker.js',

    // Иконки
    'ico/favicon.ico',
    'ico/icon_x48.png',
    'ico/icon_x72.png',
    'ico/icon_x96.png',
    'ico/icon_x128.png',
    'ico/icon_x192.png',
    'ico/icon_x384.png',
    'ico/icon_x512.png',
    'ico/icon_x1024.png',

    // Изображения
    'img/bird.png',
    'img/birdx.png',
    'img/book.png',
    'img/bookx.png',
    'img/cat.png',
    'img/catx.png',
    'img/desert.png',
    'img/dragon.png',
    'img/dragonx.png',
    'img/forest.png',
    'img/joker.png',
    'img/logo.png',
    'img/map.png',
    'img/monument.png',
    'img/monumentx.png',
    'img/mountan.png',
    'img/water.png'
];

// Инициализация IndexedDB
const DB_NAME = 'ToT_DB'; // Отдельное имя для IndexedDB, чтобы не конфликтовать с CacheStorage
const DB_VERSION = 1;
let db; // Переменная для хранения ссылки на базу данных

// Функция для открытия IndexedDB
function openIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains('resources')) {
                db.createObjectStore('resources', { keyPath: 'url' }); // Указываем 'url' как ключ
            }
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };

        request.onerror = (event) => {
            console.error("IndexedDB error:", event.target.errorCode);
            reject(event.target.errorCode);
        };
    });
}

// Установка Service Worker и кэширование ресурсов
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Кэширование ресурсов');
                // Мы используем cache.addAll для атомарной операции
                // Если хоть один URL не кэшируется, вся установка проваливается
                return cache.addAll(URLS_TO_CACHE);
            })
            .then(() => {
                // После успешного кэширования всех ресурсов, открываем IndexedDB
                return openIndexedDB();
            })
            .then(() => {
                // Если нужно, можно добавить логику сохранения в IndexedDB здесь,
                // но для базового кэширования это необязательно.
                // IndexedDB лучше использовать для динамических данных,
                // а не для статических ресурсов, которые уже в CacheStorage.
                console.log('Все статические ресурсы успешно кэшированы и IndexedDB готова.');
            })
            .catch(error => {
                console.error('Ошибка при установке Service Worker:', error);
                // Это очень важно: если произошла ошибка, Service Worker не будет установлен.
                // Это предотвратит некорректную работу приложения в оффлайн-режиме.
                throw error;
            })
    );
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
    // Проверяем, является ли запрос навигатором (т.е. загрузка страницы)
    // и если это не API запрос
    if (event.request.mode === 'navigate' || URLS_TO_CACHE.includes(event.request.url.replace(self.location.origin + '/', ''))) {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    // Стратегия: Сначала кэш, затем сеть, затем запасной вариант
                    return response || fetch(event.request).catch(() => {
                        // Если нет ни в кэше, ни в сети, вернем запасную страницу или ошибку
                        // Например, можно вернуть оффлайн-страницу
                        // return caches.match('/offline.html'); // Тебе нужно создать offline.html
                        console.log('Нет сети и нет кэша для:', event.request.url);
                        // Если нет offline.html, то просто отклоняем
                        throw new Error('No cache and no network for: ' + event.request.url);
                    });
                })
        );
    } else {
        // Для остальных запросов (например, API, если они есть), можно использовать другую стратегию
        // Например, "Network First, then Cache" или просто "Network Only"
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(event.request); // Если сеть недоступна, пытаемся найти в кэше
            })
        );
    }
});

// Обновление кэша при активации нового Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Удаление старого кэша:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Убеждаемся, что Service Worker контролирует клиентов немедленно
            return self.clients.claim();
        })
    );
});
