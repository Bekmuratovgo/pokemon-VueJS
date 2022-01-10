<template>
  <div class="p-cardDetails">
    <div class="p-cardDetails__container" v-if="SPECIES">
      <div class="p-cardDetails__inner">
        <img
          class="p-cardDetails__img"
          :src="card_item.sprites.front_default"
          alt="img-1"
        />
        <img
          class="p-cardDetails__img"
          :src="card_item.sprites.back_default"
          alt="img-2"
        />
      </div>
      <div class="p-cardDetails__rightBlock">
        <div class="p-cardDetails__innerLeft">
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans"> Name:</span>
            {{ card_item.name }}
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Weight:</span>
            {{ card_item.weight }} кг
          </h3>
        </div>
        <div class="p-cardDetails__innerRight">
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Height:</span>
            {{ card_item.height }} см
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Experience:</span>
            {{ card_item.base_experience }} day
          </h3>
        </div>
        <div class="p-cardDetails__innerRight">
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans"> Color:</span>
            {{ SPECIES.color.name }}
          </h3>
          <h2
            class="p-cardDetails__aboveTitle"
            v-if="card_item.moves[1].move.name"
          >
            Moves
          </h2>
          <h3 class="p-cardDetails__titleNameWeight">
            {{ card_item.moves[0].move.name }}
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            {{ card_item.moves[1].move.name }}
          </h3>
        </div>
        <div class="p-cardDetails__innerLeft">
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans"> Base happiness:</span>
            {{ SPECIES.base_happiness }}
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Capture rate</span>
            {{ SPECIES.capture_rate }}
          </h3>

          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Egg groups</span>
            {{ SPECIES.egg_groups[0].name }}
          </h3>
        </div>
        <div class="p-cardDetails__innerLeft">
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Is mythical</span>
            {{ SPECIES.is_mythical }}
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans"> Is baby:</span>
            {{ SPECIES.is_baby }}
          </h3>

          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Is legendary:</span>
            {{ SPECIES.is_legendary }}
          </h3>

          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Generation:</span>
            {{ SPECIES.generation.name }}
          </h3>
        </div>
        <div class="p-cardDetails__innerLeft">
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Habitat</span>
            {{ SPECIES.habitat.name }}
          </h3>

          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Growth rate</span>
            {{ SPECIES.growth_rate.name }}
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Shape name:</span>
            {{ SPECIES.shape.name }}
          </h3>
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Gender rate</span>
            {{ SPECIES.gender_rate }}
          </h3>
        </div>

        <div class="p-cardDetails__innerLeft" >
          <h3 class="p-cardDetails__titleNameWeight">
            <span class="p-cardDetails__spans">Ability:</span>
            {{card_item.abilities[0].ability.name}}
          </h3>
        </div>
      </div>
    </div>
    <!-- <button @click="asd">Clik to see More</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "p-CardDetails",
  props: {
    card_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    card_item: function() {
      if(this.card_item != ""){
        localStorage.setItem('local_card_item', JSON.stringify(this.card_item))
      }
    }
  },
  data() {
    return {
      data_card_item: ''
    };
  },
  computed: {
    ...mapGetters(["SPECIES", "EVOLUTION_CHAIN"]),
  },
  methods: {
    ...mapActions(["GET_SPECIES", "GET_EVOLUTION_CHAIN"]),

    // asd() {
    //   console.log(this.card_item.abilities[0].ability.name, "one");
    // },
  },
  mounted() {
    this.GET_SPECIES(this.card_item.species.url);
    // this.data_card_item = JSON.parse(localStorage.getItem('local_card_item'))
  },
};
</script>


<style lang="scss">
.p-cardDetails {
  display: flex;
  justify-content: center;
  width: 90%;

  .p-cardDetails__container {
    width: 900px;
    display: flex;
    background: grey;

    .p-cardDetails__inner {
      background: rgb(255, 255, 255);
      border: 1px solid grey;

      .p-cardDetails__img {
        width: 200px;
      }
    }

    .p-cardDetails__rightBlock {
      display: flex;
      flex-wrap: wrap;

      .p-cardDetails__innerLeft {
        width: 250px;
        margin: 10px 10px 10px 30px;
        text-align: left;

        .p-cardDetails__titleNameWeight {
          font-size: 20px;
          font-family: "Montserrat";
          // color: black;
        }
        .p-cardDetails__spans {
          color: rgb(216, 216, 216);
          font-family: "Montserrat";
          font-size: 20px;
        }
      }
      .p-cardDetails__innerRight {
        width: 250px;
        margin: 10px 10px 10px 30px;
        text-align: left;

        .p-cardDetails__aboveTitle {
          font-size: 20px;
          color: rgb(216, 216, 216);
          font-family: "Montserrat";
        }
        .p-cardDetails__titleNameWeight {
          font-size: 20px;
          font-family: "Montserrat";
          // color: black;
        }
        .p-cardDetails__spans {
          color: rgb(216, 216, 216);
          font-family: "Montserrat";
          font-size: 20px;
        }
      }
    }
  }
}
</style>