// EJERCICIOS DE OBJETOS

// NIVEL I EJERCICIO 1
// let miAuto = {};

// let miAuto = {
//     marca: 'Ford',
//     año: 2021,
//     nuevo: false,
// }

// let propertyKey = 'Focus';
// miAuto.modelo = propertyKey;

// let precio = 100000;
// miAuto.precio = precio;

// let nextProperty = "Rojo"
// miAuto["color"] = nextProperty;

// for(let propiedad in miAuto) {
//     // Acción que queremos que realice
//     console.log((propiedad),(miAuto[propiedad]))
// }

// console.log(miAuto)
// console.log(miAuto[nextProperty]);

// console.log(miAuto[propertyKey]) // Devuelve undefined, lo que devuelve 'Focus' es (miAuto.modelo) es decir, la llave declarada es la que tiene el valor y no la variable asignada.
// console.log(miAuto["modelo"]); // Esto devuelve 'Focus' ya que accede a la propiedad 'modelo' del objeto.
// console.log(miAuto[nextProperty]) // Devuelve undefined, lo que devuelve 'Rojo' es (miAuto.color) es decir, la llave declarada es la que tiene el valor y no la variable asignada.
// console.log(miAuto["color"]); // Esto devuelve 'Rojo' ya que accede a la propiedad 'modelo' del objeto.


// NIVEL II EJERCICIO 1

// let estudiantes = [
//     { Estudiante: "Juan", nota: 6 },
//     { Estudiante: "Mario", nota: 8 },
//     { Estudiante: "Julia", nota: 10 },
//     { Estudiante: "Sofia", nota: 2 },
// ]

// estudiantes.forEach(estudiante => {
//     if(estudiante.nota >= 5 && estudiante.nota <= 8) {
//         estudiante.nota = estudiante.nota + 2;
//     }
// });

// console.log(estudiantes)


// NIVEL II EJERCICIO 2

// const peliculas = [
//     {titulo: 'Arma Mortal', rating: '4 estrellas', loHasVisto: true},
//     {titulo: 'Tiempo de Valientes', rating: '5 estrellas', loHasVisto: true},
//     {titulo: 'Kill Bill', rating: '3 estrellas', loHasVisto: false},
//     {titulo: 'Irene yo y mi otro yo', rating: '2 estrellas', loHasVisto: true},
// ]

// for(let pelicula in peliculas) {
//     if(peliculas[pelicula].loHasVisto === true) {
//         console.log(`Viste ${peliculas[pelicula].titulo} - ${peliculas[pelicula].rating}`)
//     } else {
//         console.log(`No viste ${peliculas[pelicula].titulo} - ${peliculas[pelicula].rating}`)
//     }
// }

// NIVEL III EJECRICIO 1

// let numeros = [2, 4, 5, 37, 0]
// let numeros_duplicados = {}

// let i = 0
// numeros.forEach((numero, i) => {
//     let numeros_duplicados = {[i]: numero * 2};
//     console.log(numeros_duplicados)
//     i++
// });


// NIVEL III EJECRICIO 2

// let personas = [
//     { nombre: "Ana", edad: "28" },
//     { nombre: "María", edad: "24" },
//     { nombre: "José", edad: "31" },
//   ];

// // const personasFiltradas
// const personasFiltradas = personas.filter((persona) => persona.edad > 27);
// console.log(personasFiltradas);


// NIVEL IV

// 1-

// let actoresVocales = [];

// let actoresPrincipales = [
//   "Tom Hanks",
//   "Johnny Depp",
//   "Elizabeth Taylor",
//   "Morgan Freeman",
//   "Jennifer Aniston",
//   "Meryl Streep",
//   "Natalie Portman",
//   "Ashton Kutcher",
// ];


// actoresPrincipales.forEach(actor => {
//     const separacion = actor.split(' ')
//         console.log(separacion)
        
//         for(let j = 0; j <= separacion.length -1; j++) {
//             if(separacion[j][0] === 'A' || separacion[j][0] === 'E' || separacion[j][0] === 'I' || separacion[j][0] === 'O' || separacion[j][0] === 'U') {
//                 actoresVocales.push(separacion.join(' '))
//             }
//         }

// });

// console.log(actoresVocales);
// console.log(actoresPrincipales);



// 2 - 
// let peliculas = []
// let actoresPrincipalesPorPelicula = {
//     Titanic: "Leonardo DiCaprio",
//     "El Padrino": "Al Pacino",
//     Matrix: "Keanu Reeves",
//     "Iron Man": "Robert Downey Jr",
//     "Soy leyenda": "Will Smith",
//     "Bastardos sin gloria": "Brad Pitt",
//   };

//   for(let actores in actoresPrincipalesPorPelicula ) {
//     peliculas.push(actores);
//     console.log(peliculas)
//     actoresPrincipales.push(actoresPrincipalesPorPelicula[actores]);
//   }


//NIVEL V FACTORY EXCERCISE

// let ecommerce = [
//     { nombre: "Samsung TV", precio: 6000, articulos: 10 },
//     { nombre: "DELL notebook", precio: 4000, articulos: 30 },
//     { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
//     { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
//     { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
//     { nombre: "Tablet logitech", precio: 33000, articulos: 9 },
//   ];


// function filtrarData(ecommerce) {
//     let nuevoArray = []
//     let i = 0

//     while(i <= ecommerce.length - 1 ) {
//         nuevoArray.push({nombre:ecommerce[i].nombre, cantidad:ecommerce[i].precio * ecommerce[i].articulos})
//         i++
//     }
//     return nuevoArray;
//     // console.log(nuevoArray)
// }

// filtrarData(ecommerce);
