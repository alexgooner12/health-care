let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
         

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

//function getData(method, url){
//  return new Promise(function(resolve, reject){
//    var xhr = new XMLHttpRequest();
//    xhr.open(method, url);
//    xhr.onload = function(){
//      if(this.status >= 200 && this.status < 300){
//        resolve(xhr.response);
//          
//      }else {
//        reject({
//          status: this.status,
//          statusText: xhr.statusText
//        });
//      }
//    };
//    xhr.onerror = function(){
//      reject({
//        status: this.status,
//        statusText: xhr.statusText
//      });
//    };
//    xhr.send();
//  });
//}
//
//getData("GET", "../data/carousel.json").then(function(dataJSON){
//  let data = JSON.parse(dataJSON);
//  let output = ''; 
//  for(let i = 0; i < data.length; i++){
//    console.log(data); 
//    output = `
//      <img srcset="${data[i].img}" class="${data[i].class}" alt="${data[i].description}" style="${data[i].style}"/> `;
//      
//     document.querySelectorAll(".mySlides")[i].innerHTML = output;
//  }
//    
//
//}).catch(function(err){
//  console.log(err);
//});


//function printImages(arr) {
//    let out = "";
//    let i;
//    for(i = 0; i < arr.length; i++) {
//        out = `<img srcset="${arr[i].img}" alt="${arr[i].description}" class="${arr[i].class}" style="${arr[i].style}"/>`;
//        document.querySelectorAll(".mySlides")[i].innerHTML += out;
//    }
//}
//
//printImages(imagesCarousel);
