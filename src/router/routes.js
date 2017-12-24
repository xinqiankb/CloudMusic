import Layout from '@/pages/Layout'
const routes = [
  {
    // center
    path: '/main',
    name: 'app',
    redirect: '/main/index/music',
    component: Layout,
    children: [
      {
        path: '/main/index',
        name: 'index',
        component: resolve => {
          require(['@/pages/center/index'], resolve)
        },
        children: [
          {
            path: '/main/index/music',
            name: 'music',
            component: resolve => {
              require(['@/pages/center/children/music'], resolve)
            }
          }, {
            path: '/main/index/video',
            name: 'video',
            component: resolve => {
              require(['@/pages/center/children/video'], resolve)
            }
          }, {
            path: '/main/index/eleplat',
            name: 'eleplat',
            component: resolve => {
              require(['@/pages/center/children/eleplat'], resolve)
            }
          }
        ]
      }
    ]
  }, 
  // MyMusic
  {
    path: '/list',
    name: 'list',
    component: Layout,
  },
  // guide
  {
  	path: '/',
  	name: 'guide',
    component: resolve => {
      require(['@/pages/guide'], resolve)
    }
  }
]

export default routes