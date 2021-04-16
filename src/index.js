import './style.css';
import './splash.jpeg';
import './louis-splash.jpeg'
import headerLoader from './headerLoader';
import titlePage from './titlePage.js';
import menuPage from './menuPage';
import aboutPage from './aboutPage';

headerLoader();
titlePage();

const eventListeners = (() => {
    document.getElementById('menu').addEventListener('click', menuClick);
    document.getElementById('titleBtn').addEventListener('click', titleClick);
    document.getElementById('about').addEventListener('click', aboutClick);

})();

function menuClick(){
    init();
    menuPage();
}

function titleClick(){
    init();
    titlePage();
}

function aboutClick(){
    init();
    aboutPage();
}

function init(){
    const divs = document.querySelectorAll('.rmDiv');

    divs.forEach(div => {
        div.remove();
    })
}



