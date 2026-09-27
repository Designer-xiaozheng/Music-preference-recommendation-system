<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','order_number') || $check_field('add','order_number') || $check_field('set','order_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="订单号" prop="order_number">
												<el-input id="order_number" v-model="form['order_number']" placeholder="请输入订单号"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','order_number')) || (!form['purchase_private_education_id'] && $check_field('add','order_number'))" :disabled="true"></el-input>
					<div v-else-if="$check_field('get','order_number')">{{form['order_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','coach_no') || $check_field('add','coach_no') || $check_field('set','coach_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教练编号" prop="coach_no">
													<el-select v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','coach_no')) || (!form['purchase_private_education_id'] && $check_field('add','coach_no'))" id="coach_no" v-model="form['coach_no']" :disabled="disabledObj['coach_no_isDisabled']">
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
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','coach_name')) || (!form['purchase_private_education_id'] && $check_field('add','coach_name'))" :disabled="disabledObj['coach_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','coach_name')">{{form['coach_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_no') || $check_field('add','course_no') || $check_field('set','course_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程编号" prop="course_no">
												<el-input id="course_no" v-model="form['course_no']" placeholder="请输入课程编号"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','course_no')) || (!form['purchase_private_education_id'] && $check_field('add','course_no'))" :disabled="disabledObj['course_no_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_no')">{{form['course_no']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_name') || $check_field('add','course_name') || $check_field('set','course_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程名称" prop="course_name">
												<el-input id="course_name" v-model="form['course_name']" placeholder="请输入课程名称"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','course_name')) || (!form['purchase_private_education_id'] && $check_field('add','course_name'))" :disabled="disabledObj['course_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_name')">{{form['course_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_classification') || $check_field('add','course_classification') || $check_field('set','course_classification')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程分类" prop="course_classification">
												<el-input id="course_classification" v-model="form['course_classification']" placeholder="请输入课程分类"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','course_classification')) || (!form['purchase_private_education_id'] && $check_field('add','course_classification'))" :disabled="disabledObj['course_classification_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_classification')">{{form['course_classification']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_price') || $check_field('add','course_price') || $check_field('set','course_price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程价格" prop="course_price">
												<el-input id="course_price" v-model="form['course_price']" placeholder="请输入课程价格"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','course_price')) || (!form['purchase_private_education_id'] && $check_field('add','course_price'))" :disabled="disabledObj['course_price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_price')">{{form['course_price']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_time') || $check_field('add','course_time') || $check_field('set','course_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程时间" prop="course_time">
												<el-input id="course_time" v-model="form['course_time']" placeholder="请输入课程时间"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','course_time')) || (!form['purchase_private_education_id'] && $check_field('add','course_time'))" :disabled="disabledObj['course_time_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_time')">{{form['course_time']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','member') || $check_field('add','member') || $check_field('set','member')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员" prop="member">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_member(form['member']) }}
							<!--<el-input id="business_name" v-model="form['member']" placeholder="请输入会员"-->
							<!--v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','member')) || (!form['purchase_private_education_id'] && $check_field('add','member'))" :disabled="disabledObj['member_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','member')">{{form['member']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','member')) || (!form['purchase_private_education_id'] && $check_field('add','member'))" id="member" v-model="form['member']" :disabled="disabledObj['member_isDisabled']">
								<el-option v-for="o in list_user_member" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','member')" id="member" v-model="form['member']" :disabled="true">
								<el-option v-for="o in list_user_member" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="member" v-model="form['member']" :disabled="disabledObj['member_isDisabled']">
							<el-option v-for="o in list_user_member" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','member_name') || $check_field('add','member_name') || $check_field('set','member_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员姓名" prop="member_name">
												<el-input id="member_name" v-model="form['member_name']" placeholder="请输入会员姓名"
							  v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','member_name')) || (!form['purchase_private_education_id'] && $check_field('add','member_name'))" :disabled="disabledObj['member_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','member_name')">{{form['member_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','time_of_appointment') || $check_field('add','time_of_appointment') || $check_field('set','time_of_appointment')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="预约时间" prop="time_of_appointment">
								<el-date-picker :disabled="disabledObj['time_of_appointment_isDisabled']" v-if="user_group === '管理员' || (form['purchase_private_education_id'] && $check_field('set','time_of_appointment')) || (!form['purchase_private_education_id'] && $check_field('add','time_of_appointment'))" id="time_of_appointment"
						v-model="form['time_of_appointment']" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
					<div v-else-if="$check_field('get','time_of_appointment')">{{form['time_of_appointment']}}</div>
							</el-form-item>
			</el-col>
							<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
					<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核回复" prop="examine_reply">
					<el-input id="examine_reply" v-model="form['examine_reply']" placeholder="请输入审核回复"
						v-if="user_group === '管理员' || (form['examine_reply'] && $check_examine()) || (!form['examine_reply'] && $check_examine())"></el-input>
					<div v-else>{{form["examine_reply"]}}</div>
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
				field: "purchase_private_education_id",
				url_add: "~/api/purchase_private_education/add?",
				url_set: "~/api/purchase_private_education/set?",
				url_get_obj: "~/api/purchase_private_education/get_obj?",
				url_upload: "~/api/purchase_private_education/upload?",

				query: {
					"purchase_private_education_id": 0,
				},

				form: {
								"order_number": this.$get_stamp(), // 订单号
										"coach_no": 0, // 教练编号
										"coach_name":  '', // 教练姓名
										"course_no":  '', // 课程编号
										"course_name":  '', // 课程名称
										"course_classification":  '', // 课程分类
										"course_price":  '', // 课程价格
										"course_time":  '', // 课程时间
										"member": 0, // 会员
										"member_name":  '', // 会员姓名
										"time_of_appointment":  '', // 预约时间
									"examine_state": "未审核",
							"examine_reply": "",
							"purchase_private_education_id": 0, // ID
						
				},
				disabledObj:{
								"order_number_isDisabled": false,
										"coach_no_isDisabled": false,
										"coach_name_isDisabled": false,
										"course_no_isDisabled": false,
										"course_name_isDisabled": false,
										"course_classification_isDisabled": false,
										"course_price_isDisabled": false,
										"course_time_isDisabled": false,
										"member_isDisabled": false,
										"member_name_isDisabled": false,
										"time_of_appointment_isDisabled": false,
										},

	
		
					// 用户列表
				list_user_coach_no: [],
				
		
		
		
		
		
		
					// 用户列表
				list_user_member: [],
						// 用户组
				group_user_member: "",
				
		
	
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
			 * 获取会员用户用户列表
			 */
			async get_list_user_member() {
                // if(this.user_group !== "管理员" && this.form["member"] === 0) {
                //     this.form["member"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=会员用户");
                if(json.result && json.result.list){
                    this.list_user_member = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取会员用户用户组
			 */
			async get_group_user_member() {
							this.form["member"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=会员用户");
				if(json.result && json.result.obj){
					this.group_user_member = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_member(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_member.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["member"] = id
									_this.disabledObj['member' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "member") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_member(id){
				var obj = this.list_user_member.getObj({"user_id":id});
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
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
											// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
															
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
																					        if (this.form["time_of_appointment"].indexOf("-")===-1){
            this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]),"yyyy-MM-dd hh:mm:ss")
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


																															        if(this.form["time_of_appointment"]=="0000-00-00 00:00:00"){
          this.form["time_of_appointment"] = null;
        }
				if(parseInt(this.form["time_of_appointment"]) > 9999){
					this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]),"yyyy-MM-dd hh:mm:ss")
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
					bl = this.$check_action('/purchase_private_education/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_private_education/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_private_education/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_private_education/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_private_education/view','get');
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
																				this.get_list_user_member();
					this.get_group_user_member();
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
