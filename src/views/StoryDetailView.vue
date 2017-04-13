<template>
  <div>
    <div v-if="!detail">
      <!-- MDL Progress Bar with Indeterminate Progress -->
      <div id="p2" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    </div>
    <div v-else>
      <div class="detail-cover" :style="detailStyle">
        <div class="page-content__inner">
          <div class="detail-cover__title">
            {{ detail.title}}
          </div>
          <div class="detail-cover__author">
            {{ detail.image_source }}
          </div>
        </div>
      </div>
      <div class="page-content__inner">
        <div class="detail-content" v-html="detail && detail.body"></div>
        <Favorite :id="id"></Favorite>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    imgURLFilter
  } from '../filters'
  import Favorite from 'src/components/Favorite'
  export default {
    name: 'StoryDetailView',
    created () {
      if (this.id) {
        this.$store.dispatch('fetchStoryDetail', { id: this.id })
      }
      this.syncAppTitle()
    },
    watch: {
      detail (val) {
        this.syncAppTitle()
      }
    },
    components: {
      Favorite
    },
    computed: {
      id () {
        return this.$route.params.id
      },
      detail () {
        return this.$store.state.news.storyDetails[this.id]
      },
      detailStyle () {
        return {
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .9)), url(' +
            (this.detail && this.detail.image
            ? imgURLFilter(this.detail.image)
            : require('../assets/bg-grey.svg')) + ')'
        }
      }
    },
    methods: {
      imgURLFilter,
      syncAppTitle () {
        this.$store.commit('SET_APP_TITLE', this.detail && this.detail.section && this.detail.section.name || '知乎日报 PWA')
      }
    }
  }
</script>

<style>
  .detail-content {
    padding: 0 1em 1em;
  }

  .detail-cover {
    height: 200px;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    background-image: url('../assets/bg-grey.svg');
    transition: background-image 0.5s ease-in;
  }

  .detail-cover .page-content__inner {
    padding: 0 1em;
    box-sizing: border-box;
  }

  .detail-cover__title {
    font-size: 1.3em;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .detail-cover {
      height: 300px;
    }
    .detail-cover__title {
      font-size: 2em;
    }
  }

  .detail-cover__author {
    font-size: 0.5em;
    text-align: right;
    padding: 0.5em 0;
    color: #d7d7d7;
  }

  .detail-content a {
    text-decoration: none;
    color: rgb(3, 169, 244);
  }

  .avatar {
    border-radius: 50%;
  }

  .detail-content img {
    max-width: 100%;
    margin: 1em 0;
  }

  .detail-content h2 {
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 700;
    margin: 1em 0;
  }

  .detail-content .meta {
    margin: 1em 0;
    font-size: 0.7em;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail-content .author {
    font-weight: 700;
  }

  .detail-content .bio {
    color: #8e8e8e;
  }

  .detail-content .view-more a {
    display: block;
    background: #eee;
    padding: 0.7em 1em;
    text-align: center;
    border-radius: 0.2em;
    color: #333;
    text-decoration: none;
  }

  .page-content__inner .mdl-button--fab {
    position: fixed;
    right: .5em;
    bottom: .5em;
  }
</style>
