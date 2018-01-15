<template>
	<div class="body chat-detail-box">	
		<headback v-bind:mytit="childTit"></headback>

		<div class="deitl-cont">
			<ul id="detailBox">
			<li v-for="item in detailData">
				<div class="chattime"><span>{{item.time}}</span></div>
				<div class="chatBox"
				 v-bind:class="{mySelf: item.userid=='lijie'}">
				 	<router-link to="address" :to="{name:'userdetail', params: {id:item.userid}}">
						<img class="avatarImg"  v-bind:src="item.userimg" />
					</router-link>
					<div class="chatText">
						{{item.textcont}}
					</div>
				</div>
			</li>
			</ul>
		</div>
		<div class="longtap-hint-box" v-if="showhint">
			<div class="tap-iconbox">
				<span class="icon-yuyin2" v-show="backicon"></span>
				<span class="icon-quxiao" v-show="!backicon"></span>
			</div>
			<div class="tap-hint-text" :class="[backicon?'':'bgred']">
			{{tapmovetext}}</div>
		</div>

		<div class="chat-tool">
			<div @click="toggleinput" :class="toggleIcon"></div>
			<div>

				<input type="text" v-model="inputChat" @keyup.13="sumbitChat" v-show="intShowTool">
				<div class="yuyinbtn" @touchstart="touchdown" @touchend="touchup"  @touchmove="movebtn" v-show="!intShowTool">{{touchInput}} </div>
			</div>
			<div class="icon-biaoqing1"></div>
			<div class="icon-gengduo"></div>
		</div>
	</div>
	
</template>

