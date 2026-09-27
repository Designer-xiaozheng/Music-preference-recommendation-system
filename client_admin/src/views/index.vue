<template>
	<div class="page_root" id="root_index">
		<div class="warp">
			<div class="container-fluid">
				<el-row>
					<el-col :span="4">
						<mm_label bg_color="bg_purple" icon="el-icon-user-solid" :url="url_user_count" unit="人"
								  title="用户数量"></mm_label>
					</el-col>
<!--					<el-col :span="4">-->
<!--						<mm_label bg_color="bg_green" icon="el-icon-view" :url="url_article_hits" unit="次"-->
<!--								  title="文章浏览量"></mm_label>-->
<!--					</el-col>-->
				</el-row>

				<el-row>
											<el-col v-if="user_group == '管理员' || $check_figure('/purchase_private_education/table')" :span="8">
						<div class="card chart">
									<newBarChart v-if="bar_obj_purchase_private_education.values.length > 0" id="bar_obj_purchase_private_education" :vm="bar_obj_purchase_private_education" :title="'购买私教统计'">
							</newBarChart>
							<div v-if="!bar_obj_purchase_private_education.values.length">购买私教没有符合条件的数据</div>
								</div>
					</el-col>
											<el-col v-if="user_group == '管理员' || $check_figure('/purchase_goods/table')" :span="8">
						<div class="card chart">
									<newBarChart v-if="bar_obj_purchase_goods.values.length > 0" id="bar_obj_purchase_goods" :vm="bar_obj_purchase_goods" :title="'购买商品统计'">
							</newBarChart>
							<div v-if="!bar_obj_purchase_goods.values.length">购买商品没有符合条件的数据</div>
								</div>
					</el-col>
					</el-row>


			</div>
		</div>
	</div>
