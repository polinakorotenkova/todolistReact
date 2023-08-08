const initialState = {
  toDos: []
}

export function reducer(state =initialState, action) {
 switch (action.type) {
  case 'ADD_TODO':
    return {...state, toDos: [...state.toDos, action.payload]}

  case 'DELETE_TODO':{
  const toDos = state.toDos.filter((value,index)=> index!==action.payload)
  return {...state, toDos}}

  case 'CHANGE_TODO':{
  const toDos = state.toDos.map((todo,index)=> index===action.payload.index?action.payload.todo:todo)
  return {...state,toDos}}

  default: return state
 }
}

// state: { toDos: [] }
// { toDos: [ToDo] }