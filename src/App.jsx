import React, {useState, useEffect} from 'react';
import { IntlProvider } from 'react-intl';
import fr from './Translations/fr';
import en from './Translations/en';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONenTS
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'

// SCSS 
import './styles/index.scss' 

const messages = {
  fr: fr,
  en: en,
};

const App = () => {
  const initialLang = window.localStorage.getItem('initialLang.lang') || 'fr';
  const [language, setLanguage] = useState(initialLang);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  const changeLanguage = () => {
    console.log(language)
    if (language === 'fr') {
      setLanguage('en');
      localStorage.setItem('language', 'en');
    } else {
      setLanguage('fr');
      localStorage.setItem('language', 'fr');
    }
  }

  return(
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Header language={language} changeLanguage={changeLanguage} />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        </Switch>
      </Router>
    </IntlProvider>
  )
}

export default App;
