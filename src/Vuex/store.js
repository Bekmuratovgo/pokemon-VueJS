import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/Action'
import mutations from './mutations/Mutations'
import getters from './getters/Getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        allPokemons: [],
        pokemonPaginate: {},
        species: '',
        searched_pokemon: [],
        verification: []
    },
    mutations,
    actions,
    getters
})
export default store