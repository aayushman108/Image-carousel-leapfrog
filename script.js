const imageItems = document.getElementsByClassName("carousel-image-item");
const container = document.getElementsByClassName("carousel-container");
const imagesArray = Array.from(imageItems);
const noOfImages = imageItems.length;
console.log(noOfImages);

let counter = 0;

//buttons
const leftBtn = document.getElementById("arrow-left");
const rightBtn = document.getElementById("arrow-right");

function directSlide(n){
    imagesArray.forEach(image => image.style.transform = `translateX(-${(n)* 100}%)`);
}

const slideImage = () => {
    imagesArray.forEach( (image, index) => {
        image.style.transform = `translateX(-${counter* 100}%)`;
    });
    // imagesArray.forEach( (image, index) => {
    //     let currentPosition = 0;
    //     let intervalId = setInterval(() => {
    //         currentPosition += 0.05;
    //         console.log(currentPosition);
    //         if(currentPosition >= 100){
    //             clearInterval(intervalId);
    //         }else{
    //             image.style.left = `${(index - counter)*100 - currentPosition}%`;
    //         }
    //     }, 1000/60)
    // })
}

const goPrev = () => {
    if(counter > 0){
        counter--;
    }else{
        counter = noOfImages - 1;
    }
    slideImage()
}

const goNxt = () => {
    if(counter < noOfImages - 1){
        counter++;
    }else{
        counter = 0;
    }
    slideImage()
}

const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-container';

    for (let i = 0; i < noOfImages; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.setAttribute('onclick', 'directSlide(' + i + ')');
      dotsContainer.appendChild(dot);
}

document.body.appendChild(dotsContainer);


leftBtn.addEventListener("click", goPrev);
rightBtn.addEventListener("click", goNxt);

//Automatic slide show
const intervalId = setInterval(goNxt, 3000);
document.body.addEventListener('click', () => clearInterval(intervalId));

imagesArray.forEach((image, index) => image.style.left = `${index* 100}%`);


