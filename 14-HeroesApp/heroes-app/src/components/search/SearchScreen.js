import React from 'react';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';

const SearchScreen = () => {

    const heroesFiltered = heroes;

    const initialForm = {
        searchText: '',
    };

    const [ formValues, handleInputChange, reset ] = useForm(initialForm);

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        if(!searchText) {
            return;
        }
        console.log(searchText);
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