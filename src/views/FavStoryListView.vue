<template>
  <div>
    <!--{{ topStories }}-->
    <div class="page-content__inner">
      <StoryList
        :stories="favStories"></StoryList>
    </div>
  </div>
</template>

<script>
  import StoryList from '../components/StoryList.vue'
  export default {
    name: 'FavStoryListView',
    components: {
      StoryList
    },
    created () {
      this.$store.commit('SET_APP_TITLE', '收藏')
    },
    computed: {
      favStories () {
        return this.$store.getters.favoriteStories
      }
    }
  }
</script>
