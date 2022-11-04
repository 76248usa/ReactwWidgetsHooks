import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdrown';

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

const options = [

    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color yellow',
        value: 'yellow'
    }

];

const App =  () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
    <div>
        <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        { showDropdown ?
        //<Accordion items={items} />
        //<Search />
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
        : null
}
        </div>
    );
};

export default App;