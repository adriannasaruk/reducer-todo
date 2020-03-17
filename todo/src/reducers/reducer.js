export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 1
},
  {
    item: 'Try to understand reducers',
    completed: false,
    id: 2
  },
{
    item: 'Hate reducers',
    completed: false,
    id: 3
}]
export const reducer = (state, action) => {
console.log(action)
    switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
            item: action.payload,
            completed: false,
            id: new Date()
          }];
          case 'COMPLETED_ITEM':
                                 
                  
                        return [...state,
                            {completed: !state.completed}
                     ]
    default: 
        return state
    }
}
export default reducer

