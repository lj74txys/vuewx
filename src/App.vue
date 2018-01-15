<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fades" :enter-active-class="enter" :leave-active-class="leave">
      <router-view class="sub-page"/>
    </transition>

    <footermenu></footermenu>
  </div>
</template>

<script>

import footermenu from '@/components/FooterMenu'
export default {
  name: 'app',
  components: { footermenu },
  data(){
    return{
      enter:'',
      leave:''
    }
  },
   watch:{
    $route(to,from){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if (toDepth === fromDepth) {
            this.enter = '';
            return false;
        }
        this.enter = toDepth > fromDepth ? "animated inRight" : "animated inLeft"
        this.leave = toDepth > fromDepth ? "animated outLeft" : "animated outRight"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}
.body{
  height: 100%;
}
.sub-page {
    position: absolute;
    top: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
    max-width: 768px;
    z-index: 1;
}
.animated {
    animation-duration: 0.3s;
    animation-fill-mode: both;
}

.outLeft {
    animation-name: outLeft;
} 
.inRight{
    animation-name: inRight;
} 

.outRight {
    animation-name: outRight;
} 
.inLeft{
    animation-name: inLeft;
} 


@keyframes inRight {
    from {
        opacity: 1;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes outLeft {
    from {
        opacity: 1;
    }
    to {
        opacity: 1;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes inLeft {
    from {
        transform: translate3d(-100%, 0, 0);
        opacity: 1;
    }
    to {
        transform: none;
        opacity: 1;
    }
}

@keyframes outRight {
    from {    
      opacity: 1;
    }
    to {
      transform: translate3d(100%, 0, 0);
      opacity: 1;
    }
}

</style>
