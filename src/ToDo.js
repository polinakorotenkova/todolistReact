import { useState } from 'react';
import { doneTodo } from './doneTodo'
import { saveTodo } from './saveTodo'
import { deleteTodo } from './deleteTodo'
import { useDispatch } from 'react-redux';

function ToDo(props) {
  const dispatch = useDispatch()
  const [textToDo, setTextToDo] = useState(props.toDo.text)
  const [isEditing, setIsEditing] = useState(false)
  const zacherkivanie = props.toDo.is_done ? 'zacherkivanie' : ''

  const token = localStorage.getItem('token');

  const onDoneClick = () => {
    doneTodo(props.toDo.id, !props.toDo.is_done).then(() => {
      dispatch({type:'CHANGE_TODO', payload: {index: props.index, todo:{text:props.toDo.text, id:props.toDo.id, is_done:!props.toDo.is_done}}})
    })
  }

  const onSaveClick = () => {
    saveTodo(props.toDo.id, textToDo).then(() => {
      dispatch({type:'CHANGE_TODO', payload: {index: props.index, todo:{text:textToDo, id:props.toDo.id, is_done: props.toDo.is_done}}})
      setIsEditing(false)

    })

  }

  const onCancelClick = () => {
    setIsEditing(false)
    setTextToDo(props.toDo.text)
  }

  const onDeleteClick = () => {
    deleteTodo(props.toDo.id).then(() => {
      dispatch({type:'DELETE_TODO', payload: props.index})
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