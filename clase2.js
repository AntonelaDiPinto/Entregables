
let contenedor = document.getElementById("contenedor");

fetch("https://pokeapi.co/api/v2/pokemon?limit=18&offset=0")
.then(resp => resp.json())
.then(data => 
    data.results.forEach(pokemon => {
        contenedor.innerHTML += ` <div class="card">
                                    <div class="contenido">
                                    <img id="imagen2" src="https://png.pngtree.com/png-vector/20240218/ourmid/pngtree-3d-pokemon-ball-png-image_11751537.png" alt="Pokemon Bola">
                                    <h2> ${pokemon.name} </h2>
                                    </div>
                                    <div class="pie"> </div>
                                 </div>`
        
    })
)
.catch(err => console.log(err))
