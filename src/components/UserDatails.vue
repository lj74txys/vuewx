<template>
	<div class="chat-detail-box">	
		<headback v-bind:mytit="userData.name"></headback>

		<div class="usdeitl-box">
			<div class="user-detail-list">
				<div><img :src="userData.userimg"></div>
				<div>
					<div>{{userData.name}}<span :class="[userData.sex=='man'?'icon-nan':'icon-nv']"></span></div>
					<div>微信号: <span>{{userData.userid}}</span></div>
					<div>昵称: <span>{{userData.nickname}}</span></div>
				</div>
				<div>
					<span class="icon-star-full" v-if="userData.topper"></span>
				</div>
			</div>

			<div class="user-datail-item-box active-on">
				<div class="user-detail-item ">
					<div>标签</div>
					<div>{{userData.tag}}</div>
				</div>
			</div>

			<div class="user-datail-item-box">
				<div class="user-detail-item b-b1">
					<div>地区</div>
					<div>{{userData.address}}</div>
				</div>
				<div class="user-detail-item b-b1 uers-imgs-box active-on">
					<div>个人相册</div>
					<div>
						<img v-for="img in userData.friendsimg" :src="img" >
					</div>
				</div>
				<div class="user-detail-item">
					<div>更多</div>
					<div></div>
				</div>
			</div>

			<div class="chat-btn msgbtn" @click="gotomsg">发消息</div>
			<div class="chat-btn">视频聊天</div>
			
		</div>

	</div>
	
</template>

<script>
import headback from '@/components/HeadBack'
export default {
	 name: 'UserDetails',
	 data () {
	    return {
	      userData:{
	      	sex:'woman',
	      	userid:'1',
	      	name:'老婆 最爱的人',
	      	nickname:'Candy',
	      	userimg:'static/img/tx01.jpg',
	      	address:'辽宁 朝阳',
	      	topper:true,
	      	tag:'老婆',
	      	friendsimg:[
	      		'static/img/tx01.jpg',
	      		'static/img/tx01.jpg',
	      		'static/img/tx01.jpg'
	      	]

	      }
    }
  },
  components: { headback },
  methods:{
  	gotomsg:function(){
  		this.$router.push({ path:'/detail/'+this.userData.userid })
  	}
  },
  created: function () {
	 // console.log('111')
	 var data=[
		 {	
		 	userid:'1',
		 	userData:{
		      	sex:'woman',
		      	userid:'1',
		      	name:'老婆 最爱的人',
		      	nickname:'Candy',
		      	userimg:'static/img/tx01.jpg',
		      	address:'辽宁 朝阳',
		      	topper:true,
		      	tag:'老婆',
		      	friendsimg:[
		      		'static/img/tx01.jpg',
		      		'static/img/tx01.jpg',
		      		'static/img/tx01.jpg'
		      	]
		      }
		 },
 		 {	
		 	userid:'2',
		 	userData:{
		      	sex:'woman',
		      	userid:'2',
		      	name:'曹佳',
		      	nickname:'曹佳',
		      	userimg:'static/img/tx02.jpg',
		      	address:'辽宁 朝阳',
		      	topper:false,
		      	tag:'曹佳',
		      	friendsimg:[
		      		'static/img/tx02.jpg',
		      		'static/img/tx02.jpg',
		      		'static/img/tx02.jpg'
		      	]
		      }
		 },
 		 {	
		 	userid:'3',
		 	userData:{
		      	sex:'woman',
		      	userid:'3',
		      	name:'刘老师',
		      	nickname:'刘老师',
		      	userimg:'static/img/tx03.jpg',
		      	address:'辽宁 朝阳',
		      	topper:false,
		      	tag:'',
		      	friendsimg:[
		      		'static/img/tx03.jpg',
		      		'static/img/tx03.jpg',
		      		'static/img/tx03.jpg'
		      	]
		      }
		 },
		 {	
		 	userid:'4',
		 	userData:{
		      	sex:'man',
		      	userid:'4',
		      	name:'刘泽华',
		      	nickname:'刘泽华',
		      	userimg:'static/img/tx04.jpg',
		      	address:'湖南 邵阳',
		      	topper:false,
		      	tag:'小华',
		      	friendsimg:[
		      		'static/img/tx04.jpg',
		      		'static/img/tx04.jpg',
		      		'static/img/tx04.jpg'
		      	]
		      }
		 },
 		 {	
		 	userid:'5',
		 	userData:{
		      	sex:'man',
		      	userid:'5',
		      	name:'太乙真人',
		      	nickname:'太乙真人',
		      	userimg:'static/img/tx05.jpg',
		      	address:'蒙古国',
		      	topper:false,
		      	tag:'',
		      	friendsimg:[
		      		'static/img/tx05.jpg',
		      		'static/img/tx05.jpg',
		      		'static/img/tx05.jpg'
		      	]
		      }
		 },{	
		 	userid:'6',
		 	userData:{
		      	sex:'man',
		      	userid:'6',
		      	name:'李清林',
		      	nickname:'小鬼开路',
		      	userimg:'static/img/tx06.jpg',
		      	address:'湖北 威县',
		      	topper:false,
		      	tag:'李清林',
		      	friendsimg:[
		      		'static/img/tx06.jpg',
		      		'static/img/tx06.jpg',
		      		'static/img/tx06.jpg'
		      	]
		      }
		 },{	
		 	userid:'7',
		 	userData:{
		      	sex:'woman',
		      	userid:'7',
		      	name:'爱颖妈妈',
		      	nickname:'最幸福的人',
		      	userimg:'static/img/tx07.jpg',
		      	address:'辽宁 朝阳',
		      	topper:true,
		      	tag:'阿姨',
		      	friendsimg:[
		      		'static/img/tx07.jpg',
		      		'static/img/tx07.jpg',
		      		'static/img/tx07.jpg'
		      	]
		      }
		 },{	
		 	userid:'8',
		 	userData:{
		      	sex:'man',
		      	userid:'8',
		      	name:'宝哥',
		      	nickname:'至尊宝',
		      	userimg:'static/img/tx08.jpg',
		      	address:'吉林 长春',
		      	topper:false,
		      	tag:'奇热科技',
		      	friendsimg:[
		      		'static/img/tx08.jpg',
		      		'static/img/tx08.jpg',
		      		'static/img/tx08.jpg'
		      	]
		      }
		 },{	
		 	userid:'9',
		 	userData:{
		      	sex:'man',
		      	userid:'9',
		      	name:'边春雷',
		      	nickname:'边春雷',
		      	userimg:'static/img/tx09.jpg',
		      	address:'吉林 长春',
		      	topper:true,
		      	tag:'',
		      	friendsimg:[
		      		'static/img/tx09.jpg',
		      		'static/img/tx09.jpg',
		      		'static/img/tx09.jpg'
		      	]
		      }
		 },{	
		 	userid:'10',
		 	userData:{
		      	sex:'man',
		      	userid:'10',
		      	name:'小峰',
		      	nickname:'厄尔尼诺',
		      	userimg:'static/img/tx10.jpg',
		      	address:'吉林 长春',
		      	topper:true,
		      	tag:'',
		      	friendsimg:[
		      		'static/img/tx10.jpg',
		      		'static/img/tx10.jpg',
		      		'static/img/tx10.jpg'
		      	]
		      }
		 },{	
		 	userid:'11',
		 	userData:{
		      	sex:'man',
		      	userid:'11',
		      	name:'格林学长',
		      	nickname:'格林学长',
		      	userimg:'static/img/tx11.jpg',
		      	address:'吉林 长春',
		      	topper:true,
		      	tag:'',
		      	friendsimg:[
		      		'static/img/tx11.jpg',
		      		'static/img/tx11.jpg',
		      		'static/img/tx11.jpg'
		      	]
		      }
		 },{	
		 	userid:'12',
		 	userData:{
		      	sex:'man',
		      	userid:'12',
		      	name:'郭嘉',
		      	nickname:'郭嘉',
		      	userimg:'static/img/tx12.jpg',
		      	address:'内蒙古 包头',
		      	topper:true,
		      	tag:'',
		      	friendsimg:[
		      		'static/img/tx12.jpg',
		      		'static/img/tx12.jpg',
		      		'static/img/tx12.jpg'
		      	]
		      }
		 }
	 ]


	 for(let i=0;i<data.length;i++){
	 	if(data[i].userid==this.$route.params.id){
	 		this.userData=data[i].userData;
	 		break;
	 	}
	 }

  }
}

