//global varaibles
const header = document.querySelector('.header');
let image = document.getElementById('myImage');
let images = 
    ['./website/images/header.jpg', './website/images/header1.jpg', './website/images/header2.jpg', './website/images/header3.jpg'];

//make color for header change 
window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('move');
    }
    else {
        header.classList.remove('move');
    }
}

//change header image
setInterval(pics, 5000);

function pics () {
  let random = Math.floor(Math.random() * 5)
  image.src = images[random];
}

//smooth scrolling
const navLinks = document.querySelectorAll('.navbar a');

for (link of navLinks) {
  link.addEventListener("click", clickHand);    
}

function clickHand(event) {
  event.preventDefault();
  const id = this.getAttribute('href');  
  // get the reference to the corresponding section
  const targetSection = document.querySelector(id); 
  
  // add smooth scrolling feature
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}

