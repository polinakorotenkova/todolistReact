export function getToDos() {
  const token = localStorage.getItem('token');
  return fetch('http://127.0.0.1:2000/todos', { headers: { Authorization: token } })
    .then((response) => {
      return response.json()
    });
}