<template>
	<div class="bodyc">
		<headtop></headtop>		
		<div class="panel-address">
		<div class="items-list-address">
			<div class="items-img">
				<img src="static/img/xinpengyou.png" >
			</div>
			<div class="item-text">新的朋友</div>
		</div>

		<div class="items-list-address">
			<div class="items-img">
				<img src="static/img/qunliao.png" >
			</div>
			<div class="item-text">群聊</div>
		</div>

		<div class="items-list-address">
			<div class="items-img">
				<img src="static/img/biaoqian.png" >
			</div>
			<div class="item-text">标签</div>
		</div>


		<div class="items-list-address">
			<div class="items-img">
				<img src="static/img/gongzhonhao.png" >
			</div>
			<div class="item-text">公众号</div>
		</div>


		<div class="items-address-tit">企业号</div>

		<div class="items-list-address">
			<div class="items-img">
				<img src="static/img/qiye.png" >
			</div>
			<div class="item-text">猫头鹰云服务</div>
		</div>

		<ul>
			<li v-for="item in addressbook">
			
				<div class="items-address-tit">{{item.classtype}}</div>
				
				<div class="items-list-add-box" v-for="user in item.ueses">
				<router-link to="address" :to="{name:'userdetail', params: {id:user.userid}}">
					<div class="items-img">
						<img :src="user.userimg"/>
					</div>
					<div class="item-text">{{user.name}}</div>
				</router-link>
				</div>
			</li>
		</ul>
		
	</div>
		
</div>
</template>
<script>
import headtop from '@/components/Head'
export default {
	 name: 'AddressBook',
	 data () {
	    return {
	      addressbook:[
	      {
	      	classtype:'星标好友',
	      	ueses:[{
	      	   		userid:'1',
	      	   		userimg:'static/img/tx01.jpg',
	      	   		name:'老婆最爱的人'
	      		},
	      		{
	      	   		userid:'7',
	      	   		userimg:'static/img/tx07.jpg',
	      	   		name:'最幸福的人'
	      		}]
	      },
	      {
	      	classtype:'B',
	      	ueses:[{
	      	   		userid:'8',
	      	   		userimg:'static/img/tx08.jpg',
	      	   		name:'宝哥'
	      		},
	      		{
	      	   		userid:'9',
	      	   		userimg:'static/img/tx09.jpg',
	      	   		name:'边春雷'
	      		}]

	      },
	      {
	      	classtype:'E',
	      	ueses:[{
	      	   		userid:'10',
	      	   		userimg:'static/img/tx10.jpg',
	      	   		name:'厄尔尼诺'
	      		}]

	      },
	      {
	      	classtype:'E',
	      	ueses:[{
	      	   		userid:'11',
	      	   		userimg:'static/img/tx11.jpg',
	      	   		name:'格林学长'
	      		},
	      		{
	      	   		userid:'12',
	      	   		userimg:'static/img/tx12.jpg',
	      	   		name:'郭嘉'
	      		}]

	      }
	      ]
    }
  },
  components: { headtop }
}
</script>
<style lang="scss">
	.bodyc{
		overflow-y:auto;
		height: 100%;
	}
	.panel-address{
	width:100%;
	padding-top:5rem;
	padding-bottom: 6rem;
	background:#fff;
	.items-address-tit{
		background: #ebebeb;
		height: 2rem;
		line-height: 2rem;
		color:#848484;
		padding-left:20px;
	}
}

.items-list-address,
.items-list-add-box a{
	color:#2a2a2a;
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

}
</style>