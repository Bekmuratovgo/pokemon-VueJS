<template>
  <div class="p-main">
    <p-auth-details
      v-if="isGetEmailFromLocal"
      :props_auth="isGetEmailFromLocal"
    />

    <div class="p-main__left">
      <h2>Sort Pokemons<br />💪🏼or🤏🏼</h2>
      <button class="p-main__sort" @click="sortByName">Name</button>
      <button class="p-main__sort" @click="sortByWeight">Weight</button>
    </div>

    <div class="p-main__right">
      <div class="p-main__searchBlock">
        <h3 class="p-main__searchTitle">
          Search by <span>weight</span> and by <span>name</span>
        </h3>
        <input type="text" placeholder="search..." v-on:input="debounceInput" />
        <div v-if="SEARCHED_POKEMON_GETTER">
          <p-search-modal
            v-for="(item, index) in SEARCHED_POKEMON_GETTER"
            :props_searched="item"
            :key="index"
          />
        </div>
        <div>
          <p-not-found @isClose="isClose" v-if="notFound" />
        </div>
      </div>

      <div class="p-main__rightInner">
        <p-main-item
          v-for="(pokemon, index) in paginatedPokemons"
          :key="index"
          :pokemons_data="pokemon"
        />
      </div>
      <div class="p-main__pagination">
        <div
          class="p-main__page"
          v-for="(page, index) in pages"
          :key="index"
          :class="{ 'p-main__pageSelected': page === pageNumber }"
          @click="pageClick(page)"
        >
          {{ page }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pMainItem from "./p-MainItem.vue";
import { mapActions, mapGetters } from "vuex";
import PSearchModal from "../SearchModal/p-SearchModal.vue";
import PNotFound from "../SearchModal/p-NotFound.vue";
import _ from "lodash";
import PAuthDetails from "../Auth/p-AuthDetails.vue";

export default {
  name: "p-Main",
  components: {
    pMainItem,
    PSearchModal,
    PNotFound,
    PAuthDetails,
  },
  data() {
    return {
      pokemonsObj: {},
      pokemonPerPage: 9,
      pageNumber: 1,
      isEqual: false,
      filterKey: "",
      notFound: false,
      isGetEmailFromLocal: "",
    };
  },
  computed: {
    ...mapGetters(["ALL_POKEMONS", "SEARCHED_POKEMON_GETTER"]),

    pages() {
      return Math.ceil(this.ALL_POKEMONS.length / 10);
    },

    paginatedPokemons() {
      let from = (this.pageNumber - 1) * this.pokemonPerPage;
      let to = from + this.pokemonPerPage;
      console.log(from, 'from');
      return this.ALL_POKEMONS.slice(from, to);
    },
  },
  methods: {
    ...mapActions([
      "GET_ALL_POKEMONS",
      "SEARCHED_POKEMON",
      "NULL_STATE_OF_SEARCH",
    ]),

    isClose(is) {
      this.notFound = is;
    },
    isCloseSearch(is) {
      this.notFound = is;
    },

    pageClick(page) {
      this.pageNumber = page;
    },
    search(value) {
      this.GET_SEARCH_VALUE(value);
    },

    sortByName() {
      this.ALL_POKEMONS.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByWeight() {
      this.ALL_POKEMONS.sort((a, b) => a.weight - b.weight);
    },
    //------SEARCH------
    debounceInput: _.debounce(function (e) {
      this.filterKey = e.target.value;
      this.searchSort();
    }, 500),

    searchSort() {
      if (this.SEARCHED_POKEMON_GETTER) {
        this.NULL_STATE_OF_SEARCH([]);
        console.log("State is Clear");
      }
      for (let item of this.ALL_POKEMONS) {
        if (
          item.name.toLowerCase() == this.filterKey.toLowerCase() ||
          item.weight == this.filterKey
        ) {
          this.searchedCard = item;
          this.SEARCHED_POKEMON(item);
          this.notFound = false;
          console.log("Found");
          break;
        } else {
          console.log("quba govno");
          this.notFound = true;
        }
      }
    },
    //----END-OF-SEARCH----
  },
  mounted() {
     this.GET_ALL_POKEMONS().then(() => console.log("Data Arrived👍"));
    this.isGetEmailFromLocal = JSON.parse(localStorage.getItem("verification"));
  },
};
</script>


<style lang="scss">
.p-main {
  display: flex;
  justify-content: center;

  .p-main__searchBlock {
    // float: right;
    .p-main__searchTitle {
      font-family: "Montserrat";
      margin: 10px 3px 3px;
    }
    .p-main__searchTitle span {
      font-family: "Montserrat";
      // margin: 10px 3px 3px;
      color: rgb(146, 5, 5);
    }
    .p-main__searchBtn {
      width: 80px;
      height: 30px;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 3px;
      margin: 5px;
      background: #2d55ff;
      font-family: "Montserrat";
    }
  }
  .p-main__searchBlock input {
    margin-top: 10px;
    margin-bottom: 20px;
    height: 24px;
    font-size: 16px;
  }
  .p-main__left {
    width: 250px;
    background: rgb(44, 153, 16);
    padding-top: 10px;
    .p-main__sort {
      width: 120px;
      height: 40px;
      margin: 5px;
      background: white;
      border-radius: 3px;
      font-size: 16px;
      font-family: "Montserrat";
      border: none;
    }
  }
  .p-main__right {
    width: 800px;
    background: grey;

    .p-main__rightInner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .p-main__pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .p-main__page {
        margin: 20px 5px;
        padding: 8px;
        border: 1px solid red;
      }
      .p-main__page:hover {
        background: blue;
        cursor: pointer;
        color: white;
      }
      .p-main__pageSelected {
        background: blue;
        cursor: pointer;
        color: white;
      }
    }
  }
}
</style>