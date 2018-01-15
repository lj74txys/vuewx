<template>
	<div class="chat-detail-box">	
		<headback v-bind:mytit="friendData.title"></headback>
		<div class="friend-box" @touchstart="touchdown" @touchend="touchup"  @touchmove="movebtn" 
		 :style="{transform: 'translate3d(0,' + transTop + 'px,0)'}">
			<div class="friend-top-box">
				<img class="friend-top-bgimg" src="static/img/fridend_bg.png" >
				<div class="touxiang-box">
					<img src="static/img/lijie.jpg" alt="">
					<span>猫头鹰</span>
				</div>
			</div>
		
			<div class="friend-item-box">
				<div class="friend-left-img"><img src="static/img/tx01.jpg" alt=""></div>
				<div class="friend-right-cont">
					<div class="friend-tit">李杰</div>
					<div class="friend-text">
						这是新的呼唤这是爱的奉献，这是人间的清风
					</div>
					<div class="friend-ima-box">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="friend-item-box">
				<div class="friend-left-img"><img src="static/img/tx01.jpg" alt=""></div>
				<div class="friend-right-cont">
					<div class="friend-tit">李杰</div>
					<div class="friend-text">
						这是新的呼唤这是爱的奉献，这是人间的清风
					</div>
					<div class="friend-ima-box">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="friend-item-box">
				<div class="friend-left-img"><img src="static/img/tx01.jpg" alt=""></div>
				<div class="friend-right-cont">
					<div class="friend-tit">李杰</div>
					<div class="friend-text">
						这是新的呼唤这是爱的奉献，这是人间的清风
					</div>
					<div class="friend-ima-box">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
						<img src="static/img/lijie.jpg" alt="">
					</div>
				</div>
			</div>
			
		</div>

	</div>
	
</template>

<script>
import headback from '@/components/HeadBack'
export default {
	 name: 'UserFriend',
	 data () {
	    return {
	      friendData:{
	      	 title:'朋友圈'
	      },
	      transTop:'0',
	      screenY:'0'

    }
  },
  components: { headback },
  methods:{
 	movebtn:function(event){
 		this.transTop=event.touches[0].screenY - this.screenY;
 		console.log(this.transTop)
 	},
  	touchdown:function(event){
  	  	this.screenY=event.touches[0].screenY;
  	},
  	touchup:function(event){
  		this.transTop=0;
  	}
  },
  created: function () {
	 

  }
}

</script>
<style lang="scss">
   // transform: translate3d(0,100px,0);
.friend-box{
	// transform: translate3d(0,100px,0);
	transition: transform .3s;
	background: #f8f8f8;
	height: 100%;
	overflow-y: auto;
	.friend-top-box{
		position: relative;
		height: 30rem;
		width: 100%;
		margin-bottom: 2rem;
		img.friend-top-bgimg{
			width: 100%;
			height: 100%;
		}
		.touxiang-box{
			position: absolute;
			width: 6.5em;
			height: 6.5rem;
			bottom: -2rem;
			right:1.5rem;
			img{
				width: 100%;
				padding:3px;
				background: #fff;
				box-sizing:border-box;
				border:1px solid #bfbabe;
			}
			span{
				position: absolute;
				left:-5.5rem;
				top:2rem;
				color:#fff;
				font-size: 1.8rem;
				font-weight: bold;
			}
		}
	}

	.friend-item-box{
		padding:1.5rem;
		display: flex;
		.friend-left-img{
			width:4.5rem;
			margin-right: 1.5rem;
			img{width: 100%;}
		}
		.friend-right-cont{
			flex:1;
		}
		.friend-tit{
			color:#5b719d;
			font-size: 1.8rem;
		}
		.friend-text{
			color:#2b2b2b;
			font-size: 1.6rem;
		}
		.friend-ima-box{
			img{
				width: 30%;
			    height: auto;
			    display: inline-block;
			}
		}
	}
}

</style>