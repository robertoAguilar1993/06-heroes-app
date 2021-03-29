import React, { useMemo } from 'react';
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

import { useLocation } from 'react-router-dom';
import queryString  from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';


const SearchScreen = ({history}) => {

    const location = useLocation();

    const  { q = '' } = queryString.parse(location.search);
    
    const [values, handleInputChange] = useForm({term:q});
    
    const {term} = values;

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])
    
    
    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${term}`);
    }

    const handleChange  = (e)=>{
        handleInputChange(e);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form className="form" onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={term}
                            onChange={handleChange}
                            name="term"
                            autoComplete="off"
                        />
                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    { (q ==='') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    { (q !=='' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                           There is no hero with {q}
                        </div>
                    }
                    
                    {
                        heroesFiltered.map(hero =>{
                            return <HeroCard key={hero.id} {...hero} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
