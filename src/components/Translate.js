//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react';
import Dropdown2 from './Dropdown2';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }

];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (<div>
            <div className="ui form">
                <div className='ui field'>
                    <label>Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
                <Dropdown2 
                label="Select a label"
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options} />
                <hr />
                <h3 className="ui header">Output</h3>
                <Convert text={text} language={language} />             
            </div>
    );
};

export default Translate;