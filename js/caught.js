
class Pokemon{
    caught;
    see;
    constructor(number, name, species,image){
        this.number = number;
        this.name = name;
        this.species = species;
        this.caught =false;
        this.image =image;
    }
    setCaught(caught){
        this.caught = caught;
    }

}
let pokemons=[];
function translate(specie) {
    switch (specie) {
        case "Bug":
            return "Bicho"
            break;
        case "Dragon":
            return "Dragon"
            break;
        case "Fairy":
            return "Hada"
            break;
        case "Fire":
            return "Fuego"
            break;
        case "Ghost":
            return "Fantasma"
            break;
        case "Ground":
            return "Tierra"
            break;
        case "Normal":
            return "Normal"
            break;
        case "Psychic":
            return "Psiquico"
            break;
        case "Steel":
            return "Acero"
            break;
        case "Dark":
            return "Siniestro"
            break;
        case "Electric":
            return "Electrico"
            break;
        case "Fighting":
            return "Lucha"
            break;
        case "Flying":
            return "Volador"
            break;
        case "Grass":
            return "Planta"
            break;
        case "Ice":
            return "Hielo"
            break;
        case "Poison":
            return "Veneno"
            break;
        case "Rock":
            return "Roca"
            break;
        case "Water":
            return "Agua"
            break;
    }
}
function setBackgroundSpecie(specie) {
    switch (specie) {
        case "Bug":
            return "bug_background text-white"
            break;
        case "Dragon":
            return "dragon_background text-white"
            break;
        case "Fairy":
            return "fairy_background"
            break;
        case "Fire":
            return "fire_background text-white"
            break;
        case "Ghost":
            return "ghost_background text-white"
            break;
        case "Ground":
            return "ground_background"
            break;
        case "Normal":
            return "normal_background"
            break;
        case "Psychic":
            return "psychic_background text-white"
            break;
        case "Steel":
            return "steel_background"
            break;
        case "Dark":
            return "dark_background text-white"
            break;
        case "Electric":
            return "electric_background"
            break;
        case "Fighting":
            return "fighting_background text-white"
            break;
        case "Flying":
            return "flying_background"
            break;
        case "Grass":
            return "grass_background"
            break;
        case "Ice":
            return "ice_background"
            break;
        case "Poison":
            return "poison_background text-white"
            break;
        case "Rock":
            return "rock_background text-white"
            break;
        case "Water":
            return "water_background text-white"
            break;
    }
}
function renderPokemon(listPokemon){
    principalDiv.innerHTML = "";
    listPokemon.forEach((pokemon)=>{
        const div = document.createElement("div");
        div.className="col-md-2 mt-2"
        const cardDiv = document.createElement("div");
        cardDiv.className="card"
        const img = document.createElement("img");
        img.className="card-img-top"
        img.src=pokemon.image;
        img.alt="Imagen de pokemon"
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.className="card-body"
        const cardBodyTextDiv = document.createElement("div");
        cardBodyTextDiv.className="card-text"
        const pokemonNumberP = document.createElement("p");
        pokemonNumberP.className= "text-black-50"
        pokemonNumberP.innerHTML = `N.º ${pokemon.number}`
        const pokemonNameH5 = document.createElement("h5");
        pokemonNameH5.innerHTML=pokemon.name;
        const speciesDiv = document.createElement("div");
        for (let i = 0; i < pokemon.species.length; i++) {
            const spanSpecies = document.createElement("span");
            spanSpecies.className = `${setBackgroundSpecie(pokemon.species[i])} m-1 p-1 rounded-pill`
            spanSpecies.innerHTML = translate(`${pokemon.species[i].toString()}`);
            speciesDiv.append(spanSpecies);
        }
        const buttonDelete = document.createElement("button");
        buttonDelete.type="button";
        buttonDelete.className = "btn btn-outline-danger rounded-3 btn-sm mt-3"
        buttonDelete.innerHTML="Eliminar"

        buttonDelete.addEventListener("click",()=>{
            Swal.fire({
                title: `¿Está seguro que desea eliminar a ${pokemon.name}?`,
                icon: 'info',
                confirmButtonText: 'SÍ',
                showDenyButton: true,
                denyButtonText: 'NO',
            }).then( (resultado) => {
                if(resultado.isConfirmed) {
                    Swal.fire({
                        title: `Se elimino ${pokemon.name}`,
                        icon: 'success',

                    });

                    localStorage.removeItem("pokemonCaught");
                    const indexPokemonToDelete = pokemons.findIndex( (pokemonCaughtToDelete) => {
                        return pokemonCaughtToDelete.number === pokemon.number;
                    });
                    pokemons.splice(indexPokemonToDelete, 1);
                    localStorage.setItem("pokemonCaught", JSON.stringify(pokemons))
                    renderPokemon(pokemons);
                } else if(resultado.isDenied) {
                    Swal.fire({
                        title: `Se cancelo eliminar ${pokemon.name}`,
                        icon: 'error',
                    });
                }
            });

            }

        )

        cardDiv.append(img);
        cardDiv.append(cardBodyDiv);
        cardDiv.append(cardBodyTextDiv);
        cardDiv.append(pokemonNumberP);
        cardDiv.append(pokemonNameH5);
        cardDiv.append(speciesDiv);
        cardDiv.append(buttonDelete);
        div.append(cardDiv);
        principalDiv.append(div);
    });

}


let pokeCaughtJSON = localStorage.getItem("pokemonCaught")
pokemons = JSON.parse(pokeCaughtJSON);
if(pokemons.length > 0 ){
    pokemons.sort((p1,p2)=>(p1.number>p2.number)?1:(p1.number<p2.number)?-1:0);
    renderPokemon(pokemons);
}else{
    const emptyPokemonDiv = document.createElement("div");
    emptyPokemonDiv.className = "alert alert-danger"
    emptyPokemonDiv.role="alert"
    const emptyPokemonText = document.createElement("p");
    const emptyPokemonHref = document.createElement("a");
    emptyPokemonHref.className = "alert-link"
    emptyPokemonHref.href = "../index.html"
    emptyPokemonHref.innerHTML="haga click aquí"
    emptyPokemonText.innerHTML= `No posee pokemones atrapados para volver a la pagina principal `
    emptyPokemonText.append(emptyPokemonHref);
    emptyPokemonDiv.append(emptyPokemonText);
    principalDiv.append(emptyPokemonDiv);
}


const inputFind= document.getElementById("findPokemon");
inputFind.addEventListener("input", () => {
    const wordToSearch = inputFind.value;
    const pokemonsFilter = pokemons.filter( (pokemon) => {
        return pokemon.name.toLowerCase().includes(wordToSearch.toLowerCase());
    });
    renderPokemon(pokemonsFilter);
});