


export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=f5v07qXUDAXHfIJiWUB7eijyutBwVX3A`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gits = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }
    });

    

    return gits;
}
