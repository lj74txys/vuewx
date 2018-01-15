<template>
	<div class="header-top">
		<div>微信</div>
		<div class="icon-sousuo"></div>
		<div class="icon-tianjia"></div>
	</div>
</template>	

<script>
export default {
	 name: 'HeadTop',
	 data () {
	    return {
	      msg: '这是微信头部'
    }
  }
}
</script>
<style lang="scss">
	.header-top{
	position:fixed;
	z-index: 999;
	top:0;
	width: 100%;
	display: -webkit-box;
	background: #393a3f;
	line-height: 5rem;
	color:#fff;
	div:nth-child(1){
		width:70%;
		padding-left: 20px;
		font-size:22px;
	}
	div:nth-child(2){
		width:15%;
		line-height: 5rem;
		font-size:2.4rem;
	}
	div:nth-child(3){
		width:15%;
		line-height: 5rem;
		font-size:2.4rem;
	}
}
</style>