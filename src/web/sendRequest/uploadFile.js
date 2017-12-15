import Promise from 'promise';


export default (url, file) => new Promise((resolve, reject) => {
  const { type } = file;
  const xhr = new XMLHTTPRequest();

  xhr.onload = function () {
    const { status } = this;
    if (status == 200) {
      resolve(this);
    } else {
      reject(this);
    }
  };

  xhr.onerror = function () {
    reject(this);
  };

  xhr.setRequestHeader('Content-Type', type);

  xhr.open('POST', url, true);
  xhr.send(file);
});
