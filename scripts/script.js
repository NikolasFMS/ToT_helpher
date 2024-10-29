var ui = [
    {
        "type": "page",
        "class": "page n1",
        "content": [
            {
                "type": "div",
                "class": "button-container start",
                "content": [
                    {
                        "type": "div",
                        "class": "button start",
                        "content": "START",
                        "onclick": "start()"
                    }
                ]
            }
        ]
    },
    {
        "type": "page",
        "class": "page n2",
        "content": [
            {
                "type": "div",
                "class": "button-container map",
                "content": [
                    {
                        "type": "div",
                        "class": "button button-map",
                        "content": "SMALL MAP",
                        "onclick": "map(0)"
                    },
                    {
                        "type": "div",
                        "class": "button button-map",
                        "content": "BIG MAP",
                        "onclick": "map(1)"
                    }
                ]
            }
        ]
    },
    {
        "type": "page",
        "class": "page n3",
        "content": [
            {
                "type": "div",
                "class": "button-container shuffle",
                "content": [
                    {
                        "type": "div",
                        "class": "button button-shuffle",
                        "content": "SHUFFLE",
                        "onclick": "MapDraw();"
                    }
                ]
            },
            {
                "type": "div",
                "class": "img-container map",
                "content": [
                    {
                        "type": "img",
                        "class": "mapIMG",
                        "src": "img/map.png"
                    },
                    {
                        "type": "div",
                        "class": "name-container name",
                        "content": [
                            {
                                "type": "div",
                                "class": "txtImgMAP n1",
                                "style": "top:12.5%; left: 48.3%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n2",
                                "style": "top:19%; left: 60.7%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n3",
                                "style": "top:34%; left: 68.5%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n4",
                                "style": "top:53%; left: 68.5%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n5",
                                "style": "top:68.5%; left: 60.7%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n6",
                                "style": "top:75%; left: 48%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n7",
                                "style": "top:68.5%; left: 35.5%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n8",
                                "style": "top:53%; left: 27.5%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n9",
                                "style": "top:34%; left: 27.5%",
                                "content": "A"
                            },
                            {
                                "type": "div",
                                "class": "txtImgMAP n10",
                                "style": "top:19%; left: 35.5%",
                                "content": "A"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "div",
                "class": "button-container setup",
                "content": [
                    {
                        "type": "div",
                        "class": "text-container",
                        "content": [
                            {
                                "type": "div",
                                "class": "txtMAP",
                                "content": "SET-UP CARDS"
                            }
                        ]
                    },
                    {
                        "type": "div",
                        "class": "button setup",
                        "id": "setup",
                        "content": "2-4 PLAYERS",
                        "onclick": "SetUp()"
                    }
                ]
            },
            {
                "type": "div",
                "class": "button-container round1",
                "content": [
                    {
                        "type": "div",
                        "class": "button button-round1",
                        "content": "ROUND 1",
                        "onclick": "Round1()"
                    }
                ]
            },
            {
                "type": "div",
                "class": "button-container exit",
                "content": [
                    {
                        "type": "div",
                        "class": "button exit",
                        "content": "=",
                        "onclick": "exit()"
                    }
                ]
            },
            {
                "type": "div",
                "class": "overlay",
                "id": "overlay",
                "content": [
                    {
                        "type": "div",
                        "class": "popup",
                        "id": "popup",
                        "content": [
                            {
                                "type": "div",
                                "class": "h1",
                                "id": "first",
                                "content": "NEXT"
                            },
                            {
                                "type": "div",
                                "class": "h1",
                                "id": "second",
                                "content": "ROUND"
                            },
                            {
                                "type": "div",
                                "class": "popup-container",
                                "content": [
                                    {
                                        "type": "div",
                                        "class": "button action-button 1",
                                        "id": "button1",
                                        "content": "",
                                        "onclick": "performAction(1)"
                                    },
                                    {
                                        "type": "div",
                                        "class": "button action-button 2",
                                        "id": "button2",
                                        "content": "",
                                        "onclick": "performAction(2)"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "page",
        "class": "page n4",
        "content": [
            {
                "type": "div",
                "class": "round-container",
                "content": [
                    {
                        "type": "div",
                        "class": "round-number",
                        "content": "ROUND 1"
                    }
                ]
            },
            {
                "type": "div",
                "class": "cards-container",
                "content": [
                    {
                        "type": "div",
                        "class": "last-cards-container",
                        "style": "display: none",

                        "content": [
                            {
                                "type": "img",
                                "class": "last-card n1",
                                "src": "img/logo.png"
                            },
                            {
                                "type": "div",
                                "class": "text-last",
                                "content": [
                                    {
                                        "type": "div",
                                        "class": "first-line",
                                        "content": "LAST"
                                    },
                                    {
                                        "type": "div",
                                        "class": "second-line",
                                        "content": "CARD"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "div",
                        "class": "open-cards-container",
                        "id": "open-cards",
                        "style": "display: none",

                        "content": [
                            {
                                "type": "img",
                                "class": "open-card n1",
                                "src": "img/logo.png"
                            },
                            {
                                "type": "img",
                                "class": "open-card n2",
                                "src": "img/logo.png"
                            }
                        ]
                    },
                    {
                        "type": "div",
                        "class": "last-cards-container",
                        "style": "display: none",

                        "content": [
                            {
                                "type": "img",
                                "class": "last-card n2",
                                "src": "img/logo.png"
                            },
                            {
                                "type": "div",
                                "class": "text-last",
                                "content": [
                                    {
                                        "type": "div",
                                        "class": "first-line",
                                        "content": "LAST"
                                    },
                                    {
                                        "type": "div",
                                        "class": "second-line",
                                        "content": "CARD"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "div",
                "class": "down-container",
                "content": [
                    {
                        "type": "div",
                        "class": "down empty"
                    },
                    {
                        "type": "div",
                        "class": "down deck-container",
                        "content": [
                            {
                                "type": "div",
                                "class": "deck",
                                "content": [
                                    {
                                        "type": "img",
                                        "class": "imgDeck",
                                        "src": "img/logo.png"
                                    },
                                    {
                                        "type": "div",
                                        "class": "deck-info",
                                        "content": [
                                            {
                                                "type": "div",
                                                "class": "bonus-lv",
                                                "content": [
                                                    {
                                                        "type": "img",
                                                        "class": "imgBonus n1",
                                                        "onclick": "changeImage(this)"
                                                    },
                                                    {
                                                        "type": "img",
                                                        "class": "imgBonus n2",
                                                        "onclick": "changeImage(this)"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "div",
                                                "class": "count-deck",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "countCards",
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "div",
                        "class": "down bonus-town",
                        "content": [
                            {
                                "type": "div",
                                "class": "big-bonus-container",
                                "style": "display: none",
                                "content": [
                                    {
                                        "type": "div",
                                        "class": "bonus-container n1",
                                        "content": [
                                            {
                                                "type": "div",
                                                "class": "bonus base n1",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n1",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n1",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "A—A 3"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "div",
                                                "class": "bonus dop n1",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n1",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n1",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "A—A 2"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "class": "bonus-container n2",
                                        "content": [
                                            {
                                                "type": "div",
                                                "class": "bonus base n2",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n2",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n2",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "B—B 4"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "div",
                                                "class": "bonus dop n2",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n2",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n2",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "B—B 2"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "class": "bonus-container n3",
                                        "content": [
                                            {
                                                "type": "div",
                                                "class": "bonus base n3",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n3",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n3",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "C—C 5"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "div",
                                                "class": "bonus dop n3",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n3",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n3",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "C—C 3"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "class": "bonus-container n4",
                                        "content": [
                                            {
                                                "type": "div",
                                                "class": "bonus base n4",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n4",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n4",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "D—D 6"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "div",
                                                "class": "bonus dop n4",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n4",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n4",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "D—D 4"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "class": "bonus-container n5",
                                        "content": [
                                            {
                                                "type": "div",
                                                "class": "bonus base n5",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n5",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n5",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "E—E 7"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "div",
                                                "class": "bonus dop n5",
                                                "onclick": "toggleBonus(this)",
                                                "content": [
                                                    {
                                                        "type": "div",
                                                        "class": "kv n5",
                                                        "content": [
                                                            {
                                                                "type": "div",
                                                                "class": "galochka n5",
                                                                "content": "✓",
                                                                "style": "display: none",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "div",
                                                        "class": "textBonus",
                                                        "content": "E—E 5"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "div",
                "class": "button-container next-round",
                "content": [
                    {
                        "type": "div",
                        "class": "button next-round",
                        "content": "NEXT",
                        "onclick": "Next()"
                    }
                ]
            },
            {
                "type": "div",
                "class": "button-container exit",
                "content": [
                    {
                        "type": "div",
                        "class": "button exit",
                        "content": "=",
                        "onclick": "exit()"
                    }
                ]
            },
            {
                "type": "div",
                "class": "overlay",
                "id": "overlay",
                "content": [
                    {
                        "type": "div",
                        "class": "popup",
                        "id": "popup",
                        "content": [
                            {
                                "type": "div",
                                "class": "h1",
                                "id": "first",
                                "content": ""
                            },
                            {
                                "type": "div",
                                "class": "h1",
                                "id": "second",
                                "content": ""
                            },
                            {
                                "type": "div",
                                "class": "popup-container",
                                "content": [
                                    {
                                        "type": "div",
                                        "class": "button action-button 1",
                                        "id": "button1",
                                        "content": "",
                                        "onclick": "performAction(1)"
                                    },
                                    {
                                        "type": "div",
                                        "class": "button action-button 2",
                                        "id": "button2",
                                        "content": "",
                                        "onclick": "performAction(2)"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var clickSound = new Audio('audio/click.mp3'); // Создание звука клика для использования в игре

var pageNumber = 1; // Текущий номер страницы
var mapSetting = 0; // Настройки карты игры маленькая/большая
var mapN = 0; // Номер показанной  открытой карты деревень
// Названия деревень для отображения на экране
var mapsName = [
    ['A', 'C', 'B', 'D', 'C', 'D', 'E', 'B', 'A', 'E'],
    ['B', 'E', 'D', 'C', 'B', 'A', 'D', 'E', 'C', 'A'],
    ['B', 'D', 'C', 'A', 'E', 'B', 'E', 'D', 'C', 'A'],
    ['E', 'B', 'D', 'B', 'A', 'C', 'A', 'E', 'C', 'D'],
    ['C', 'A', 'E', 'C', 'B', 'A', 'D', 'E', 'B', 'D'],
    ['A', 'D', 'C', 'B', 'D', 'A', 'C', 'E', 'B', 'E'],
    ['D', 'B', 'A', 'C', 'E', 'C', 'D', 'A', 'E', 'B'],
    ['E', 'C', 'E', 'A', 'B', 'D', 'A', 'B', 'D', 'C'],
    ['E', 'A', 'D', 'B', 'C', 'E', 'B', 'D', 'A', 'C'],
    ['C', 'E', 'B', 'A', 'E', 'D', 'C', 'D', 'A', 'B'],
    ['D', 'A', 'D', 'B', 'A', 'E', 'C', 'E', 'C', 'B'],
    ['D', 'C', 'E', 'A', 'D', 'C', 'B', 'A', 'E', 'B'],
    ['B', 'A', 'C', 'B', 'D', 'C', 'E', 'A', 'E', 'D']
];
var setUp = 0;
// Колода карт для игры
var deck = ['water', 'water', 'water', 'water', 'forest', 'forest', 'forest', 'forest', 'forest', 'forest', 'forest', 'mountan', 'mountan', 'mountan', 'mountan', 'mountan', 'mountan', 'desert', 'desert', 'desert', 'desert', 'desert', 'desert', 'desert', 'desert', 'joker', 'joker']
var startBonus = ['cat', 'book', 'dragon', 'monument', 'bird']; // Стартовые бонусы для игроков
var roundN = 0; // Номер текущего раунда
var openCardNumber = 0; // Количество открытых карт
var imagesLoaded = 0;  // Счётчик загруженных изображений
var totalImages = deck.length + startBonus.length;  // Общее количество изображений для загрузки (колода + бонусы)
var minDisplayTime = 800; // Минимальное время отображения прелоадера (в миллисекундах)
var loadStartTime = Date.now();  // Время начала загрузки (используется для расчета задержки)

window.onload = async function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker зарегистрирован с областью:', registration.scope);
            })
            .catch(error => {
                console.error('Ошибка при регистрации Service Worker:', error);
            });
    }
    newGame(); // Старт игры
    setTimeout(() => {
        const load = document.querySelector('.preloader_malc');
        if (load) {
            load.style.display = 'none';
        }
    }, 700); // Задержка в 700 мс
}

// Функция для начала игры (увеличивает номер страницы и рендерит её)
function start() {
    playSound(clickSound);
    pageNumber++;
    renderPage(pageNumber);
}

// Установка карты деревень для игры
function map(size) {
    mapSetting = size; // Установка размера карты
    pageNumber++;
    mapN = mapsName.length; // Количество доступных карт
    renderPage(pageNumber); // Отображаем новую страницу
    MapDraw(); // показываем карту деревень
}

// Функция для перетасовки и отрисовки карт
function MapDraw() {
    playSound(clickSound); // Воспроизводим звук клика
    mapN++;  // Увеличиваем номер карты
    if (mapN >= mapsName.length) {
        // Если карты закончились, перетасовываем и начинаем сначала
        shuffleArray(mapsName);
        mapN = 0;
    }
    mapNumber(mapN);  // Отображаем новую карту
}

// Функция Фишера-Йетса с многократным перемешиванием
function shuffleArray(array) {
    // Генерируем случайное число от 7 до 22 для количества перемешиваний
    const times = ultraRandom(7, 22);

    // Запускаем алгоритм Фишера-Йетса несколько раз
    for (let t = 0; t < times; t++) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    return array;
}

// Функция для генерации случайного числа с учётом времени
function ultraRandom(min, max) {
    const now = Date.now();
    const timeBasedRandom = (now % 1000) / 1000;
    const randomValue = (Math.random() + Math.random() * timeBasedRandom - Math.random() * timeBasedRandom);

    // Гарантируем, что результат находится в пределах min и max
    return Math.floor((Math.abs(randomValue) % 1) * (max - min + 1)) + min;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    var element = document.querySelector(selector);
    if (element) {
        var isHidden = element.style.display === 'none';
        element.style.display = isHidden ? '' : 'none';
    }
}

// Функция для отображения названий деревень на карте
function mapNumber(n) {
    // Получаем ссылку на контейнер, содержащий элементы для заполнения
    var nameContainer = document.querySelector('.name-container');

    // Перебираем каждый элемент массива mapsName
    mapsName[n].forEach(function (value, index) {
        // Формируем селектор для каждого элемента
        var selector = '.txtImgMAP.n' + (index + 1);
        // Получаем ссылку на элемент по селектору
        var element = nameContainer.querySelector(selector);
        // Заполняем значение элемента значением из массива mapsName
        if (element) {
            element.textContent = value; // Задаём название деревень
        }
    });
}

// Функция для переключения настроек игры (количество игроков)
function SetUp() {
    playSound(clickSound);
    var textSetup = document.getElementById("setup");

    if (setUp === 0) {
        setUp = 1;
        textSetup.innerText = "5-8 PLAYERS"; // Если 5-8 игроков
    } else {
        setUp = 0;
        textSetup.innerText = "2-4 PLAYERS"; // Если 2-4 игрока
    }
}

// Функция для начала 1 раунда
function Round1() {
    playSound(clickSound);
    pageNumber++; // Переход на следующую страницу
    renderPage(pageNumber);
    modifyElements(setUp); // Изменение элементов в зависимости от настроек игры
    NextRound(); // Начало следующего раунда
}

// Функция для обновления номера текущего раунда
function RoundNumber() {
    var roundNumber = document.querySelector('.round-number');
    roundNumber.innerText = 'ROUND ' + roundN;  // Устанавливаем номер раунда
}

// Функция для изменения изображений карт
function changeImage(element) {
    playSound(clickSound);
    // Получаем текущий путь к изображению
    var currentSrc = element.src;

    // Проверяем, содержит ли путь к изображению подстроку 'x'
    if (currentSrc.includes('x')) {
        // Если содержит, заменяем 'x' на пустую строку
        element.src = currentSrc.replace('x', '');  // Убираем 'x', если есть
    } else {
        // Если не содержит, добавляем 'x' перед расширением файла
        var lastIndex = currentSrc.lastIndexOf('.');
        var newSrc = currentSrc.slice(0, lastIndex) + 'x' + currentSrc.slice(lastIndex); // Добавляем 'x' перед расширением
        element.src = newSrc;
    }
}

// Функция для модификации элементов на основе настроек игры
function modifyElements(setUp) {
    var bonus1 = document.querySelector('.imgBonus.n1');
    var bonus2 = document.querySelector('.imgBonus.n2');

    bonus1.src = 'img/' + startBonus[0] + '.png';
    bonus2.src = 'img/' + startBonus[1] + '.png';

        // Если установлено, что игра на 2-4 игроков
    // Проверяем, равна ли переменная setUp 0
    if (setUp === 0) {
        // Получаем ссылку на элемент с классом "bonus-lv"
        var bonusLvElement = document.querySelector('.bonus-lv');
        // Если такой элемент существует
        if (bonusLvElement) {
            // Добавляем стиль "justify-content: center;"
            bonusLvElement.style.justifyContent = 'center'; // Центрируем бонусы
        }

        // Получаем ссылку на элемент с классом "imgBonus n2"
        var imgBonusN2Element = document.querySelector('.imgBonus.n2');
        // Если такой элемент существует
        if (imgBonusN2Element) {
            // Удаляем элемент
            imgBonusN2Element.remove();  // Удаляем второй бонус
        }
    }
    if (setUp === 0) {
        var dopBonuses = document.querySelectorAll('.bonus.dop');
        dopBonuses.forEach(function (bonus) {
            bonus.style.display = 'none'; // Скрываем дополнительные бонусы
        });
    }
}

// Функция для начала следующего раунда
function NextRound() {
    openCardNumber = 0;   // Сбрасываем количество открытых карт
    roundN++;  // Увеличиваем номер раунда
    RoundNumber(); // Обновляем номер раунда на экране
    countDeck();  // Подсчитываем оставшиеся карты
    deck = shuffleArray(deck);  // Перетасовываем колоду
    if (roundN > 1) {
        toggleVisibility('.deck');   // Скрываем или показываем колоду
        toggleVisibility('.open-cards-container');
        toggleVisibility('.button-container.next-round');
    }
}

function Next() {
    playSound(clickSound);
    OpenNextCards();
}

// Функция для отображения следующих карт
function OpenNextCards() {
    var openCards = document.getElementById('open-cards')
    var openCard1 = document.querySelector('.open-card.n1'); // Получаем первый элемент с классом open-card и n1
    var openCard2 = document.querySelector('.open-card.n2'); // Получаем первый элемент с классом open-card и n2
    var lastCards = document.querySelectorAll('.last-cards-container');
    var lastCard1 = document.querySelector('.last-card.n1');
    var lastCard2 = document.querySelector('.last-card.n2');
    var deckCards = document.querySelector('.deck');
    var deckCards = document.querySelector('.button-container.next-round');
    var bonusVilage = document.querySelector('.big-bonus-container');
    // Проверка количества открытых карт
    if (openCardNumber >= 26) {
        toggleVisibility('.deck');
        toggleVisibility('.button-container.next-round');
        lastCards[0].style.display = 'none';
        lastCards[1].style.display = 'none';
        toggleVisibility('.big-bonus-container');
        openPopup('next');
    } else {
        openCardNumber += 2;
        bonusVilage.style.display = 'flex';
        deckCards.style.display = 'flex';
        openCard1.src = 'img/' + deck[openCardNumber - 2] + '.png';
        openCard2.src = 'img/' + deck[openCardNumber - 1] + '.png';
        openCards.style.display = 'flex';
        if (openCardNumber > 2) {
            lastCards[0].style.display = 'flex';
            lastCards[1].style.display = 'flex';
            lastCard1.src = 'img/' + deck[openCardNumber - 4] + '.png';
            lastCard2.src = 'img/' + deck[openCardNumber - 3] + '.png';
        }
        countDeck();
    }
}

function countDeck() {
    var countCards = document.querySelector('.countCards');
    countCards.innerText = 27 - openCardNumber;
    changeBackgroundColor();
}

function changeBackgroundColor() {
    var countDeck = document.querySelector('.count-deck');

    // Максимальное значение переменной openCardNumber, при котором цвет становится красным
    var maxNumber = 26;
    // Начальные компоненты цвета
    var initialRed = 112;
    var initialGreen = 174;
    var initialBlue = 196;

    // Расчет компонентов цвета в зависимости от значения openCardNumber
    var redComponent = initialRed + (Math.min(openCardNumber / maxNumber, 1) * (255 - initialRed));
    var greenComponent = initialGreen - (openCardNumber / maxNumber) * (initialGreen - 0);
    var blueComponent = initialBlue - (openCardNumber / maxNumber) * (initialBlue - 0);

    // Установка цвета фона
    countDeck.style.backgroundColor = 'rgb(' + redComponent + ', ' + greenComponent + ', ' + blueComponent + ')';
}

function toggleBonus(element) {
    playSound(clickSound);
    var dopBonus = element.nextElementSibling;
    var galochka = element.querySelector('.galochka');

    // Если galochka скрыта, то показываем её и изменяем margin-top у bonus dop n
    if (galochka.style.display === 'none') {
        galochka.style.display = 'block';
        dopBonus.style.marginTop = '-0.8vh';
    } else {
        // Иначе скрываем galochka и изменяем margin-top обратно
        galochka.style.display = 'none';
        dopBonus.style.marginTop = '-3.5vh';
    }

    // Теперь нужно также скрывать галочку у bonus dop n
    var dopGalochka = dopBonus.querySelector('.galochka');
    dopGalochka.style.display = 'none';
}

// Функция для отрисовки страницы по номеру
function renderPage(pageNumber) {
    var contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    var currentPageData = ui[pageNumber - 1];
    if (currentPageData) {
        buildPage(currentPageData, contentContainer);
    } else {
        console.error("Страница не найдена");
    }
}

// Функция для построения страницы на основе данных
function buildPage(pageData, container) {
    if (pageData.type === "page") {
        var pageElement = document.createElement("div");
        pageElement.className = pageData.class;

        if (pageData.content) {
            buildElements(pageData.content, pageElement);
        }
        container.appendChild(pageElement);
    }
}

// Функция для построения массива элементов на основе данных
function buildElements(elementsData, container) {
    if (Array.isArray(elementsData)) {
        elementsData.forEach(function (elementData) {
            buildElement(elementData, container);
        });
    } else {
        buildElement(elementsData, container);
    }
}

// Функция для построения элемента на основе данных
function buildElement(elementData, container) {
    var element;

    if (typeof elementData === "string") {
        // Если контент - это строка, создаем текстовый узел
        element = document.createTextNode(elementData);
    } else {
        switch (elementData.type) {
            case "div":
                element = document.createElement("div");
                element.className = elementData.class;

                if (elementData.content) {
                    buildElements(elementData.content, element);
                }
                if (elementData.id) {
                    element.id = elementData.id;
                }
                if (elementData.onclick) {
                    element.onclick = function () {
                        eval(elementData.onclick);
                    };

                }

                if (elementData.style) {
                    element.style.cssText = elementData.style;
                }

                break;
            case "img":
                element = document.createElement("img");
                element.className = elementData.class;
                element.src = elementData.src;
                if (elementData.onclick) {
                    element.onclick = function () {
                        eval(elementData.onclick);
                    };
                }
                break;
            case "button":
                element = document.createElement("button");
                element.className = elementData.class;
                element.textContent = elementData.content;
                if (elementData.onclick) {
                    element.onclick = function () {
                        eval(elementData.onclick);
                    };
                }
                break;
            default:
                console.error("Неизвестный тип элемента: " + elementData.type);
                return;
        }
    }
    container.appendChild(element);
}

// Функция для воспроизведения звука
function playSound(sound) {
    // Перематываем аудио на начало (если требуется повторное воспроизведение)
    sound.currentTime = 0;
    // Воспроизводим звук
    sound.play();
}

// Функция для перезагрузки страницы
function reloadPage() {
    playSound(clickSound);
    location.reload();
}

function exit() {
    playSound(clickSound);
    openPopup('back');
}

function openPopup(page) {
    var textPop1 = document.getElementById("first");
    var textPop2 = document.getElementById("second");
    var popupBut1 = document.getElementById("button1");
    var popupBut2 = document.getElementById("button2");
    popupBut2.style.display = 'flex';

    // Установка общих стилей для всех страниц
    document.getElementById('overlay').style.display = 'flex';

    // Параметризация контента в зависимости от переданной страницы
    if (page === 'next') {
        if (roundN === mapSetting + 2) {
            textPop1.innerText = "FINISH";
            textPop2.innerText = "GAME";
            popupBut1.innerText = "NEW GAME?";
            popupBut2.innerText = "NO";
        } else {
            const n = roundN + 1;
            textPop1.innerText = "NEXT";
            textPop2.innerText = "ROUND";
            popupBut1.innerText = "ROUND " + n;
            popupBut2.style.display = 'none';
        }

    } else if (page === 'back') {
        textPop1.innerText = "ARE YOU SURE?";
        textPop2.innerText = "GO OUT?";
        popupBut1.innerText = "EXIT";
        popupBut2.innerText = "BACK";
    } else {
        document.getElementById('overlay').style.display = 'none';
    }
}

function closePopup() {
    playSound(clickSound);
    var popupBut1 = document.getElementById("button1");
    popupBut1.style.display = 'flex';
    document.getElementById('overlay').style.display = 'none';
}

function performAction(buttonId) {
    playSound(clickSound);

    var buttonText = document.getElementById("button" + buttonId).innerText;

    if (buttonId === 1) {
        if (buttonText.includes("ROUND")) {
            NextRound();
        } else {
            reloadPage();
        }
    } else if (buttonId === 2) {
        if (buttonText.includes("NO")) {
            toggleVisibility('.deck');
            toggleVisibility('.button-container.next-round');
            toggleVisibility('.big-bonus-container');
        }
    }
    closePopup();
}

// Новая игра
function newGame() {
    pageNumber = 1;
    mapSetting = 0;
    mapN = 0;
    setUp = 0;
    roundN = 0;
    openCardNumber = 1;
    shuffleArray(startBonus);
    renderPage(pageNumber);
}
