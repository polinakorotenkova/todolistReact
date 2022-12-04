export function addTodo(textToDo) {
  const token = localStorage.getItem('token');
  return fetch('http://127.0.0.1:2000/addtodos', {
    method: 'post',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isDone: false, text: textToDo }),
  })
}