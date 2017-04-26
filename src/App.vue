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
            <li class="mdl-menu__item" @click="copy">复制链接</li>
          </ul>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <div class="site-logo">
          <div class="logo"></div>
          <div class="mdl-layout-title">
            知乎日报 PWA
          </div>
          <small style="color:#ccc;">{{ version }}</small>
        </div>
         <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/"><i class="material-icons">home</i> 首页</router-link>
        <router-link class="mdl-navigation__link" to="/favorites"><i class="material-icons">star</i>  我的收藏</router-link>
        <a class="mdl-navigation__link" href="https://github.com/binggg/zhihu-daily-pwa"><i class="material-icons">code</i>  Github</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <transition name="slide-next">
            <router-view></router-view>
          </transition>
        </div>
      </main>
      <SnackBar :data="snackbar"></SnackBar>
    </div>
  </div>
</template>

<script>
import pack from '../package.json'
import SnackBar from './components/SnackBar'
import { copyToClipboard } from './utils'

if (typeof window !== 'undefined') {
  // iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。
  // https://developers.google.com/web/fundamentals/design-and-ui/input/touch/
  window.onload = function () {
    if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
      var elements = document.querySelectorAll('button')
      var emptyFunction = function () {}
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('touchstart', emptyFunction, false)
      }
    }
  }
}

export default {
  name: 'app',
  data () {
    return {
      version: pack.version,
      snackbar: {}
    }
  },
  created () {
     this.$store.dispatch('fetchLatestNews')
      .then(() => {
        return Promise.all(this.needCacheStories
          .map(id => this.$store.dispatch('fetchStoryDetail', { id })
          )).catch(() => {})
      })
      .then(() => {
        this.snackbar = {
          message: '离线成功！没有网络时也可以使用了',
          timeout: 3000
        }
      })
  },
  mounted () {
    window.Notification && window.Notification.requestPermission()
      .then(function (result) {
        console.log(result)
      })
  },
  computed: {
    title () {
      return this.$store.state.title
    },
    actions () {
      return this.$store.state.actions
    },
    needCacheStories () {
      return this.$store.getters.needCacheStories
    }
  },
  mounted () {
  },
  components: {
    SnackBar
  },
  methods: {
    copy () {
      let result = copyToClipboard(window.location.href)

      if (result) {
        this.snackbar = {
          message: '复制链接成功！可以转发给朋友了',
          timeout: 3000
        }
      } else {
        this.snackbar = {
          message: '复制链接失败！请手动分享链接',
          timeout: 3000
        }
      }
    }
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
    /* 可点击元素的背景色 */
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
  }

  p {
    font-size: 16px!important;
    line-height: 30px!important;
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

  .slide-prev-enter-active, .slide-prev-leave-active {
    transition: all .5s
  }
  .slide-prev-enter {
    transform: translate3d(-100%, 0, 0)
  }

  .slide-prev-leave-active {
    transform: translate3d(100%, 0, 0)
  }

  .slide-next-enter-active, .slide-next-leave-active {
    transition: all .5s
  }
  .slide-next-enter {
    transform: translate3d(100%, 0, 0)
  }

  .slide-next-leave-active {
    transform: translate3d(-100%, 0, 0)
  }
</style>
