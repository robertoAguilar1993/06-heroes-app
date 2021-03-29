import React from 'react'
import { Link } from 'react-router-dom'


const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    return (
        <div className="card ms3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src= {`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">{superhero}</div>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) &&
                            <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`./hero/${id}`}>
                            mas ...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
