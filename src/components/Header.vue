<template>
	<div class="" id="headers">
		<div class="navbar">
			<!-- <icon name="bars"></icon> -->
			<i class="iconfont icon-nav sidenavBarbtn"></i>
			<div class="topcenterBar">
				<i class="iconfont icon-music"></i>
				<i class="iconfont icon-wangyiyunyinle"></i>
				<i class="iconfont icon-member"></i>
			</div>
			<i class="iconfont icon-search cm-search"></i>
		</div>
	</div>
</template>
<style lang="scss">
	#headers{
		height: 60px;
		width: 100%;
		overflow-y: hidden;
		.navbar{
			height: 100%;
			line-height: 60px;
			padding:0 0.5rem;
			text-align: center;
			background-color: #d43c33;
			&>.sidenavBarbtn{
				font-size: 1.4rem;
				color: #fff;
				float: left;
			}
			.topcenterBar {
				display: inline-block;
				color: #fff;
				margin: 0 auto;
				height: 60px;
				&>i{
					display: inline-block;
					margin:0 0.6rem;
					font-size: 1.4rem;
				}
				&>i:first-child{
					// margin-left: -0.6rem;
				}
			}
			&>.cm-search{
				float: right;
				font-size: 1.4rem;
				color: #fff;
			}
		}
	}
</style>
<script>
export default {
	name: 'headers',
	data: () => ({

	}),
	moutend() {
		
	}
}
</script>