<template>
  <router-link :to="{ name: 'details',  params: { card_item: props_searched } }" style="text-decoration: none">
    <div class="p-searchModal">
      <div class="p-searchModal__card">
        <img
          v-if="props_searched.sprites"
          :src="props_searched.sprites.front_default"
          alt="img-3"
        />
        <img
          v-else
          src="https://avatanplus.com/files/resources/mid/571c6e2fea997154470e6b59.png"
          alt="img-none"
        />
        <div class="p-searchModal__cardInner">
          <!-- <button class="p-searchModal__x" @click.stop="close">x</button> -->

          <h3 class="p-searchModal__cardInnerh3">
            Name: <span>{{ props_searched.name }}</span>
          </h3>
          <h3 class="p-searchModal__cardInnerh3">
            Weight: <span>{{ props_searched.weight }}</span>
          </h3>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "p-SearchModal",
  props: {
    props_searched: {
      type: Object,
      default() {
        return {
          isClose: false,
        };
      },
    },
  },
  computed: {},
  methods: {
    // close() {
    //   this.$emit("isCloseSearch", this.isClose);
    // },
  },
  mounted() {},
};
</script>


<style lang="scss">
.p-searchModal {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  width: 280px;
  position: absolute;
  top: 100px;
  left: 51.5%;

  .p-searchModal__card {
    // width: 200px;
    margin: 8px;
    display: flex;

    .p-searchModal__cardInner {
      background: rgb(255, 255, 255);
      width: 180px;

      .p-searchModal__x {
        float: right;
      }
      .p-searchModal__cardInnerh3 {
        text-align: left;
        margin: 8px 5px;
        color: rgb(117, 117, 117);
        font-size: 16px;
        font-family: "Montserrat";
        font-weight: 500;
      }
      .p-searchModal__cardInnerh3 span {
        color: black;
      }
    }
  }
  .p-searchModal__card img {
    width: 90px;
    height: 80px;
  }
}
</style>