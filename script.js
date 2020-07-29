let photoGalleryHeader = document.querySelector('.photo-gallery__header');
let photoGalleryBtn = photoGalleryHeader.querySelector('.photoGalleryHeader');
let photoGallerySearch = photoGalleryHeader.querySelector('.photo-gallery__search');

let photoGalleryImgContainer = document.querySelector('.photo-gallery__img-container');
let photoGalleryImg = Array.from(document.querySelectorAll('.photo-gallery__img'));

let tagsAll = [];

// get all the tags and push them into an array
//TODO: turn this for loop into a function called getTags
for(let i = 0; i < photoGalleryImg.length; i+=1) {
    tagsAll.push(photoGalleryImg[i].dataset.maincolor);
    tagsAll.push(photoGalleryImg[i].dataset.location);
}




function filterPhotos(event) {
    let userInput = event.target.value.toUpperCase();

   tagsAll.filter(tag => {

       if(userInput === tag.toUpperCase()) {
        console.log(tag);

        // check if every img includes the tag

        photoGalleryImg[0].style.display = '';
       } else {
        photoGalleryImg[0].style.display = 'none';
       }
    });
}

photoGallerySearch.addEventListener('input', filterPhotos);




/*
### TODO ###

1. filter imgs w/ user input
 based on data attributes on all the images
-. loop though all the images and
 put all the tags into separate array,
 then combine them into a single array,
 then filter this array

2. when you click on the button (photo-gallery__btn)
 it focuses on the input (photo-gallery__search)
 */