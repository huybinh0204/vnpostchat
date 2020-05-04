
const HOST = "http://10.141.23.146:8080/"

export function getHeader(more = {}) {
  return {
    ...more,
    'Content-Type': 'application/json',
  };
}

export function makeParams(params) {
  let query = '';
  for (var k in params) {
    if (query.length < 0) {
      query += '?' + k + '=' + params[k];
    } else {
      query += '&' + k + '=' + params[k];
    }
  }
}
export function* _callApiPost(data) {
  console.log(data);
  return yield fetch(HOST + 'api/Login/CheckLogin/', {
    method: 'POST',
    headers: getHeader({Token: 'Hall'}),
    body: JSON.stringify(data),
  }).then(response => {
    return response.json();
  });
}
