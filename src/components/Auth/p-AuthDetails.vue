<template>
  <div class="p-authDetails">
    <button v-if="props_auth" class="p-authDetails__email">
      User: {{ props_auth.email }}
    </button>
    <button v-else class="p-authDetails__email">User: {{ emailGetted }}</button>

    <router-link :to="{ name: 'ver'}">
      <button @click="clearLocal" class="p-authDetails__out">Выйти</button>
    </router-link>
    <!-- <button @click="asd">Alo</button> -->
  </div>
</template>

<script>
export default {
  name: "p-AuthDetails",
  props: {
    props_auth: {
      type: Object,
      default() {
        return {};
      },
    },
    data() {
      return {
        emailGetted: "",
      };
    },
  },
  methods: {
    clearLocal() {
      localStorage.removeItem("emailSuccess");
      localStorage.removeItem("verification");
    },
    asd() {
      // console.log( localStorage.getItem('emailSuccess'),'asd');
    },
  },
  mounted() {
    this.emailGetted = JSON.parse(localStorage.getItem("emailSuccess"));
    // console.log(this.emailGetted, "getting?");
  },
};
</script>
<style lang="scss">
.p-authDetails {
  .p-authDetails__email {
    position: absolute;
    top: 10px;
    left: 150px;
    height: 40px;
  }
  .p-authDetails__out {
    position: absolute;
    top: 10px;
    left: 30px;
    // right: 20px;
    height: 40px;
  }
}
</style>