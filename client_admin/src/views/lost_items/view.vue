<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','serial_number') || $check_field('add','serial_number') || $check_field('set','serial_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="物品编号" prop="serial_number">
												<el-input id="serial_number" v-model="form['serial_number']" placeholder="请输入物品编号"
							  v-if="user_group === '管理员' || (form['lost_items_id'] && $check_field('set','serial_number')) || (!form['lost_items_id'] && $check_field('add','serial_number'))" :disabled="true"></el-input>
					<div v-else-if="$check_field('get','serial_number')">{{form['serial_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','item_name') || $check_field('add','item_name') || $check_field('set','item_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="物品名称" prop="item_name">
												<el-input id="item_name" v-model="form['item_name']" placeholder="请输入物品名称"
							  v-if="user_group === '管理员' || (form['lost_items_id'] && $check_field('set','item_name')) || (!form['lost_items_id'] && $check_field('add','item_name'))" :disabled="disabledObj['item_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','item_name')">{{form['item_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','pickup_date') || $check_field('add','pickup_date') || $check_field('set','pickup_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="捡到日期" prop="pickup_date">
								<el-date-picker :disabled="disabledObj['pickup_date_isDisabled']" v-if="user_group === '管理员' || (form['lost_items_id'] && $check_field('set','pickup_date')) || (!form['lost_items_id'] && $check_field('add','pickup_date'))" id="pickup_date"
						v-model="form['pickup_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','pickup_date')">{{form['pickup_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','pick_up_the_place') || $check_field('add','pick_up_the_place') || $check_field('set','pick_up_the_place')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="捡到地点" prop="pick_up_the_place">
												<el-input id="pick_up_the_place" v-model="form['pick_up_the_place']" placeholder="请输入捡到地点"
							  v-if="user_group === '管理员' || (form['lost_items_id'] && $check_field('set','pick_up_the_place')) || (!form['lost_items_id'] && $check_field('add','pick_up_the_place'))" :disabled="disabledObj['pick_up_the_place_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','pick_up_the_place')">{{form['pick_up_the_place']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','state') || $check_field('add','state') || $check_field('set','state')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="状态" prop="state">
								<el-select id="state" v-model="form['state']"
						v-if="user_group === '管理员' || (form['lost_items_id'] && $check_field('set','state')) || (!form['lost_items_id'] && $check_field('add','state'))">
						<el-option v-for="o in list_state" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','state')">{{form['state']}}</div>
							</el-form-item>
			</el-col>
					
	
				<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="计时器标题" prop="timer_title">
					<el-input id="timer_title" v-model="form['timer_title']" placeholder="请输入计时器标题"
							  v-if="user_group === '管理员' || $check_action('/lost_items/view','set') || $check_action('/lost_items/view','add')" :disabled="disabledObj['timer_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','timer_title')">{{form['timer_title']}}</div>
				</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="计时开始时间" prop="timing_start_time">
					<el-date-picker id="timing_start_time" v-model="form['timing_start_time']" placeholder="选择计时器开始时间"
						v-if="user_group === '管理员' || $check_action('/lost_items/view','set') || $check_action('/lost_items/view','add')" :disabled="disabledObj['timing_start_time_isDisabled']" type="datetime" >
					</el-date-picker>
					<div v-else-if="$check_field('get','timing_start_time')">{{form['timing_start_time']}}</div>
				</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="计时结束时间" prop="timing_end_time">
					<el-date-picker id="timing_end_time" v-model="form['timing_end_time']" placeholder="选择计时器开始时间"
						v-if="user_group === '管理员' || $check_action('/lost_items/view','set') || $check_action('/lost_items/view','add')" :disabled="disabledObj['timing_end_time_isDisabled']" type="datetime" >
					</el-date-picker>
					<div v-else-if="$check_field('get','timing_end_time')">{{form['timing_end_time']}}</div>
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
				field: "lost_items_id",
				url_add: "~/api/lost_items/add?",
				url_set: "~/api/lost_items/set?",
				url_get_obj: "~/api/lost_items/get_obj?",
				url_upload: "~/api/lost_items/upload?",

				query: {
					"lost_items_id": 0,
				},

				form: {
								"serial_number": this.$get_stamp(), // 物品编号
										"item_name":  '', // 物品名称
										"pickup_date":  '', // 捡到日期
										"pick_up_the_place":  '', // 捡到地点
										"state":  '', // 状态
											"lost_items_id": 0, // ID
									"timer_title":'', // 计时器标题
					"timing_start_time":'', // 计时开始时间
					"timing_end_time":'', // 计时结束时间
			
				},
				disabledObj:{
								"serial_number_isDisabled": false,
										"item_name_isDisabled": false,
										"pickup_date_isDisabled": false,
										"pick_up_the_place_isDisabled": false,
										"state_isDisabled": false,
										"timer_title_isDisabled": false,
					"timing_start_time_isDisabled": false,
					"timing_end_time_isDisabled": false,
						},

	
		
		
		
						// 状态选项列表
				list_state: ['已认领','未认领'],
	
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
			
	
		
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
						        if (this.form["pickup_date"].indexOf("-")===-1){
          this.form["pickup_date"] = this.$toTime(parseInt(this.form["pickup_date"]),"yyyy-MM-dd")
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


								        if(this.form["pickup_date"]=="0000-00-00"){
          this.form["pickup_date"] = null;
        }
				if(parseInt(this.form["pickup_date"]) > 9999){
					this.form["pickup_date"] = this.$toTime(parseInt(this.form["pickup_date"]),"yyyy-MM-dd")
				}
								
				if (this.form["timing_end_time"] && JSON.stringify(this.form["timing_end_time"]).indexOf("-")===-1) {
					this.form["timing_end_time"] = this.$toTime(parseInt(this.form["timing_end_time"]), "yyyy-MM-dd hh:mm:ss")
				}
				if (this.form["timing_start_time"] && JSON.stringify(this.form["timing_start_time"]).indexOf("-")===-1) {
					this.form["timing_start_time"] = this.$toTime(parseInt(this.form["timing_start_time"]), "yyyy-MM-dd hh:mm:ss")
				}

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
					bl = this.$check_action('/lost_items/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/lost_items/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/lost_items/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/lost_items/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/lost_items/view','get');
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