</script>
<style lang="scss">

.chat-detail-box{
	background:#ebebeb;
	height: 100%;
	overflow-y:auto;
}
.usdeitl-box{
	padding-top:5rem;
	height: 100%;
	margin:2rem 0;
	.user-detail-list{
		display: flex;
		background: #fff;
		padding: 10px 20px;
		>div:nth-child(1){
			img{
				width:6.6rem;
				height: 6.6rem;
			}
		}
		>div:nth-child(2){
			flex:1;
			color:#7d7d7d;
			font-size:1.6rem;
			padding-left:2rem;
			line-height: 1.8rem;
			>div:nth-child(1){
				font-size:2rem;
				color: #383838;
    			line-height:3rem;
    			span{
    				margin-left:1rem;
    			}
    			.icon-nv{
    				color:#f07259;
    			}
    			.icon-nan{
    				color:#5497ee;
    			}
			}
		}
		>div:nth-child(3){
			.icon-star-full{
				color:#ffbd0c;
				font-size:2.4rem;
			}
		}
		
	}
	.user-datail-item-box{
		background: #fff;
		margin:2rem 0;
		.b-b1{
			border-bottom: 1px solid #dadada;
		}
		.user-detail-item{
			display: flex;
			margin: 0px 2rem;
			line-height:5.2rem;
			div:nth-child(1){	
				font-size: 2rem;
				color:#242424;
				width: 8.6rem;
			}
			div:nth-child(2){
				color:#9e9e9e;
				flex:1;
				font-size: 1.8rem;
			}
		}
		.uers-imgs-box{
			line-height:7rem;
			height: 7rem;
			div:nth-child(2){
				display:flex;
				justify-content:flex-start;
				align-items: center;
				img{
					width: 5.6rem;
					height: 5.6rem;
					display: inline-block;
					line-height: 6rem;
					margin-right:1rem;
				}
			}
			
		}
	}
	.chat-btn{
		line-height: 4.8rem;
		background:#fff;
		border:1px solid #ddd;
		border-radius: 6px;
		margin:1.5rem 1.2rem;
		text-align: center;
		font-size: 2rem;
		color:#434343;
		&:active{
			background: #ccc;
		}
	}
	.msgbtn{
		background:#1aac19;
		color:#fff;
		&:active{
			background:#139712;
		}
	}
	.active-on:active{
		background: #ccc;
	}
	
}

</style>