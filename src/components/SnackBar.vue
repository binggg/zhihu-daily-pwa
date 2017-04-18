<template>
  <div class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button"></button>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
    },
    watch: {
      data (val) {
        this.$nextTick(() => {
          window.componentHandler.upgradeElement(this.$el)
          this.$el.MaterialSnackbar &&
            this.$el.MaterialSnackbar.showSnackbar(this.data)
        })
      }
    }
  }
</script>
