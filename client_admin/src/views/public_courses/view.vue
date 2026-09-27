<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','coach_no') || $check_field('add','coach_no') || $check_field('set','coach_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教练编号" prop="coach_no">
													<el-select v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','coach_no')) || (!form['public_courses_id'] && $check_field('add','coach_no'))" id="coach_no" v-model="form['coach_no']" :disabled="disabledObj['coach_no_isDisabled']">
							<el-option v-for="o in list_user_coach_no" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','coach_no')" id="coach_no" v-model="form['coach_no']" :disabled="true">
							<el-option v-for="o in list_user_coach_no" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','coach_name') || $check_field('add','coach_name') || $check_field('set','coach_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教练姓名" prop="coach_name">
												<el-input id="coach_name" v-model="form['coach_name']" placeholder="请输入教练姓名"
							  v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','coach_name')) || (!form['public_courses_id'] && $check_field('add','coach_name'))" :disabled="disabledObj['coach_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','coach_name')">{{form['coach_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_no') || $check_field('add','course_no') || $check_field('set','course_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程编号" prop="course_no">
												<el-input id="course_no" v-model="form['course_no']" placeholder="请输入课程编号"
							  v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','course_no')) || (!form['public_courses_id'] && $check_field('add','course_no'))" :disabled="true"></el-input>
					<div v-else-if="$check_field('get','course_no')">{{form['course_no']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_name') || $check_field('add','course_name') || $check_field('set','course_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程名称" prop="course_name">
												<el-input id="course_name" v-model="form['course_name']" placeholder="请输入课程名称"
							  v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','course_name')) || (!form['public_courses_id'] && $check_field('add','course_name'))" :disabled="disabledObj['course_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_name')">{{form['course_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_category') || $check_field('add','course_category') || $check_field('set','course_category')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程类别" prop="course_category">
								<el-select id="course_category" v-model="form['course_category']"
						v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','course_category')) || (!form['public_courses_id'] && $check_field('add','course_category'))">
						<el-option v-for="o in list_course_category" :key="o['course_category']" :label="o['course_category']"
							:value="o['course_category']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','course_category')">{{form['course_category']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_price') || $check_field('add','course_price') || $check_field('set','course_price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程价格" prop="course_price">
								<el-input-number id="course_price" v-model.number="form['course_price']"
						v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','course_price')) || (!form['public_courses_id'] && $check_field('add','course_price'))" :disabled="disabledObj['course_price_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','course_price')">{{form['course_price']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_time') || $check_field('add','course_time') || $check_field('set','course_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程时间" prop="course_time">
												<el-input id="course_time" v-model="form['course_time']" placeholder="请输入课程时间"
							  v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','course_time')) || (!form['public_courses_id'] && $check_field('add','course_time'))" :disabled="disabledObj['course_time_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_time')">{{form['course_time']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','fitness_location') || $check_field('add','fitness_location') || $check_field('set','fitness_location')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="健身地点" prop="fitness_location">
												<el-input id="fitness_location" v-model="form['fitness_location']" placeholder="请输入健身地点"
							  v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','fitness_location')) || (!form['public_courses_id'] && $check_field('add','fitness_location'))" :disabled="disabledObj['fitness_location_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','fitness_location')">{{form['fitness_location']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','picture') || $check_field('add','picture') || $check_field('set','picture')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="图片" prop="picture">
								<el-upload :disabled="disabledObj['picture_isDisabled']" id="picture" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_picture"
						:show-file-list="false" v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','picture')) || (!form['public_courses_id'] && $check_field('add','picture'))">
						<img v-if="form['picture']" :src="$fullUrl(form['picture'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','picture')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['picture'])" :preview-src-list="[$fullUrl(form['picture'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_content') || $check_field('add','course_content') || $check_field('set','course_content')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程内容" prop="course_content">
								<el-input type="textarea" id="course_content" v-model="form['course_content']" placeholder="请输入课程内容"
						v-if="user_group === '管理员' || (form['public_courses_id'] && $check_field('set','course_content')) || (!form['public_courses_id'] && $check_field('add','course_content'))" :disabled="disabledObj['course_content_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_content')">{{form['course_content']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "public_courses_id",
				url_add: "~/api/public_courses/add?",
				url_set: "~/api/public_courses/set?",
				url_get_obj: "~/api/public_courses/get_obj?",
				url_upload: "~/api/public_courses/upload?",

				query: {
					"public_courses_id": 0,
				},

				form: {
								"coach_no": 0, // 教练编号
										"coach_name":  '', // 教练姓名
										"course_no": this.$get_stamp(), // 课程编号
										"course_name":  '', // 课程名称
										"course_category":  '', // 课程类别
										"course_price":  0, // 课程价格
										"course_time":  '', // 课程时间
										"fitness_location":  '', // 健身地点
										"picture":  '', // 图片
										"course_content":  '', // 课程内容
											"public_courses_id": 0, // ID
						
				},
				disabledObj:{
								"coach_no_isDisabled": false,
										"coach_name_isDisabled": false,
										"course_no_isDisabled": false,
										"course_name_isDisabled": false,
										"course_category_isDisabled": false,
					          			"course_price_isDisabled": false,
										"course_time_isDisabled": false,
										"fitness_location_isDisabled": false,
										"picture_isDisabled": false,
										"course_content_isDisabled": false,
										},

	
					// 用户列表
				list_user_coach_no: [],
				
		
		
						// 课程类别选项列表
				list_course_category: [""],
	
		
		
		
		
		
	
			}
		},
		methods: {


	
	
				/**
			 * 获取教练用户用户列表
			 */
			async get_list_user_coach_no() {
                // if(this.user_group !== "管理员" && this.form["coach_no"] === 0) {
                //     this.form["coach_no"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=教练用户");
                if(json.result && json.result.list){
                    this.list_user_coach_no = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_coach_no(id){
				var obj = this.list_user_coach_no.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
			
				/**
			 * 获取课程类别列表
			 */
			async get_list_course_category() {
				var json = await this.$get("~/api/course_category/get_list?");
				if(json.result && json.result.list){
					this.list_course_category = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
	
			
	
			
	
			
	
						/**
			 * 上传图片
			 * @param {Object} param 图片参数
			 */
			upload_picture(param){
						this.uploadFile(param.file, "picture");
					},
	
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
																	
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
																								$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


																														

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
				let msg = null
																																				return msg;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/public_courses/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/public_courses/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/public_courses/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/public_courses/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/public_courses/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_coach_no();
													this.get_list_course_category();
														},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
