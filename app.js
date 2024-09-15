document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        console.log(image)
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json() )
        .then(data => {
            image.src =  data.message
            image.width = 300;
            image.height = 200;
        })
    }
})