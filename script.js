let imgCardList = document.querySelectorAll(".img-card");
let imgWrapper=document.getElementById("wrapper")

let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");

nextButton.addEventListener("click", nextSlider);

let imgArray = [...imgCardList];

function nextSlider() {
  let firstImg = imgArray[0];
  for (let i = 0; i < imgArray.length - 1; i++) {
    imgArray[i] = imgArray[i + 1];
  }
  imgArray[imgArray.length - 1] = firstImg;
  for (let i = 0; i < imgArray.length; i++) {
    document.getElementById("img-wrapper").appendChild(imgArray[i]);
  }
}
let cnt=0;
function nextSlider() {
  let firstImg = imgArray[0];
  for (let i = 0; i < imgArray.length - 1; i++) {
    imgArray[i] = imgArray[i + 1];
  }
  imgArray[imgArray.length - 1] = firstImg;
  for (let i = 0; i < imgArray.length; i++) {
    document.querySelector(".img-wrapper").appendChild(imgArray[i]);
}
// cnt=cnt+40;
// console.log(imgWrapper)
// imgWrapper.style.backgroundColor="red"
// imgWrapper.style.transform=`translateX(${-cnt}%)`;
}

prevButton.addEventListener("click",prevSlider);

function prevSlider(){
    let lastImg=imgArray[imgArray.length-1];

    for(let i=imgArray.length-1;i>0;i--){
        imgArray[i]=imgArray[i-1];
    }
   imgArray[0]=lastImg;

   for(let i=0;i<imgArray.length;i++){
       document.querySelector(".img-wrapper").appendChild(imgArray[i]);

   }

}

setInterval(nextSlider,3000);
