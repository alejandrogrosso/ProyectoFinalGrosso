class Pokemon{
    caught;
    see;
    constructor(number, name, species){
        this.number = number;
        this.name = name;
        this.species = species;
        this.see = false;
        this.caught =false;
    }

    setSee(see){
        this.see = see;
    }
    setCaught(caught){
        this.caught = caught;
    }
}
let pokemons=[];
let pokemonsSee=[];
function preCharge(){
    pokemons.push( new Pokemon(1,"Bulbasaur", ["Grass","Poison"]));
    pokemons.push(new Pokemon(2,"Ivysaur", ["Grass","Poison"]));
    pokemons.push(new Pokemon(3,"Venusaur", ["Grass","Poison"]));
    pokemons.push(new Pokemon(4,"Charmander", ["Fire"]));
    pokemons.push(new Pokemon(5,"Charmeleon", ["Fire"]));
    pokemons.push(new Pokemon(6,"Charizard", ["Fire","Flying"]));
    pokemons.push(new Pokemon(7,"Squirtle", ["Water"]));
    pokemons.push(new Pokemon(8,"Wartortle", ["Water"]));
    pokemons.push(new Pokemon(9,"Blastoise", ["Water"]));
    pokemons.push(new Pokemon(10,"Caterpie", ["Bug"]));
    pokemons.push(new Pokemon(11,"Metapod", ["Bug"]));
    pokemons.push(new Pokemon(12,"Butterfree", ["Bug","Flying"]));
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
function renderPokemon(){
    pokemonBodyTable.innerHTML = "";
    pokemons.forEach((pokemon)=>{
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

        const tdSee = document.createElement("td");
        const checkSeePokemon = document.createElement("input");
        checkSeePokemon.className="form-check-input"
        checkSeePokemon.setAttribute("type","checkbox");
        checkSeePokemon.defaultChecked = pokemon.see;
        checkSeePokemon.id = pokemon.number;
        tdSee.append(checkSeePokemon);
    checkSeePokemon.addEventListener("change",()=>{
        let aaa = document.getElementById(checkSeePokemon.id);
        if(aaa.checked){
            pokemonsSee.push(pokemon)
            localStorage.setItem("pokemonSee", JSON.stringify(pokemonsSee))
        }else{
            localStorage.removeItem("pokemonSee");
            const indexPokemonToDelete = pokemonsSee.findIndex( (pokemonSeeToDelete) => {
                return pokemonSeeToDelete.number === pokemon.number;
            });
            pokemonsSee.splice(indexPokemonToDelete, 1);

            localStorage.setItem("pokemonSee", JSON.stringify(pokemonsSee))

        }

        }
    )
        const tdCaught = document.createElement("td");
        const checkCaughtPokemon = document.createElement("input");
        checkCaughtPokemon.className="form-check-input"
        checkCaughtPokemon.setAttribute("type","checkbox");
        checkCaughtPokemon.defaultChecked = pokemon.caught;
        tdCaught.append(checkCaughtPokemon);

        tr.append(tdNumber);
        tr.append(tdPhoto)
        tr.append(tdName);
        tr.append(tdSpecies);
        tr.append(tdSee);
        tr.append(tdCaught);

        pokemonBodyTable.append(tr);
    });

}
preCharge();
renderPokemon();
pokemons.forEach((pokemon) => {
    console.log(pokemon);
})

