const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox= document.getElementById('text-box');


function toggleMode(mode){
    
    let navBackgroundColor = '';
    let textBoxBackgroundColor = '';

    if(mode == 'dark'){
        navBackgroundColor = 'rgb(0 0 0 / 50%)';
        textBoxBackgroundColor = 'rgb(255 255 255 / 50%)';
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    } else {
        navBackgroundColor = 'rgb(255 255 255 / 50%)';
        textBoxBackgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    }

    nav.style.backgroundColor = navBackgroundColor;
    textBox.style.backgroundColor = textBoxBackgroundColor;
    toggleIcon.children[0].textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;

}

//Switch dynamically
function switchTheme(event){
    let mode = '';
    if(event.target.checked){
        mode = 'dark';
    } else {
        mode = 'light';
    }
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    toggleMode(mode);
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleMode(currentTheme);
    }
}