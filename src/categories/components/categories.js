import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import SearchResults from '../../widgets/components/search-results';

function Categories(props) {
    return (
        <div className="Categories">
            <Search></Search>
            {
                props.loader &&
                <p>Buscando videos...</p>
            }
            {
                props.search.size > 0 &&
                <SearchResults openModal={props.openModal} search={props.search}></SearchResults>
            }
            <div className="category-results">
            {
                props.categories.map( (category) => {
                    return (
                        <Category {...category.toJS()} key={category.get('id')} openModal={props.openModal}></Category>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Categories;