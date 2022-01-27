import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    const {data} = props;
  return (
    <>
      <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
          {data.map(country => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                key={country.name.common}
                to={country.alpha3Code}
              >
                <img
                  src={
                    'https://flagpedia.net/data/flags/icon/72x54/' +
                    country.alpha2Code.toLowerCase() +
                    '.png'
                  }
                  alt={country.name.common}
                />
                <p>{country.name.common}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
