<template>
	<div class="diy_home diy_list diy_private_education_courses" id="diy_private_education_courses_list">
		<!-- 列表 -->
		<div class="diy_view_list list list-x" v-if="show">
			<router-link class="diy_card goods diy_list_box_wrap" v-for="(o, i) in list" :key="i"
				:to="'/private_education_courses/details?private_education_courses_id=' + o['private_education_courses_id']">
				<!-- 图片 -->
				<div class="diy_list_img_box" v-if="imgList.length" >
					<div class="diy_row" v-for="(item,index) in imgList" :key="item+index" v-show="$check_field('get',item.name,'/private_education_courses/details') && +item.is_img_list">
						<div class="diy_title diy_list_img_title">
							<span>{{item.title}}:</span>
						</div>
						<div class="diy_field diy_img">
							<img :src="$fullUrl(o[item.name])" style="width:100%;height:100%" />
						</div>
					</div>
				</div>
				<!-- 内容 -->
				<div class="diy_list_item_box">
					<div class="diy_list_item_content" v-for="(item,index) in showItemList" :key="item+index">
						<div class="diy_row" :class="{[item.name]:true}" v-if="$check_field('get',item.name,'/private_education_courses/details') && +item.is_img_list">
							<div class="diy_title">
								<span>{{item.title}}:</span>
							</div>
							<div class="diy_field diy_text">
								<span v-if="item.type == 'UID'" v-text="get_user_name(item.name,o[item.name])"></span>
								<span v-else-if="item.type == '日期'" v-text="$toTime(o[item.name],'yyyy-MM-dd')"></span>
								<span v-else-if="item.type == '时间'" v-text="$toTime(o[item.name],'hh:mm:ss')"></span>
								<span v-else-if="item.type == '日长'" v-text="$toTime(o[item.name],'yyyy-MM-dd hh:mm:ss')"></span>
								<span v-else v-text="o[item.name]"></span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<!-- 表格 -->
		<div class="diy_view_table" v-else>
			<table class="diy_table">
				<tr class="diy_row">
						<th class="diy_title" v-if="$check_field('get','coach_no')">
						教练编号
					</th>
							<th class="diy_title" v-if="$check_field('get','coach_name')">
						教练姓名
					</th>
							<th class="diy_title" v-if="$check_field('get','course_no')">
						课程编号
					</th>
							<th class="diy_title" v-if="$check_field('get','course_name')">
						课程名称
					</th>
							<th class="diy_title" v-if="$check_field('get','course_classification')">
						课程分类
					</th>
							<th class="diy_title" v-if="$check_field('get','course_price')">
						课程价格
					</th>
							<th class="diy_title" v-if="$check_field('get','course_time')">
						课程时间
					</th>
							<th class="diy_title" v-if="$check_field('get','number_of_class_hours')">
						课时数量
					</th>
							<th class="diy_title" v-if="$check_field('get','fitness_location')">
						健身地点
					</th>
							<th class="diy_title" v-if="$check_field('get','picture')">
						图片
					</th>
							<th class="diy_title" v-if="$check_field('get','fitness_points')">
						健身要点
					</th>
							<th class="diy_title" v-if="$check_field('get','course_content')">
						课程内容
					</th>
					</tr>
				<tr class="diy_row" v-for="(o,i) in list" :key="o+i">
						<td class="diy_field diy_uid" v-if="$check_field('get','coach_no')">
						<span>
							{{ get_user_name('coach_no',o['coach_no']) }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','coach_name')">
						<span>
							{{ o["coach_name"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','course_no')">
						<span>
							{{ o["course_no"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','course_name')">
						<span>
							{{ o["course_name"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','course_classification')">
						<span>
							{{ o["course_classification"] }}
						</span>
					</td>
							<td class="diy_field diy_number" v-if="$check_field('get','course_price')">
						<span>
							{{ o["course_price"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','course_time')">
						<span>
							{{ o["course_time"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','number_of_class_hours')">
						<span>
							{{ o["number_of_class_hours"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','fitness_location')">
						<span>
							{{ o["fitness_location"] }}
						</span>
					</td>
							<td class="diy_field" v-if="$check_field('get','picture')">
						<img class="diy_img" :src="o['picture']" />
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','fitness_points')">
						<span>
							{{ o["fitness_points"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','course_content')">
						<span>
							{{ o["course_content"] }}
						</span>
					</td>
					</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: function() {
					return [];
				},
			},
			show: {
				type: Boolean,
				default: function(){
					return true;
				}
			}
		},
		data() {
			return {
						imgList: [
						{
							title: "图片",
							name: "picture",
							type: "图片",
							is_img_list: "1"
						},
						],
						itemList: [
								{
									title: "教练编号",
									name: "coach_no",
									type: "UID",
									is_img_list: "0"
								},
								{
									title: "教练姓名",
									name: "coach_name",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "课程编号",
									name: "course_no",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "课程名称",
									name: "course_name",
									type: "文本",
									is_img_list: "1"
								},
								{
									title: "课程分类",
									name: "course_classification",
									type: "下寻",
									is_img_list: "1"
								},
								{
									title: "课程价格",
									name: "course_price",
									type: "数字",
									is_img_list: "1"
								},
								{
									title: "课程时间",
									name: "course_time",
									type: "文本",
									is_img_list: "1"
								},
								{
									title: "课时数量",
									name: "number_of_class_hours",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "健身地点",
									name: "fitness_location",
									type: "文本",
									is_img_list: "0"
								},
						],
						richList: [
								{
									title: "健身要点",
									name: "fitness_points",
									type: "多文本"
								},
								{
									title: "课程内容",
									name: "course_content",
									type: "多文本"
								},
						],
					// 用户列表
				list_user_coach_no: [],
															};
		},
		methods: {
			get_user_name(name,id){
				var obj = null;
					if (name == 'coach_no'){
					obj = this.list_user_coach_no.getObj({"user_id":id});
				}
																var ret = "";
				if(obj){
					ret = obj.nickname+"-"+obj.username;
					// if(obj.nickname){
					// 	ret = obj.nickname;
					// }
					// else{
					// 	ret = obj.username;
					// }
				}
				return ret;
			},
				/**
			 * 获取教练用户用户列表
			 */
			async get_list_user_coach_no() {
				var json = await this.$get("~/api/user/get_list?user_group=教练用户");
				if(json.result && json.result.list){
					this.list_user_coach_no = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
														},
		created() {
				this.get_list_user_coach_no();
														},
		computed:{
			showItemList(){
				let arr = [];
				let _type = ["视频","音频","文件"];
				this.itemList.forEach(item => {
					if(_type.indexOf(item.type) === -1 && !!+item.is_img_list){
						arr.push(item)
					}
				})
				return arr.slice(0,4);
			}
		}
	};
</script>

<style scoped>
	.media {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-basis: 75%;
		min-height: 10rem;
	}

	.goods {
		display: flex;
		width: calc(25% - 1rem);
		margin: 0.5rem;
		padding: 0.5rem;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		border-radius: 0.5rem;
	}

	.goods:hover {
		border: 0.2rem solid #909399;
		box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.15);
	}

	.goods:hover img {
		filter: blur(1px);
	}

	.price {
		font-size: 1rem;
		margin-right: 3px;
	}

	.price_ago {
		text-decoration: line-through;
		font-size: 0.5rem;
		color: #999;

	}

	.title {
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 700;
		padding: .25rem;
	}

	.icon_cart {
		color: #FF5722;
		float: right;
	}

	@media (max-width: 992px) {

		.goods {
			width: calc(33% - 1rem);
			;
		}

	}

	@media (max-width: 768px) {

		.goods {
			width: calc(50% - 1rem);
			;
		}

	}
</style>

