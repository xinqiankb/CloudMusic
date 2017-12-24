<template>
	<div class="" id="test">
		<div @click="goBack">back></div>
		hello test !
	</div>
</template>
<style lang="scss" scoped>
	#index{}
</style>
<script>
	export default {
		name: 'test',
		data: () => ({

		}),
		methods: {
			goBack() {
				this.$router.goBack()
			}
		}
	}
</script>