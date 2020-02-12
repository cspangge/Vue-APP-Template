<template>
  <div class="page">
    <div style="width: 100%; height: 1.3rem; position: relative;"></div>
    <transition name="fade">
      <div :class="{header: true, scroll: true}" v-show="isScrollTop">
        <div class="classify-icon" ref="menuImg" @click="rotate()"></div>
        <div class="search-warp">
          <div class="search-icon" style="display: none"></div>
          <div class="text">Pizza Tree Corrimal</div>
        </div>
        <div class="login">Login</div>
      </div>
    </transition>
    <div class="banner-wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/images/banner/1.jpg" alt="" /></div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner/2.jpg" alt="" /></div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner/3.jpg" alt="" /></div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner/4.jpg" alt="" /></div>
        </div>
        <div class="swiper-pagination"></div>
        <!--        <div class="swiper-button-prev"></div>-->
        <!--        <div class="swiper-button-next"></div>-->
      </div>
    </div>
    <div class="nav-banner">
      <ul class="nav-banner-item">
        <li><img src="../../assets/images/nav-banner/menu.svg" alt="" /></li>
        <li>Menu</li>
      </ul>
      <ul class="nav-banner-item">
        <li><img src="../../assets/images/nav-banner/offers.svg" alt="" /></li>
        <li>Offers</li>
      </ul>
      <ul class="nav-banner-item">
        <li><img src="../../assets/images/nav-banner/diy.svg" alt="" /></li>
        <li>DIY</li>
      </ul>
      <ul class="nav-banner-item">
        <li><img src="../../assets/images/nav-banner/points.svg" alt="" /></li>
        <li>Points</li>
      </ul>
    </div>
    <div class="display-products">
      <div class="classify-name color-0">
        <strong>PIZZA</strong>
      </div>
      <div class="hr-line">
        <hr />
      </div>
      <div class="products-row">
        <div class="products-column">
          <div class="product-img">
            <img src="../../assets/images/pizza/pic1.png" alt="" />
          </div>
          <div class="product-title">Pepperoini</div>
          <div class="product-des">
            <div class="product-price">From $5.25*</div>
            <div class="product-energy">2620kJ^</div>
          </div>
          <div class="order-button">SELECT</div>
          <div class="product-tag" style="display: none">
            <img src="../../assets/images/nav-banner/diy.svg" alt="" />
          </div>
          <div class="product-flag">
            <div class="product-flag-text">NEW</div>
          </div>
        </div>
        <div class="products-column side">
          <div class="product-img">
            <img src="../../assets/images/pizza/pic1.png" alt="" />
          </div>
          <div class="product-title">Pepperoini</div>
          <div class="product-des">
            <div class="product-price">From $5.25*</div>
            <div class="product-energy">2620kJ^</div>
          </div>
          <div class="order-button">SELECT</div>
        </div>
      </div>
      <div class="products-row">
        <div class="products-column">
          <div class="product-img">
            <img src="../../assets/images/pizza/pic1.png" alt="" />
          </div>
          <div class="product-title">Sweet Potato, Chicken & Bacon Mess</div>
          <div class="product-des">
            <div class="product-price">From $5.25*</div>
            <div class="product-energy">2620kJ^</div>
          </div>
          <div class="order-button">SELECT</div>
        </div>
        <div class="products-column side">
          <div class="product-img">
            <img src="../../assets/images/pizza/pic1.png" alt="" />
          </div>
          <div class="product-title">Bourbon BBQ chicken wings</div>
          <div class="product-des">
            <div class="product-price">From $5.25*</div>
            <div class="product-energy">2620kJ^</div>
          </div>
          <div class="order-button">SELECT</div>
        </div>
      </div>
    </div>
    <div style="height: 1.3rem;"></div>
  </div>
</template>

<script>
  import Swiper from '../../assets/js/swiper/swiper';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'index',
    data () {
      return {
        rotation: 0,
        isScrollTop: true,
        btnColor: {
          backgroundColor: '#EB1625',
        },
      }
        ;
    },
    methods: {
      rotate () {
        console.log(111);
        if (this.rotation === 0) {
          this.rotation = 90;
          this.$refs.menuImg.style.transform = 'rotate(' + this.rotation + 'deg)';
          // transition-duration: 1s;
          this.$refs.menuImg.style.transitionDuration = 1.5 + 's';
        } else {
          this.rotation = 0;
          this.$refs.menuImg.style.transform = 'rotate(' + this.rotation + 'deg)';
          this.$refs.menuImg.style.transitionDuration = 1.5 + 's';
        }
      },
      eventScrollTop () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 100) {
          if (this.isScroll) {
            this.isScroll = false;
            this.isScrollTop = false;
          }
        } else {
          if (!this.isScroll) {
            this.isScroll = true;
            this.isScrollTop = true;
          }
        }
      },
    },
    beforeCreate () {},
    created () {
    },
    beforeMount () {},
    mounted () {
      this.isScoll = true;
      window.addEventListener('scroll', this.eventScrollTop);
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'fade',
        fade: {
          crossFade: true,
        },
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        iOSEdgeSwipeDetection: true,
        passiveListeners: false,
        autoplay: 3000,
        speed: 3000,
      });
    },
    beforeUpdate () {},
    updated () {},
    beforeDestroy () {},
    destroyed () {
      window.removeEventListener('scroll', this.eventScrollTop);
    },
    activated () {
      this.isScoll = true;
      window.addEventListener('scroll', this.eventScrollTop);
    },
    deactivated () {
      window.removeEventListener('scroll', this.eventScrollTop);
    },
  };
</script>

<style scoped>
  @import "../../assets/css/pages/home.css";
  @import "../../assets/css/swiper/swiper.css";
</style>
