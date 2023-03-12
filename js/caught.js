class Pokemon{
    caught;
    constructor(number, name, species,image){
        this.number = number;
        this.name = name;
        this.species = species;
        this.caught =false;
        this.image = image;
    }
    setCaught(caught){
        this.caught = caught;
    }
}
let pokemons=[];
function translate(specie) {
    switch (specie) {
        case "bug":
            return "Bicho"
            break;
        case "dragon":
            return "Dragon"
            break;
        case "fairy":
            return "Hada"
            break;
        case "fire":
            return "Fuego"
            break;
        case "ghost":
            return "Fantasma"
            break;
        case "ground":
            return "Tierra"
            break;
        case "normal":
            return "Normal"
            break;
        case "psychic":
            return "Psiquico"
            break;
        case "steel":
            return "Acero"
            break;
        case "dark":
            return "Siniestro"
            break;
        case "electric":
            return "Electrico"
            break;
        case "fighting":
            return "Lucha"
            break;
        case "flying":
            return "Volador"
            break;
        case "grass":
            return "Planta"
            break;
        case "ice":
            return "Hielo"
            break;
        case "poison":
            return "Veneno"
            break;
        case "rock":
            return "Roca"
            break;
        case "water":
            return "Agua"
            break;
    }
}
function setBackgroundSpecie(specie) {
    switch (specie) {
        case "bug":
            return "bug_background text-white"
            break;
        case "dragon":
            return "dragon_background text-white"
            break;
        case "fairy":
            return "fairy_background"
            break;
        case "fire":
            return "fire_background text-white"
            break;
        case "ghost":
            return "ghost_background text-white"
            break;
        case "ground":
            return "ground_background"
            break;
        case "normal":
            return "normal_background"
            break;
        case "psychic":
            return "psychic_background text-white"
            break;
        case "steel":
            return "steel_background"
            break;
        case "dark":
            return "dark_background text-white"
            break;
        case "electric":
            return "electric_background"
            break;
        case "fighting":
            return "fighting_background text-white"
            break;
        case "flying":
            return "flying_background"
            break;
        case "grass":
            return "grass_background"
            break;
        case "ice":
            return "ice_background"
            break;
        case "poison":
            return "poison_background text-white"
            break;
        case "rock":
            return "rock_background text-white"
            break;
        case "water":
            return "water_background text-white"
            break;
    }
}
function capitalizeFirstLetter(str) {

    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}
function renderPokemon(listPokemon){
    principalDiv.innerHTML = "";
    listPokemon.forEach((pokemon)=>{
        let pokemonClass = new Pokemon(pokemon.id, pokemon.name,pokemon.types,pokemon.sprites.front_default);
        const div = document.createElement("div");
        div.className="col-md-2 mt-2"
        const cardDiv = document.createElement("div");
        cardDiv.className="card"
        const img = document.createElement("img");
        img.className="card-img-top"
        img.src=pokemonClass.image;
        img.alt="Imagen de pokemon"
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.className="card-body"
        const cardBodyTextDiv = document.createElement("div");
        cardBodyTextDiv.className="card-text"
        const pokemonNumberP = document.createElement("p");
        pokemonNumberP.className= "text-black-50"
        pokemonNumberP.innerHTML = `N.º ${pokemonClass.number}`
        const pokemonNameH5 = document.createElement("h5");
        pokemonNameH5.innerHTML=pokemonClass.name;
        const speciesDiv = document.createElement("div");
        for (let i = 0; i < pokemonClass.species.length; i++) {
            const spanSpecies = document.createElement("span");
            spanSpecies.className = `${setBackgroundSpecie(pokemonClass.species[i].type.name)} m-1 p-1 rounded-pill`
            spanSpecies.innerHTML = translate(`${pokemonClass.species[i].type.name}`);
            speciesDiv.append(spanSpecies);
        }
        const buttonDelete = document.createElement("button");
        buttonDelete.type="button";
        buttonDelete.className = "btn btn-outline-danger rounded-3 btn-sm mt-3"
        buttonDelete.innerHTML="Eliminar"

        buttonDelete.addEventListener("click",()=>{
            Swal.fire({
                title: `¿Está seguro que desea eliminar a ${pokemonClass.name}?`,
                icon: 'info',
                confirmButtonText: 'SÍ',
                showDenyButton: true,
                denyButtonText: 'NO',
            }).then( (resultado) => {
                if(resultado.isConfirmed) {
                    Swal.fire({
                        title: `Se elimino ${pokemonClass.name}`,
                        icon: 'success',

                    });

                    localStorage.removeItem("pokemonCaught");
                    const indexPokemonToDelete = pokemons.findIndex( (pokemonCaughtToDelete) => {
                        return pokemonCaughtToDelete.id === pokemonClass.number;
                    });
                    pokemons.splice(indexPokemonToDelete, 1);
                    localStorage.setItem("pokemonCaught", JSON.stringify(pokemons))
                    renderPokemon(pokemons);
                } else if(resultado.isDenied) {
                    Swal.fire({
                        title: `Se cancelo eliminar ${pokemonClass.name}`,
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