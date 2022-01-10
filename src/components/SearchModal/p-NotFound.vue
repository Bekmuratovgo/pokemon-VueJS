<template>
  <div class="p-searchModal">
    <div class="p-searchModal__card">
      <img
        src="https://avatanplus.com/files/resources/mid/571c6e2fea997154470e6b59.png"
        alt="img-none"
      />
      <div class="p-searchModal__cardInner">
        <button class="p-searchModal__x" @click="close">x</button>

        <h3 class="p-searchModal__cardInnerh3">
          <span>Не Найдено</span>
        </h3>
        <h3 class="p-searchModal__cardInnerh3">
          <span>Не найдено</span>
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "p-NotFound",
  data() {
      return {
          isClose: false
      }
  },
  methods: {
      close(){
          this.$emit('isClose', this.isClose)
      }
  }
};
</script>


<style lang="scss" scoped>
.p-searchModal {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  width: 280px;
  position: absolute;
  top: 100px;
  left: 51.5%;

  .p-searchModal__card {
    margin: 8px;
    display: flex;

    .p-searchModal__cardInner {
      background: rgb(255, 255, 255);
      width: 180px;

      .p-searchModal__x{
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