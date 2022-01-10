<template>
  <router-link
    :to="{ name: 'details', params: { card_item: pokemons_data} }"
    style="text-decoration: none"
  >
    <div class="p-mainItem" >
      <img :src="pokemons_data.sprites.front_default" alt="" /><br />
      <div class="p-main__name">
        <h4 class="p-main__h4"><span>Name: </span>{{ pokemons_data.name }}</h4>
        <h4 class="p-main__h4">
          <span>Weight: </span>{{ pokemons_data.weight }}
        </h4>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "p-MainItem",
  components: {},
  props: {
    pokemons_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: { },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted(){
    // let a = localStorage.setItem('data-props', this.pokemons_data)
    // console.log(a, '??');
  }
};
</script>

<style lang="scss">
.p-mainItem {
  width: 200px;
  background: rgb(0, 132, 255);
  margin: 10px;
  height: 160px;
  border-radius: 5px;
  font-family: "Montserrat";
  color: white;
  font-size: 18px;

  .p-main__name {
    .p-main__h4 {
      margin: -5px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .p-main__h4 span {
      // font-size: 15px;
      color: rgb(10, 8, 156);
    }
  }
}
</style>