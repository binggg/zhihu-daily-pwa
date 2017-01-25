<template>
  <transition name="fade">
    <div class="splash" v-show="!splashed">
      <div class="splash__img" :style="{ backgroundImage: 'url(' + img + ')' }">
        <div class="splash__author">{{ text }}</div>
      </div>
      <div class="app-bar">
        <div class="logo"></div>
        <div class="title">知乎日报 PWA</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {
    imgURLFilter
  } from '../filters'
  export default{
    data () {
      return {
        splashed: false
      }
    },
    created () {
      this.$store.dispatch('fetchStartImg', {})
      this.$store.dispatch('fetchLatestNews')
      setTimeout(() => { this.splashed = true }, 1500)
    },
    computed: {
      img () {
        return imgURLFilter(this.$store.state.startImg.img) || require('../assets/bg-grey.svg')
      },
      text () {
        return this.$store.state.startImg.text
      }
    }
  }
</script>

<style>
  .splash {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    z-index: 1000;
    flex-direction: column;
    background: #fff;
  }

  .title {
    font-size: 1em;
    font-weight: 500;
  }

  .splash__img {
    flex: 1;
    background-color: #333;
    transition: background-image 300ms ease-in 200ms;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    background-position: center center;
    flex-direction: column-reverse;
    color:#fff;
  }

  .splash__author {
    font-size: 0.5em;
    padding: 0.5em;
  }

  .app-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }

  .logo {
    background: transparent url(../assets/logo.png) no-repeat;
    width: 2.5em;
    height: 2.5em;
    background-size: cover;
    margin: 1em;
    display: inline-block;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
