const baseUrl = 'https://fakestoreapi.com';
function get(url) {
  return fetch(baseUrl+url)
      .then((res)=>res.json())
      .then((json)=> json);
}

const http = {get};

export default http;
