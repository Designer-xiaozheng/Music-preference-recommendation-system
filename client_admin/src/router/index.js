import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},


	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},



	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },



	// 公告路由
	{
		path: '/notice/table',
		name: 'notice_table',
		component: () => import('../views/notice/table.vue'),
		meta: {
			index: 0,
			title: '公告列表'
		}
	},
	{
		path: '/notice/view',
		name: 'notice_view',
		component: () => import('../views/notice/view.vue'),
		meta: {
			index: 0,
			title: '公告详情'
		}
	},


	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 会员用户路由
	{
		path: '/member_users/table',
		name: 'member_users_table',
		component: () => import('../views/member_users/table.vue'),
		meta: {
			index: 0,
			title: '会员用户列表'
		}
	},
	{
		path: '/member_users/view',
		name: 'member_users_view',
		component: () => import('../views/member_users/view.vue'),
		meta: {
			index: 0,
			title: '会员用户详情'
		}
	},
	// 教练用户路由
	{
		path: '/coach_user/table',
		name: 'coach_user_table',
		component: () => import('../views/coach_user/table.vue'),
		meta: {
			index: 0,
			title: '教练用户列表'
		}
	},
	{
		path: '/coach_user/view',
		name: 'coach_user_view',
		component: () => import('../views/coach_user/view.vue'),
		meta: {
			index: 0,
			title: '教练用户详情'
		}
	},
	// 课程类别路由
	{
		path: '/course_category/table',
		name: 'course_category_table',
		component: () => import('../views/course_category/table.vue'),
		meta: {
			index: 0,
			title: '课程类别列表'
		}
	},
	{
		path: '/course_category/view',
		name: 'course_category_view',
		component: () => import('../views/course_category/view.vue'),
		meta: {
			index: 0,
			title: '课程类别详情'
		}
	},
	// 公共课程路由
	{
		path: '/public_courses/table',
		name: 'public_courses_table',
		component: () => import('../views/public_courses/table.vue'),
		meta: {
			index: 0,
			title: '公共课程列表'
		}
	},
	{
		path: '/public_courses/view',
		name: 'public_courses_view',
		component: () => import('../views/public_courses/view.vue'),
		meta: {
			index: 0,
			title: '公共课程详情'
		}
	},
	// 私教课程路由
	{
		path: '/private_education_courses/table',
		name: 'private_education_courses_table',
		component: () => import('../views/private_education_courses/table.vue'),
		meta: {
			index: 0,
			title: '私教课程列表'
		}
	},
	{
		path: '/private_education_courses/view',
		name: 'private_education_courses_view',
		component: () => import('../views/private_education_courses/view.vue'),
		meta: {
			index: 0,
			title: '私教课程详情'
		}
	},
	// 购买私教路由
	{
		path: '/purchase_private_education/table',
		name: 'purchase_private_education_table',
		component: () => import('../views/purchase_private_education/table.vue'),
		meta: {
			index: 0,
			title: '购买私教列表'
		}
	},
	{
		path: '/purchase_private_education/view',
		name: 'purchase_private_education_view',
		component: () => import('../views/purchase_private_education/view.vue'),
		meta: {
			index: 0,
			title: '购买私教详情'
		}
	},
	// 会员卡信息路由
	{
		path: '/membership_card_information/table',
		name: 'membership_card_information_table',
		component: () => import('../views/membership_card_information/table.vue'),
		meta: {
			index: 0,
			title: '会员卡信息列表'
		}
	},
	{
		path: '/membership_card_information/view',
		name: 'membership_card_information_view',
		component: () => import('../views/membership_card_information/view.vue'),
		meta: {
			index: 0,
			title: '会员卡信息详情'
		}
	},
	// 遗失物品路由
	{
		path: '/lost_items/table',
		name: 'lost_items_table',
		component: () => import('../views/lost_items/table.vue'),
		meta: {
			index: 0,
			title: '遗失物品列表'
		}
	},
	{
		path: '/lost_items/view',
		name: 'lost_items_view',
		component: () => import('../views/lost_items/view.vue'),
		meta: {
			index: 0,
			title: '遗失物品详情'
		}
	},
	// 健身器械路由
	{
		path: '/fitness_equipment/table',
		name: 'fitness_equipment_table',
		component: () => import('../views/fitness_equipment/table.vue'),
		meta: {
			index: 0,
			title: '健身器械列表'
		}
	},
	{
		path: '/fitness_equipment/view',
		name: 'fitness_equipment_view',
		component: () => import('../views/fitness_equipment/view.vue'),
		meta: {
			index: 0,
			title: '健身器械详情'
		}
	},
	// 商品信息路由
	{
		path: '/product_information/table',
		name: 'product_information_table',
		component: () => import('../views/product_information/table.vue'),
		meta: {
			index: 0,
			title: '商品信息列表'
		}
	},
	{
		path: '/product_information/view',
		name: 'product_information_view',
		component: () => import('../views/product_information/view.vue'),
		meta: {
			index: 0,
			title: '商品信息详情'
		}
	},
	// 购买商品路由
	{
		path: '/purchase_goods/table',
		name: 'purchase_goods_table',
		component: () => import('../views/purchase_goods/table.vue'),
		meta: {
			index: 0,
			title: '购买商品列表'
		}
	},
	{
		path: '/purchase_goods/view',
		name: 'purchase_goods_view',
		component: () => import('../views/purchase_goods/view.vue'),
		meta: {
			index: 0,
			title: '购买商品详情'
		}
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "健身房管理系统 -admin";
	document.title = title;
})

export default router
