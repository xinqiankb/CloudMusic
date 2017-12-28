<template>
	<div class="" id="music" :style="'transform: translateY('+ translateDis +'px);transition: all 0.3s ease-out;'">
		<div class="carsouel">
			<div class="carsouelBox" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend" :style="'width:' + carsouelWidth + 'px;margin-left: -' + slidedis + 'px'">
				<div class="slideitem" :style="'width:' + carsouelPicWidth + 'px'" v-for="(item, index) in banner">
					<div class="slidepic" :style="'background:url(' + item.item + ') no-repeat center center;background-size: cover'"></div>
				</div>
			</div>
			<div class="slidePoint">
				<span class="points" :style="activitedIndex === index ? 'background-color:red': 'background-color: rgba(199,194,194,0.5)'" v-for="(item, index) in banner"></span>
			</div>
		</div>
		<!-- maincontent -->
		<div class="container">
			<div class="mnav">
				<ul>
					<li>
						<span class="micon"><i class="iconfont icon-radio"></i></span>
						</br>
						<span>私人FM</span>
					</li>					
					<li>
						<span class="micon"><i class="iconfont icon-rili"></i></span>
						</br>
						<span>每日推荐</span>
					</li>					
					<li>
						<span class="micon"><i class="iconfont icon-gedan"></i></span>
						</br>
						<span>歌单</span>
					</li>					
					<li>
						<span class="micon"><i class="iconfont icon-paixingbang"></i></span>
						</br>
						<span>排行榜</span>
					</li>
				</ul>
			</div>
			<!-- musiclist -->
			<div class="musicGroup">
				<div class="recommand">
					<span>推荐歌单<i class="iconfont icon-gengduo"></i></span>
				</div>
				<div class="musicList">
					<div class="musicItem" v-for="(item, index) in data.musicList" :style="(index + 1) % 3=== 2 ? 'margin:0 0.2rem': ''">
						<div class="musicPic" :style="'background: url(' + item.imgUrl + ') no-repeat center center;background-size:cover'"></div>
						<p class="title">{{item.name}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	$color: #d43c33;
	#music{
		transform-origin: center top;
		-webkit-transform-origin: center top;
		-moz-transform-origin: center top;
		-o-transform-origin: center top;
		.carsouel{
			height: 8rem;
			position: relative;
			.slidePoint{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 1.2rem;
				text-align: center;
				&>span{
					display: inline-block;
					width: 0.3rem;
					height: 0.3rem;
					border-radius: 50%;
					margin-right: 0.3rem;
				}
			}
		}
		.carsouelBox{
			overflow: hidden;
			height: 8rem;
			transition: all 0.5s ease-in-out;
			.slideitem{
				height: 8rem;
				display: inline-block;
				&>.slidepic{
					width: 100%;
					height: 100%;
				}
			}
		}
		.container{
			.mnav{
				padding: 0 1.2rem;
				&>ul{
					display: inline-block;
					width: 100%;
					&>li{
						display: table-cell;
						width: 1%;
						text-align: center;
						font-size: 0.6rem;
						.micon{
							display: inline-block;
							width: 2.2rem;
							height: 2.2rem;
							line-height: 2.2rem;
							color: $color;
							border: 1px solid $color;
							border-radius: 50%;
							margin: 0.3rem 0 ;
							&>i{
								font-size: 1.2rem;
							}
						}
					}
				}
			}
			.musicGroup{
				.recommand{
					padding: 0.75rem 0 0.6rem 0;
					margin-top: 0.5rem;
					border-top: 1px solid #e2e2e2;
					&>span{
						font-size: 0.7rem;
						&>i{
							font-size: 0.7rem;
						}
					}
					&>span:before{
						content: '12';
						display: inline-block;
						width: 3px;
						height: 100%;
						background-color: $color;
						color: transparent;
						margin: 0 0.5rem 0 0rem;
					}
				}
				.musicList{
					width: 100%;
					.musicItem{
						display: inline-block;
						width: calc((100% - 0.4rem) / 3);
						.musicPic{
							width: 100%;
							height: 5rem;
						}
						&>p{
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 0.6rem;
							margin: 0.3rem 0;
						}
					}
				}
			}
		}
	}
