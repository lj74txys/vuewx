<template>
	<div class="body">
		<headtop></headtop>		
		<div class="panel-box">
		<div class="group-list">
			<div class="my-info">
				<div class="my-img">
					<img src="static/img/tx13.jpg" >
				</div>
				<div class="my-item-text">
					<div>爱永相随</div>
					<div>微信号:l2ly1992</div>
				</div>
				<div class="erweima">
					<img src="static/img/erweima.png">
				</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/qianbao.png" >
				</div>
				<div class="item-text">钱包</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/shoucang.png" >
				</div>
				<div class="item-text">收藏</div>
			</div>
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/xiangce.png" >
				</div>
				<div class="item-text">相册</div>
			</div>
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/kabao.png" >
				</div>
				<div class="item-text">卡包</div>
			</div>
			<div class="items-list">
				<div class="items-img">
					<img src="static/img/biaoqing.png" >
				</div>
				<div class="item-text">表情</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<div class="items-img">
					<img src="static/img/shezhi.png" >
				</div>
				<div class="item-text">设置</div>
			</div>
		</div>
		
		
	</div>
		
	</div>
</template>
<script>
import headtop from '@/components/Head'
export default {
	 name: 'My',
	 data () {
	    return {
	      msg: '这是我的'
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