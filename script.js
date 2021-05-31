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
        toggleIcon.children[1].classList.replace('fa-moon','fa-light');
   } else {
        navBackgroundColor = 'rgb(255 255 255 / 50%)';
        textBoxBackgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
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
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleMode('light');
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);