const TIMEOUT = 1000;


const AppRoute = {
    Initial: 'initial',
    Game: 'game',
    Results: 'results',
}

const GAME_TYPES = [
    { type: 'cats', icon: 'cats', label: 'Котики' },
    { type: 'flowers', icon: 'flowers', label: 'Цветочки' },
    { type: 'cars', icon: 'cars', label: 'Машины' },
  ];

const RANDOMIZED = false;

window.AppRoute = AppRoute;
window.TIMEOUT = TIMEOUT;
window.GAME_TYPES = GAME_TYPES;
window.RANDOMIZED = RANDOMIZED;