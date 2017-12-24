<template>
	<div class="" id="guide" :style="'background-image: url(' + bgc + ')'">
		<div class="entryBtn">
			<router-link class="try button" :to="{path: '/main'}">立即体验</router-link>
			<router-link class="entry button" :to="{path: '/login'}">马上登录</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	#guide{
		// position: relative !important;
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		.entryBtn{
			position: absolute;
			bottom: 50px;
			left: 0;
			width: 100%;
			text-align: center;
			.try{
				margin-left: 1rem;
			}
			.button{
				color: #000;
				text-decoration: none;
				font-size: 14px;
				display: inline-block;
				background: none;
				border: none;
				border-radius: 0;
				outline: none;
				width: 30%;
				height: 36px;
				line-height: 36px;
				border: 1px solid #000;
				border-radius: 5px;
				margin-right: 1rem;
				background-color: rgba(255,255,255,0.8);
			}
		}
	}
</style>
<script>
  import bgc from '@/assets/images/bgc4.jpg'
	export default {
		name: 'guide',
		data: () => ({
			bgc: bgc
		}),
		mounted() {
      this.$router.isBack = false
		},
		methods: {

		}
	}
</script>