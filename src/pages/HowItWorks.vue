<template lang="html">
  <div class="page-body">
    <div class="content get-kit">
      <div class="content-title rgb-57-57-57">How <span style="color: #8EC349;">vue-boilerplate</span> Works</div>
      <div class="divider-horizontal"></div>
      <div class="content-description">{{ $t("message.how_it_works_tab_content") }}</div>
      <div class="content-description">{{ $t("message.how_it_works_tab_content") }}</div>
      <div class='embed-container'><iframe width="560" height="315" src='https://www.youtube.com/embed/6WImPscMmfw?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div>
      <div class="content-description">{{ $t("message.how_it_works_tab_content") }}</div>
      <div class='embed-container'><iframe width="560" height="315" src='https://www.youtube.com/embed/Fmz5M4rPQEY?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.embed-container
  position: relative
  padding-bottom: 56.25%
  height: 0
  overflow: hidden
  max-width: 100%
  iframe, object, embed
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

.page-body
  background: #FFFFFF

.content
  border: 1px solid transparent
  margin-top: 2%

.content-description
  margin: 5% 0px

.nav-footer
  border-top: 2px solid #eee

// Mobile version on Desktop
@media (max-width: 767px)
  .content
    width: 100%
    border-radius: 0px
    border: 1px solid transparent
    border-bottom: 1px solid #D9D9D9
    padding: 0px

  .content-title.rgb-57-57-57
    padding: 40px 30px 0px 30px

  .content-description
    padding: 0px 30px

  .divider-horizontal
    margin: 10px 30px

  .content-title
    font-size: 28px

  .page-body
    padding-bottom: 0px
</style>