</style>
<script>
import banner1 from '@/assets/images/music/banner1.png'
import banner2 from '@/assets/images/music/banner2.png'
import banner3 from '@/assets/images/music/banner3.png'
import banner4 from '@/assets/images/music/banner4.png'
import data from './Data/music'
export default{
	name: 'music',
	data: () => ({
		// musicData
		data: data,
		// carsouelBox width
		carsouelWidth: '',
		carsouelPicWidth: '',
		slidedis: 0,
		touchx1: '',
		touchx2: '',
		activitedIndex: 0,
		translateDis: 0, // 页面滚动
		scrollDis: 0,
		// 定时器
		timer: '',
		banner: [
			{
				item: banner1
			}, {
				item: banner2
			}, {
				item: banner3
			}, {
				item: banner4
			}
		]
	}),
	mounted() {
		let that = this
		let swdith = window.screen.width
		let length = this.banner.length
		this.carsouelWidth = length * swdith
		this.carsouelPicWidth = swdith
		// autoSlide
		this.autoSlide(4000)
		// transelate
		let X1 = 0
		let X2 = 0
		let app = document.querySelector('#music')
		let cHeight = app.offsetHeight
		let windowHeight = window.screen.height
		let cTop = app.offsetTop
		let scrollTop = app.scrollTop
		// console.log(cHeight,cTop)
		app.addEventListener('touchstart', function(e) {
			// console.log(e)
			e.preventDefault()
			X1 = e.targetTouches[0].pageY
			// console.log(X1 + 's')
		})
		app.addEventListener('touchmove', function(e) {
			e.preventDefault()
			X2 = e.targetTouches[0].pageY
			// console.log(X2)
			// console.log(X2)
		})
		app.addEventListener('touchend', function(e) {
			let temp = 0;
			// console.log(e)
			let cTop = app.offsetTop
			let movedis = X2 - X1
			console.log(movedis)
			let translateDis = Math.abs(movedis)
			if (movedis > 0) {
				// temp = windowHeight
				// that.scrollDis -= translateDis
				// if (that.scrollDis <= 0) {
				// 	console.log(111)
				// 	translateDis = 0
				// 	that.scrollDis = 0
				// }
				translateDis = that.translateDis / 30
				if (translateDis < 30) {
					translateDis = 0
				}
				that.translateDis = translateDis
			}
			if (movedis < 0) {
				temp = cHeight - 60 - windowHeight
				that.scrollDis += translateDis
				if (that.scrollDis > temp) {
					console.log(2222)
					translateDis = temp
					that.scrollDis = temp
				}
				that.translateDis = -translateDis
			}
			console.log(that.scrollDis, translateDis)
		})
	},
	methods: {
		// carsuoel event
		touchstart(e) {
			clearTimeout(this.timer)
			let x = e.targetTouches[0]['clientX']
			this.touchx1= x
		},
		touchmove(e) {
			if (e) {
				let x = e.targetTouches[0]['clientX']
				this.touchx2 = x
			}
		},
		touchend() {
			let x1 = this.touchx1
			let x2 = this.touchx2
			let length = this.banner.length - 1
			if (x1 && x2) {
				let temp = x2 - x1
				if (temp < 0) {
					this.activitedIndex ++
					if (this.activitedIndex > length) {
						this.activitedIndex = length
					}
				} else {
					this.activitedIndex --
					if (this.activitedIndex < 0) {
						this.activitedIndex = 0
					}
				}
			}
			this.slidedis = this.carsouelPicWidth * this.activitedIndex
			this.autoSlide(4000)
		},
		// outoSlide
		autoSlide(options) {
			let that = this
			this.timer = setTimeout(() => {
				let activitedIndex = that.activitedIndex
				let length = this.banner.length - 1
				activitedIndex ++
				if (activitedIndex > length) {
					activitedIndex = 0
				}
				that.activitedIndex = activitedIndex
				that.slidedis = that.carsouelPicWidth * activitedIndex
				that.autoSlide(4000)
			}, options)
		}
	}
}
</script>