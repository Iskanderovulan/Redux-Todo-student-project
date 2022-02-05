import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.createTodo} className={'input__button'}>
            <input
                placeholder="Name"
                value={props.name}
                onChange={(e)=>props.setName(e.target.value)}
                type="text"
            />
            <input
                placeholder="About"
                value={props.about}
                onChange={(e)=>props.setAbout(e.target.value)}
                type="text"
            />
            <button>Create Todo</button>
        </form>
    );
};

export default Form;