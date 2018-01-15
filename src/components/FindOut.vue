<template>
	<div class="body">
		<headtop></headtop>		
		<div class="panel-box">
		<div class="group-list" @click="gotofriend">
			<div class="items-list">
				<div class="items-img">
					<img src="static/img/pengyouquan.png" >
				</div>
				<div class="item-text">朋友圈</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/saoyisao.png" >
				</div>
				<div class="item-text">扫一扫</div>
			</div>
			<div class="items-list">
				<div class="items-img">
					<img src="static/img/yaoyiyao.png" >
				</div>
				<div class="item-text">摇一摇</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/fujin.png" >
				</div>
				<div class="item-text">附近的人</div>
			</div>
			<div class="items-list">
				<div class="items-img">
					<img src="static/img/piaoliu.png" >
				</div>
				<div class="item-text">漂流瓶</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/gouwu.png" >
				</div>
				<div class="item-text">购物</div>
			</div>
			<div class="items-list">
				<div class="items-img">
					<img src="static/img/youxi.png" >
				</div>
				<div class="item-text">
					<div class="text-l">游戏</div>
					<div class="text-r">
						<div class="the-ad">
							绝美游戏，全球首发
						</div>
						<div class="the-icon">
							<img src="static/img/youxi1.png">
							<div class="small-mark"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list">
				<div class="items-img">
					<img src="static/img/xiaochengxu.png" >
				</div>
				<div class="item-text">小程序</div>
			</div>
		</div>
		
	</div>
		
	</div>
</template>
<script>
import headtop from '@/components/Head'
export default {
	 name: 'FindOut',
	 data () {
	    return {
	      msg: '这是发现'
    }
  },
  methods:{
  	gotofriend:function(){
  		this.$router.push({ path:'user/friend'});
  	}
  },
  components: { headtop }
}
</script>
<style lang="scss">
.panel-box{
	width:100%;
	padding-top:5rem;
	padding-bottom: 6rem;
	background:#ebebeb;
	height: 100%;
	overflow-y:scroll;
	.group-list{
		margin:2rem 0;
		background: #fff; 
	}
	.border-b{
		border-bottom: 1px solid #dcdcdc;
	}
	.border-t{
		border-top: 1px solid #dcdcdc;
	}
	.items-list{
		display: flex;
		padding:10px 0;
		margin:0 20px;
		.items-img{
			width: 3rem;
	    	height: 3rem;
	    	margin-right: 2rem;
	    	img{
	    		width: 100%;
	    	}
		}
		.item-text{
			flex:1;
			display:flex;
			font-size: 1.8rem;
			line-height: 3rem;
			.text-l{
				flex:1;
			}
			.text-r{
				font-size:1.2rem;
				color: #999999;
				display: flex;
				.the-ad{
					flex:1;
					margin-right: 0.7rem;
				}
				.the-icon{
					width:2.5rem;
					height: 2.5rem;
					margin-right: 0.7rem;
					position: relative;
					img{
						width:100%;
					}
					.small-mark{
						position: absolute;
						background: #fc4041;
						width: 1.2rem;
						height: 1.2rem;
						border-radius: 10px;
						top:-0.5rem;
						right:-0.7rem;
					}
				}
			}
		}

	}
	.my-info{
		display: flex;
		padding:10px 0;
		margin:0 20px;
	}
	.my-img{
		width:5rem;
		img{
			width: 100%;
		}
	}
	.my-item-text{
		flex:1;
		padding-left:1rem;
		div:nth-child(1){
			font-size: 2rem;
			color:#383838;
			line-height: 3rem;
		}
		div:nth-child(2){
			font-size:1.8rem;
			color:#9a9a9a;
			line-height: 2rem;
		}
	}
	.erweima{
		padding:1.5rem 0 1.5rem 1.5rem;
		img{
			width:2rem;
			height: 2rem;
		}
	}
}
	
</style>