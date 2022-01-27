import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import importedCountries from './countries.json';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList data={importedCountries} />
            <Routes>
              <Route path="/">
                <Route  path=":id" element={<CountryDetails data={importedCountries} />}/>
              </Route>
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
