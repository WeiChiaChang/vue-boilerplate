<template lang="html">
  <div class="box">
    <div class="header">
      <nav class="navBar">
        <nav class="wrapper">
          <div class="logo">
            <!-- :to 用 v-bind 綁定，根據變數動態生成指定語言的路由 -->
            <router-link :to="'/' + switchLanguage">
              <img src="../../assets/images/icon.jpg" alt="">
            </router-link>
          </div>
          <input type="checkbox" id="menu-toggle">
          <!-- <label for="menu-toggle" class="label-toggle"></label> -->
          <ul id="header-menu-list">
            <li class="side-nav-logo">
              <a href="#">
                <img src="../../assets/images/icon.jpg" alt="">
              </a>
            </li>
            <li id="div-about">
              <router-link :to="'/' + switchLanguage + '/about'">
                {{ $t("message.about_tab") }}
              </router-link>
            </li>
            <li id="div-how-it-works">
              <router-link :to="'/' + switchLanguage + '/how-it-works'">
                {{ $t("message.how_it_works_tab") }}
              </router-link>
            </li>
          </ul>
          <div class="menu-lang-switcher current">
            <p class="active">
              <span id="current_language">繁體</span>
              <span><img src="../../assets/images/multi-lang-arrow-down.svg" alt=""></span>
            </p>
          </div>
          <div class="menu-lang-switcher closed">
            <div style="display: inline-block" @click="changeLanguage('en')">
              <router-link :to="'/en' + '/' + this.$route.path.split('/')[2]">
                <p class="option english">
                  <!-- <span>{{switchLanguage}}</span> -->
                  <!-- <router-link :to="switchLanguage"></router-link> -->
                  <span class="language">EN</span>
                  <span class="img"><img src="../../assets/images/multi-lang-arrow-down.svg" alt=""></span>
                </p>
              </router-link>
            </div>
            <div style="display: inline-block" @click="changeLanguage('tc')">
              <router-link :to="'/tc' + '/' + this.$route.path.split('/')[2]">
                <p class="option tranditional-chinese">
                  <span class="language">繁體</span>
                  <span class="img"><img src="../../assets/images/multi-lang-arrow-down.svg" alt=""></span>
                </p>
              </router-link>
            </div>
            <div style="display: inline-block" @click="changeLanguage('sc')">
              <router-link :to="'/sc' + '/' + this.$route.path.split('/')[2]">
                <p class="option simplified-chinese">
                  <span class="language">简体</span>
                  <span class="img"><img src="../../assets/images/multi-lang-arrow-down.svg" alt=""></span>
                </p>
              </router-link>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  </div>
</template>

<script src='./header-component.js'></script>

<style lang="sass">
  .scrollActive
    box-shadow: 0 4px 10px #E0E0E0
    transition-duration: .5s

  .scrollInActive
    box-shadow: 0 4px 10px transparent
    transition-duration: .5s
</style>
