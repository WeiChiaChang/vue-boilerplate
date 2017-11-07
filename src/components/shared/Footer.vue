<template lang="html">
  <div class="nav-footer">
    <div class="nav-footer-content">
      <div class="nav-links">
      </div>
      <div class="footer-divider-horizontal"></div>
      <div class="nav-copyright">
        <div class="set">
          <div><img class="prenetics" src="../../assets/images/icon.jpg" alt=""></div>
          <div class="copyright notoSans-regular rgb-114-114-114">MIT License by WeiChiaChang</div>
        </div>
        <div class="set notoSans-regular rgb-57-57-57 about-prenetics">
          <span class="footer-divider-dynamic"></span>
          <a target="_blank" href="https://github.com/WeiChiaChang"><span class="set-link privacy-policy">WeiChiaChang</span></a>
          <span class="footer-divider-dynamic"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.set .prenetics 
  width: 50px
a
  text-decoration: inherit
  color: inherit
  cursor: pointer

.notoSans-semibold
  font-family: notoSans_semibold

.notoSans-regular
  font-family: notoSans_regular

.nav-footer-content
  margin: 0 7%

.nav-links, .nav-copyright
  margin-top: 25px
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: flex
  -webkit-justify-content: space-between
  -moz-justify-content: space-between
  justify-content: space-between
  -webkit-flex-wrap: wrap
  -moz-flex-wrap: wrap
  flex-wrap: wrap

.footer-divider-horizontal
  border-bottom: 1px solid #DDD
  margin: 0 auto

.footer-divider-dynamic, .footer-divider-vertical
  border-right: 1px solid #DDD
  margin-left: 20px
  margin-right: 20px

.set
  margin-bottom: 40px
  display: inline-block
  vertical-align: top
  flex: 1 1 auto
  &.img-logo
    flex: 4 1 auto
  &.follow-us
    display: none

.set-title
  white-space: nowrap
  font-size: 12px

.set-link
  white-space: nowrap
  margin-top: 9px
  cursor: pointer
  font-size: 13px
  &:hover
    text-decoration: underline

.apps-link
  flex: 0 1 auto

.rgb-114-114-114
  color: #727272

.rgb-57-57-57
  color: #393939

.share
  margin-right: 10px
  width: 25px

.app
  width: 135px

.prenetics
  width: 170px

.copyright
  margin-top: 3px
  font-size: 13px

.about-prenetics
  text-align: right

.footer-divider-dynamic
  &:nth-child(1), &:nth-last-child(1)
    display: none

@media only screen and (max-device-width: 1024px)
  .nav-footer-content
    margin: 0 auto
    width: 450px
    text-align: center
  .nav-links
    display: block
  .set
    display: block
    &.follow-us
      display: inline-block
  .set-title
    font-size: 15px
  .set-link
    font-size: 14px
    color: #393939
    padding-top: 15px
    padding-bottom: 12px
    &.img
      margin-top: 0
      padding-bottom: 0
  .set.rwd-set
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: flex
    -webkit-flex-flow: row wrap
    -moz-flex-flow: row wrap
    flex-flow: row wrap
    -webkit-align-content: space-between
    -moz-align-content: space-between
    align-content: space-between
    -webkit-justify-content: space-between
    -moz-justify-content: space-between
    justify-content: space-between
  .rwd-set
    .set-title
      width: 100%
    .set-link
      background-color: #E6E6E6
      border-radius: 5px
      width: 100%
      text-decoration: none
      &.rwd-group
        width: 49%
  .share
    margin-left: 10px
    margin-right: 10px
    width: 45px
  .app
    margin-left: 10px
    margin-right: 10px
    width: 150px
  .footer-divider-horizontal
    margin-top: -5px
    width: 100%
  .nav-copyright
    display: block
    .set:nth-child(1)
      margin-bottom: 25px
    .copyright
      width: 260px
      margin: 3px auto
  /*
  /*.footer-divider-vertical {
   *	border-right: 1px solid #DDD;
   *	margin-left: 20px;
   *	margin-right: 20px;
   *}
  /*
  /*.set .footer-divider-vertical {
   *  display: none;
   *}
  .set span.set-link
    display: block
    margin-top: 0
    margin-bottom: 20px
  .about-prenetics
    text-align: center
    span.set-link
      margin-bottom: 0
      text-decoration: none
  .footer-divider-dynamic
    border-right: none
    border-bottom: 1px solid #DDD
    margin: 0 auto
    display: block
    width: 100%
    &:nth-child(1), &:nth-last-child(1)
      display: block

@media screen and (max-device-width: 767px)
  .nav-footer-content
    width: 85%
  .share
    margin-left: 8px
    margin-right: 8px
    width: 45px
  .app
    width: 47%
    &:nth-child(1)
      margin-left: 0
      margin-right: 7px
    &:nth-child(2)
      margin-left: 7px
      margin-right: 0
  .nav-copyright .copyright
    width: 260px
  .set.img-logo
    /*display: none;
    flex: 1 1 auto

/* author: wesleyChang
 * date: 2017/06/02

.nav-footer
  margin-top: 4%
</style>
