import React from 'react'
import Banner from './../Organisms/Banner'
import HeroInformation from '../Organisms/HeroInformation'


const SuperHeroId = ({match})=>{
    
    return(
            <>
				<Banner title="Te presentamos a este super heroe" paragraph="Miralo bien"/>
                <HeroInformation id ={match.params.id} />

            </>
        )
}

export default SuperHeroId