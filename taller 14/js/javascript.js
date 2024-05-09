var array_1 = ["bread","milk","cheese","noodles"]
var array_2 = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
var objeto_1 =[{
                Nombre:"Juan",
                Apellido:"Aguilar",
                Telefono:3124379806,
                Edad:24
                },
                {
                Nombre:"Nicolas",
                Apellido:"Chacon",
                Telefono:3124384806,
                Edad:40            
                },
                {
                Nombre:"Manuel",
                Apellido:"Ochoa",
                Telefono:3034329806,
                Edad:17
                }, 
                {
                Nombre:"Mariana",
                Apellido:"Rincon",
                Telefono:3154349806,
                Edad:80            
                },
                {
                Nombre:"Katherine",
                Apellido:"Rivera",
                Telefono:3124370906,
                Edad:30
                },               
]
var objeto_2= [ 
                { Nombre:"Juan",
                Apellido:"Aguilar",
                Telefono:3124379806,
                Edad:24,
                Materia:"Atletismo vol.1",
                Info_de_materias_matriculadas:["Fisiometria 2", "Natacion 1", "Administracion deportiva"],
                Hobbys_favorito:["Futbol", "Musica", "Peliculas"]
                },
                {
                Nombre:"Nicolas",
                Apellido:"Chacon",
                Telefono:3124384806,
                Edad:25,
                Materia:"Calculo lineal 2",
                Info_de_materias_matriculadas:["Ecuaciones Diferenciales", "Ingles 2", "Fisica Cuantica1"],
                Hobbys_favorito:["Basketball","Video juegos","Leer"]
                },
                {
                Nombre:"Manuel",
                Apellido:"Ochoa",
                Telefono:3034329806,
                Edad:17,
                Materia:"Educacion a la primera infancia",
                Info_de_materias_matriculadas:["Matematica1","Calculo1" ,"Ingles1"],
                Hobbys_favorito:["Diseño 3D","Ver series"]
                }, 
                {
                Nombre:"Mariana",
                Apellido:"Rincon",
                Telefono:3154349806,
                Edad:80,
                Materia:"Excel",
                Info_de_materias_matriculadas:["Estadistica 1","Administracion de empresas"],
                Hobbys_favorito:["Leer"," Pasar tiempo con los nietos"]            
                },
                {
                Nombre:"Katherine",
                Apellido:"Rivera",
                Telefono:3124370906,
                Edad:30,
                Materia:"Diseño UX nivel basico",
                Info_de_materias_matriculadas:["Prototipo de diseño camva","Ciencia del color"],
                Hobbys_favorito:["Salir con amigos","Ver series","Jugar video juegos"]
                },
]
var array_array = ["Balon de Basketball","Balon de Futbol","Balon de voleyball",["Bate", "Pelota de beisball","Casco de Beisball"]]


function Lista1(){ 
    let html= `<div><h2>PUNTO 1</h2><ul class="list-group">`
    for (const datos_1 of array_1) {
    html += `<li class="list-group-item">${datos_1}</li>
    `
   }
   html +=`</ul></div>`
   document.getElementById('valores').innerHTML = html    
 }
 
   function Lista2(){
    let html = `<div><h2>PUNTO 2</h2><ul class="list-group">`
    for (const datos_2 of array_2) {
        html += `
        <li class="list-group-item">${datos_2}</li>
      `
   }
        html +=`</ul></div>`
        document.getElementById('valores').innerHTML = html  
}
function Lista3(){ 
    let html = ``
    for (const datos_3 of objeto_1) {
            html += `<div class="card" style="width: 18rem;">
            <div class="card-body">
          <h5 class="card-title">REGISTROS</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
          <p class="card-text"><ul class="list-group list-group-flush">    
        <li class="list-group-item">NOMBRE: ${datos_3.Nombre}</li>
        <li class="list-group-item">APELLIDO: ${datos_3.Apellido}</li>
        <li class="list-group-item">TELEFONO: ${datos_3.Telefono}</li>
        <li class="list-group-item">EDAD: ${datos_3.Edad}</li>
        </ul>
        </div>
        </div>`
        }
        html +=`
      `
        document.getElementById('valores').innerHTML = html  

}
function Lista4(){ 
    let html = ``
    for (const datos_4 of objeto_2) { 
        html += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Estudiantes Matriculados</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
          <p class="card-text"><ul class="list-group list-group-flush">    
          <li class="list-group-item">NOMBRE: ${datos_4.Nombre}</li>
          <li class="list-group-item">APELLIDO: ${datos_4.Apellido}</li>
          <li class="list-group-item">TELEFONO: ${datos_4.Telefono}</li>
          <li class="list-group-item">EDAD: ${datos_4.Edad}</li>
          <li class="list-group-item">MATERIA: ${datos_4.Materia}</li>
          <li class="list-group-item">MATERIAS MATRICULADAS: ${datos_4.Info_de_materias_matriculadas}</li>
          <li class="list-group-item">HOBBYS: ${datos_4.Hobbys_favorito}</li></ul></p>
        </div>
      </div>`
    }
    document.getElementById('valores').innerHTML = html  

}
function Lista5(){ 
    let html= `<div><h2>PUNTO 5</h2><ul class="list-group">`
    for (const datos_5 of array_array) {
    html += `
    <li class="list-group-item">${datos_5}</li>
    `
    }
    html +=`</ul></div>`
    document.getElementById('valores').innerHTML = html    
}


