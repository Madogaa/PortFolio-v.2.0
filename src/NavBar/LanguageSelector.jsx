// LanguageSelector.js
import React from 'react';
import "./LanguagueSelector.css"

const LanguageSelector = ({ onChangeLanguage }) => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    onChangeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select className='lang-select' id="language" onChange={handleLanguageChange}>
        <option defaultChecked value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