<script>
import headback from '@/components/HeadBack'
export default {
	 name: 'ChatDetails',
	 data () {
	    return {
	      detailData:[],
	      inputChat:'',
	      childTit:'',
	      touchInput:'按住 说话',
	      toggleIcon:'icon-yuyin1',
	      intShowTool:true,
	      showhint:false,
	      screenY:null,
	      backicon:true,
	      tapmovetext:'手指上滑, 取消发送'

    }
  },
  components: { headback },
  methods:{
  	  sumbitChat:function(){
  	  	if(this.inputChat==''){
  	  		return false;
  	  	}
  		var item={
	      	time:new Date().getHours()+':'+new Date().getMinutes(),
	      	userimg:'static/img/lijie.jpg',
	      	textcont:this.inputChat,
	      	userid:'lijie',
	      	chatroomid:'1'
	      }
	     this.detailData.push(item);
	     this.inputChat='';
	     setTimeout(function(){
	     	var h=document.getElementById('detailBox').scrollHeight||document.getElementById('detailBox').scrollHeight;
	      	   document.getElementById('detailBox').scrollTop=h;
	     },100)
  	  },
  	  touchdown:function(event){
  	  	 this.touchInput='松开 结束';
  	  	 this.showhint=true;
  	  	 this.screenY=event.touches[0].screenY;
  	  },
  	  touchup:function(event){
  	  	this.touchInput='按住 说话'
  	  	this.showhint=false;
  	  	this.backicon=true;
  	  	this.tapmovetext='手指上滑, 取消发送';
  	  },
  	  movebtn:function(event){
  	  		// console.log(event.touches[0].screenY)
		let startY=Number(this.screenY) - Number(event.changedTouches[0].pageY);
  	  	if(startY>100){
  	  		this.backicon=false;
  	  		this.tapmovetext='松开手指, 取消发送';
  	  		this.touchInput='松开手指, 取消发送'
  	  	}else{
  	  		this.backicon=true;
  	  		this.tapmovetext='手指上滑, 取消发送';
  	  		this.touchInput='松开 结束';
  	  	}
  	  },
  	  toggleinput:function(){
  	  	
  	  	(this.toggleIcon=='icon-yuyin1')?this.toggleIcon='icon-xiaoxi':this.toggleIcon='icon-yuyin1';
  	  	this.intShowTool?this.intShowTool=false:this.intShowTool=true;
  	  	
  	  }
  },
  created: function () {
	 // console.log(this.$route.params.id)
	 var data=[
	 {
	 	userid:1,
	 	name:'老婆最爱的人',
	 	detailData:[{
	      	time:'09:12',
	      	userimg:'static/img/tx01.jpg',
	      	textcont:'好好学习',
	      	userid:'1',
	      	chatroomid:'1'
	      },
	      {
	      	time:'09:12',
	      	userimg:'static/img/tx01.jpg',
	      	textcont:'天天向上',
	      	userid:'1',
	      	chatroomid:'1'
	      },
	      {
	      	time:'09:14',
	      	userimg:'static/img/lijie.jpg',
	      	textcont:'别整那些没用的 赶紧回家',
	      	userid:'lijie',
	      	chatroomid:'1'
	      }]
	 },{
	 	userid:2,
	 	name:'曹佳',
	 	detailData:[{
	      	time:'09:12',
	      	userimg:'static/img/tx02.jpg',
	      	textcont:'你好，我是曹佳',
	      	userid:'2',
	      	chatroomid:'2'
	      },
	      {
	      	time:'09:14',
	      	userimg:'static/img/lijie.jpg',
	      	textcont:'文案改一下',
	      	userid:'lijie',
	      	chatroomid:'2'
	      }]
	 },{
	 	userid:3,
	 	name:'刘老师',
	 	detailData:[{
	      	time:'09:12',
	      	userimg:'static/img/tx03.jpg',
	      	textcont:'微信课程已经发布了',
	      	userid:'3',
	      	chatroomid:'3'
	      }]
	 },{
	 	userid:4,
	 	name:'刘泽华',
	 	detailData:[{
	      	time:'10:12',
	      	userimg:'static/img/lijie.jpg',
	      	textcont:'小华到家告诉我一声',
	      	userid:'lijie',
	      	chatroomid:'4'
	      },{
	      	time:'11:30',
	      	userimg:'static/img/tx04.jpg',
	      	textcont:'小杰 我已经到家了',
	      	userid:'4',
	      	chatroomid:'4'
	      }]
	 },{
	 	userid:5,
	 	name:'太乙真人',
	 	detailData:[{
	      	time:'10:12',
	      	userimg:'static/img/lijie.jpg',
	      	textcont:'怎么你突然跟我说话了',
	      	userid:'lijie',
	      	chatroomid:'5'
	      },{
	      	time:'11:30',
	      	userimg:'static/img/tx05.jpg',
	      	textcont:'朋友圈清人了',
	      	userid:'5',
	      	chatroomid:'5'
	      }]
	 },{
	 	userid:6,
	 	name:'小鬼开路',
	 	detailData:[{
	      	time:'10:12',
	      	userimg:'static/img/lijie.jpg',
	      	textcont:'开个视频吧',
	      	userid:'lijie',
	      	chatroomid:'6'
	      },{
	      	time:'11:30',
	      	userimg:'static/img/tx06.jpg',
	      	textcont:'聊天时长 03:01',
	      	userid:'6',
	      	chatroomid:'6'
	      }]
	 },{
	 	userid:7,
	 	name:'最幸福的人',
	 	detailData:[{
	      	time:'12:30',
	      	userimg:'static/img/tx07.jpg',
	      	textcont:'吃饭了吗?',
	      	userid:'7',
	      	chatroomid:'7'
	      }]
	 },{
	 	userid:8,
	 	name:'宝哥',
	 	detailData:[]
	 },{
	 	userid:9,
	 	name:'边春雷',
	 	detailData:[]
	 },{
	 	userid:10,
	 	name:'厄尔尼诺',
	 	detailData:[]
	 },{
	 	userid:11,
	 	name:'格林学长',
	 	detailData:[]
	 },{
	 	userid:12,
	 	name:'郭嘉',
	 	detailData:[]
	 }		 
	 ]

	 for(let i=0;i<data.length;i++){
	 	if(data[i].userid==this.$route.params.id){
	 		this.detailData=data[i].detailData;
	 		this.childTit=data[i].name;
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

}
.deitl-cont{
	padding-top:5rem;
	height: 100%;
	overflow: hidden;
	padding-bottom: 4.5rem;
	ul{
		height: 100%;
		overflow-y:auto;
	}
}
.chat-tool{
	position: fixed;
	bottom:0;
	background: #f4f4f4;
	width: 100%;
	display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
	height: 4rem;
	z-index: 999;
	>div:nth-child(1){
		font-size:2.6rem;
		width:15%;
		text-align: center;
	}
	>div:nth-child(2){
		width:60%;
		height: 100%;
		align-items: center;
        justify-content:center;
        display: flex;
		input{
			display: block;
			width: 100%;
			height: 80%;
			line-height: 4rem;
			border-bottom: 1px solid #52b133;
			background: none;
		}
		.yuyinbtn{
        	align-items: center;
        	justify-content:center;
			border:1px solid #ccc;
			height: 3rem;
			line-height: 3rem;
			width: 100%;
			text-align: center;
			font-size: 1.4rem;
			&:active{
				background:#c9c9c9;
			}
		}
	}
	div:nth-child(3){
		width:12.5%;
		font-size:2.6rem;
		text-align: center;
	}
	div:nth-child(4){
		width:12.5%;
		font-size:2.6rem;
		text-align: center;
	}
}
//弹出框
.longtap-hint-box{
	position: absolute;
	top:calc(50% - 7.5rem);
	left:calc(50% - 7.5rem);
	width: 15rem;
	height: 15rem;
	z-index: 10;
	border-radius: 5px;
	background: rgba(55,55,55,.5);
	.tap-hint-text{
		font-size: 1.5rem;
		text-align: center;
		color:#fff;
		line-height: 3rem;
		margin: 1rem;
		height: 3rem;
	}
	.bgred{
		background: rgba(255,0,0,.6);
	}
	.tap-iconbox{
		color:#fff;
		height: 10rem;
		text-align: center;
		span{
			display: inline-block;
			line-height: 11rem;
			font-size: 9rem;
		}
	}
}

//对话框
.chatBox{
	padding:1rem;
	display: -webkit-box;
	.avatarImg{
		width:4rem;
		height:4rem;
		display: block; 
	}
	.chatText{
		display: block;
	    position: relative;
	    margin-left:1rem;
	    padding: 0 10px;
	    max-width: calc(100% - 6rem);
	    min-height: 4rem;
	    line-height: 4rem;
	    font-size: 2rem;
	    color:#353535;
	    text-align: left;
	    word-break: break-all;
	    background-color: #fafafa;
	    border-radius: 4px;
	    border:1px solid #d2d2d2;
	    border-radius: 6px;
	    margin-right: 1rem;
	    &:before {
		    content: " ";
		    position: absolute;
		    top: 11px;
		    right: 100%;
		    border: 8px solid transparent;
		    border-right-color: #fafafa;
		    z-index: 2;
		 }
		 &:after {
		    content: " ";
		    position: absolute;
		    top: 10px;
		    right: 100%;
		    border: 10px solid transparent;
		    border-right-color: #d2d2d2;
		    z-index: 1;
		 }
		
	}
}
.mySelf{
	-webkit-box-direction:reverse;
	-webkit-box-pack:end;
    box-pack:end;
	.chatText{
		background:#b2e281;
		&:before {
		    right: inherit;
		    left: 100%;
		    border-right-color: transparent;
		    border-left-color: #b2e281;

		}
		&:after {
			right: inherit;
		    left: 100%;
		    border-right-color: transparent;
		    border-left-color: #d2d2d2;
		}
	}
}
.chattime{
	margin: 7px 0;
    text-align: center;
	span{
		display: inline-block;
	    padding: 0.2rem 2rem;
	    font-size: 1.6rem;
	    color: #fff;
	    border-radius: 2px;
	    background-color: #d4d4d4;
	}
}


</style>