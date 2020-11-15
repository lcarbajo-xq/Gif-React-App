export const getGifs = async (category) => {
  const URL = `http://api.giphy.com/v1/gifs/search?api_key=dEbMsurtXCLZR6TFeNx06HVpKny9ysjJ&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
