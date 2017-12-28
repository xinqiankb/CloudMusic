<template>
	<div class="" id="index">
<!-- 		<div @click="goBack">back></div>
		hello world !
		<router-link :to="{path: '/main/test'}">jhfghj</router-link> -->
		<div class="slideBar">
			<span class="menuBtn"><a :class="{'topLink': true, 'activitedItem': (avtivited === 'music')}" @click="changeTopBar('music')">音乐</a></span>
			<span class="menuBtn"><a :class="{'topLink': true, 'activitedItem': (avtivited === 'video')}" @click="changeTopBar('video')">视频</a></span>
			<span class="menuBtn"><a :class="{'topLink': true, 'activitedItem': (avtivited === 'eleplat')}" @click="changeTopBar('eleplat')">电台</a></span>
		</div>

		<transition :name="transitionName" keep-alive>
			<router-view class="window"></router-view>
		</transition>
	</div>
</template>
<style lang="scss" scoped>
	#index{
		height: calc(100% - 60px);
		.slideBar{
			position: fixed;
			top: 60px;
			left: 0px;
			padding: 0 1.2rem;
			background-color: #fff;
			z-index: 13;
			.menuBtn{
				display: table-cell;
				width: 1%;
				// line-height: 1.5rem;
				padding: 0.6rem 0;
				font-size: 0.7rem;
				word-spacing: 0.1rem;
				text-align: center;
				overflow-y: hidden;
				&>.topLink{
					padding: 0.5rem 1.2rem;
					border-bottom: 5px solid transparent;
				}
			}
		}
	    .window {
	    	position: absolute;
	    	width:100%;
	    	height: 1000px;
	    	top: 1.9rem;
	    	left: 0;
	    	transition: all .5s cubic-bezier(.55,0,.1,1);
	    	overflow: hidden; 
	    	z-index: 11;
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
	.activitedItem{
		border-bottom: 5px solid red !important;
		color: red;
		transition: all 0.5s ease-in-out;
	}
</style>
<script>
	export default {
		name: 'index',
		data: () => ({
			avtivited: 'music',
			transitionName: 'slide-left'
		}),
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
	  	// mounted() {
	  	// 	let app = document.querySelector('.window')
	  	// 	let cHeight = app.clientHeight
	  	// 	console.log(cHeight)
	  	// },
		methods: {
			goBack() {
				this.$router.goBack()
			},
			// 切换页面
			changeTopBar(index) {
				this.avtivited = index
				this.$router.push({path: '/main/index/' + index})
			}
		}
	}
</script>