</template>
<script>
	import mixin from "@/mixins/page.js";
	import pieChart from "@/components/charts/pie_chart";
	import barChart from "@/components/charts/bar_chart";
	import newBarChart from "@/components/charts/new_bar_chart";
	import lineChart from "@/components/charts/line_chart";
	import newLineChart from "@/components/charts/new_line_chart";
	import mm_label from "@/components/mm_label.vue";
	export default {
		mixins: [mixin],
		name: "Home",
		components: {
			pieChart,
			barChart,
			newBarChart,
			lineChart,
			newLineChart,
			mm_label
		},
		data() {
			return {
				activeName: "third",
															bar_obj_purchase_private_education: {
					names:[],
					xAxis: [],
					values:[]
				},
														bar_obj_purchase_goods: {
					names:[],
					xAxis: [],
					values:[]
				},
					url_user_count: "~/api/user/count?",
				url_article_hits: "~/api/article/sum?field=hits",
			};
		},
		created() {
									// 执行购买私教数据获取
			this.get_list_purchase_private_education();
									// 执行购买商品数据获取
			this.get_list_purchase_goods();
			},
		mounted() {},
		methods: {
			async get_nickname(list,flag){
				if (flag) {
					for (let i=0;i<list.length;i++){
						await this.$get(
								"~/api/user/get_obj?user_id="+list[i],
								null,
								(json) => {
									if (json.result) {
										list[i] = json.result.obj.nickname;
									}
								});
					}
				}else {
					for (let i=0;i<list.length;i++){
						await this.$get(
								"~/api/user/get_obj?user_id="+list[i].name,
								null,
								(json) => {
									if (json.result) {
										list[i].name = json.result.obj.nickname;
									}
								});
					}
				}
			},
														// 获取购买私教统计柱状图
			async get_list_purchase_private_education() {
				let name_list = [];
				let query_str = "";
																																									let group_by_value = "course_name";
								let flag = false;
												let date_flag = "其他"
																														name_list.push("课程价格");
				query_str = query_str+"course_price"+","
																																									this.bar_obj_purchase_private_education.names = name_list
				query_str = query_str.substr(0,query_str.length-1);
				let data = {};
						let user_group = this.$store.state.user.user_group;
				let user_id = this.$store.state.user.user_id;
				if (user_group!='管理员'){
								let sqlwhere = "(";
																							if (user_group=="教练用户"){
						sqlwhere+= "`coach_no` = " + user_id + " or ";
					}
																																																																									if (user_group=="会员用户"){
						sqlwhere+= "`member` = " + user_id + " or ";
					}
																																if (sqlwhere.length>1){
						sqlwhere = sqlwhere.substr(0,sqlwhere.length-4);
						sqlwhere += ")";
						data.sqlwhere = sqlwhere;
					}
							}
						await this.$get(
						"~/api/purchase_private_education/bar_group?field="+query_str+"&groupby="+group_by_value,
						data,
						(json) => {
							if (json.result) {
								let xAxis = [];
								let values = [];
								json.result.list.map((o) => {
									if (date_flag === "日期") {
										xAxis.push(this.$toTime(o[0] ,"yyyy-MM-dd"));
									}else if (date_flag === "时间") {
										xAxis.push(this.$toTime(o[0] ,"hh:mm:ss"));
									}else if (date_flag === "日长") {
										xAxis.push(this.$toTime(o[0] ,"yyyy-MM-dd hh:mm:ss"));
									}else {
										xAxis.push(o[0]);
									}
									values.push(o.splice(1))
								});
								this.bar_obj_purchase_private_education.xAxis = xAxis;
								this.bar_obj_purchase_private_education.values = values;
							}
							if (flag){
								this.get_nickname(this.bar_obj_purchase_private_education.xAxis,true);
							}
						});
			},
													// 获取购买商品统计柱状图
			async get_list_purchase_goods() {
				let name_list = [];
				let query_str = "";
																									let group_by_value = "trade_name";
								let flag = false;
												let date_flag = "其他"
																																																																						name_list.push("总价");
				query_str = query_str+"total_price"+","
									this.bar_obj_purchase_goods.names = name_list
				query_str = query_str.substr(0,query_str.length-1);
				let data = {};
						let user_group = this.$store.state.user.user_group;
				let user_id = this.$store.state.user.user_id;
				if (user_group!='管理员'){
								let sqlwhere = "(";
																																																																				if (user_group=="会员用户"){
						sqlwhere+= "`member` = " + user_id + " or ";
					}
																																									if (sqlwhere.length>1){
						sqlwhere = sqlwhere.substr(0,sqlwhere.length-4);
						sqlwhere += ")";
						data.sqlwhere = sqlwhere;
					}
							}
						await this.$get(
						"~/api/purchase_goods/bar_group?field="+query_str+"&groupby="+group_by_value,
						data,
						(json) => {
							if (json.result) {
								let xAxis = [];
								let values = [];
								json.result.list.map((o) => {
									if (date_flag === "日期") {
										xAxis.push(this.$toTime(o[0] ,"yyyy-MM-dd"));
									}else if (date_flag === "时间") {
										xAxis.push(this.$toTime(o[0] ,"hh:mm:ss"));
									}else if (date_flag === "日长") {
										xAxis.push(this.$toTime(o[0] ,"yyyy-MM-dd hh:mm:ss"));
									}else {
										xAxis.push(o[0]);
									}
									values.push(o.splice(1))
								});
								this.bar_obj_purchase_goods.xAxis = xAxis;
								this.bar_obj_purchase_goods.values = values;
							}
							if (flag){
								this.get_nickname(this.bar_obj_purchase_goods.xAxis,true);
							}
						});
			},
	
		},
		computed:{
			recognitionHeight(){
				return "830px"
			},
			recognitionUrl(){
				return "https://www.faceplusplus.com.cn/${model.filter.recognitionType}/"
			}
		}
	};
</script>

<style scoped="scoped">
	.chart {
		display: block;
		width: 100%;
		height: 400px;
		padding: 1rem;
		position: relative;
	}

	.el-col {
		padding: 0.5rem;
	}

	.card {
		overflow: hidden;
	}

	.iframe_box ,.iframe_box_change{
		width: 100%;
		height: 1180px;
		position: relative;
		margin-top: 25px;
	}
	.iframe_box_change{
		height: 580px;
		padding-top: 50px;
	}
.iframe_box	.iframe_box_content, .iframe_box_change .iframe_box_content{
	width: 100%;
	height: 100%;
}
.iframe_box_top{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	font-size: 25px;
	line-height: 100px;
	background: #fff;
	z-index: 99999999;
	padding-left: 50px;
}
#iframe_box_face div::before {
	content: '';
	width: 100px;
	position: absolute;
	top: 154px;
	right: 129px;
	z-index: 999;
	height: 20px;
	background-color: #FFFFFF;
}

#iframe_box_face>h1 {
	margin-top: 100px;
	margin-bottom: 20px;
}
</style>
