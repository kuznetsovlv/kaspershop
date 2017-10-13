import fetch from 'isomorphic-fetch';

export default (data = {}) => fetch('data/data.json', {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then((response) => {
  const { status, statusText } = response;

  if (status === 200) {
    return response.json();
  }

  throw new Error(`Bad response from server: ${status} ${statusText}`);
})
.then(({ success, output, error }) => {
  if (!success) {
    throw new Error(error);
  }

  return output;
});
