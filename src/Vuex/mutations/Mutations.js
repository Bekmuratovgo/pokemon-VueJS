export default {
    SET_ALL_POKEMONS: (state, pokemons) => {
        state.allPokemons.push(pokemons)
    },
    SET_SPECIES(state, species) {
        state.species = species
    },
    SET_SEARCHED_POKEMON: (state, searchedPok) => {
        state.searched_pokemon.push(searchedPok)
        // console.log(state.searched_pokemon, 'mut');
    },
    SET_NULL_STATE(state, no) {
        state.searched_pokemon = no
    },

    SET_VERIFICATION(state, email) {
        console.log(state.verification, 'mut');
        state.verification = email
    }

}