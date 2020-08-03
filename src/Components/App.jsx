import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import '../Styles/styles.scss'


import Home from './Page/Home'
import SuperHero from './Page/SuperHero'
import SuperHeroId from './Page/SuperHeroId'
import Form from './Page/Form'

import Header from './Organisms/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}>

        </Route>
        <Route path="/superhero/:id" component={SuperHeroId}>

        </Route>
        <Route path="/superhero" component={SuperHero}>

        </Route>
        <Route path="/contacto" component={Form}>

        </Route>
        <Route component={()=>(<h1>Esta pagina no existe</h1>)}/>
      </Switch>
    </Router>
  );
}

export default App;
