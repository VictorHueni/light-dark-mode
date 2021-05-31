const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const USER_THEME = 'user_theme'

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox= document.getElementById('text-box');


function toggleMode(themeToApply){

    let isDark = themeToApply == DARK_THEME;

    let navBackgroundColor =  isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    let textBoxBackgroundColor =  isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor = navBackgroundColor;
    textBox.style.backgroundColor = textBoxBackgroundColor;
    toggleIcon.children[0].textContent = `${themeToApply.charAt(0).toUpperCase() + themeToApply.slice(1)} Mode`;
    image1.src = `img/undraw_proud_coder_${themeToApply}.svg`;
    image2.src = `img/undraw_feeling_proud_${themeToApply}.svg`;
    image3.src = `img/undraw_conceptual_idea_${themeToApply}.svg`;

}

//Switch dynamically
function switchTheme(event){

    //Default Mode is Light
    let themeToApply = LIGHT_THEME;

    if(event.target.checked){
        themeToApply = DARK_THEME;
    }

    //Apply theme
    document.documentElement.setAttribute('data-theme', themeToApply);
    toggleMode(themeToApply);

    //Save user preference
    localStorage.setItem(USER_THEME, themeToApply);   
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem(USER_THEME);
if(currentTheme) {

    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme == DARK_THEME) {
        toggleSwitch.checked = true;
        toggleMode(currentTheme);
    }
}