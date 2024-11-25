function debounce(fn, wait = 20, immediate = true){
    let timeOut;

    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeOut = null;
            if(!immediate) fn.apply(context, args);
        };
    
        let callNow = immediate && !timeOut;
        timeOut = setTimeout(later, wait);
    
        if(callNow) fn.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e){
    sliderImages.forEach(image => {
        // halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        // Bottom of the image
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        
        if(isHalfShown && isNotScrolledPast){
            image.classList.add("active");
        }else{
            image.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide, 500));