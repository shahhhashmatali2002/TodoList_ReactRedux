export const addTodo = (data) => {
    return {
        type: "Add_Todo",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: "Delete_Todo",
        id
    }
}
export const allClearTodo = () => {
    return {
        type: "All_Clear_Todo"
    }
}

export const UpdataTodo = (data) => {
    console.log("UpdataTodo",data)
    return {
        type: "Update_Todo",
        payload: {
            id: data.Data,
            data: data.values
        }
    }
}