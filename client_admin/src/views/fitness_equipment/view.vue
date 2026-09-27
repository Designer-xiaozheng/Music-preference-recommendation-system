<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','device_no') || $check_field('add','device_no') || $check_field('set','device_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="器械编号" prop="device_no">
												<el-input id="device_no" v-model="form['device_no']" placeholder="请输入器械编号"
							  v-if="user_group === '管理员' || (form['fitness_equipment_id'] && $check_field('set','device_no')) || (!form['fitness_equipment_id'] && $check_field('add','device_no'))" :disabled="true"></el-input>
					<div v-else-if="$check_field('get','device_no')">{{form['device_no']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','device_name') || $check_field('add','device_name') || $check_field('set','device_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="器械名称" prop="device_name">
												<el-input id="device_name" v-model="form['device_name']" placeholder="请输入器械名称"
							  v-if="user_group === '管理员' || (form['fitness_equipment_id'] && $check_field('set','device_name')) || (!form['fitness_equipment_id'] && $check_field('add','device_name'))" :disabled="disabledObj['device_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','device_name')">{{form['device_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','picture') || $check_field('add','picture') || $check_field('set','picture')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="图片" prop="picture">
								<el-upload :disabled="disabledObj['picture_isDisabled']" id="picture" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_picture"
						:show-file-list="false" v-if="user_group === '管理员' || (form['fitness_equipment_id'] && $check_field('set','picture')) || (!form['fitness_equipment_id'] && $check_field('add','picture'))">
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
								<el-col v-if="user_group === '管理员' || $check_field('get','device_status') || $check_field('add','device_status') || $check_field('set','device_status')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="器械状态" prop="device_status">
												<el-input id="device_status" v-model="form['device_status']" placeholder="请输入器械状态"
							  v-if="user_group === '管理员' || (form['fitness_equipment_id'] && $check_field('set','device_status')) || (!form['fitness_equipment_id'] && $check_field('add','device_status'))" :disabled="disabledObj['device_status_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','device_status')">{{form['device_status']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','device_description') || $check_field('add','device_description') || $check_field('set','device_description')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="器械说明" prop="device_description">
								<el-input type="textarea" id="device_description" v-model="form['device_description']" placeholder="请输入器械说明"
						v-if="user_group === '管理员' || (form['fitness_equipment_id'] && $check_field('set','device_description')) || (!form['fitness_equipment_id'] && $check_field('add','device_description'))" :disabled="disabledObj['device_description_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','device_description')">{{form['device_description']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','details') || $check_field('add','details') || $check_field('set','details')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="详情" prop="details">
					<quill-editor v-model.number="form['details']"
						v-if="user_group === '管理员' || (form['fitness_equipment_id'] && $check_field('set','details')) || (!form['fitness_equipment_id'] && $check_field('add','details')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','details')" v-html="form['details']"></div>
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
				field: "fitness_equipment_id",
				url_add: "~/api/fitness_equipment/add?",
				url_set: "~/api/fitness_equipment/set?",
				url_get_obj: "~/api/fitness_equipment/get_obj?",
				url_upload: "~/api/fitness_equipment/upload?",

				query: {
					"fitness_equipment_id": 0,
				},

				form: {
								"device_no": this.$get_stamp(), // 器械编号
										"device_name":  '', // 器械名称
										"picture":  '', // 图片
										"device_status":  '', // 器械状态
										"device_description":  '', // 器械说明
										"details":  '', // 详情
											"fitness_equipment_id": 0, // ID
						
				},
				disabledObj:{
								"device_no_isDisabled": false,
										"device_name_isDisabled": false,
										"picture_isDisabled": false,
										"device_status_isDisabled": false,
										"device_description_isDisabled": false,
										"details_isDisabled": false,
										},

	
		
		
		
		
		
	
			}
		},
		methods: {


	
	
			
	
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
					bl = this.$check_action('/fitness_equipment/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/fitness_equipment/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/fitness_equipment/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/fitness_equipment/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/fitness_equipment/view','get');
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
