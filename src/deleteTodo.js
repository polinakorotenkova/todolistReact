export const deleteTodo = (id) => {
  const token = localStorage.getItem('token');
  return fetch('http://127.0.0.1:2000/delete', {
    method: 'delete',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({ id }),
  })
}