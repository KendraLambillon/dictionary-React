import React from 'react';
import './Meaning.css';

export default function Meaning (props) {
    return(
        <div className="Meaning" class="btn-primary rounded">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}