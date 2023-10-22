import uuid from 'react-uuid';

function getDataFromApi() {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((dataApi)=>{
    const cleanData = dataApi.map((item) =>{
      return {
        image: item.poster,
        name: item.movie,
        year: item.year,
        line: item.full_line,
        director: item.director,
        audio: item.audio,
        id: uuid(),
      };
    });
    return cleanData;
  });
}

export default getDataFromApi;
