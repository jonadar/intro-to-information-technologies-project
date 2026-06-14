
const cStates = [];

function intitalizeCarousels(){
    const containers = document.getElementsByClassName("image-carousel");

    for(container of containers){
        const images = container.getElementsByTagName("img")
        
        if(images.length == 0) continue;

        for(img of images){
            img.classList.add("hidden");
        }

        cStates.push({
            index: 0,
            len: images.length,
            images
        });
        
        images[0].classList.remove("hidden") 
    }       
}

function doNext(){    
    for(state of cStates){
        const {index, len, images} = state;
        images[index].classList.add("hidden");
        images[(index+1) % len].classList.remove("hidden")
        state.index = (index + 1) % len;
    }
    
}

intitalizeCarousels();  
console.log(cStates);
setInterval(doNext, 3000);