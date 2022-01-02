import React, { useEffect, useState } from "react";
import "../index.css"
import { Description, Add, Delete, Edit } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, allClearTodo, UpdataTodo } from "../actions/Action";

const TodoRedux = () => {
    const [updateItems,setUpdateditems] = useState(null)
    const [values, setValues] = useState("");
    const [toggleBtn, setToggleBtn] = useState(false);
    const inputValue = (e) => {
        setValues(e.target.value);
    };

    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducer.list)
    const listt = useSelector((state) => state)

    useEffect(() => {
        console.log(list)
    },[])

    const addList = () => {
        if(values === ""){
            alert("Not Submit Empty Data")
        }else {
            dispatch(addTodo(values))
        }
        setValues('')
    }

    const editItem = (data) => {
        setToggleBtn(true)
        const GettingId = list.find((elem) => {
            
            return (
                elem.id === data
            )
        })

        console.log(GettingId.id)
        setValues(GettingId.data)
        setUpdateditems(GettingId.id)
    }

    const updateList = (Data) => {
        setToggleBtn(false)
        dispatch(UpdataTodo({Data,values}))
        setValues('')
        console.log("useSelector",listt)
    }

    return(
        <>
            <div className="main-div ">
                <div className="child-div">
                    <Description className="todolog" />
                    <h1>Add Your List Here ✌ </h1>

                    <div className="input d-flex mt-3">
                        <input
                            type="text"
                            placeholder="✍ Add Items..."
                            value={values}
                            onChange={inputValue}
                        />
                        {
                            toggleBtn ? (
                                <>
                                    <button className="btn btn-primary mt-3" onClick={() => updateList(updateItems)}>
                                        <Edit />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-primary mt-3" onClick={addList}>
                                        <Add />
                                    </button>
                                </>
                            )
                        }
                    </div>
                    {
                        list.map((Element) =>
                            <div className="showitems d-flex justify-content-between mt-5" key={Element.id}>
                                <h3 className="mt-2">{Element.data}</h3>
                                <button className="btn edit" onClick={() => editItem(Element.id)}>
                                    <Edit />
                                </button>
                                <button className="btn delete" onClick={() => dispatch(deleteTodo(Element.id))}>
                                    <Delete />
                                </button>
                            </div>
                        )
                    }

                    <div className="button mt-5">
                        <button className="btn btn-secondary" onClick={() => dispatch(allClearTodo())} >Clear List</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TodoRedux