let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
fetch(url)
.then(res => res.json())
.then(object => {

    let html =``
    for (const datos of object.drinks) {
        html += `

        <div class="col mt-4" >
          <div class="card mt-4 mb-3 ms-1 border border-primary rounded" id="tarjeta">
            <img src="${datos.strDrinkThumb}" class=" img-fluid mt-3 rounded" alt="${datos.strGlass}">
            <div class="card-body" id="tarjeta-body">
              <h5 class="card-title text-center">${datos.strCategory} - ${datos.strGlass}</h5>
              <p class="card-text text-start"><h4>${datos.strInstructionsES}</h4></p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><h5>${datos.strIngredient1}</h5></li>
                <li class="list-group-item"><h5>${datos.strIngredient2}</h5></li>
                <li class="list-group-item"><h5>${datos.strIngredient3}</h5></li>
                </ul>
                
            </div>
            <a href="${datos.strDrinkThumb}" class="btn btn-primary mb-3">Enlace de Imagen</a>
          </div>
        </div>`
    }
    html +=
    document.getElementById("container").innerHTML = html
}
)