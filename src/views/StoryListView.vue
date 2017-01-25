<template>
  <div>
    <!--{{ topStories }}-->
    <div class="page-content__inner">
      <StoryList v-for="storyList in latestStories"
        :date="storyList.date"
        :stories="storyList.stories"></StoryList>
    </div>
  </div>
</template>

<script>
  import StoryList from '../components/StoryList'
  export default {
    name: 'StoryListView',
    components: {
      StoryList
    },
    created () {
      this.$store.commit('SET_APP_TITLE', '首页')
    },
    computed: {
      topStories () {
        return this.$store.getters.topStories
      },
      latestStories () {
        return this.$store.getters.latestStories
      }
    }
  }
</script>
