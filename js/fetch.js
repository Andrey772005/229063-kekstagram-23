const URL = {
  GET: 'https://22.javascript.pages.academy/kekstagram/data',
  POST: 'https://22.javascript.pages.academy/kekstagram',
};

const dataRequest = (onSuccess, onError, method, data) => {
  fetch(URL[method],
    {
      method: method,
      body: data,
    })
    .then((response) => response.json())
    .then((response) => {
      onSuccess(response);
    })
    .catch(() => {
      onError();
    });
};

export {dataRequest};
