import Promise from 'promise';

export default (url, file) => new Promise((resolve, reject) => {
  const { type } = file;
  const xhr = new XMLHttpRequest();

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

  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', type);
  xhr.send(file);
});
