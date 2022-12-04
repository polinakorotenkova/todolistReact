export const saveTodo = (id,text) => {
  const token = localStorage.getItem('token');
  return fetch('http://127.0.0.1:2000/change', {
    method: 'put',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, text }),
  })
}