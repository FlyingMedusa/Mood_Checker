const body = document.body;
const mainDiv = document.querySelector('.main-div');
// buttons
const btnGood = document.querySelector('.good-mood');
const btnBad = document.querySelector('.bad-mood');
const btnDarkMode = document.querySelector('.dark-mode-btn');
// paragraphs
const pGoodCounter = document.querySelector('.good-count');
const pBadCounter = document.querySelector('.bad-count');
const pLastVisit = document.querySelector('.last-visit');

// "Good - Bad" counters
let goodCounter = Number(localStorage.getItem('good-counter'));
let badCounter = Number(localStorage.getItem('bad-counter'));
pGoodCounter.innerText = `The times you've been feeling good: ${goodCounter}`;
pBadCounter.innerText = `The times you've been feeling bad: ${badCounter}`;

btnGood.addEventListener('click', () => {
    goodCounter++;
    pGoodCounter.innerText = `The times you've been feeling good: ${goodCounter}`;
    localStorage.setItem('good-counter', goodCounter.toString());
});

btnBad.addEventListener('click', () => {
    badCounter++;
    pBadCounter.innerText = `The times you've been feeling bad: ${badCounter}`;
    localStorage.setItem('bad-counter', badCounter.toString());
});

// Visit date
const lastSavedVisitDate = localStorage.getItem('last-visited');
if (lastSavedVisitDate === null) {
    pLastVisit.innerText = 'You are here for the very first time!';
} else {
    pLastVisit.innerText = `Nice to see you again! Your last visit: ${lastSavedVisitDate}`;
};

const date = new Date();
const dateString = date.toString();
localStorage.setItem('last-visited', dateString); 
