<template>
  <div id="app">
    <!-- 定義是 HeaderComponent，但使用是 header-component -->
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import collection from 'easter-egg-collection'
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'
export default {
  name: 'app',
  // data () {
  //   return {
  //     msg: 'Vue.js App'
  //   }
  // },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="sass">
  *
    margin: 0
    color: #101010
    /*-webkit-touch-callout: none;
     *-webkit-user-select: none
     *-khtml-user-select: none
     *-moz-user-select: none
     *-ms-user-select: none
     *user-select: none

  input:focus, select
    outline: none

  .rgb-142-195-73
    color: #8EC349

  .rgb-0-127-255
    color: #007FFF

  .rgb-92-92-92
    color: #5C5C5C

  .rgb-57-57-57
    color: #393939

  .rgb-red
    color: red

  .rgb-red-border
    border: 1px solid red !important

  .page-body
    padding-top: 30px
    padding-bottom: 50px
    background-color: #F9F9F9

  .content
    margin: 0 auto
    margin-top: 8%
    padding: 40px 30px
    width: 600px
    background-color: white
    border: 1px solid #D9D9D9
    border-radius: 7px

  .content-title
    font-family: notoSans_regular
    font-size: 40px

  .content-description
    margin-top: 10px
    margin-bottom: 8%
    font-family: notoSans_light
    font-size: 17px

  .caution
    margin-top: 20px
    padding: 15px 20px
    border: 1px solid red
    border-radius: 7px
    font-family: notoSans_regular
    font-size: 16px
    background-color: #FAE8E8

  .section
    margin-top: 40px

  .section-title
    font-family: notoSans_semibold
    font-size: 17px
    width: 420px

  .divider-horizontal
    border-bottom: 1px solid #E5E5E5
    margin: 10px auto
    &.darker
      border-color: #C7C7C7

  .section-description
    margin-bottom: 30px
    width: 420px
    font-family: notoSans_light
    font-size: 16px

  .img-barcode
    margin-top: -10px
    margin-bottom: -10px
    width: 200px

  .user-input
    margin-top: 25px

  .input-title
    font-family: notoSans_regular
    font-size: 20px

  .input-fld
    width: 400px
    margin-top: 5px
    display: flex
    justify-content: space-between
    div
      margin-right: 15px
      flex: 1 1 auto
      input
        padding: 8px 10px 7px
        border: 1px solid #ABABAB
        border-radius: 7px
        width: 100%
        font-family: notoSans_regular
        font-size: 16px
        &[type="checkbox"], &[type="radio"]
          width: auto
        &:focus
          border-color: #5AC4FC
      select
        -webkit-appearance: none
        -moz-appearance: none
        appearance: none
        padding: 9px 10px 5px
        border: 1px solid #ABABAB
        border-radius: 7px
        background-color: #FFF
        width: 100%
        font-family: notoSans_regular
        font-size: 17px
      label
        font-family: notoSans_regular
        font-size: 20px

  #app label.checkbox-custom-label
    font-size: 14px

  .btn-confirm
    margin-top: 30px
    padding-top: 5px
    font-family: notoSans_semibold
    font-size: 17px
    color: white
    background-color: #FF8900
    border: none
    border-radius: 6px
    width: 200px
    height: 48px
    cursor: pointer
    &:focus
      outline: 0

  .error-msg
    margin-top: 5px
    font-family: notoSans_regular
    font-size: 16px

  .user-input-description
    margin-top: 15px
    font-family: notoSans_light
    font-size: 14px
    width: 420px

  .section-tabs
    margin-top: 35px
    text-align: center
    display: flex

  .section-tab
    font-family: notoSans_semibold
    font-size: 16px
    color: #727272
    display: inline-block
    padding-top: 12px
    padding-bottom: 12px
    width: 50%
    border-bottom: 4px solid #E5E5E5
    cursor: pointer
    &.selected
      cursor: auto
      color: #8EC349
      border-color: #8EC349

  .link
    cursor: pointer
    text-decoration: underline

  /*
  /*
  /*
  /* chevron

  .chevron
    position: absolute
    border-color: #5C5C5C
    &::before
      border-style: solid
      border-width: 0.1em 0.1em 0 0
      border-color: #5C5C5C
      content: ''
      display: inline-block
      position: absolute
      height: 0.34em
      width: 0.35em
      transform: rotate(-45deg)
      vertical-align: center
    &.down:before
      transform: rotate(135deg)

  /* chevron
  /*
  /*
  /*
  /* placeholder styling

  input
    &::placeholder
      font-family: notoSans_regular
      font-size: 16px
      color: #BFBFBF
    &::-webkit-input-placeholder
      /* Chrome
      font-family: notoSans_regular
      font-size: 16px
      color: #BFBFBF
    &:-ms-input-placeholder
      /* IE 10+
      font-family: notoSans_regular
      font-size: 16px
      color: #BFBFBF
    &::-moz-placeholder
      /* Firefox 19+
      font-family: notoSans_regular
      font-size: 16px
      color: #BFBFBF
    &:-moz-placeholder
      /* Firefox 4 - 18
      font-family: notoSans_regular
      font-size: 16px
      color: #BFBFBF

  /* placeholder (label) styling
  /*
  /*
  /*
  /* input checkbox radio customize

  .checkbox-custom, .radio-custom
    opacity: 0
    position: absolute

  .checkbox-custom, .checkbox-custom-label, .radio-custom, .radio-custom-label
    display: inline-block
    vertical-align: middle
    margin: 3px 20px 5px 0

  .checkbox-custom-label, .radio-custom-label
    position: relative

  .checkbox-custom + .checkbox-custom-label:before, .radio-custom + .radio-custom-label:before
    content: ''
    background: transparent
    border: 1px solid #BFBFBF
    /*box-shadow: inset 0px 2px 8px 0px #BFBFBF;
    display: inline-block
    vertical-align: middle
    width: 14px
    height: 14px
    /*padding: 1px;
    margin-top: -3px
    margin-right: 10px
    text-align: center
    border-radius: 3px
    transition: .3s

  .checkbox-custom
    + .checkbox-custom-label:before
      width: 14px
      height: 14px
      padding: 0 3px 6px 3px
      transform: scale(0.8)
    &:checked + .checkbox-custom-label:before
      box-shadow: none
      background: #8EC349
      padding: 0 3px 6px 3px
      transform: scale(0.8)

  .radio-custom
    + .radio-custom-label:before
      border-radius: 50%
    &:checked + .radio-custom-label:before
      background: #FFF
      box-shadow: inset 0px 0px 0px 3px #8EC349
      border: 1px solid #8EC349

  @font-face
    font-family: notoSans_semibold
    src: url("./assets/font/NotoSansUI-Bold.ttf")

  @font-face
    font-family: notoSans_regular
    src: url("./assets/font/NotoSansUI-Regular.ttf")

  @font-face
    font-family: notoSans_light
    src: url("./assets/font/NotoSansUI-Regular.ttf")

  *
    margin: 0
    padding: 0
    box-sizing: border-box
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0)

  html
    font: normal 16px sans-serif
    color: #555

  // Overlay
  #overlay
    position: fixed
    display: none
    width: 100%
    height: 100%
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(0,0,0,0.5)
    // background-image: url('https://plachold.it/100x100')
    z-index: 5

  #overlay-text
    position: absolute
    top: 50%
    left: 50%
    font-size: 50px
    color: white
    transform: translate(-50%,-50%)
    -ms-transform: translate(-50%,-50%)

  .spinner
    margin: 100px auto
    width: 50px
    height: 40px
    text-align: center
    font-size: 10px
    > div
      background-color: #333
      height: 100%
      width: 6px
      display: inline-block
      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out
      animation: sk-stretchdelay 1.2s infinite ease-in-out
    .rect2
      -webkit-animation-delay: -1.1s
      animation-delay: -1.1s
    .rect3
      -webkit-animation-delay: -1.0s
      animation-delay: -1.0s
    .rect4
      -webkit-animation-delay: -0.9s
      animation-delay: -0.9s
    .rect5
      -webkit-animation-delay: -0.8s
      animation-delay: -0.8s

  @-webkit-keyframes sk-stretchdelay
    0%, 40%, 100%
      -webkit-transform: scaleY(0.4)

    20%
      -webkit-transform: scaleY(1)


  @keyframes sk-stretchdelay
    0%, 40%, 100%
      transform: scaleY(0.4)
      -webkit-transform: scaleY(0.4)

    20%
      transform: scaleY(1)
      -webkit-transform: scaleY(1)
  //

  ul, nav
    list-style: none

  #app #header-menu-list .side-nav-logo
    display: none

  a
    text-decoration: none
    color: inherit
    cursor: pointer
    opacity: 0.9

    &:hover
      opacity: 1

    &.btn
      color: #fff
      border-radius: 4px
      text-transform: uppercase
      background-color: #2196F3
      font-weight: 800
      text-align: center

  hr
    width: 150px
    height: 2px
    background-color: #2196F3
    border: 0
    margin-bottom: 80px

  .scroll-mouse > img
    font-size: 2em
    color: #fff
    -webkit-animation-name: downUp
    -webkit-animation-duration: 2s
    -webkit-animation-iteration-count: infinite
    animation-name: downUp
    animation-duration: 2s
    animation-iteration-count: infinite
    opacity: 1.0
    line-height: 0.4
    display: flex
    justify-content: center
    position: relative
    margin-bottom: 15px

  @-webkit-keyframes downUp
    0%
      top: 0px
    20%
      top: 10px
    40%
      top: 0px
    100%
      top: 0px

  @keyframes downUp
    0%
      top: 0px
    20%
      top: 10px
    40%
      top: 0px
    100%
      top: 0px

  #app .section-two-para
    font-size: 17px
    width: 60%
    margin-top: -5%
    font-family: notoSans_regular

  section
    display: flex
    flex-direction: column
    align-items: center
    padding: 140px 0px 0px 0px

    h3.title
      color: #414a4f
      // text-transform: capitalize
      // font: bold 32px "Open Sans", sans-serif
      font-size: 50px
      font-family: notoSans_regular
      margin-bottom: 35px
      text-align: center
      width: 58%

    p
      max-width: 800px
      text-align: center
      margin-bottom: 35px
      padding: 0 20px
      line-height: 2

  @media (max-width: 1000px)
    section
      padding: 100px 50px 0

  @media (max-width: 600px)
    section
      padding: 80px 30px

  ul.grid
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center

  /*-------------
   * 	Header
   *-------------

  header
    /*position: absolute;
    position: fixed
    top: 0
    left: 0
    z-index: 2
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    color: #333
    font-weight: bolder
    padding: 35px 40px 0

    h2
      font-family: "Quicksand", sans-serif

    nav
      display: flex

      li
        margin: 0 15px
        padding-top: 5px

        &:first-child
          margin-left: 0

        &:last-child
          margin-right: 0

    .multi-lang-nav-active
      padding: 5px 15px
      background: #BFBFBF
      border-radius: 25px
      margin: 0
      color: #FFFFFF

  #app .multi-lang-nav li
    margin: 0px 8px

  @media (max-width: 1000px)
    header
      padding: 20px 50px

  @media (max-width: 700px)
    header
      flex-direction: column

      h2
        margin-bottom: 15px

  /*----------------
   * 	Hero Section
   *----------------

  .hero
    position: relative
    justify-content: center
    min-height: 100vh
    color: #fff
    text-align: center

    .background-image
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-size: cover
      background-color: #2196F3
      z-index: -1

      &:after
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%

        /*background-color: #414a4f;
        opacity: 0.75

    h1
      font: bold 60px "Open Sans", sans-serif
      margin-bottom: 15px

    h3
      font: normal 28px "Open Sans", sans-serif
      margin-bottom: 40px

    a.btn
      padding: 20px 46px

  @media (max-width: 800px)
    .hero
      min-height: 600px

      h1
        font-size: 48px

      h3
        font-size: 24px

      a.btn
        padding: 15px 40px

  /*--------------------
   * 	Our Work Section
   *---------------------

  .оur-work
    background-color: #fff

  .our-work .grid li
    // padding: 15px
    height: 550px
    border-radius: 3px
    background-clip: content-box
    background-size: cover
    background-position: center

    /*background-color: #eee;
    &.small
      flex-basis: 40%

    &.large
      flex-basis: 60%
      text-align: left

  @media (max-width: 1000px)
    .our-work .grid li
      &.small, &.large
        flex-basis: 100%

  /*----------------------
   * 	Features Section
   *----------------------

  .features
    background-color: #f7f7f7

    .grid li
      padding: 0 30px
      flex-basis: 33%
      text-align: center

      i
        font-size: 50px
        color: #2196F3
        margin-bottom: 25px

      h4
        color: #555
        font-size: 20px
        margin-bottom: 25px

      p
        margin: 0

  @media (max-width: 1000px)
    .features .grid li
      flex-basis: 70%
      margin-bottom: 65px

      &:last-child
        margin-bottom: 0

  @media (max-width: 600px)
    .features .grid li
      flex-basis: 100%

  /*--------------------
   * 	Reviews Section
   *--------------------

  .reviews
    /*background-color: #fff;
    background-color: #F5F5F5

    .quote
      text-align: center
      width: 50%
      font-size: 18px
      font-weight: 300
      line-height: 1.5
      margin-bottom: 20px
      padding: 0

    .author
      font-size: 18px
      margin-bottom: 50px

      &:last-child
        margin-bottom: 0

  @media (max-width: 1000px)
    .reviews
      .quote
        font-size: 20px

      .author
        font-size: 16px

  /*---------------------
   * 	Contact Section
   *---------------------

  .contact
    background-color: #f7f7f7

    form
      display: flex
      align-items: center
      justify-content: center
      flex-wrap: wrap
      max-width: 800px
      width: 80%

      input
        padding: 15px
        flex: 1
        margin-right: 30px
        font-size: 18px
        color: #555

      .btn
        padding: 18px 42px

  @media (max-width: 800px)
    .contact form input
      flex-basis: 100%
      margin: 0 0 20px 0

  /*-------------
   * 	Footer
   *-------------

  footer
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    color: #fff
    background-color: #414a4f
    padding: 60px 0

    ul
      display: flex
      margin-bottom: 25px
      font-size: 32px

      li
        margin: 0 8px

        &:first-child
          margin-left: 0

        &:last-child
          margin-right: 0

    p
      text-transform: uppercase
      font-size: 14px
      color: rgba(255, 255, 255, 0.6)
      margin-bottom: 10px

      a
        color: #fff

  @media (max-width: 700px)
    footer
      padding: 80px 15px

  /* author: Wesley Chang

  /* date: 2017/05/31

  /* homepage.html - button styling

  .dna-kit-btn-wrapper
    display: inline-block

  .dna-kit-btn
    width: 230px
    font-size: 16px
    background: #eee
    border-radius: 35px
    outline: none
    border: none
    color: white
    padding: 15px 32px
    margin: 10px
    text-align: center
    cursor: pointer

  .get-dna-kit
    background: #9fc72c

  .activate-dna-kit
    background: #5fc5fa

  /* section-one stlying

  .scroll-mouse
    margin-top: 4%
    margin-bottom: 2%

  .section-one-title
    text-align: left
    font-size: 37px
    font-family: notoSans_regular
    color: #333
    line-height: 1.3em
    margin-bottom: 5px
    width: 75%

  .section-one-para
    font-size: 17px
    text-align: left
    color: #333
    font-family: notoSans_light
    width: 69%

  .section-one-btn
    color: #333
    width: 28%
    display: inline-block
    padding: 5px
    margin-left: 20px
    border-radius: 35px
    font-size: 17px
    font-family: notoSans_semibold
    padding-top: .6em

    &:nth-child(odd)
      color: #FFFFFF
      border: 1px solid transparent

    &:nth-child(even)
      background: transparent
      border: 1px solid #DADADA

  #app .section-one-btn.how-it-works
    color: white
    background-color: #5AC4FC

  .get-your-kit
    background: #9FC72C

  .our-work .grid li.large.section-one-li-large
    padding-top: 10%

  /* section-two styling
  .category-container
    // border: 1px solid #333
    width: 75%
    margin-bottom: 5%
    display: flex
    flex-wrap: wrap

    // Debug 用
    // *
    //   border: 1px solid #333

    .category-three
      // flex: 3 1 auto
      width: 30%

      &.category-center
        margin: 0px 4%

    .category-title
      text-align: center
      font-family: notoSans_semibold
      font-size: 20px
      margin-bottom: 12%

      &.nutrient
        color: #5AC4FC

      &.sensitivity
        color: #9EC90E

      &.fitness
        color: #A1004F

    .category-content
      display: flex
      justify-content: space-around
      margin-bottom: 8%

      &.two-padding
        padding: 0px 12%

      .category-content-icon
        text-align: center
        min-width: 100px

      .category-content-icon-img
        width: 60px
        height: 60px
        background: salmon
        border-radius: 50%
        margin: 0 auto
        display: flex
        justify-content: center
        align-items: center

        &.vitamin-a
          background-color: #9bb433
          box-shadow: 0px 4px 4px #E0E0E0

        &.vitamin-b2
          background-color: #908980
          box-shadow: 0px 4px 4px #E0E0E0

        &.vitamin-c
          background-color: #8CABB2
          box-shadow: 0px 4px 4px #E0E0E0

        &.vitamin-d
          background-color: #78BDE2
          box-shadow: 0px 4px 4px #E0E0E0

        &.vitamin-e
          background-color: #939A72
          box-shadow: 0px 4px 4px #E0E0E0

        &.calcium
          background-color: #684BA3
          box-shadow: 0px 4px 4px #E0E0E0

        &.iron
          background-color: #755B5C
          box-shadow: 0px 4px 4px #E0E0E0

        &.folic-acid
          background-color: #BCA772
          box-shadow: 0px 4px 4px #E0E0E0

        &.alcohol
          background-color: #BC9FAD
          box-shadow: 0px 4px 4px #E0E0E0

        &.carbohydrates
          background-color: #83674B
          box-shadow: 0px 4px 4px #E0E0E0

        &.fat
          background-color: #908070
          box-shadow: 0px 4px 4px #E0E0E0

        &.salt
          background-color: #B9BAE6
          box-shadow: 0px 4px 4px #E0E0E0

        &.super-taster
          background-color: #936060
          box-shadow: 0px 4px 4px #E0E0E0

        &.sweet-tooth
          background-color: #94A1A8
          box-shadow: 0px 4px 4px #E0E0E0

        &.exercise
          background-color: #998BC9
          box-shadow: 0px 4px 4px #E0E0E0

        &.aerobic
          background-color: #FFEC4A
          box-shadow: 0px 4px 4px #E0E0E0

        &.metabolic
          background-color: #BFB1A9
          box-shadow: 0px 4px 4px #E0E0E0

        &.body
          background-color: #9FA393
          box-shadow: 0px 4px 4px #E0E0E0

        &.obesity
          background-color: #A88A8A
          box-shadow: 0px 4px 4px #E0E0E0

        &.weight-loss
          background-color: #E6F5BD
          box-shadow: 0px 4px 4px #E0E0E0

        &.injury
          background-color: #77A385
          box-shadow: 0px 4px 4px #E0E0E0

        &.recovery
          background-color: #A4AAB4
          box-shadow: 0px 4px 4px #E0E0E0

        img
          width: 40px

      .category-content-icon-para
        font-size: 13px
        font-family: notoSans_regular
        margin-top: 10%

  .section-two-second-title
    font-size: 24px
    font-family: notoSans_semibold
    margin-top: 2%

  .section-two-tabs
    display: flex
    justify-content: center
    width: 732px

    /*border-bottom: 1px solid #D7DBDD;

  .section-two-tab
    cursor: pointer
    padding: 10px 30px
    color: #333
    border-bottom: 3px solid #eee
    text-align: center
    font-size: 18px
    font-family: notoSans_regular

    &.is-tab-selected
      border-bottom-color: #5AC4FC

  .section-two-tab-panel-switcher
    // display: flex
    // width: 600px
    height: 320px
    // background: salmon
    margin-top: 3%
  .tab-panel-one,
  .tab-panel-two,
  .tab-panel-three
    display: flex
    // flex-direction: column
    // flex-wrap: wrap
    // background: #eee
    // flex: 1 100%

  .tab-panel-two,
  .tab-panel-three
    display: none
  .tab-panel-one,
  .tab-panel-three
    width: 650px
  .tab-panel-two,
    width: 400px

  .tab-panel-content
    display: flex
    flex-wrap: wrap
    // justify-content: space-around
    // border: 1px solid #555
    margin: 20px 0
    // padding: 20px 35px
    justify-content: center
    align-items: center
    // flex: 1 100%

  .tab-panel-content div
    // border: 1px solid #333
    // cursor: pointer
    margin: 0 25px 70px 25px
    display: inherit
    padding: 10px
    width: 80px
    height: 80px
    justify-content: center
    -webkit-align-items: center
    -ms-flex-align: center
    align-items: center
    position: relative
    background-color: salmon
    border-radius: 50%

    &.vitamin-a
      background-color: #9bb433
      box-shadow: 0px 4px 4px #E0E0E0

    &.vitamin-b2
      background-color: #908980
      box-shadow: 0px 4px 4px #E0E0E0

    &.vitamin-c
      background-color: #8CABB2
      box-shadow: 0px 4px 4px #E0E0E0

    &.vitamin-d
      background-color: #78BDE2
      box-shadow: 0px 4px 4px #E0E0E0

    &.vitamin-e
      background-color: #939A72
      box-shadow: 0px 4px 4px #E0E0E0

    &.calcium
      background-color: #684BA3
      box-shadow: 0px 4px 4px #E0E0E0

    &.iron
      background-color: #755B5C
      box-shadow: 0px 4px 4px #E0E0E0

    &.folic-acid
      background-color: #BCA772
      box-shadow: 0px 4px 4px #E0E0E0

    &.alcohol
      background-color: #BC9FAD
      box-shadow: 0px 4px 4px #E0E0E0

    &.carbohydrates
      background-color: #83674B
      box-shadow: 0px 4px 4px #E0E0E0

    &.fat
      background-color: #908070
      box-shadow: 0px 4px 4px #E0E0E0

    &.salt
      background-color: #B9BAE6
      box-shadow: 0px 4px 4px #E0E0E0

    &.super-taster
      background-color: #936060
      box-shadow: 0px 4px 4px #E0E0E0

    &.sweet-tooth
      background-color: #94A1A8
      box-shadow: 0px 4px 4px #E0E0E0

    &.exercise
      background-color: #998BC9
      box-shadow: 0px 4px 4px #E0E0E0

    &.aerobic
      background-color: #FFEC4A
      box-shadow: 0px 4px 4px #E0E0E0

    &.metabolic
      background-color: #BFB1A9
      box-shadow: 0px 4px 4px #E0E0E0

    &.body
      background-color: #9FA393
      box-shadow: 0px 4px 4px #E0E0E0

    &.obesity
      background-color: #A88A8A
      box-shadow: 0px 4px 4px #E0E0E0

    &.weight-loss
      background-color: #E6F5BD
      box-shadow: 0px 4px 4px #E0E0E0

    &.injury
      background-color: #77A385
      box-shadow: 0px 4px 4px #E0E0E0

    &.recovery
      background-color: #A4AAB4
      box-shadow: 0px 4px 4px #E0E0E0

  .tab-panel-content div p
    margin-bottom: 0

  .tab-panel-content div
    & img
      width: 40px
      -webkit-user-select: none
      -moz-user-select: none
      -o-user-select: none
      user-select: none
    &.vitamin-c img
      width: 48px
    &.vitamin-e img
      width: 27px
    &.calcium img
      width: 30px
    &.iron img
      width: 45px
    &.folic-acid img
      width: 35px
    &.fat img
      width: 14px
    &.salt img
      width: 24px
    &.sweet-tooth img
      width: 30px
    &.body img
      width: 30px

  .tab-panel-content div img + p
    position: absolute
    left: -10px
    bottom: -35px
    width: 100px
    padding: 0
    line-height: 20px
    font-size: 17px
    font-family: notoSans_semibold

  .our-work
    background: #F5F5F5

  .section-two-fruits
    margin-top: 4%
    width: 540px

    img
      display: inline-block

  // section-one styling
  #app .grid .small
    // background-image: url('./assets/images/desktop-box-app.png')
    background-repeat: no-repeat
    background-size: 920px
    background-position: 115% 109%

  .green-chip,
  .green-chip-two
    // position: absolute
    position: fixed
    pointer-events: none

  .green-chip
    width: 300px
    right: -10%
    top: 16%

  .green-chip-two
    top: 5%
    left: 30%

  // section-four
  #app .reviews
    padding: 100px 0px 80px 0px

  // General part
  // Icon change color and its background-color when click
  #app .bg-blank
    background: #FFFFFF
    box-shadow: 0px 4px 4px #E0E0E0

  .hero.our-work
    background: #FFFFFF
    position: relative
    overflow: hidden

  /* author: Daniel Chiang

  /* date: 2017/06/07

  /* homepage.html - section 2 RWD

  .menu-lang-switcher.current
    display: none

  @media (max-width: 1023px)
    .section-two-tabs
      width: auto
  @media (max-width: 767px)
    .our-work
      padding: 80px 30px 0
    .section-two-second-title
      padding: 20px 0
      margin: 0
      max-width: none
      width: 100vw
      line-height: 1.2em
      // background-color: #FFF

    .section-two-tabs
      border-top: 1px solid #EAEAEA
      background-color: #FFF
      width: 100vw

    .section-two-tab
      padding: 15px 10px
      border-color: #FFF
    .section-two-tab:nth-child(1).is-tab-selected
      color: #5AC4FC
      border-bottom-color: #5AC4FC
    .section-two-tab:nth-child(2).is-tab-selected
      color: #9EC90E
      border-bottom-color: #9EC90E
    .section-two-tab:nth-child(3).is-tab-selected
      color: #A1004F
      border-bottom-color: #A1004F
    .section-two-tab-panel-switcher
      height: auto
      margin-top: 0
    .tab-panel-one,
    .tab-panel-two,
    .tab-panel-three
      width: 100vw

    .tab-panel-one
      background-color: #E9EEF0
    .tab-panel-two
      background-color: #EFF0E9
    .tab-panel-three
      background-color: #EDE7EA

    .tab-panel-content
      justify-content: flex-start

    .tab-panel-content div
      margin: 0 24px 50px 24px
      width: 58px
      height: 58px
      & img
        width: 35px
        -webkit-user-select: none
        -moz-user-select: none
        -o-user-select: none
        user-select: none
      &.vitamin-c img
        width: 40px
      &.vitamin-d img
        width: 30px
      &.vitamin-e img
        width: 20px
      &.calcium img
        width: 25px
      &.iron img
        width: 32px
      &.folic-acid img
        width: 27px
      &.fat img
        width: 11px
      &.salt img
        width: 19px
      &.super-taster img
        width: 30px
      &.sweet-tooth img
        width: 22px
      &.body img
        width: 23px
    .tab-panel-content div img + p
      left: -21px
      bottom: -30px
      font-family: notoSans_semibold
    .section-two-fruits
      display: none

    // Redesign header part styling
    // mainly for desktop version
    #app .menu-lang-switcher.closed
      display: none
      // .english
        // border-radius: 10px

      // .tranditional-chinese, .simplified-chinese
        // display: none

  #app .menu-lang-switcher span.img
    display: none

  nav
    display: block

  .wrapper
    display: flex
    justify-content: space-between
    align-items: center

  .menu-lang-switcher
    display: inline-block
    cursor: pointer

    p
      display: inline-block
      padding: 5px
      width: 60px
      text-align: center
      font-family: notoSans_semibold
      border-radius: 30px

    p.active
      background: #BFBFBF
      color: #FFFFFF
    p.active span
      color: #FFFFFF

  // .label-toggle
  //   display: none

  #app .box
    display: inline-block
    margin: 0
    position: fixed
    right: 0
    left: 0
    z-index: 2
    top: 0
    background: #FFFFFF
    // box-shadow: 0px 4px 10px #E0E0E0

    .header
      margin-left: 100px
      margin-right: 100px
      position: relative

      .navBar
        min-width: 100%

        .logo
          display: inline-block
          margin-top: 10px
          margin-bottom: 5px

        #menu-toggle
          display: none

        ul
          list-style-type: none
          display: inline-block
          float: right
          margin: 0
          // margin-right: 60px

          li.menu-active
            border-bottom: 4px solid #C1D82F

          li
            display: inline-block
            padding: 10px 0px
            margin: 0 10px
            border-bottom: 4px solid transparent

            a
              font-size: 20px
              line-height: 24px
              color: rgba(0, 0, 0, 0.6)
              text-decoration: none
              transition: all 0.2s ease
              cursor: pointer
              padding-bottom: 5px
              position: relative
              font-size: 15px
              font-family: notoSans_semibold

        .lang-switcher
          width: 45.59px
          height: 25px
          background-color: #AE9B68
          text-align: center
          display: inline-block
          vertical-align: middle
          position: absolute
          right: 0
          top: 40px
          overflow: hidden
          -webkit-border-radius: 100px
          -moz-border-radius: 100px
          border-radius: 100px
          padding-top: 2px
          color: #fff
          cursor: pointer

        .lang-switcher-list
          width: 45.59px
          background-color: rgba(174, 155, 104, 0.8)
          text-align: center
          display: inline-block
          vertical-align: middle
          position: absolute
          right: 0
          top: 40px
          overflow: hidden
          -webkit-border-radius: 12px
          -moz-border-radius: 12px
          border-radius: 12px
          color: #fff
          display: none

          span
            display: block
            padding: 2px 0
            cursor: pointer

            &.active
              background-color: #AE9B68

      img
        width: 50px
        // margin: 30px 0
        display: inline-block

  @media (max-width: 1100px) and (min-width: 768px)
    .category-container .category-content .category-content-icon
      min-width: 75px

    .category-container .category-title
      font-size: 18px

    .green-chip, .green-chip-two
      display: none

    .section-one-title
      text-align: left

    .section-one-para
      text-align: left
      // margin: 0 auto
      width: 85%
      margin-bottom: 3%

    #app .grid .small
      background-size: 850px
      background-position: 104% 89%
      height: 510px

    .section-one-btn
      width: 40%

    .hero.our-work + .our-work
      padding-left: 0px
      padding-right: 0px

    .our-work .grid li.large.section-one-li-large
      text-align: left

    .our-work .grid li
      height: 350px

    .section-two-tabs, .section-two-tab
      width: 100%

    section.our-work h3.title
      width: 95%

    // .divider-horizontal
    //   width: 70%

    #app .reviews
      padding: 100px 0px 80px 0px

    .reviews h3.title
      font-size: 40px
      width: 65%

    #app .section-two-para
      width: 90%

    #app .box .header
      margin-left: 20px
      margin-right: 20px
      position: relative
      padding-bottom: 10px

      img
        width: 100px
        position: absolute
        right: 0
        left: 0
        top: 20px
        margin: auto

        // height: 24px
        padding-right: 0
        border: 0

    #app nav
      .wrapper
        display: block

      .label-toggle
        background: linear-gradient(to bottom, #5C5C5C 0%, #5C5C5C 20%, transparent 20%, transparent 40%, #5C5C5C 40%, #5C5C5C 60%, transparent 60%, transparent 80%, #5C5C5C 80%, #5C5C5C 100%)
        cursor: pointer

        // display: block
        height: 20px
        width: 30px
        margin: 20px 0px
        position: relative
        top: 4px
        display: inline-block

      .logo
        padding-top: 5px

      #header-menu-list
        display: none

      #header-menu-list + .lang-switcher
        right: 0
        top: 20px

      .menu-lang-switcher
        margin: 20px 0px
        float: right

  // side bar menu toggle add class for tablet and mobile version
  #app nav #header-menu-list.toggle-side-nav
    float: left
    position: absolute
    display: block
    height: 4800px
    margin: 0px
    left: -10%
    top: -105%
    padding: 10%
    background: #FFFFFF

    li
      display: block
      margin-bottom: 13%

      a
        font-size: 19px

      &.side-nav-logo
        img
          position: relative
          margin-bottom: 20%

  @media (max-width: 1000px) and (min-width: 768px)
    .category-container
      width: 95%

    .category-container .category-content .category-content-icon
      min-width: 75px

    .category-container .category-title
      font-size: 16px

  // mainly for mobile version
  @media (max-width: 767px)
    #app .category-container
      width: 100%

      .category-content
        justify-content: center

        &.two-padding
          padding: 0px
          padding-right: 100px

    #app .category-container .category-three
      // margin: 0px 4%
      width: 100%

      &.category-center
        margin: 0px

    #app .our-work .grid li.large.section-one-li-large
      margin-bottom: 15%

    #app .box .header
      margin: auto
      // padding-bottom: 20px

      img
        width: 50px

        // height: 24px
        position: absolute
        top: 16px
        left: 0
        right: 0
        margin: 0 auto
        border: 0
        padding: 0

    #app nav
      .wrapper
        display: block

      .label-toggle
        margin-left: 20px
        background: linear-gradient(to bottom, #5C5C5C 0%, #5C5C5C 20%, transparent 20%, transparent 40%, #5C5C5C 40%, #5C5C5C 60%, transparent 60%, transparent 80%, #5C5C5C 80%, #5C5C5C 100%)
        cursor: pointer

        // display: block
        display: inline-block
        margin: 20px 15px
        height: 20px
        width: 30px
        position: relative
        top: 4px

      .menu-lang-switcher
        float: right
        margin: 20px 15px
        display: inline-grid

      ul#header-menu-list
        display: none
        margin: 0 auto
        width: 100%
        position: relative
        background: #fff
        margin-top: 50px
        overflow: hidden
        -webkit-transition: max-height 0.5s linear
        -moz-transition: max-height 0.5s linear
        transition: max-height 0.5s linear
        display: none
        text-align: center
        padding-top: 15px

        li
          border-bottom: 2px solid #ffffff
          // color: #AE9B68
          display: block
          font-size: 1.2em
          padding: 1em 0

    #app .box .header .navBar .lang-switcher
      right: 20px
      top: 23px

    #app .menu-lang-switcher

      .english
        border-radius: 10px 10px 0px 0px
        background: #BFBFBF

      .tranditional-chinese, .simplified-chinese
        // display: none
        position: absolute
        background: #BFBFBF
        font-size: 15px
        border-radius: 0px

      .tranditional-chinese
        top: 76%

      .simplified-chinese
        top: 115%
        border-radius: 0px 0px 10px 10px
    #app .menu-lang-switcher.current

      .english
        border-radius: 10px

    #app .menu-lang-switcher .active span img
      display: inline-block
      width: 16px
      position: relative
      top: 0px
      left: 4px

    #app
      .hero.our-work
        padding: 0px

      .green-chip, .green-chip-two
        display: none

      .large.section-one-li-large
        height: 300px

      .grid .small
        background-size: 600px
        background-position: 130% 89%

      .section-one-title
        font-size: 26px
        font-family: notoSans_semibold
        text-align: center
        margin: 0 auto
        margin-bottom: 10%
        width: 100%

      .section-one-para, .scroll-mouse
        display: none

      .section-one-btn
        display: block
        width: 80%
        margin: 0 auto
        font-size: 17px
        font-family: notoSans_semibold
        padding: 10px
        margin-bottom: 4%

      .reviews
        padding: 40px

        h3.title
          font-size: 25px
          font-family: notoSans_regular
          width: 85%

        .dna-kit-btn-wrapper
          text-align: center

          .dna-kit-btn
            font-size: 17px
            font-family: notoSans_semibold
            width: 75%

    #app nav #header-menu-list.toggle-side-nav
      width: 85%
      text-align: left
      padding-left: 20%
      transition: 1s
      left: -10%

      li
        margin-bottom: 0px

        &.side-nav-logo img
          margin-bottom: 0px
          margin-top: 15%

    #app .our-work
      padding-top: 40px

      h3.title
        font-size: 28px
        font-family: notoSans_semibold
        text-align: center
        width: 100%

      .section-two-para
        text-align: left
        padding: 0px
        font-size: 17px
        font-family: notoSans_light
        width: 100%
        display: none

  // For specified mobile version

  /* ----------- iPhone 5 and 5S -----------

  /* Portrait and Landscape
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)
    // #app .category-container .category-content.two-padding
    //   padding-right: 85px

    #app .grid .small
      background-size: 450px
      background-position: 135% 89%

    #app .hero.our-work
      margin-top: -45%

    #app .reviews .dna-kit-btn-wrapper .dna-kit-btn
      width: 95%

    #app nav #header-menu-list.toggle-side-nav
      width: 85%
      text-align: left
      padding-left: 20%

      li
        margin-bottom: 0px

        &.side-nav-logo img
          margin-bottom: 0px
          margin-top: 15%

  /* ----------- iPhone 6 -----------

  /* Portrait and Landscape
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)
    #app .grid .small
      background-size: 540px
      background-position: 130% 89%

    #app .tab-panel-content div
      transform: scale(1.2)
      margin: 10px 33px
      margin-bottom: 56px

    #app .hero.our-work
      margin-top: -20%

    #app nav #header-menu-list.toggle-side-nav
      width: 85%
      text-align: left
      padding-left: 20%

      li
        margin-bottom: 0px

        &.side-nav-logo img
          margin-bottom: 0px
          margin-top: 15%

  /* ----------- iPhone 6+ -----------

  /* Portrait and Landscape
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)
    #app .grid .small
      background-size: 600px
      background-position: 130% 89%

    #app .tab-panel-content div
      transform: scale(1.2)
      margin: 10px 40px 60px 40px

    #app .hero.our-work
      margin-top: -15%

    #app nav #header-menu-list.toggle-side-nav
      width: 85%
      text-align: left
      padding-left: 20%

      li
        margin-bottom: 0px

        &.side-nav-logo img
          margin-bottom: 0px
          margin-top: 15%

  /* ----------- Galaxy S5 -----------

  /* Portrait and Landscape
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)
    #app .grid .small
      background-size: 500px
      background-position: 135% 89%

    #app .tab-panel-content div
      transform: scale(1.2)
      margin: 10px 31px
      margin-bottom: 60px

    #app .hero.our-work
      margin-top: -27%

    #app .tab-panel-content div img + p
      font-size: 16px

    #app nav #header-menu-list
      transition: 1s
      left: -100%

    #app nav #header-menu-list.toggle-side-nav
      width: 85%
      text-align: left
      padding-left: 20%
      transition: 1s
      left: -10%

      li
        margin-bottom: 0px

        &.side-nav-logo img
          margin-bottom: 0px
          margin-top: 15%

  // tablet version
  /* ----------- iPad 3 and 4 -----------
  /* Portrait and Landscape
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)
    #app .grid .small
      background-size: 700px
      background-position: 560% 89%

  // ----------- iPad 3 and 4 -----------
  /* Landscape
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)
    #app .grid .small
      background-size: 900px
      background-position: 96% 10%
      height: 540px

    .section-one-title
      text-align: left

    .section-one-para
      text-align: left
      margin: 0px
      margin-bottom: 5%

    .section-one-btn
      // margin-left: -17%
      width: 35%

    .our-work .grid li.large.section-one-li-large
      text-align: left

</style>
