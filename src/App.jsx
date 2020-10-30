import React, {useState, useEffect} from 'react';
import { IntlProvider } from 'react-intl';
import FR from './Translations/fr';
import EN from './Translations/en';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'

// SCSS 
import './styles/index.scss' 

const messages = {
  FR: FR,
  EN: EN,
};

const App = () => {
  const initialLang = window.localStorage.getItem('fr');
  const [language, setLanguage] = useState(initialLang);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  const changeLanguage = () => {
    if (language === 'EN') {
      setLanguage('FR');
      localStorage.setItem('language', 'FR');
    } else {
      setLanguage('EN');
      localStorage.setItem('language', 'EN');
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
