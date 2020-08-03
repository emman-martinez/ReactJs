import React from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);

    const initialForm = {
        searchText: q,
    };

    const [ formValues, handleInputChange, reset ] = useForm(initialForm);

    const { searchText } = formValues;
    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();
        if(!searchText) {
            return;
        }
        history.push(`?q=${searchText}`);
        reset();
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            name="searchText"
                            placeholder="Find your hero..."
                            autoComplete="off"
                            className="form-control"
                            onChange={handleInputChange}
                            value={searchText}
                        />
                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>

                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default SearchScreen;