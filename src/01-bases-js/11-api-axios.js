import axios from 'axios';

const api_key = "c4c0T9Etdk8qkFoD03E9gPuUVeAfMQWg" ; 

// const  url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
const giphyApi = axios.create({ 
    baseURL: 'https://api.giphy.com/v1/gifs' ,
    params : {
        api_key
    },
});

export default giphyApi
// giphyApi.get("/random")
//     .then(  resp => {
//         const url = resp.data.data.images.original.url;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.appendChild(img);
//     }

//      )
