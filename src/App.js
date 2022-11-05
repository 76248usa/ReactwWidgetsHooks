/* import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdrown';
import Translate from './components/Translate';

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

    return (
    <div>
        <Translate />

    </div>
    );
}

export default App; */

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown2 from "./components/Dropdown2";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
export default App;
