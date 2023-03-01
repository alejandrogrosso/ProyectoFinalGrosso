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
    pokemonBodyTable.innerHTML = "";
    listPokemon.forEach((pokemon)=>{
        const tr = document.createElement("tr");
        const tdNumber = document.createElement("td");
        const span = document.createElement("span");
        tdNumber.scope="row";
        tdNumber.className = "text-black-50"
        span.innerHTML = `${pokemon.number}`;
        tdNumber.append(span);
        const tdPhoto = document.createElement("td");
        tdPhoto.innerHTML = "";
        const tdName = document.createElement("td");
        tdName.className="fw-bold"
        tdName.innerHTML = `${pokemon.name}`;

        const tdSpecies = document.createElement("td");

        for (let i = 0; i < pokemon.species.length; i++) {
            const spanSpecies = document.createElement("span");
            spanSpecies.className = `${setBackgroundSpecie(pokemon.species[i])} m-1 p-1 rounded-pill`
            spanSpecies.innerHTML = translate(`${pokemon.species[i].toString()}`);
            tdSpecies.append(spanSpecies);
        }
        const tdCaught = document.createElement("td");
        const checkCaughtPokemon = document.createElement("input");
        checkCaughtPokemon.className="form-check-input"
        checkCaughtPokemon.setAttribute("type","checkbox");
        checkCaughtPokemon.defaultChecked = pokemon.caught;
        checkCaughtPokemon.id = pokemon.number;
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
                        return pokemonCaughtToDelete.number === pokemon.number;
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
            let pokeAux = new Pokemon(pokemonJSON.number,pokemonJSON.name,pokemonJSON.species);
            pokeAux.setCaught(pokemonJSON.caught);

            if(pokeAux.caught){
                const indexPokemonToDelete = pokemons.findIndex( (pokemonToDelete) => {
                    return pokemonToDelete.number === pokeAux.number;
                });
                pokemonCaught.push(pokeAux)
                pokemons.splice(indexPokemonToDelete, 1);
                pokemons.push(pokeAux);
                pokemons.sort((p1,p2)=>(p1.number>p2.number)?1:(p1.number<p2.number)?-1:0);
            }
        }
    }
}
preCharge();
getPokemonsLS ()
renderPokemon(pokemons);
const inputFind= document.getElementById("findPokemon");
inputFind.addEventListener("input", () => {
    const wordToSearch = inputFind.value;
    const pokemonsFilter = pokemons.filter( (pokemon) => {
        return pokemon.name.toLowerCase().includes(wordToSearch.toLowerCase());
    });
    renderPokemon(pokemonsFilter);
});

