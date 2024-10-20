const CACHE_NAME = 'ToTv1'; // Уникальное имя для кэша
const URLS_TO_CACHE = [
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

// Установка Service Worker и кэширование ресурсов

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Кэширование ресурсов');
                return Promise.all(
                    URLS_TO_CACHE.map(url => {
                        return cache.add(url).catch(error => {
                            console.error(`Ошибка при кэшировании ресурса: ${url}`, error);
                            throw error; // Прекращаем кэширование при ошибке
                        });
                    })
                );
            })
    );
});



// Обработка запросов
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Если есть кэшированный ресурс, возвращаем его
                if (response) {
                    return response;
                }
                // Если нет, загружаем ресурс из сети
                return fetch(event.request);
            })
    );
});

// Обновление кэша при активации нового Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME]; // Массив с допустимыми именами кэшей
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Удаляем старые кэши
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

