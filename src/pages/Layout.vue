<template>
	<div class="" id="layout">
		<CmHeader></CmHeader>
		<div class="" id="maincontent">
			<transition :name="transitionName" keep-alive>
				<router-view class="window"></router-view>
			</transition>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	#layout{
		overflow-x: hidden;
	    .window {
	    	position: absolute;
	    	width:100%;
	    	left: 0;
	    	transition: all .8s cubic-bezier(.55,0,.1,1);
	    	overflow-x: hidden; 
	  	}
	  	.slide-left-enter, .slide-right-leave-active {
	   		opacity: 0;
	    	-webkit-transform: translate(50px, 0);
	    	transform: translate(50px, 0);
	  	}
	  	.slide-left-leave-active, .slide-right-enter {
	    	opacity: 0;
	    	-webkit-transform: translate(-50px, 0);
	    	transform: translate(-50px, 0);
	  	}
	}
</style>
<script>
	import CmHeader from '@/components/Header'
	export default {
		name: 'layout',
	  data: () => ({
	    transitionName: 'slide-left'
	  }),
	  components: {
	  	CmHeader
	  },
	  beforeRouteUpdate (to, from, next) {
	    let isBack = this.$router.isBack
	    if (isBack) {
	      this.transitionName = 'slide-right'
	    } else {
	      this.transitionName = 'slide-left'
	    }
	    this.$router.isBack = false
	    next()
	  },
		mounted() {

		}
	}
</script>