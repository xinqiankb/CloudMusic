import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'

// 定义go方法
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}
// Router.prototype.go = function () {
//   this.isBack = false
// }

Vue.use(Router)

const router = new Router({routes})

router.beforeEach((to, from, next) => {
	console.log(router.isBack)
	next()
})

export default router
