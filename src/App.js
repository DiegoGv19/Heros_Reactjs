import React from 'react'
import './Styles/styles.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Comoponents/all/Header'
import Banner from './Comoponents/Home/Banner'
import ContainerCards from './Comoponents/SuperHero/ContainerCards'
import Contacto from './Comoponents/Contacto/Contacto'
import SuperHero from './SuperHero/SuperHero'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={()=>(
            <>
              <Banner title= "Marvel" paragraph="El Universo cinematográfico de Marvel es una franquicia de medios y un universo compartido, centrada en una serie de películas de superhéroes producidas independientemente por Marvel Studios y basadas en los personajes que aparecen en las publicaciones de Marvel Comics."/>

            </>

          )} >

        </Route>
        <Route path="/superhero/:id" component={SuperHero}>

        </Route>
        <Route path="/superhero" component={()=>(
            <>
              <Banner title="Nuestros Super Heroes" paragraph="Podras ver todos nuestros super heroes."/>
              <ContainerCards />
            </>
          )}>

        </Route>
        <Route path="/contacto" component={()=>(
            <>
              <Banner title="Contactanos" paragraph="Podras ver todos nuestros super heroes."/>
              <Contacto />
            </>
          )}>

        </Route>
        <Route component={()=>(<h1>Esta pagina no existe</h1>)}/>
      </Switch>
    </Router>
  );
}

export default App;
