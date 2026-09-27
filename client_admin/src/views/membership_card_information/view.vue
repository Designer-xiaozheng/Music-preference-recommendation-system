<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','member_number') || $check_field('add','member_number') || $check_field('set','member_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员编号" prop="member_number">
													<el-select v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','member_number')) || (!form['membership_card_information_id'] && $check_field('add','member_number'))" id="member_number" v-model="form['member_number']" :disabled="disabledObj['member_number_isDisabled']">
							<el-option v-for="o in list_user_member_number" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','member_number')" id="member_number" v-model="form['member_number']" :disabled="true">
							<el-option v-for="o in list_user_member_number" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','member_name') || $check_field('add','member_name') || $check_field('set','member_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员姓名" prop="member_name">
												<el-input id="member_name" v-model="form['member_name']" placeholder="请输入会员姓名"
							  v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','member_name')) || (!form['membership_card_information_id'] && $check_field('add','member_name'))" :disabled="disabledObj['member_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','member_name')">{{form['member_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','membership_card_number') || $check_field('add','membership_card_number') || $check_field('set','membership_card_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员卡号" prop="membership_card_number">
												<el-input id="membership_card_number" v-model="form['membership_card_number']" placeholder="请输入会员卡号"
							  v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','membership_card_number')) || (!form['membership_card_information_id'] && $check_field('add','membership_card_number'))" :disabled="disabledObj['membership_card_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','membership_card_number')">{{form['membership_card_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','membership_card_type') || $check_field('add','membership_card_type') || $check_field('set','membership_card_type')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员卡类型" prop="membership_card_type">
								<el-select id="membership_card_type" v-model="form['membership_card_type']"
						v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','membership_card_type')) || (!form['membership_card_information_id'] && $check_field('add','membership_card_type'))">
						<el-option v-for="o in list_membership_card_type" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','membership_card_type')">{{form['membership_card_type']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','price') || $check_field('add','price') || $check_field('set','price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="价格" prop="price">
												<el-input id="price" v-model="form['price']" placeholder="请输入价格"
							  v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','price')) || (!form['membership_card_information_id'] && $check_field('add','price'))" :disabled="disabledObj['price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','price')">{{form['price']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','card_handling_time') || $check_field('add','card_handling_time') || $check_field('set','card_handling_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="办卡时间" prop="card_handling_time">
								<el-date-picker :disabled="disabledObj['card_handling_time_isDisabled']" v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','card_handling_time')) || (!form['membership_card_information_id'] && $check_field('add','card_handling_time'))" id="card_handling_time"
						v-model="form['card_handling_time']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','card_handling_time')">{{form['card_handling_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','expiration_time') || $check_field('add','expiration_time') || $check_field('set','expiration_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="到期时间" prop="expiration_time">
								<el-date-picker :disabled="disabledObj['expiration_time_isDisabled']" v-if="user_group === '管理员' || (form['membership_card_information_id'] && $check_field('set','expiration_time')) || (!form['membership_card_information_id'] && $check_field('add','expiration_time'))" id="expiration_time"
						v-model="form['expiration_time']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','expiration_time')">{{form['expiration_time']}}</div>
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
				field: "membership_card_information_id",
				url_add: "~/api/membership_card_information/add?",
				url_set: "~/api/membership_card_information/set?",
				url_get_obj: "~/api/membership_card_information/get_obj?",
				url_upload: "~/api/membership_card_information/upload?",

				query: {
					"membership_card_information_id": 0,
				},

				form: {
								"member_number": 0, // 会员编号
										"member_name":  '', // 会员姓名
										"membership_card_number":  '', // 会员卡号
										"membership_card_type":  '', // 会员卡类型
										"price":  '', // 价格
										"card_handling_time":  '', // 办卡时间
										"expiration_time":  '', // 到期时间
											"membership_card_information_id": 0, // ID
						
				},
				disabledObj:{
								"member_number_isDisabled": false,
										"member_name_isDisabled": false,
										"membership_card_number_isDisabled": false,
										"membership_card_type_isDisabled": false,
										"price_isDisabled": false,
										"card_handling_time_isDisabled": false,
										"expiration_time_isDisabled": false,
										},

	
					// 用户列表
				list_user_member_number: [],
				
		
						// 会员卡类型选项列表
				list_membership_card_type: ['周卡','月卡','季卡','年卡'],
	
		
		
		
	
			}
		},
		methods: {


	
	
				/**
			 * 获取会员用户用户列表
			 */
			async get_list_user_member_number() {
                // if(this.user_group !== "管理员" && this.form["member_number"] === 0) {
                //     this.form["member_number"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=会员用户");
                if(json.result && json.result.list){
                    this.list_user_member_number = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_member_number(id){
				var obj = this.list_user_member_number.getObj({"user_id":id});
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
												        if (this.form["card_handling_time"].indexOf("-")===-1){
          this.form["card_handling_time"] = this.$toTime(parseInt(this.form["card_handling_time"]),"yyyy-MM-dd")
        }
			        if (this.form["expiration_time"].indexOf("-")===-1){
          this.form["expiration_time"] = this.$toTime(parseInt(this.form["expiration_time"]),"yyyy-MM-dd")
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


																	        if(this.form["card_handling_time"]=="0000-00-00"){
          this.form["card_handling_time"] = null;
        }
				if(parseInt(this.form["card_handling_time"]) > 9999){
					this.form["card_handling_time"] = this.$toTime(parseInt(this.form["card_handling_time"]),"yyyy-MM-dd")
				}
				        if(this.form["expiration_time"]=="0000-00-00"){
          this.form["expiration_time"] = null;
        }
				if(parseInt(this.form["expiration_time"]) > 9999){
					this.form["expiration_time"] = this.$toTime(parseInt(this.form["expiration_time"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/membership_card_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/membership_card_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/membership_card_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/membership_card_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/membership_card_information/view','get');
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
					this.get_list_user_member_number();
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
