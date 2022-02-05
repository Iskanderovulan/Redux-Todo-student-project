import React from 'react';
import {useSelector} from "react-redux";

const List = () => {

    const data = useSelector(state=>state.createPost)

    return (
        <div>
            <h1 style={{textAlign:'center'}}>List</h1>
            <ul style={{textAlign:'center',marginTop:'50px',fontSize:'50px'}}>
                {data.post && data.post.map((el,i)=>{
                    return(
                        <li style={{fontSize:'30px'}} key={i}>{el.name + ' ' + el.about}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default List;