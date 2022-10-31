import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState(' ');
    const [results, setResults] = useState([]);

    useEffect(() => {
       // axios.get('asb')
       // .then((response) => {
       //     console.log(response.data);
       // });


       const search = async () => {
        const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term
        }  
     });
     setResults(response.data.query.search);
    };

    if(term && !results.length) {
        search();
    } else {

        const timeoutId = setTimeout(() => {
            if(term){
                search();
            }
        }, 1000);
    
        return () => {
            clearTimeout(timeoutId);
        };

    }

    
                        
    }, [term]);

    

    const renderedResults = results.map((result) => {
        return (<div className='item' key={result.pageid}>
            <div className="right floated content">
                <a className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
            </div>
                <div  className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <div dangerouslySetInnerHTML={{ 
                        __html: result.snippet
                     }}>
                       
                    </div>
                </div>
        </div>);
    });

    return (<div className="ui segment">
    <h2>Search</h2>
    <div className="form">
        <div className="field">
            <label>Enter search term  </label>
            <div className="ui input">
                <input 
                type="text" placeholder="Search..."
                value={term} onChange={(event) => {
                    setTerm(event.target.value);
                }} />
            </div>
        </div>
    </div>
    <div className="ui celled list">
        {renderedResults}
    </div>
    </div>);
}

export default Search;