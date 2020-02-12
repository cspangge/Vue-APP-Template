<template>
  <div class="page404">
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <!--          <h1>Oops!</h1>-->
          <h1><span id="firstO" ref="f0">O</span><span id="secondO" ref="s0">o</span>ps!</h1>
          <h2>404 - The Page can't be found<br>
            You will be redirected to Home Page <br>
            in {{ this.countDown }} second <span> {{ this.dot }} </span></h2>
        </div>
        <a @click="$router.push('/')">Go TO Home Page</a>
      </div>
    </div>
<!--    <div id="circle0" ref="circle0"></div>-->
  </div>
</template>

<script>
	export default {
		name: 'page404',
		data () {
			return {
				countDown: 3,
				x: 0,
				dots: ['.', '. .', '. . .', '. . . .', '. . . . .'],
				dot: '',
				x1: 0,
				y1: 0,
			};
		},
		computed: {},
		methods: {},
		created () {
			setInterval(() => {
				this.x = (this.x === 4) ? 0 : ++this.x;
				this.dot = this.dots[this.x];
			}, 400);
			setTimeout(() => {
				//this.$router.push('/');
				console.log(1);
			}, 3000);
		},
		mounted () {
			console.log(this.$refs.f0.getBoundingClientRect().left);
			this.$refs.circle0.style.left = this.$refs.f0.getBoundingClientRect().left + 28 + 'px';
			this.$refs.circle0.style.top = this.$refs.f0.getBoundingClientRect().top + 17 + 'px';
			this.x1 = this.$refs.circle0.style.left;
			this.y1 = this.$refs.circle0.style.top;
			console.log(this.$refs.f0);
		},
	};
</script>

<style scoped>
  .page404 {
    text-align: center;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 300px;
    margin: 0px auto 20px;
    z-index: -1;
  }

  .notfound .notfound-404 h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 236px;
    font-weight: 200;
    margin: 0px;
    color: #211b19;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 0%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound .notfound-404 h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #211b19;
    padding: 20px 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
  }

  .notfound .notfound-404 h2 span {
    position: absolute;
    margin-left: 3px;
  }

  .notfound a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 13px 23px;
    background: #ff6300;
    font-size: 18px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }

  .notfound a:hover {
    color: #ff6300;
    background: #211b19;
  }

  @media only screen and (max-width: 767px) {
    .notfound .notfound-404 h1 {
      font-size: 148px;
    }
  }

  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 {
      height: 148px;
      margin: 0px auto 10px;
    }

    .notfound .notfound-404 h1 {
      font-size: 86px;
    }

    .notfound .notfound-404 h2 {
      font-size: 16px;
    }

    .notfound a {
      padding: 7px 15px;
      font-size: 14px;
    }
  }

  /*@keyframes animX {*/
  /*  0% {left: 0px;}*/
  /*  100% {left: 60px;}*/
  /*}*/

  /*@keyframes animY {*/
  /*  0% {top: 0px;}*/
  /*  100% {top: 60px;}*/
  /*}*/

  /*#circle0 {*/
  /*  width: 0.3rem;*/
  /*  height: 0.3rem;*/
  /*  background-color: rgba(50, 50, 50, 0.3);*/
  /*  border-radius: 50%;*/
  /*  position: absolute;*/
  /*  left: 100px;*/
  /*  top: 100px;*/
  /*  animation: animX 4s cubic-bezier(0.36, 0, 0.64, 1) -2s infinite alternate, animY 4s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;*/
  /*}*/
</style>
