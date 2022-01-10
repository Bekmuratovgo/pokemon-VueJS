import axios from "axios";

export default {
    GET_ALL_POKEMONS({ commit }) {
        axios('https://pokeapi.co/api/v2/pokemon?limit=30&offset=5')
            .then(({ data }) => {
                data.results.map((obj) => {
                    axios(`${obj.url}`)
                        .then((response) => {
                            commit('SET_ALL_POKEMONS', response.data,)
                            console.log(response.data, 'action Hey');
                        })
                })
            })
            .catch((err) => {
                console.log(err, 'ERR');
            })
    },

    GET_SPECIES({ commit }, url) {
        axios(`${url}`)
            .then((response) => {
                commit('SET_SPECIES', response.data)
            })
    },

    SEARCHED_POKEMON({commit}, pokemon) {
        commit('SET_SEARCHED_POKEMON', pokemon)
        console.log(pokemon, 'searched Action');
    },

    NULL_STATE_OF_SEARCH({commit}, no) {
        commit("SET_NULL_STATE", no)

    },

    GET_VERIFICATION({commit}, email) {
        axios(`https://api.kickbox.com/v2/verify?email=${email}&apikey=live_40b3d6b35b00a678b2d64dd3e4fadd9c004e2c793e3d01ac6f3ed8bb4a6c521b`)
            .then((response) => {
                commit('SET_VERIFICATION', response.data)
                // console.log(response.data, '----verification----');
            })
            .catch((err) => {
                console.log(err,'ERROR IN VERIFICATION');
            })
    }

}
