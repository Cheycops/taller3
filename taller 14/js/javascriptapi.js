function getInfo() {
    let charId = document.getElementById("charCapture").value
    let url = `https://jsonplaceholder.typicode.com/posts/${charId}`

    console.log(charId)
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then( data => {
             let html = `<div class="row m-5"><div class="col-4 border">
            <h4> 
                <b> ${data.id} </b> 
            </h4>
            <p> 
                    ${data.title} 
            </p>
            <p> 
                ${data.body} 
            </p>
         </div></div>`
document.getElementById("charContent").innerHTML = html

        

})


}
let url = `https://jsonplaceholder.typicode.com/posts`

fetch(url)
    .then(res => res.json())
    .then(object => {
        
        let html = `<div class="row m-5">`
        for (let datos of object) {
            
            html += `<div class="col-4 border">
                        <h4> 
                            <b> ${datos.id} </b> 
                        </h4>
                        <p> 
                                ${datos.title} 
                        </p>
                        <p> 
                            ${datos.body} 
                        </p>
                     </div>`
        }

        html += `</div>`

        document.getElementById("charContent").innerHTML = html

    })



