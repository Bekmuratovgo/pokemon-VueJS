<template>
  <div class="p-auth">
    <p-auth-details
      v-if="VERIFICATION && VERIFICATION.result == 'deliverable'"
      :props_auth="VERIFICATION"
    />
    <p-auth-details v-if="verificationData" :props_auth="verificationData" />

    <div class="p-auth__a">
      <div class="p-auth__inner">
        <input
          type="text"
          v-model="emailSave"
          placeholder="Введите свой Email"
        />
        <button class="p-auth__submit" @click="getVerificate">Submit</button>
        <div v-if="VERIFICATION">
          <h3
            v-if="VERIFICATION && VERIFICATION.result == 'undeliverable'"
            class="p-auth__err"
          >
            Не корректный email
          </h3>
          <h3
            v-if="VERIFICATION && VERIFICATION.result == 'undeliverable'"
            class="p-auth__corr"
          >
            Deliverable👍
          </h3>
          <div v-if="VERIFICATION && VERIFICATION.result == 'deliverable'">
            <router-link :to="{ name: 'main' }">
              <button>Перейти в главную страницу</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PAuthDetails from "./p-AuthDetails.vue";
export default {
  name: "p-Auth",
  components: {
    PAuthDetails,
  },
  props: {},
  data() {
    return {
      emailSave: "",
      clearInt: null,
      counter: 2,
      verificationData: this.VERIFICATION,
    };
  },
  computed: {
    ...mapGetters(["VERIFICATION"]),
  },
  methods: {
    ...mapActions(["GET_VERIFICATION"]),

    getVerificate() {
      if (this.emailSave != "") {
        console.log(this.emailSave, "???");
        this.GET_VERIFICATION(this.emailSave);
      } else {
        console.log();
      }
      this.clearInt = setInterval(() => {
        if (this.counter >= 1) {
          this.counter--;
          console.log(this.VERIFICATION, "Hola");
        } else if (
          this.counter == 0 &&
          this.VERIFICATION.result == "deliverable"
        ) {
          clearInterval(this.interval);
          localStorage.setItem(
            "emailSuccess",
            JSON.stringify(this.VERIFICATION.email)
          );
          localStorage.setItem(
            "verification",
            JSON.stringify(this.VERIFICATION)
          );
        }
      }, 1000);
    },
  },
  mounted() {
    this.verificationData = JSON.parse(localStorage.getItem("verification"));
    // console.log(this.verificationData, 'aaa');
  },
};
</script>
<style lang="scss">
.p-auth {
  .p-auth__email {
    position: absolute;
    top: 10px;
    left: 150px;
    height: 35px;
  }
  .p-auth__a {
    position: absolute;
    top: 80px;
    left: 34%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.507);
    .p-auth__inner {
      width: 400px;
      background: grey;
      height: 200px;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;

      .p-auth__err {
        color: red;
      }
      .p-auth__corr {
        color: green;
      }
      .p-auth__submit {
        width: 100px;
        background: rgb(0, 68, 255);
        color: white;
        height: 30px;
        border: none;
        border-radius: 3px;
        font-family: "Montserrat";
        margin: 10px;
      }
    }
    .p-auth__inner input {
      height: 24px;
      margin-top: 50px;
    }
  }
}
</style>