<template>
	<div class="header-top-back">
		<div class="icon-goback" @click="goback">
		</div>
		<div>{{mytit}}</div>
		<div class="icon-user"></div>
	</div>
</template>	

<script>
export default {
   name: 'HeadBack',
   props:["mytit"],
   /*data(){
   	return {
   		message:this.message
   	}
   },*/
   methods: {
  	  goback:function(){
  		this.$router.go(-1);
  	}
  }/*,
  created: function (){
  	console.log(this)
  }*/
}
</script>
<style lang="scss">
 .header-top-back{
	position:fixed;
	z-index: 999;
	top:0;
	width: 100%;
	display: -webkit-box;
	background: #393a3f;
	line-height: 5rem;
	color:#fff;
	div:nth-child(1){
		width:15%;
		padding-left: 20px;
		line-height: 5rem;
		font-size:2.4rem;
	 &::before{
	 	border-right:1px solid #222;
	 	padding-right:1rem;
	 }
	}
	div:nth-child(2){
		width:70%;
		line-height: 5rem;
		font-size:2rem;
		padding-left:2rem;
	}
	div:nth-child(3){
		width:15%;
		line-height: 5rem;
		font-size:2.4rem;
	}
}
</style>