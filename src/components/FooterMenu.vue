<template>
	<div class="footer-box" v-show="isshow">
		<div class="f-item" 
			:class="[active=='index'?'active':'']"  
			@click="footermenu('index',$event)" >
			<div :class="[active=='index'?'icon-weixin2':'icon-weixin1']"></div>
			<span>微信</span>
		</div>
		<div class="f-item" 
			:class="{active:active=='address'}" 
			@click="footermenu('address',$event)">
			<div :class="[active=='address'?'icon-tongxunlu2':'icon-tongxunlu1']"></div>
			<span>通讯录</span>
		</div>
		<div class="f-item"  
			:class="[active=='findout'?'active':'']"
			@click="footermenu('findout',$event)">
			<div :class="[active=='findout'?'icon-faxian2':'icon-faxian1']"></div>
			<span>发现</span>
		</div>
		<div class="f-item"  
			:class="[active=='my'?'active':'']"
			@click="footermenu('my',$event)">
			<div :class="[active=='my'?'icon-wo2':'icon-wo1']"></div>
			<span>我</span>
		</div>
	</div>
</template>	

<script>
export default {
	 name: 'FooterMenu',
	 data () {
	    return {
	      active:'index',
	      isshow:true
	    }
	 },
	 methods: {
	    footermenu: function (paramet,event) {
	    	var that=this;
	    	/*switch (paramet){
	    		case 'index':
	    			this.icon1='icon-weixin2';
	    			break;
	    		case 'address':
	    		    this.icon1='icon-weixin1';
	    			break;
	    		case 'findout':
	    		    this.icon1='icon-weixin1';
	    			break;
	    		case 'my':
	    		    this.icon1='icon-weixin1';
	    			break;
	    	}*/
	    	
	    	this.$set(this,'active', paramet);

	    	this.$router.push({ path:paramet });
	    }
	 },
	 watch:{
		$route(){
		 	switch(this.$route.name){
		 		case 'detail':
		 		case 'userdetail':
		 		case 'UserFriend':
		 			this.isshow=false;
		 			break;
		 		default:
		 			this.isshow=true;
		 			break;
		 	}
		}
	},
	created: function () {
		console.log(this.$route.name)
        switch(this.$route.name){
	 		case 'detail':
	 		case 'userdetail':
	 		case 'UserFriend':
	 			this.isshow=false;
	 			break;
	 		case 'WxIndex':
	 			this.isshow=true;
	 			this.active='index';
	 			break;
	 		case 'AddressBook':
	 			this.isshow=true;
	 			this.active='address';
	 			break;
	 		case 'FindOut':
	 			this.isshow=true;
	 			this.active='findout';
	 			break;
	 		case 'My':
	 			this.isshow=true;
	 			this.active='my';
	 			break;
	 		default:
	 			this.active='index';
	 			this.isshow=true;
	 			break;
	 	}
    }
}
</script>
<style lang="scss">
	.footer-box{
	position:fixed;
	bottom:0;
	width:100%;
	height: 6rem;
	background: #fcfcfc;
	display: -webkit-box;
	z-index: 9;
	.f-item{
		width: 25%;
		color:#8f8f8f;
	    div:nth-child(1){
	    	display: -webkit-box;
		    -webkit-box-orient: horizontal;
		    -webkit-box-pack: center;
		    -webkit-box-align: center;
	    	font-size: 3rem;
			height: 4rem;
	    }
	    span{
	    	display: -webkit-box;
		    -webkit-box-orient: horizontal;
		    -webkit-box-pack: center;
		    -webkit-box-align: center;
	    	font-size: 1.4rem;
	    	line-height: 1rem;
	    }
	}
	.active{
		color:#46c11b;
	}
}
</style>