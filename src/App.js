import React from 'react';
import Main from "./Main";
import {Routes,Route} from 'react-router-dom'
import List from "./List";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path={'/'} element={<Main/>}/>
                <Route exact path={'/list'} element={<List/>}/>
            </Routes>
        </div>
    );
};

export default App;