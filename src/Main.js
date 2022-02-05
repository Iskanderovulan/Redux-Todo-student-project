import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Form from "./components/Form";
import Output from "./components/Output";


const Main = () => {

    const [name, setName] = useState('')
    const [about,setAbout] = useState('')

    const data = useSelector(state => state.createPost)
    const dispatch = useDispatch()


    const createTodo = (e) => {
        e.preventDefault()
        if (name && about) {
            const resultTodo = {
                // name:name,
                // about:about
                name,
                about,
                status:'new'
            }
            dispatch({type: 'CREATE_POST', payload: resultTodo})
        } else {
            alert('Todo is not correct')
        }
        setName('')
        setAbout('')
    }

    const deleteTodo = (id) => {
        const copyOfData = data.post.filter((el, i) => {
            return i !== id
        })
        dispatch({type: 'DELETE_POST', payload: copyOfData})
    }

    // const changeTodo = (id) => {
    //     const change = prompt('Change Todo')
    //     if (change) {
    //         const newData = [...data.post]
    //         newData.splice(id, 1, change)
    //         dispatch({type: 'CHANGE_TODO', payload: newData})
    //     } else {
    //         alert("Can't change Todo")
    //     }
    // }


    const changeTodo = (idFromOutput) =>{
        const editTodo = data.post.map((el,i)=>{
            if( i===idFromOutput){
                const changeName = prompt('Change Name')
                const changeAbout = prompt('Change About')
                if(changeName && changeAbout){
                    el.name = changeName
                    el.about = changeAbout
                }else{
                    alert('make changes')
                }
            }
            return el
        })
        dispatch({type:'CHANGE_TODO',payload:editTodo})
    }


    const done = (id) =>{
        const doneTodo =  data.post.map((el,i)=>{
            if(id === i){
                if(el.status==='new'){
                    el.status='process'
                }else{
                    el.status='complete'
                }
            }
            return el
        })
        dispatch({type:'DONE_TODO',payload:doneTodo})

    }


    return (
        <div className={'app-todo'}>
            <div className="todo">
                <h1>Redux Todo</h1>
                <Form
                    createTodo={createTodo}
                    name={name}
                    setName={setName}
                    about={about}
                    setAbout={setAbout}

                />


                <Output
                    data={data}
                    deleteTodo={deleteTodo}
                    changeTodo={changeTodo}
                    done={done}
                />

            </div>
        </div>
    );
};

export default Main;