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
let pokemonCaught=[];
const url = "https://pokeapi.co/api/v2/pokemon-form/";
async function obtenerPokemons(json){
    for(let i=1; i<json.results.length; i++){
      let response2=   await fetch(`${url}${i}`);
      let pokemon = await response2.json();
      pokemons.push(pokemon)
    }
    getPokemonsLS ()
    renderPokemon(pokemons);
}
fetch(url).then((response)=>{
    return response.json();
}).then((json)=>{

    obtenerPokemons(json);

});
function preCharge(){
    pokemons.push( new Pokemon(1,"Bulbasaur", ["Grass","Poison"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"));
    pokemons.push(new Pokemon(2,"Ivysaur", ["Grass","Poison"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"));
    pokemons.push(new Pokemon(3,"Venusaur", ["Grass","Poison"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"));
    pokemons.push(new Pokemon(4,"Charmander", ["Fire"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"));
    pokemons.push(new Pokemon(5,"Charmeleon", ["Fire"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"));
    pokemons.push(new Pokemon(6,"Charizard", ["Fire","Flying"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"));
    pokemons.push(new Pokemon(7,"Squirtle", ["Water"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"));
    pokemons.push(new Pokemon(8,"Wartortle", ["Water"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"));
    pokemons.push(new Pokemon(9,"Blastoise", ["Water"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"));
    pokemons.push(new Pokemon(10,"Caterpie", ["Bug"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png"));
    pokemons.push(new Pokemon(11,"Metapod", ["Bug"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png"));
    pokemons.push(new Pokemon(12,"Butterfree", ["Bug","Flying"],"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"));
}
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
    pokemonBodyTable.innerHTML = "";
    listPokemon.forEach((pokemon)=>{
        console.log(pokemon);
        const tr = document.createElement("tr");
        const tdNumber = document.createElement("td");
        const span = document.createElement("span");
        tdNumber.scope="row";
        tdNumber.className = "text-black-50"
        span.innerHTML = `${pokemon.id}`;
        tdNumber.append(span);
        const tdPhoto = document.createElement("td");
        tdPhoto.innerHTML = "";
        const tdName = document.createElement("td");
        tdName.className="fw-bold"
        tdName.innerHTML = capitalizeFirstLetter(pokemon.name);

        const tdSpecies = document.createElement("td");

        for (let i = 0; i < pokemon.types.length; i++) {
            const spanSpecies = document.createElement("span");
            spanSpecies.className = `${setBackgroundSpecie(pokemon.types[i].type.name)} m-1 p-1 rounded-pill`
            spanSpecies.innerHTML = translate(`${pokemon.types[i].type.name}`);
            tdSpecies.append(spanSpecies);
        }
        const tdCaught = document.createElement("td");
        const checkCaughtPokemon = document.createElement("input");
        checkCaughtPokemon.className="form-check-input"
        checkCaughtPokemon.setAttribute("type","checkbox");
        checkCaughtPokemon.defaultChecked =  pokemonCaught.some( (pokemonCau) =>pokemonCau.id ==pokemon.id);
        checkCaughtPokemon.id = pokemon.id;
        tdCaught.append(checkCaughtPokemon);
        checkCaughtPokemon.addEventListener("change",()=>{
                let caughtCheckId = document.getElementById(checkCaughtPokemon.id);

                if(caughtCheckId.checked){
                    Toastify({
                        text: `Se agrego ${pokemon.name}`,
                        className: "success",
                        gravity: "bottom",
                        position: "right",
                        style:{
                            background : "#13803D"
                        },
                    }).showToast();
                    pokemon.caught = true;
                    pokemonCaught.push(pokemon)
                    localStorage.setItem("pokemonCaught", JSON.stringify(pokemonCaught))
                }else{
                    Toastify({
                        text: `Se elimino ${pokemon.name}`,
                        className: "delete",
                        gravity: "bottom",
                        position: "right",
                        style:{
                            background : "#DC4C64"
                        },
                    }).showToast();
                    localStorage.removeItem("pokemonCaught");
                    const indexPokemonToDelete = pokemonCaught.findIndex( (pokemonCaughtToDelete) => {
                        return pokemonCaughtToDelete.id === pokemon .id;
                    });
                    pokemonCaught.splice(indexPokemonToDelete, 1);
                    localStorage.setItem("pokemonCaught", JSON.stringify(pokemonCaught))
                }

            }
        )
        tr.append(tdNumber);
        tr.append(tdPhoto)
        tr.append(tdName);
        tr.append(tdSpecies);
        tr.append(tdCaught);
        pokemonBodyTable.append(tr);
    });

}

function getPokemonsLS () {
    let pokemonsLS = localStorage.getItem("pokemonCaught");
    if(pokemonsLS !== null) {
        const pokemonsJSON = JSON.parse(pokemonsLS);
        for(const pokemonJSON of pokemonsJSON) {
            //let pokeAux = new Pokemon(pokemonJSON.number,pokemonJSON.name,pokemonJSON.species);
            let pokeAux = pokemonJSON;
            pokemonCaught.push(pokeAux);
            // pokeAux.setCaught(pokemonJSON.caught);
            //
            // if(pokeAux.caught){
            //     const indexPokemonToDelete = pokemons.findIndex( (pokemonToDelete) => {
            //         return pokemonToDelete.number === pokeAux.number;
            //     });
            //     pokemonCaught.push(pokeAux)
            //     pokemons.splice(indexPokemonToDelete, 1);
            //     pokemons.push(pokeAux);
            //     pokemons.sort((p1,p2)=>(p1.number>p2.number)?1:(p1.number<p2.number)?-1:0);
            // }
        }
    }
}
// preCharge();


const inputFind= document.getElementById("findPokemon");
inputFind.addEventListener("input", () => {
    const wordToSearch = inputFind.value;
    const pokemonsFilter = pokemons.filter( (pokemon) => {
        return pokemon.name.toLowerCase().includes(wordToSearch.toLowerCase());
    });
    renderPokemon(pokemonsFilter);
});

