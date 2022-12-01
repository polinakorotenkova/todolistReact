
function ToDo(props) {
const zacherkivanie = props.toDo.is_done ? 'zacherkivanie' : ''
const onDoneClick = ()=>{
  const token = localStorage.getItem('token');
  fetch('http://127.0.0.1:2000/change', {
    method: 'put',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: props.toDo.id, isDone: !props.toDo.is_done }),
  }).then(()=>{
    props.fillTodos()
  })
}

const onDeleteClick = ()=>{
  const token = localStorage.getItem('token');
  fetch('http://127.0.0.1:2000/delete', {
    method: 'delete',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({ id: props.toDo.id }),
  }).then(()=>{
    props.fillTodos()
  })
}

  return (
    <li className="knopka-sprava-ot-texta">
      <span className={`perenos-texta ${zacherkivanie}`}>{props.toDo.text}</span>
      <button className="is-done" onClick={onDoneClick}> Выполнено </button>
      <button className="change">Редактировать </button>
      <button className="delete" onClick={onDeleteClick}> Удалить </button>
    </li>
  )
}

export default ToDo