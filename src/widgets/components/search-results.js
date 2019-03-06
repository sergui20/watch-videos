import React from 'react';

import Media from '../../playlist/components/media';

function SearchResults (props) {
    // console.log(props.search)
    return (
        <div className="search-results-container">
            <div className="search-results-header">
                <p className="Category-description">Resultados de la búsqueda:</p>
                <h2 className="Category-title">{props.search.size} COINCIDENCIA(S)</h2>
            </div>
            <div className="search-results">
                {
                    props.search.map( (item) => {
                        return <Media {...item.toJS()} key={item.get('id')} openModal={props.openModal}></Media>
                    })
                }
            </div>
        </div>
    )
}

export default SearchResults;