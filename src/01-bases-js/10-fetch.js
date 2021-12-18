

const apiKey = "c4c0T9Etdk8qkFoD03E9gPuUVeAfMQWg" ; 

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(response => response.json())
    .then(({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })

    