const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "Add_Todo":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "Delete_Todo":
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case "All_Clear_Todo":
            return {
                ...state,
                list: []
            }
        case "Update_Todo":
            console.log("action.payload",action.payload)
            const updatedTodo = state.list.map((todo) => {
                if(todo.id === action.payload.id){
                    return {...todo, data: action.payload.data}
                } 
                return todo
            });
            return {
                ...state,
                list: updatedTodo  
            };
            // const updatedTodo = state.list.filter((todo) => {
            //     if(todo.id === action.payload.id){
            //     return {...todo, data: action.payload.data}}
            // })

            // return {
            //     ...state,
            //     list: updatedTodo
            // }
            

            // console.log("action",action)
        default: return state;
    }
}

export default todoReducer;