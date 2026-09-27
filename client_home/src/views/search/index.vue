<template>
  <div class="page_search">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="健身资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/member_users/list', 'get')"
				:list="result_member_users_member_no"
				title="会员用户会员编号"
				source_table="member_users"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/member_users/list', 'get')"
				:list="result_member_users_member_name"
				title="会员用户会员姓名"
				source_table="member_users"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/coach_user/list', 'get')"
				:list="result_coach_user_coach_no"
				title="教练用户教练编号"
				source_table="coach_user"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/coach_user/list', 'get')"
				:list="result_coach_user_coach_name"
				title="教练用户教练姓名"
				source_table="coach_user"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/course_category/list', 'get')"
				:list="result_course_category_course_category"
				title="课程类别课程类别"
				source_table="course_category"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/public_courses/list', 'get')"
				:list="result_public_courses_coach_name"
				title="公共课程教练姓名"
				source_table="public_courses"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/public_courses/list', 'get')"
				:list="result_public_courses_course_name"
				title="公共课程课程名称"
				source_table="public_courses"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/public_courses/list', 'get')"
				:list="result_public_courses_course_category"
				title="公共课程课程类别"
				source_table="public_courses"
			  ></list_result_search>
																											  <list_result_search
				v-if="$check_action('/private_education_courses/list', 'get')"
				:list="result_private_education_courses_coach_name"
				title="私教课程教练姓名"
				source_table="private_education_courses"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/private_education_courses/list', 'get')"
				:list="result_private_education_courses_course_name"
				title="私教课程课程名称"
				source_table="private_education_courses"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/private_education_courses/list', 'get')"
				:list="result_private_education_courses_course_classification"
				title="私教课程课程分类"
				source_table="private_education_courses"
			  ></list_result_search>
																																				  <list_result_search
				v-if="$check_action('/purchase_private_education/list', 'get')"
				:list="result_purchase_private_education_coach_name"
				title="购买私教教练姓名"
				source_table="purchase_private_education"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/purchase_private_education/list', 'get')"
				:list="result_purchase_private_education_course_name"
				title="购买私教课程名称"
				source_table="purchase_private_education"
			  ></list_result_search>
																				  <list_result_search
				v-if="$check_action('/purchase_private_education/list', 'get')"
				:list="result_purchase_private_education_member_name"
				title="购买私教会员姓名"
				source_table="purchase_private_education"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/membership_card_information/list', 'get')"
				:list="result_membership_card_information_membership_card_number"
				title="会员卡信息会员卡号"
				source_table="membership_card_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/membership_card_information/list', 'get')"
				:list="result_membership_card_information_membership_card_type"
				title="会员卡信息会员卡类型"
				source_table="membership_card_information"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/lost_items/list', 'get')"
				:list="result_lost_items_item_name"
				title="遗失物品物品名称"
				source_table="lost_items"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/lost_items/list', 'get')"
				:list="result_lost_items_pickup_date"
				title="遗失物品捡到日期"
				source_table="lost_items"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/fitness_equipment/list', 'get')"
				:list="result_fitness_equipment_device_name"
				title="健身器械器械名称"
				source_table="fitness_equipment"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/product_information/list', 'get')"
				:list="result_product_information_trade_name"
				title="商品信息商品名称"
				source_table="product_information"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/product_information/list', 'get')"
				:list="result_product_information_brand"
				title="商品信息品牌"
				source_table="product_information"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/purchase_goods/list', 'get')"
				:list="result_purchase_goods_trade_name"
				title="购买商品商品名称"
				source_table="purchase_goods"
			  ></list_result_search>
																							  <list_result_search
				v-if="$check_action('/purchase_goods/list', 'get')"
				:list="result_purchase_goods_purchase_quantity"
				title="购买商品购买数量"
				source_table="purchase_goods"
			  ></list_result_search>
									</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_article": [],
						"result_member_users_member_no":[],
								"result_member_users_member_name":[],
									"result_coach_user_coach_no":[],
								"result_coach_user_coach_name":[],
									"result_course_category_course_category":[],
												"result_public_courses_coach_name":[],
											"result_public_courses_course_name":[],
								"result_public_courses_course_category":[],
																											"result_private_education_courses_coach_name":[],
											"result_private_education_courses_course_name":[],
								"result_private_education_courses_course_classification":[],
																																				"result_purchase_private_education_coach_name":[],
											"result_purchase_private_education_course_name":[],
																				"result_purchase_private_education_member_name":[],
																		"result_membership_card_information_membership_card_number":[],
								"result_membership_card_information_membership_card_type":[],
																					"result_lost_items_item_name":[],
								"result_lost_items_pickup_date":[],
																		"result_fitness_equipment_device_name":[],
																								"result_product_information_trade_name":[],
											"result_product_information_brand":[],
																								"result_purchase_goods_trade_name":[],
																							"result_purchase_goods_purchase_quantity":[],
							};
  },
  methods: {
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取member_no
	 */
	get_member_users_member_no(){
		this.$get("~/api/member_users/get_list?like=0", { page: 1, size: 10, "member_no": this.query.word }, (json) => {
		  if (json.result) {
			var result_member_users_member_no = json.result.list;
			result_member_users_member_no.map(o => o.title = o['member_no'])
	  			this.result_member_users_member_no = result_member_users_member_no
		 	}
		});
	},
						/**
	 * 获取member_name
	 */
	get_member_users_member_name(){
		this.$get("~/api/member_users/get_list?like=0", { page: 1, size: 10, "member_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_member_users_member_name = json.result.list;
			result_member_users_member_name.map(o => o.title = o['member_name'])
	  			this.result_member_users_member_name = result_member_users_member_name
		 	}
		});
	},
							/**
	 * 获取coach_no
	 */
	get_coach_user_coach_no(){
		this.$get("~/api/coach_user/get_list?like=0", { page: 1, size: 10, "coach_no": this.query.word }, (json) => {
		  if (json.result) {
			var result_coach_user_coach_no = json.result.list;
			result_coach_user_coach_no.map(o => o.title = o['coach_no'])
	  			this.result_coach_user_coach_no = result_coach_user_coach_no
		 	}
		});
	},
						/**
	 * 获取coach_name
	 */
	get_coach_user_coach_name(){
		this.$get("~/api/coach_user/get_list?like=0", { page: 1, size: 10, "coach_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_coach_user_coach_name = json.result.list;
			result_coach_user_coach_name.map(o => o.title = o['coach_name'])
	  			this.result_coach_user_coach_name = result_coach_user_coach_name
		 	}
		});
	},
							/**
	 * 获取course_category
	 */
	get_course_category_course_category(){
		this.$get("~/api/course_category/get_list?like=0", { page: 1, size: 10, "course_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_category_course_category = json.result.list;
			result_course_category_course_category.map(o => o.title = o['course_category'])
	  			this.result_course_category_course_category = result_course_category_course_category
		 	}
		});
	},
										/**
	 * 获取coach_name
	 */
	get_public_courses_coach_name(){
		this.$get("~/api/public_courses/get_list?like=0", { page: 1, size: 10, "coach_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_public_courses_coach_name = json.result.list;
			result_public_courses_coach_name.map(o => o.title = o['coach_name'])
	  			this.result_public_courses_coach_name = result_public_courses_coach_name
		 	}
		});
	},
									/**
	 * 获取course_name
	 */
	get_public_courses_course_name(){
		this.$get("~/api/public_courses/get_list?like=0", { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_public_courses_course_name = json.result.list;
			result_public_courses_course_name.map(o => o.title = o['course_name'])
	  			this.result_public_courses_course_name = result_public_courses_course_name
		 	}
		});
	},
						/**
	 * 获取course_category
	 */
	get_public_courses_course_category(){
		this.$get("~/api/public_courses/get_list?like=0", { page: 1, size: 10, "course_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_public_courses_course_category = json.result.list;
			result_public_courses_course_category.map(o => o.title = o['course_category'])
	  			this.result_public_courses_course_category = result_public_courses_course_category
		 	}
		});
	},
																									/**
	 * 获取coach_name
	 */
	get_private_education_courses_coach_name(){
		this.$get("~/api/private_education_courses/get_list?like=0", { page: 1, size: 10, "coach_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_private_education_courses_coach_name = json.result.list;
			result_private_education_courses_coach_name.map(o => o.title = o['coach_name'])
	  			this.result_private_education_courses_coach_name = result_private_education_courses_coach_name
		 	}
		});
	},
									/**
	 * 获取course_name
	 */
	get_private_education_courses_course_name(){
		this.$get("~/api/private_education_courses/get_list?like=0", { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_private_education_courses_course_name = json.result.list;
			result_private_education_courses_course_name.map(o => o.title = o['course_name'])
	  			this.result_private_education_courses_course_name = result_private_education_courses_course_name
		 	}
		});
	},
						/**
	 * 获取course_classification
	 */
	get_private_education_courses_course_classification(){
		this.$get("~/api/private_education_courses/get_list?like=0", { page: 1, size: 10, "course_classification": this.query.word }, (json) => {
		  if (json.result) {
			var result_private_education_courses_course_classification = json.result.list;
			result_private_education_courses_course_classification.map(o => o.title = o['course_classification'])
	  			this.result_private_education_courses_course_classification = result_private_education_courses_course_classification
		 	}
		});
	},
																																		/**
	 * 获取coach_name
	 */
	get_purchase_private_education_coach_name(){
		this.$get("~/api/purchase_private_education/get_list?like=0", { page: 1, size: 10, "coach_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_purchase_private_education_coach_name = json.result.list;
			result_purchase_private_education_coach_name.map(o => o.title = o['coach_name'])
	  			this.result_purchase_private_education_coach_name = result_purchase_private_education_coach_name
		 	}
		});
	},
									/**
	 * 获取course_name
	 */
	get_purchase_private_education_course_name(){
		this.$get("~/api/purchase_private_education/get_list?like=0", { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_purchase_private_education_course_name = json.result.list;
			result_purchase_private_education_course_name.map(o => o.title = o['course_name'])
	  			this.result_purchase_private_education_course_name = result_purchase_private_education_course_name
		 	}
		});
	},
																		/**
	 * 获取member_name
	 */
	get_purchase_private_education_member_name(){
		this.$get("~/api/purchase_private_education/get_list?like=0", { page: 1, size: 10, "member_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_purchase_private_education_member_name = json.result.list;
			result_purchase_private_education_member_name.map(o => o.title = o['member_name'])
	  			this.result_purchase_private_education_member_name = result_purchase_private_education_member_name
		 	}
		});
	},
																/**
	 * 获取membership_card_number
	 */
	get_membership_card_information_membership_card_number(){
		this.$get("~/api/membership_card_information/get_list?like=0", { page: 1, size: 10, "membership_card_number": this.query.word }, (json) => {
		  if (json.result) {
			var result_membership_card_information_membership_card_number = json.result.list;
			result_membership_card_information_membership_card_number.map(o => o.title = o['membership_card_number'])
	  			this.result_membership_card_information_membership_card_number = result_membership_card_information_membership_card_number
		 	}
		});
	},
						/**
	 * 获取membership_card_type
	 */
	get_membership_card_information_membership_card_type(){
		this.$get("~/api/membership_card_information/get_list?like=0", { page: 1, size: 10, "membership_card_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_membership_card_information_membership_card_type = json.result.list;
			result_membership_card_information_membership_card_type.map(o => o.title = o['membership_card_type'])
	  			this.result_membership_card_information_membership_card_type = result_membership_card_information_membership_card_type
		 	}
		});
	},
																			/**
	 * 获取item_name
	 */
	get_lost_items_item_name(){
		this.$get("~/api/lost_items/get_list?like=0", { page: 1, size: 10, "item_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_lost_items_item_name = json.result.list;
			result_lost_items_item_name.map(o => o.title = o['item_name'])
	  			this.result_lost_items_item_name = result_lost_items_item_name
		 	}
		});
	},
						/**
	 * 获取pickup_date
	 */
	get_lost_items_pickup_date(){
		this.$get("~/api/lost_items/get_list?like=0", { page: 1, size: 10, "pickup_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_lost_items_pickup_date = json.result.list;
			result_lost_items_pickup_date.map(o => o.title = o['pickup_date'])
	  			this.result_lost_items_pickup_date = result_lost_items_pickup_date
		 	}
		});
	},
																/**
	 * 获取device_name
	 */
	get_fitness_equipment_device_name(){
		this.$get("~/api/fitness_equipment/get_list?like=0", { page: 1, size: 10, "device_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_fitness_equipment_device_name = json.result.list;
			result_fitness_equipment_device_name.map(o => o.title = o['device_name'])
	  			this.result_fitness_equipment_device_name = result_fitness_equipment_device_name
		 	}
		});
	},
																						/**
	 * 获取trade_name
	 */
	get_product_information_trade_name(){
		this.$get("~/api/product_information/get_list?like=0", { page: 1, size: 10, "trade_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_product_information_trade_name = json.result.list;
			result_product_information_trade_name.map(o => o.title = o['trade_name'])
	  			this.result_product_information_trade_name = result_product_information_trade_name
		 	}
		});
	},
									/**
	 * 获取brand
	 */
	get_product_information_brand(){
		this.$get("~/api/product_information/get_list?like=0", { page: 1, size: 10, "brand": this.query.word }, (json) => {
		  if (json.result) {
			var result_product_information_brand = json.result.list;
			result_product_information_brand.map(o => o.title = o['brand'])
	  			this.result_product_information_brand = result_product_information_brand
		 	}
		});
	},
																						/**
	 * 获取trade_name
	 */
	get_purchase_goods_trade_name(){
		this.$get("~/api/purchase_goods/get_list?like=0", { page: 1, size: 10, "trade_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_purchase_goods_trade_name = json.result.list;
			result_purchase_goods_trade_name.map(o => o.title = o['trade_name'])
	  			this.result_purchase_goods_trade_name = result_purchase_goods_trade_name
		 	}
		});
	},
																					/**
	 * 获取purchase_quantity
	 */
	get_purchase_goods_purchase_quantity(){
		this.$get("~/api/purchase_goods/get_list?like=0", { page: 1, size: 10, "purchase_quantity": this.query.word }, (json) => {
		  if (json.result) {
			var result_purchase_goods_purchase_quantity = json.result.list;
			result_purchase_goods_purchase_quantity.map(o => o.title = o['purchase_quantity'])
	  			this.result_purchase_goods_purchase_quantity = result_purchase_goods_purchase_quantity
		 	}
		});
	},
						
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_article();
					this.get_member_users_member_no();
							this.get_member_users_member_name();
								this.get_coach_user_coach_no();
							this.get_coach_user_coach_name();
								this.get_course_category_course_category();
											this.get_public_courses_coach_name();
										this.get_public_courses_course_name();
							this.get_public_courses_course_category();
																										this.get_private_education_courses_coach_name();
										this.get_private_education_courses_course_name();
							this.get_private_education_courses_course_classification();
																																			this.get_purchase_private_education_coach_name();
										this.get_purchase_private_education_course_name();
																			this.get_purchase_private_education_member_name();
																	this.get_membership_card_information_membership_card_number();
							this.get_membership_card_information_membership_card_type();
																				this.get_lost_items_item_name();
							this.get_lost_items_pickup_date();
																	this.get_fitness_equipment_device_name();
																							this.get_product_information_trade_name();
										this.get_product_information_brand();
																							this.get_purchase_goods_trade_name();
																						this.get_purchase_goods_purchase_quantity();
						  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_article();
				  this.get_member_users_member_no();
						  this.get_member_users_member_name();
							  this.get_coach_user_coach_no();
						  this.get_coach_user_coach_name();
							  this.get_course_category_course_category();
										  this.get_public_courses_coach_name();
									  this.get_public_courses_course_name();
						  this.get_public_courses_course_category();
																									  this.get_private_education_courses_coach_name();
									  this.get_private_education_courses_course_name();
						  this.get_private_education_courses_course_classification();
																																		  this.get_purchase_private_education_coach_name();
									  this.get_purchase_private_education_course_name();
																		  this.get_purchase_private_education_member_name();
																  this.get_membership_card_information_membership_card_number();
						  this.get_membership_card_information_membership_card_type();
																			  this.get_lost_items_item_name();
						  this.get_lost_items_pickup_date();
																  this.get_fitness_equipment_device_name();
																						  this.get_product_information_trade_name();
									  this.get_product_information_brand();
																						  this.get_purchase_goods_trade_name();
																					  this.get_purchase_goods_purchase_quantity();
							},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
