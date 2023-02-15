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
function preCharge(){
    pokemons.push( new Pokemon(1,"Bulbasaur", ["Planta","Veneno"]));
    pokemons.push(new Pokemon(2,"Ivysaur", ["Planta","Veneno"]));
    pokemons.push(new Pokemon(3,"Venusaur", ["Planta","Veneno"]));
    pokemons.push(new Pokemon(4,"Charmander", ["Fuego"]));
    pokemons.push(new Pokemon(5,"Charmeleon", ["Fuego"]));
    pokemons.push(new Pokemon(6,"Charizard", ["Fuego","Volador"]));
    pokemons.push(new Pokemon(7,"Squirtle", ["Agua"]));
    pokemons.push(new Pokemon(8,"Wartortle", ["Agua"]));
    pokemons.push(new Pokemon(9,"Blastoise", ["Agua"]));
    pokemons.push(new Pokemon(10,"Caterpie", ["Bicho"]));
    pokemons.push(new Pokemon(11,"Metapod", ["Bicho"]));
    pokemons.push(new Pokemon(12,"Butterfree", ["Bicho","Volador"]));
}
function setBackgroundSpecie(specie) {
    switch (specie) {
        case "":

            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
    }
}
function renderPokemon(){
   // pokemonBodyTable.innerHTML = "";
    pokemons.forEach((pokemon)=>{
        const tr = document.createElement("tr");
        const tdNumber = document.createElement("td");
        const span = document.createElement("span");
        tdNumber.scope="row";
        tdNumber.className = "text-black-50"
        span.innerHTML = `${pokemon.number}`;
        tdNumber.append(span);

        // Agregar evento de click al span para poner el input
        // span.addEventListener("click", () => {
        //
        //     // Ocultar etiqueta span
        //     span.className = "oculta";
        //
        //     // Creo el input que va a ser el cambio de nombre
        //     const inputCambioDeNombre = document.createElement("input");
        //     inputCambioDeNombre.value = producto.nombre;
        //
        //     // Detecto cambio en el input
        //     inputCambioDeNombre.addEventListener("change", () => {
        //
        //         // Obtengo el nuevo nombre del producto a través del value del input
        //         const nuevoNombre = inputCambioDeNombre.value;
        //
        //         // Removemos el input
        //         inputCambioDeNombre.remove();
        //
        //         // Volver a poner el span
        //         span.className = "visible";
        //
        //         // Editar nombre del producto
        //         editarNombreProducto(producto, nuevoNombre);
        //     });
        //
        //     // Agrego el input al td
        //     tdNombre.append(inputCambioDeNombre);
        // });
        const tdPhoto = document.createElement("td");
        tdPhoto.innerHTML = "";
        const tdName = document.createElement("td");
        tdName.className="fw-bold"
        tdName.innerHTML = `${pokemon.name}`;

        const tdSpecies = document.createElement("td");

        for (let i = 0; i < pokemon.species.length; i++) {
            const spanSpecies = document.createElement("span");
            spanSpecies.className = "plant_background"
            spanSpecies.innerHTML = `${pokemon.species[i].toString()} `;
            tdSpecies.append(spanSpecies);
        }

        //EJEMPLOO
        
        // const spanSpecies = document.createElement("span");
        // spanSpecies.className = "plant_background"
        // spanSpecies.innerHTML = `${pokemon.species[0].toString()} `;
        // tdSpecies.append(spanSpecies);
        // const spanSpecies2 = document.createElement("span");
        // spanSpecies2.className = "poison_background";
        // spanSpecies2.innerHTML = `${pokemon.species[1].toString()} `;
        // tdSpecies.append(spanSpecies2);



        const tdSee = document.createElement("td");
        const checkSeePokemon = document.createElement("input");
        checkSeePokemon.className="form-check-input"
        checkSeePokemon.setAttribute("type","checkbox");
        checkSeePokemon.defaultChecked = pokemon.see;
        tdSee.append(checkSeePokemon);

        const tdCaught = document.createElement("td");
        const checkCaughtPokemon = document.createElement("input");
        checkCaughtPokemon.className="form-check-input"
        checkCaughtPokemon.setAttribute("type","checkbox");
        checkCaughtPokemon.defaultChecked = pokemon.caught;
        tdCaught.append(checkCaughtPokemon);
        // Agregar evento al boton de eliminar
        // botonEliminarProducto.addEventListener("click", () => {
        //     eliminarProducto(producto);
        // });

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

