const getGifs = async(category) => {

    const Category = encodeURI(category);
    const apiKey = 'PXqndBfypROZiCkdYLaaMWxEr1qKDCYP';
    const url = `https://api.giphy.com/v1/gifs/search?q=${Category}&limit=12&api_key=${apiKey}`;

    try {

        const resp = await fetch(url);
        if(!resp.ok) throw new Error ('No se pudo realizar la petición');

        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });

        return gifs;

    } catch (err) {

        throw err;

    }
    
};

export default getGifs;