export default {
    ALL_POKEMONS(state) {
        return state.allPokemons
    },
    SPECIES(state) {
        return state.species
    },
    SEARCHED_POKEMON_GETTER(state) {
        console.log(state.searched_pokemon);
        return state.searched_pokemon
    },
    NULL_STATE(state) {
        return state.searched_pokemon
    },
    VERIFICATION(state) {
        console.log(state.verification, 'Gett');
        return state.verification
    }
}