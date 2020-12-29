import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectSearchBarKeywords } from '../../redux/filters/filters-selectors';
import { setSearchBarFilters } from '../../redux/filters/filters-actions';

import './SearchBar.css';

const SearchBar = ({ keywords, setSearchBarFilters }) => {
    const [ currentKeywords, setCurrentKeywords ]= useState(keywords);

    const handleInput = (event) => {
        setCurrentKeywords(event.target.value);
    }

    const handleSearch = () => {
        console.log(currentKeywords);
        setSearchBarFilters(currentKeywords);
    }

    return (
        <InputGroup>
            <FormControl
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={ currentKeywords }
                onChange={ handleInput }/>
            <InputGroup.Append>
                <Button 
                    variant="outline-secondary"
                    onClick={ handleSearch }>
                        Search
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

const mapStatetoProps = createStructuredSelector({
    keywords: selectSearchBarKeywords
});

const mapDispathtoProps = dispatch => ({
    setSearchBarFilters: (newKeywords) => dispatch(setSearchBarFilters(newKeywords))
});

export default connect(mapStatetoProps, mapDispathtoProps)(SearchBar);