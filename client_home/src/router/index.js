import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';

Vue.use(VueRouter)

const routes = [
	// 主页ss
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
	// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},






	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},

	
	
		
	
		
	
		
		// 公共课程列表路由
	{
		path: '/public_courses/list',
		name: '/public_courses_list',
		component: () => import('../views/public_courses/list.vue')
	},
	
		// 公共课程详情路由
	{
		path: '/public_courses/details',
		name: '/public_courses_details',
		component: () => import('../views/public_courses/details.vue')
	},
		
		// 私教课程列表路由
	{
		path: '/private_education_courses/list',
		name: '/private_education_courses_list',
		component: () => import('../views/private_education_courses/list.vue')
	},
	
		// 私教课程详情路由
	{
		path: '/private_education_courses/details',
		name: '/private_education_courses_details',
		component: () => import('../views/private_education_courses/details.vue')
	},
			// 购买私教添加路由
	{
		path: '/purchase_private_education/edit',
		name: '/purchase_private_education_edit',
		component: () => import('../views/purchase_private_education/edit.vue')
	},
	
	
		
	
		
		// 遗失物品列表路由
	{
		path: '/lost_items/list',
		name: '/lost_items_list',
		component: () => import('../views/lost_items/list.vue')
	},
	
		// 遗失物品详情路由
	{
		path: '/lost_items/details',
		name: '/lost_items_details',
		component: () => import('../views/lost_items/details.vue')
	},
		
		// 健身器械列表路由
	{
		path: '/fitness_equipment/list',
		name: '/fitness_equipment_list',
		component: () => import('../views/fitness_equipment/list.vue')
	},
	
		// 健身器械详情路由
	{
		path: '/fitness_equipment/details',
		name: '/fitness_equipment_details',
		component: () => import('../views/fitness_equipment/details.vue')
	},
		
		// 商品信息列表路由
	{
		path: '/product_information/list',
		name: '/product_information_list',
		component: () => import('../views/product_information/list.vue')
	},
	
		// 商品信息详情路由
	{
		path: '/product_information/details',
		name: '/product_information_details',
		component: () => import('../views/product_information/details.vue')
	},
			// 购买商品添加路由
	{
		path: '/purchase_goods/edit',
		name: '/purchase_goods_edit',
		component: () => import('../views/purchase_goods/edit.vue')
	},
	
	
	
	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "健身房管理系统 -home";
	document.title = title;
	document.logo = "健身房管理系统 "
})

export default router
