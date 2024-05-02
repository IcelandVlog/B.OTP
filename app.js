window.alert('আমি আন্তরিকভাবে দুঃখিত আগামী জুন পর্যন্ত ওয়েবসাইটে কোন আপডেট দেওয়া হবে না।।😢😢')
window.alert('দয়া করে কেউ জুন পর্যন্ত রিকোয়েস্ট মুভি সাবমিট করবেন না।।😳😳')


let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating Dom element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all element
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    
    // setting up images which is in slider-data.js
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';

    sliders.push(slide);

    // adding sliding effect
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

}

for(let i = 0; i <6; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 4000);

// video cards (in this js video will play than hover)

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        let video = item.children[1];
    })
    item.addEventListener('mouseleave', ()=> {
        let video = item.children[1];
    })
})

// card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 100;
    })

    preBtns[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth + 100;
    });

});


// search filter




