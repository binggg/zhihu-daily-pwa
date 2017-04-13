<template>
  <!-- Colored FAB button with ripple -->
  <button
    @click="favorite"
    :class="{ 'mdl-button--colored': isFavor}"
    class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect
mdl-button--accent">
      <i class="material-icons" v-if="isFavor">done</i>
      <i class="material-icons" v-else>star</i>
  </button>
</template>

<script>
  export default {
    props: {
      id: [ Number, String ]
    },
    computed: {
      isFavor () {
        return !!this.$store.state.news.favorites[this.id]
      }
    },
    methods: {
      favorite () {
        this.$store.commit('SET_FAVORITE', {
          id: this.id,
          isFavor: !this.isFavor
        })
      }
    }
  }
</script>
