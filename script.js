const imageItems = document.getElementsByClassName("carousel-image-item");
const imagesArray = Array.from(imageItems);
const noOfImages = imageItems.length;
console.log(noOfImages);

let counter = 0;

//buttons
const leftBtn = document.getElementById("arrow-left");
const rightBtn = document.getElementById("arrow-right");

const slideImage = () => {
    // imagesArray.forEach( (image, index) => {
    //     //image.style.transform = `translateX(-${counter* 100}%)`;


    // });
    imagesArray.forEach((image, index) => {
        for(let i=1; i<=noOfImages; i++){
            image.style.left = `${(counter - i)*100}%`;
        }
    })


    // imagesArray.forEach( (image, index) => {
    //     let currentPosition = 0;
    //     let intervalId = setInterval(() => {
    //         currentPosition += 0.05;
    //         console.log(currentPosition);
    //         if(currentPosition >= 100){
    //             clearInterval(intervalId);
    //         }else{
    //             image.style.left = `${(index - counter - 1)*100 - currentPosition}%`;
    //         }
    //     }, 0.001)
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

function currentSlide(n){
    imagesArray.forEach(image => image.style.transform = `translateX(-${n* 100}%)`);
}

//Automatic slide show
// const intervalId = setInterval(goNxt, 2000);
// document.body.addEventListener('click', () => clearInterval(intervalId));

leftBtn.addEventListener("click", goPrev);
rightBtn.addEventListener("click", goNxt);

imagesArray.forEach((image, index) => image.style.left = `${index* 100}%`);


