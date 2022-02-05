import React from 'react';

const Output = (props) => {
    return (
        <div className="el__div">
            {props.data && props.data.post.map((el, i) => {
                return (
                    <div key={i} >
                        <div className='el'>

                            <div>
                            <p className={'el__p'}>{el.name}</p>
                            <p className={'el__p'}>{el.about}</p>
                            </div>

                            <button onClick={() => props.deleteTodo(i)} className={'el__button'}>🗑</button>
                            <button
                                style={el.status==='complete'?{background:'brown'}:null}
                                disabled={el.status === 'complete'}
                                onClick={() => props.changeTodo(i)}
                                className={'el__button'}>✎</button>
                            <button
                                style={el.status==='complete'?{background:'brown'}:null}
                                disabled={el.status === 'complete'}
                                onClick={() => props.done(i)}
                                className={'el__button'}>&#10004;</button>
                        </div>

                        <div className="check">
                            {el.status === 'new' ?
                                <p>new</p>
                                : el.status === 'process' ?
                                    <p>process</p>
                                    : <p>complete</p>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Output;

