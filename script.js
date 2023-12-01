const imageItems = document.getElementsByClassName("carousel-image-item");
const container = document.getElementsByClassName("carousel-container");
const imagesArray = Array.from(imageItems);
const noOfImages = imageItems.length;
console.log(noOfImages);
const dotsArray = [];

let counter = 0;

//buttons
const leftBtn = document.getElementById("arrow-left");
const rightBtn = document.getElementById("arrow-right");

function directSlide(n){
    imagesArray.forEach((image, index) => {
        image.style.left = `${(index - n)*100}%`;
        counter = n;
    })

    //imagesArray.forEach(image => image.style.transform = `translateX(-${(n)* 100}%)`);
}
const slideImageLeft = () => {
    // imagesArray.forEach( (image, index) => {
    //     image.style.transform = `translateX(-${counter* 100}%)`;
    // });
    imagesArray.forEach( (image, index) => {
        let startPosition = 0;
        let instantPosition = 0;
        let intervalId = setInterval(() => {
            if(counter === 5){
                startPosition +=4
                if(startPosition >= 400){
                    clearInterval(intervalId);
                }else{
                    image.style.left = `${(index - counter + 1)*100 + startPosition + 4}%`;
                }
            }else{
                instantPosition += 2;
                if(instantPosition >= 100){
                    clearInterval(intervalId);
                }else{
                    image.style.left = `${(index - counter + 1)*100 - instantPosition - 2}%`;
                }
            }
            
        }, 1000/60)
    })
}

const slideImageRight = () => {
    // imagesArray.forEach( (image, index) => {
    //     image.style.transform = `translateX(-${counter* 100}%)`;
    // });
    imagesArray.forEach( (image, index) => {
        let endPosition = 0;
        let instantPosition = 0;
        let intervalId = setInterval(() => {
            if(counter === 4){
                endPosition += 4;
                if(endPosition >= 400){
                    clearInterval(intervalId);
                }else{
                    image.style.left = `${(index - counter + 4)*100 - endPosition - 4}%`;
                }
            }else{
                instantPosition += 2;
                if(instantPosition >= 100){
                    clearInterval(intervalId);
                }else{
                    image.style.left = `${(index - counter - 1)*100 + instantPosition + 2}%`;
                }
            }
        }, 1000/60)
    })
}

const goPrev = () => {

    if(counter > 0){
        counter--;
    }else{
        counter = 4;
    }
    slideImageRight()
}

const goNxt = () => {
    slideImageLeft()
    if(counter < noOfImages){
        counter++;
    }else{
        counter = 1;
    }
}

const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-container';

    for (let i = 0; i < noOfImages; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.setAttribute('onclick', `directSlide(${i})`);
      dotsContainer.appendChild(dot);
      dotsArray.push(dot);
}

document.body.appendChild(dotsContainer);

leftBtn.addEventListener("click", goPrev);
rightBtn.addEventListener("click", goNxt);

//Automatic slide show
const intervalId = setInterval(goNxt, 3000);
document.body.addEventListener('click', () => clearInterval(intervalId));

imagesArray.forEach((image, index) => image.style.left = `${index* 100}%`);


