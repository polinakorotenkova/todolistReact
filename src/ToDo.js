import { useState } from 'react';
import { doneTodo } from './doneTodo'
import { saveTodo } from './saveTodo'
import { deleteTodo } from './deleteTodo'

function ToDo(props) {
  const [textToDo, setTextToDo] = useState(props.toDo.text)
  const [isEditing, setIsEditing] = useState(false)
  const zacherkivanie = props.toDo.is_done ? 'zacherkivanie' : ''

  const token = localStorage.getItem('token');

  const onDoneClick = () => {
    doneTodo(props.toDo.id, !props.toDo.is_done).then(() => {
      props.fillTodos()
    })
  }

  const onSaveClick = () => {
    saveTodo(props.toDo.id, textToDo).then(() => {
      props.fillTodos()
      setIsEditing(false)
    })
  }

  const onCancelClick = () => {
    setIsEditing(false)
    setTextToDo(props.toDo.text)
  }

  const onDeleteClick = () => {
    deleteTodo(props.toDo.id).then(() => {
      props.fillTodos()
    })
  }

  const content = isEditing ? (
    <>
      <input className="redaktirovanie" onChange={(event) => setTextToDo(event.target.value)} value={textToDo} />
      <button className="otmena" onClick={onCancelClick}>Отмена</button>
      <button className="save" onClick={onSaveClick}>Сохранить</button>
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