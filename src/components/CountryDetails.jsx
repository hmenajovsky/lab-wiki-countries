import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Countrydatas = props => {
  const { data } = props;

  const params = useParams();

  const country = data.find(country => country.alpha3Code === params.id);

  return (
    <div className="col-7">
      <h1>country datas</h1>
      <img
        src={
          'https://flagpedia.net/data/flags/icon/72x54/' +
          country.alpha2Code.toLowerCase() +
          '.png'
        }
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(border => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Countrydatas;
