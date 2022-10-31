import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: "What is React?",
        content: "It is a front-end javascript framework"
    },
    {
        title: "What is Vue?",
        content: "It is a front-end javascript framework, similar to React"
    },
    {
        title: "What is Laravel?",
        content: "It is a back-end PHP framework"
    }
]

const App =  () => {
    return (<div>
    <h1>Widgets App</h1>
   
        <Accordion items = {items} />
        <Search />
        </div>
    );
};

export default App;