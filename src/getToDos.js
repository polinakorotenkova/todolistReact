
const token = localStorage.getItem('token');

export function getToDos() {
  return fetch('http://127.0.0.1:2000/todos', { headers: { Authorization: token } })
    .then((response) => {
      return response.json()
    });
}