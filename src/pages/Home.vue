<template lang="html">
  <div>
    <div id="app">
      <div class="section">
        <p>{{ $t("message.homepage") }}</p>
      </div>
      <!-- <div class="section"></div> -->
      <!-- <div class="section"></div> -->
      <!-- <div class="section"></div> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text')

@font-face
  font-family: notoSans_semibold
  // webpack 似乎不吃 otf，用 ttf 取而代之
  src: url("../assets/font/NotoSansUI-Bold.ttf")


@font-face
  font-family: notoSans_regular
  src: url("../assets/font/NotoSansUI-Regular.ttf")


@font-face
  font-family: notoSans_light
  src: url("../assets/font/NotoSansUI-Regular.ttf")

#app .section 
  background: #eeeeee
  width: 100%
  height: 700px
  margin-top: 0px
  display: flex
  justify-content: center
  align-items: center

  p 
    font-family: 'Libre Barcode 39 Text', 'Microsoft YaHei'
    color: black
    font-size: 60px
    margin-top: 5%
    text-align: center

.rgb-16-16-16
  color: #101010

.rgb-57-57-57
  color: #393939

.rgb-158-201-14
  color: #9EC90E

.center
  text-align: center

.sec3-header, .text-header
  font-size: 38px
  font-family: notoSans_regular

.text-body
  font-size: 16px
  font-family: notoSans_light
  margin-top: 7px
  line-height: 1.6em

.para-position
  position: absolute
  margin-left: 50px
  -webkit-flex-direction: column
  -moz-flex-direction: column
  flex-direction: column
  -webkit-justify-content: space-between
  -moz-justify-content: space-between
  justify-content: space-between
  height: 143px
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: flex
  &.active
    position: fixed
    top: 35%

.prog-line
  position: absolute
  height: 100px
  border-left: 1px solid #95989A
  margin-left: 17px
  margin-top: 12px

.prog
  /*height: 19px;
  height: 35px
  width: 35px
  padding-top: 10px
  text-align: center
  cursor: pointer
  border-radius: 50%
  font-family: notoSans_regular
  font-size: 14px
  color: #95989A
  background-color: #FFF
  border: 1px solid #95989A
  z-index: 1
  transition: all .6s ease-out
  -o-transition: all .6s ease-out
  -moz-transition: all .6s ease-out
  -webkit-transition: all .6s ease-out
  &.active
    color: #FFF
    background-color: #9EC90E

.para-content
  margin: 0 auto
  width: 80%
  min-width: 965px

.content-body
  height: 515px
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: flex
  -webkit-justify-content: center
  -moz-justify-content: center
  justify-content: center

.content-body-text
  width: 491px
  &.conselor
    margin-top: 60px

/* conselor

.content-body-logo
  &.conselor
    width: 424px
    margin-left: 50px
  &.report
    margin-right: 45px
    width: 375px

/* report

.content-body-text
  &.report
    margin-top: 142px
    width: 491px
  &.coach
    margin-top: 100px

/* app with coach

.app-link
  margin-top: 30px
  img
    margin-right: 7px
    margin-bottom: 7px
    cursor: pointer

.qr-code
  margin-left: -10px
  width: 475px

.content-body-logo.coach
  width: 491px

.rwd-sec3
  display: none

@media only screen and (max-device-width: 1024px)
  .sec3
    display: none
  .rwd-sec3
    display: block
  .sec3-header
    font-size: 30px
  .rwd-para-content .rwd-content-body
    &.conselor .text-header, &.report .text-header, &.coach .text-header
      z-index: 1
    .text-header.active
      margin-top: 0
      position: fixed
      top: 75px
  .sec3-header:nth-child(1), .rwd-content-body
    margin-top: 125px
  .text-header
    position: absolute
    width: 100%
    margin-top: -90px
    font-size: 17px
    padding-top: 15px
    padding-bottom: 12px
    border-top: 1px solid #D9D9D9
    border-bottom: 1px solid #D9D9D9
    background-color: #F7F7F7
  .rwd-content-body
    &.conselor .rwd-logo
      margin: 30px auto
      width: 369px
    &.report .rwd-logo
      text-align: center
      margin: 60px auto 0
      width: 375px
    &.coach .rwd-logo
      margin: 70px auto 50px
      width: 527px
  .text-body
    margin-bottom: 30px
    padding-left: 70px
    padding-right: 70px
  .rwd-app-link
    margin-top: 15px
    margin-bottom: 50px
    text-align: center
    img
      cursor: pointer
      &:nth-child(1)
        margin-right: 10px

@media screen and (max-device-width: 767px)
  .sec3-header
    font-size: 24px
    padding-left: 10px
    padding-right: 10px
    &:nth-child(1)
      margin-top: 125px
  .rwd-content-body
    margin-top: 125px
  .rwd-para-content .rwd-content-body .text-header.active
    top: 70px
  .rwd-content-body
    &.conselor .rwd-logo
      width: 65%
    &.report .rwd-logo
      margin: 15px auto 0
      width: 85%
      img
        width: 100%
    &.coach .rwd-logo
      margin: 30px auto 30px
      width: 85%
  .text-body
    padding-left: 30px
    padding-right: 30px
  .rwd-app-link
    margin-top: 15px
    margin-bottom: 50px
    text-align: center
    img
      cursor: pointer
      &:nth-child(1)
        margin-right: 10px
</style>
