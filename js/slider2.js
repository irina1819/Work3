// let slides = document.querySelectorAll(".card");
// let currentSlide = 0;
// const sliderBtnRight = document.getElementById("rightButton");
// const sliderBtnLeft = document.getElementById("leftButton");

// sliderBtnRight.onclick = function(){
//     currentSlide = (currentSlide+1)%(slides.length-1);
//     console.log('right');
//     slides.forEach(function(item){         
//         item.classList.remove('active'); 
//     })
//     slides[currentSlide].className = "card active";
//     slides[currentSlide+1].className = "card active";
//     // slides[currentSlide+2].className = "card active";
//     console.log(currentSlide);
// }
// sliderBtnLeft.onclick = function(){
//     currentSlide = (currentSlide+3)%(slides.length-2);
//     slides.forEach(function(item){         
//         item.classList.remove('active'); 
//     })
//     slides[currentSlide].className = "card active";
//     slides[currentSlide+1].className = "card active";
//     // slides[currentSlide+2].className = "card active";
//     console.log(currentSlide);
// }

let slides = document.querySelectorAll(".card");
let currentSlide = 0;
const sliderBtnRight = document.getElementById("rightButton");
const sliderBtnLeft = document.getElementById("leftButton");

sliderBtnRight.onclick = function(){
    currentSlide = (currentSlide+1)%(slides.length-2);
    slides.forEach(function(item){         
        item.classList.remove('active'); 
    })
    slides[currentSlide].className = "card active";
    slides[currentSlide+1].className = "card active";
    // slides[currentSlide+2].className = "card active";
    console.log(currentSlide);
}
sliderBtnLeft.onclick = function(){
    currentSlide = (currentSlide+3)%(slides.length-2);
    slides.forEach(function(item){         
        item.classList.remove('active'); 
    })
    slides[currentSlide].className = "card active";
    slides[currentSlide+1].className = "card active";
    // slides[currentSlide+2].className = "card active";
    console.log(currentSlide);
}