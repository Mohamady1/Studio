//global varaibles
const header = document.querySelector('.header');
const button = document.querySelector('button');

//make color for header change 
window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('move');
    }
    else {
        header.classList.remove('move');
    }
}

//change button text
function change () {
button.textContent = 'Next Photo';
}

// on click button change header photo
button.onclick = function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("./website/images/header.jpg")) {
    change();
    image.src = "./website/images/header1.jpg";
  }
  else if (image.src.match("./website/images/header1.jpg")){
    change();
    image.src = "./website/images/header2.jpg";
  }
  else if (image.src.match("./website/images/header3.jpg")) {
    change();
    image.src = "./website/images/header.jpg";
  }
  else {
    change();
    image.src = "./website/images/header3.jpg"
  }
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

