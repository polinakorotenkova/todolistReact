import { useState } from 'react';

function ToDo(props) {
  const [textToDo, setTextToDo] = useState(props.toDo.text)
  const [isEditing, setIsEditing] = useState(false)
  const zacherkivanie = props.toDo.is_done ? 'zacherkivanie' : ''

  const token = localStorage.getItem('token');

  const onDoneClick = () => {
    fetch('http://127.0.0.1:2000/change', {
      method: 'put',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: props.toDo.id, isDone: !props.toDo.is_done }),
    }).then(() => {
      props.fillTodos()
    })
  }

  const onSaveClick = () => {
    fetch('http://127.0.0.1:2000/change', {
      method: 'put',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: props.toDo.id, text: textToDo }),
    }).then(() => {
      props.fillTodos()
      setIsEditing(false)
    })
  }

  const onCancelClick = () => {
    setIsEditing(false)
    setTextToDo(props.toDo.text)
  }

  const onDeleteClick = () => {
    fetch('http://127.0.0.1:2000/delete', {
      method: 'delete',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({ id: props.toDo.id }),
    }).then(() => {
      props.fillTodos()
    })
  }

  const content = isEditing ? (
    <>
      <input className="redaktirovanie" onChange={(event) => setTextToDo(event.target.value)} value={textToDo} />
      <button className="otmena" onClick={onCancelClick}>Отмена</button>
      <button className="save"  onClick={onSaveClick}>Сохранить</button>
    </>
  ) : (
    <>
      <span className={`perenos-texta ${zacherkivanie}`}>{props.toDo.text}</span>
      <button className="is-done" onClick={onDoneClick}> Выполнено </button>
      <button className="change" onClick={() => { setIsEditing(true) }}>Редактировать </button>
      <button className="delete" onClick={onDeleteClick}> Удалить </button>
    </>
  );


  return (
    <li className="knopka-sprava-ot-texta">
      {content}
    </li>
  )
}

export default ToDo