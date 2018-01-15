<template>
	<div class="body">
	<headtop></headtop>
	<div class="panel-index">
		<div class="pcicon-top">
			<span class="icon-pc"></span>
			<span class="login-text">Windows微信已登录，手机通已关闭</span>
		</div>
	<div class="contlist" v-for="item in getChatList" 
		v-bind:class="{toplist: item.topper}">
	 <router-link to="address" :to="{name:'detail', params: {id:item.userid}}">
			<div class="index-item-list">
				<div class="index-list-img">
					<img v-bind:src="item.userimg">
				</div>
				<div class="index-list-text">
					<div class="list-name">
						<span>{{item.name}}</span>
						<span>{{item.lasttime}}</span>
					</div>
					<div class="list-text-c">
						{{item.lasttext}}
					</div>
				</div>
			</div>
		   </router-link>
		</div>

	</div>

	</div>
	
</template>

<script>

import headtop from '@/components/Head'
export default {
	 name: 'WxIndex',
	 data () {
	    return {
	      chatList:[
	      {
	      	userid: '1',
	      	topper: true,
	      	name: '老婆 最爱的人',
	      	lasttime: '晚上6:18',
	      	lasttext: '别整那些没用的 赶紧回家',
	      	userimg: 'static/img/tx01.jpg'
	      },
	       {
	       	userid:'2',
	       	topper:false,
	      	name:'曹佳',
	      	lasttime:'晚上6:05',
	      	lasttext:'文案改一下',
	      	userimg:'static/img/tx02.jpg'
	      },{
	       	userid:'3',
	       	topper:false,
	      	name:'刘老师',
	      	lasttime:'早上10:22',
	      	lasttext:'微课教程已经发布了',
	      	userimg:'static/img/tx03.jpg'
	      },
	       {
	       	userid:'4',
	       	topper:false,
	      	name:'刘泽华',
	      	lasttime:'晚上8:40',
	      	lasttext:'小杰，我已经到家了',
	      	userimg:'static/img/tx04.jpg'
	      },{
	      	userid:'5',
	      	topper:false,
	      	name:'太乙真人',
	      	lasttime:'早上11:40',
	      	lasttext:'朋友圈清人了',
	      	userimg:'static/img/tx05.jpg'
	      },{
	      	userid:'6',
	      	topper:false,
	      	name:'小鬼开路',
	      	lasttime:'下午14:20',
	      	lasttext:'[视频聊天]',
	      	userimg:'static/img/tx06.jpg'
	      },{
	      	userid:'7',
	      	topper:true,
	      	name:'最幸福的人',
	      	lasttime:'下午15:12',
	      	lasttext:'吃饭了吗？',
	      	userimg:'static/img/tx07.jpg'
	      }
	      ]
    }
  },
   components: { headtop },
   computed:{
	   	// 计算属性的 getter
	    getChatList:{
	    	get:function () {
			//根据聊天置顶排序
	    	return this.chatList.sort((function(){
			    	return function(a,b){
				        var value1 = a.topper;
				        var value2 = b.topper;
				        return value2 - value1;
						}
					}()))

	   		}
	    }

   }
}
</script>

<style lang="scss">
	//@import '../assets/theme/default/wchar.css'; 
.panel-index{
	width:100%;
	height: 100%;
	overflow-y:auto;
	padding-top:5rem;
	padding-bottom: 6rem;
	background:#f3f2f7;
	.pcicon-top{
		background: #f5f5f5;
		line-height: 5rem;
		border-bottom:1px solid #d9d9db;
		text-align: left;
	}
}
.login-text{
	color:#595959;
	margin-left: 20px;
	line-height: 5rem;
	font-size:1.6rem;
}
.icon-pc{
	margin-left: 22px;
	font-size: 30px;
	color:#78797b;
}
.toplist,
.contlist{
	width: 100%;
	margin: 0 auto;
}
.contlist{
	background: #fff;
}
.toplist{
	background: #f3f2f7;
}
.index-item-list{
	display: flex;
	padding:15px 20px;
	border-bottom:1px solid #d9d9db;
	.index-list-img{
		width: 5rem;
		height: 5rem;
		img{
			width: 100%;
		}
	}
	.index-list-text{
		flex:1;
		width: 100%;
		padding-left:1rem;
		.list-name{
			display: flex;
			line-height: 2.5rem;
			span:nth-child(1){
				font-size: 2rem;
				color:#363638;
				display: block;
				text-align: left;
				flex:1;
			}
			span:nth-child(2){
				font-size: 1.8rem;
				color:#939297;
				display: block;
				padding-left: 1rem;

			}
		}
		.list-text-c{
			font-size: 1.8rem;
			color:#939297;
			line-height: 2.5rem;
			text-align: left;
		}
	}
}



/* .items-list-address{
	display: flex;
	padding:10px 0px;
	margin:0 20px;
	border-bottom: 1px solid #dcdcdc;
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
		font-size: 1.8rem;
		line-height: 3rem;
	}

} */


</style>