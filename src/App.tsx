import React, { useState } from 'react';
import './App.css';

function App() {

  const [countriesState, setCountries] = useState({
    all: false,
    india: false,
    usa: false,
    france: false,
  });

  const handleSelectCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'all') {
       if(e.target.checked) {
         setCountries({
           all: true,
           india: true,
           usa: true,
           france: true,
         })
       }
       else {
          setCountries({
            all: false,
            india: false,
            usa: false,
            france: false,
          })
       }
    }
    else {
      if(e.target.checked === false) {
        setCountries({
          ...countriesState,
          all: false,
          [e.target.name]: e.target.checked
        })
      } else {
        const newCountriesState = {
          ...countriesState,
          [e.target.name]: e.target.checked
        }
        setCountries({
          ...newCountriesState,
          all: newCountriesState.france && newCountriesState.india && newCountriesState.usa,
        })
      }
    }
  }

  return (
    <div className="app">
      <div className='input-container'>
        <input type="checkbox" name="all" id="all" checked={countriesState.all} onChange={handleSelectCountries}/>
        <label htmlFor="all">Select All</label>
      </div>

      <div className='input-container'>
        <input type="checkbox" name="india" id="india" checked={countriesState.india} onChange={handleSelectCountries} />
        <label htmlFor="india">India</label>
      </div>

      <div className='input-container'>
        <input type="checkbox" name="usa" id="usa" checked={countriesState.usa} onChange={handleSelectCountries} />
        <label htmlFor="usa">USA</label>
      </div>

      <div className='input-container'>
        <input type="checkbox" name="france" id="france" checked={countriesState.france} onChange={handleSelectCountries} />
        <label htmlFor="france">France</label>
       </div>
    </div>
  );
}

export default App;
