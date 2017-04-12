<template>
  <div id="app">
    <!-- The drawer is always open in large screens. The header is always shown,
  even in small screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">{{ title }}</span>
          <div class="mdl-layout-spacer"></div>
          <!-- Right aligned menu below button -->
          <button id="demo-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">more_vert</i>
          </button>

          <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="demo-menu-lower-right">
            <li :disabled="action.disabled" v-for="action in actions" class="mdl-menu__item">
              {{ action.name }}
            </li>
            <li class="mdl-menu__item">复制链接</li>
          </ul>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <div class="site-logo">
          <div class="logo"></div>
          <div class="mdl-layout-title">
            知乎日报 PWA
          </div>
        </div>
         <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/"><i class="material-icons">home</i> 首页</router-link>
        <router-link class="mdl-navigation__link" to="/favorite"><i class="material-icons">star</i>  我的收藏</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import 'material-design-icons/iconfont/material-icons.css'
import 'material-design-lite/dist/material'
require('./assets/material.css')
export default {
  name: 'app',
  created () {
    this.$store.dispatch('fetchLatestNews')
  },
  computed: {
    title () {
      return this.$store.state.title
    },
    actions () {
      return this.$store.state.actions
    }
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
  }

  #app {
    height: 100%;
    font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei", "微软雅黑", STXihei, "华文细黑", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  @media (min-width: 768px) {
    .page-content__inner {
      width: 600px;
      margin: 0 auto;
    }
  }

  .site-logo {
    display: flex;
    align-items: center;
  }

  .mdl-layout__title,
  .mdl-layout-title {
    font-weight: 500!important;
  }

  .app-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }

  .logo {
    background: transparent url(./assets/logo.png) no-repeat;
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
