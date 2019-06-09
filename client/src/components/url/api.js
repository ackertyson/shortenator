import assign from 'lodash.assign';

const urlMask = /^https?:\/\/[-_.a-zA-Z0-9]+\.[-_.a-zA-Z0-9]+/;
const apiHost = process.env.REACT_APP_API_URL || 'http://localhost:5000';
function request({ path, method, headers, body }) {
  const params = { method };
  if (body) assign(params, { body: JSON.stringify(body) });
  if (headers) assign(params, { headers });
  const req = new Request(`${apiHost}/${path}`, params);
  return fetch(req)
    .then(res => res.json());
}

const Api = {
  addUrl: (url) => {
    if (!urlMask.test(url)) throw new Error('Bad URL format');

    return request({
      path: 'urls',
      method: 'POST',
      body: { url },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  },

  fetchUrls: () => {
    return request({
      path: 'urls',
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  }
};

export default Api;
