<template>
  <div class="">
    <h6 class="story-list__header" v-if="date">{{ date | dateHeadingFilter }}</h6>
    <ul class="mdl-list mdl-list__border">
      <router-link v-for="story in stories"
        :to="'/story/' + story.id" class="mdl-list__item mdl-list__item--three-line">
        <span class="mdl-list__item-primary-content">
        <!--<i class="material-icons mdl-list__item-avatar">person</i>-->
        <span>{{story.title}}</span>
        <!--<span class="mdl-list__item-text-body">
          Bryan Cranston played the role of Walter in Breaking Bad. He is also known
          for playing Hal in Malcom in the Middle.
        </span>-->
        </span>
        <span class="mdl-list__item-secondary-content">
          <div class="story-cover" :style="{ backgroundImage: 'url(' + imgURLFilter(story.image || story.images[0]) + ')' }">
          </div>
        <!--<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>-->
      </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import {
    imgURLFilter,
    dateHeadingFilter
  } from '../filters'

  export default {
    props: {
      date: {
        type: String
      },
      stories: {
        type: Array
      }
    },
    methods: {
      imgURLFilter
    },
    filters: {
      imgURLFilter,
      dateHeadingFilter
    }
  }
</script>

<style>
  .story-list__header {
    padding: 0 1em;
  }

  .story-cover {
    width: 3.2em;
    height: 3.2em;
    background-size: cover;
    background-position: center center;
  }

  .mdl-list__border .mdl-list__item {
    border-bottom: 1px solid #f7f7f7;
  }

  .mdl-list__border .mdl-list__item:last-child {
    border-bottom: none;
  }

  a.mdl-list__item {
    text-decoration: none;
  }

  a.mdl-list__item:active {
    background-color: #e0e0e0;
  }
  a.mdl-list__item:focus {
    background-color: #e0e0e0;
  }
  a.mdl-list__item:hover {
    background-color: #e0e0e0;
  }
</style>
