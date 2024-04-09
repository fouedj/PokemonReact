import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (e:any) => {
    console.log('hello',e.target.value)
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}

export default LanguageSelector;
