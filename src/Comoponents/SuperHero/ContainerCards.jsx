import React from 'react'
import Card from './Card'

const superHeroList = [
	{
		"id" : 1,
		"name": "Anthony Edward Stark",
		"nickName": "Iron Man",
		"description": "Iron Man (conocido en español como El Hombre de Hierro) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue cocreado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber y diseñado por los artistas Don Heck y Jack Kirby. Hizo su primera aparición en Tales of Suspense #39 (marzo de 1963), y recibió su propio título en Iron Man #1 (mayo de 1968).",
		"Mainimage":"https://img.unocero.com/2019/11/robert-downey-jr-regresa-como-iron-man-1-1-880x495.jpg",
		"imageTwo": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/ab/Iron_Man_Mark_LXXXV.png/revision/latest?cb=20190405192851&path-prefix=es"
	},
	{
		"id" : 2,
		"name": "Steven Grant Rogers",
		"nickName": "Capitán América",
		"description": "Capitán América cuyo nombre real es Steven Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics. El Capitán América fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra. La popularidad de los superhéroes se desvaneció después de la guerra, y el cómic del Capitán América dejó de editarse en 1950, con un breve resurgimiento en 1953. Desde que Marvel Comics revivió al personaje en 1964, el Capitán América se ha mantenido en publicación.",
		"Mainimage": "https://hipertextual.com/files/2019/05/hipertextual-avengers-endgame-futuro-capitan-america-2019781893-scaled.jpg",
		"imageTwo": "https://vignette.wikia.nocookie.net/disneyypixar/images/8/8a/Captain_America_%28Avengers_4%29.png/revision/latest?cb=20180913185841&path-prefix=es"
	},
	{
		"id" : 3,
		"name": "Bruce Banner",
		"nickName": "Hulk",
		"description": "Hulk (llamado La Masa o El Hombre Increíble en muchas de las traducciones al español) es un personaje de acción ficticio, un superhéroe que aparece en los cómics estadounidenses publicados por la editorial Marvel Comics. El personaje fue creado por los escritores Stan Lee y Jack Kirby siendo su primera aparición en The Incredible Hulk #1 publicado en mayo de 1962. En sus apariciones de cómic, el personaje es a la vez Hulk, un ser humanoide enorme de piel verde, corpulento y musculoso que posee una gran fortaleza física, y su alter ego el Dr. Robert Bruce Banner (o Dr. David Bruce Banner),3​4​ un físico físicamente débil, socialmente retraído y emocionalmente reservado, las dos personalidades existentes como independientes y con resentimiento de la otra.",
		"Mainimage": "https://i1.wp.com/wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg?fit=1000%2C600&ssl=1",
		"imageTwo": "https://vignette.wikia.nocookie.net/disney/images/f/fc/AoU_Hulk_01.png/revision/latest?cb=20171104163705&path-prefix=es"
	},
	{
		"id" : 4,
		"name": "Natalia Alianovna Romanova",
		"nickName":"Viuda Negra",
		"description": "Natalia Alianovna Romanova1​(Ruso: Наталья Альяновна  Романова; alias: Natasha Romanoff; Ruso: Наташа Романофф), coloquial: Viuda Negra (en inglés: Black Widow) (en ruso: Чёрная Вдова; transcrito Chyornaya Vdova) es una superheroína ficticia que aparece en el cómic estadounidense y libros publicados por Marvel Comics. Creado por el editor y trazador Stan Lee, el guionista Don Rico y el artista Don Heck, el personaje debutó en Tales of Suspense # 52 (abril de 1964). El personaje fue presentado como una espía rusa, una antagonista del superhéroe Iron Man. Más tarde, desertó a los Estados Unidos, convirtiéndose en una agente de la organización ficticia S.H.I.E.L.D., y miembro del equipo de superhéroes, Los Vengadores.",
		"Mainimage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viuda-negra-pelicula-1547403963.jpg",
		"imageTwo": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9gzFWzq1tRUGoQ0LDbt_L17Kqu8sOFZ0o5g&usqp=CAU"
	},
	{
		"id" : 5,
		"name": "Peter Benjamin Parker",
		"nickName" :"Spider-Man",
		"description": "Spider-Man (llamado Hombre Araña en muchas de las traducciones al español) es un superhéroe ficticio creado por los escritores y editores Stan Lee y Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy # 15 (10 de agosto de 1962), en la Edad de Plata de los cómics. Aparece en los cómics estadounidenses publicados por Marvel Comics, así como en varias películas, programas de televisión y adaptaciones de videojuegos ambientadas en el Universo Marvel. En las historias, Spider-Man es el alias de Peter Parker, un huérfano criado por su tía May y su tío Ben en la Ciudad de Nueva York después de que sus padres Richard y Mary Parker murieron en un accidente aéreo. Lee y Ditko tuvieron que lidiar con los problemas de la adolescencia y los problemas financieros, y lo acompañaron con muchos personajes de apoyo, como J. Jonah Jameson, Flash Thompson, Harry Osborn, los intereses románticos, Gwen Stacy y Mary Jane Watson, y enemigos como el Doctor Octopus, Kingpin, Duende Verde y Venom. Su historia de origen lo tiene adquiriendo habilidades relacionadas con la araña después de un mordisco de una araña radioactiva; estos incluyen aferrarse a las superficies, disparar telarañas desde dispositivos montados en la muñeca y detectar el peligro con su",
		"Mainimage": "https://hipertextual.com/files/2019/06/hipertextual-4-trajes-spider-man-lejos-casa-nuevo-trailer-2019196176.jpg",
		"imageTwo": "https://i.pinimg.com/originals/80/6e/fb/806efbef4fe4ad8357f21eba3580545a.jpg"
	},
	{
		"id" : 6,
		"name": "Thor Odinson",
		"nickName" : "Thor",
		"description": "Thor (Thor Odinson) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje, que se basa en la deidad nórdica del mismo nombre, es el dios del trueno asgardiano poseedor del martillo encantado, Mjolnir, que le otorga la capacidad de volar y manipular el clima entre sus otros atributos sobrehumanos. 1​",
		"Mainimage":"https://cdn.lanetaneta.com/wp-content/uploads/2019/03/8-maneras-en-que-Marvel-amp-039-s-Thor-780x405.jpg",
		"imageTwo": "https://i.pinimg.com/236x/f0/a8/8c/f0a88cb6f0851969c583d4dfa39cfcf5.jpg"
	}
]
const ContainerCards = () =>(
    <div className="containerCards">
        { superHeroList.map(superHero => (<Card id={superHero.id} name={superHero.name} nickname={superHero.nickName} image={superHero.Mainimage}/>))}
    </div>

)

export default ContainerCards