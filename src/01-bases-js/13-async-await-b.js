
import giphyApi from './bases/11-api-axios';

const getImage = async () => {
    try {
        const {data} = (await giphyApi.get('/random')).data
        const {url} = data.images.original;
        console.log(url)

        giphyApi.get("/random")
    .then(  resp => {
        const url = resp.data.data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    }

     )

    } catch (error) {
        console.log(error)
        throw error
    }

}

getImage()