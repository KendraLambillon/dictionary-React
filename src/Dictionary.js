import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse (response) {
        setResults(response.data[0]);
    }

    function search (e) {
        e.preventDefault();

        //Documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(e) {
        setKeyword(e.target.value);
    }

    return (
        <div className="Dictionary">
            <div class="col-6">
                <form onSubmit={search}>
                    <div class="input-group rounded input-group-lg mb-3 shadow-lg">
                        <span class="input-group-text" id="inputGroup-sizing-default">Searching for word</span>
                        <input type="search" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleKeywordChange} />
                    </div>
                </form>
            </div>
            <Results results={results} />
        </div>
    );
}

