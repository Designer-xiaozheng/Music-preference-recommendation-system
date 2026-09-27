<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','order_number') || $check_field('add','order_number') || $check_field('set','order_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="订单号" prop="order_number">
												<el-input id="order_number" v-model="form['order_number']" placeholder="请输入订单号"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','order_number')) || (!form['purchase_goods_id'] && $check_field('add','order_number'))" :disabled="true"></el-input>
					<div v-else-if="$check_field('get','order_number')">{{form['order_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','article_no') || $check_field('add','article_no') || $check_field('set','article_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品编号" prop="article_no">
												<el-input id="article_no" v-model="form['article_no']" placeholder="请输入商品编号"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','article_no')) || (!form['purchase_goods_id'] && $check_field('add','article_no'))" :disabled="disabledObj['article_no_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','article_no')">{{form['article_no']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','trade_name') || $check_field('add','trade_name') || $check_field('set','trade_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="trade_name">
												<el-input id="trade_name" v-model="form['trade_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','trade_name')) || (!form['purchase_goods_id'] && $check_field('add','trade_name'))" :disabled="disabledObj['trade_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','trade_name')">{{form['trade_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','brand') || $check_field('add','brand') || $check_field('set','brand')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="品牌" prop="brand">
												<el-input id="brand" v-model="form['brand']" placeholder="请输入品牌"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','brand')) || (!form['purchase_goods_id'] && $check_field('add','brand'))" :disabled="disabledObj['brand_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','brand')">{{form['brand']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','specifications') || $check_field('add','specifications') || $check_field('set','specifications')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="规格" prop="specifications">
												<el-input id="specifications" v-model="form['specifications']" placeholder="请输入规格"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','specifications')) || (!form['purchase_goods_id'] && $check_field('add','specifications'))" :disabled="disabledObj['specifications_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','specifications')">{{form['specifications']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','price') || $check_field('add','price') || $check_field('set','price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="价格" prop="price">
												<el-input id="price" v-model="form['price']" placeholder="请输入价格"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','price')) || (!form['purchase_goods_id'] && $check_field('add','price'))" :disabled="disabledObj['price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','price')">{{form['price']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','member') || $check_field('add','member') || $check_field('set','member')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="会员" prop="member">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_member(form['member']) }}
							<!--<el-input id="business_name" v-model="form['member']" placeholder="请输入会员"-->
							<!--v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','member')) || (!form['purchase_goods_id'] && $check_field('add','member'))" :disabled="disabledObj['member_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','member')">{{form['member']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','member')) || (!form['purchase_goods_id'] && $check_field('add','member'))" id="member" v-model="form['member']" :disabled="disabledObj['member_isDisabled']">
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
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','member_name')) || (!form['purchase_goods_id'] && $check_field('add','member_name'))" :disabled="disabledObj['member_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','member_name')">{{form['member_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','purchase_quantity') || $check_field('add','purchase_quantity') || $check_field('set','purchase_quantity')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="购买数量" prop="purchase_quantity">
												<el-input id="purchase_quantity" v-model="form['purchase_quantity']" placeholder="请输入购买数量"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','purchase_quantity')) || (!form['purchase_goods_id'] && $check_field('add','purchase_quantity'))" :disabled="disabledObj['purchase_quantity_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','purchase_quantity')">{{form['purchase_quantity']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','total_price') || $check_field('add','total_price') || $check_field('set','total_price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="总价" prop="total_price">
												<el-input id="total_price" v-model="form['total_price']" placeholder="请输入总价"
							  v-if="user_group === '管理员' || (form['purchase_goods_id'] && $check_field('set','total_price')) || (!form['purchase_goods_id'] && $check_field('add','total_price'))"  @focus="set_total_price()" :disabled="disabledObj['total_price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','total_price')">{{form['total_price']}}</div>
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
				field: "purchase_goods_id",
				url_add: "~/api/purchase_goods/add?",
				url_set: "~/api/purchase_goods/set?",
				url_get_obj: "~/api/purchase_goods/get_obj?",
				url_upload: "~/api/purchase_goods/upload?",

				query: {
					"purchase_goods_id": 0,
				},

				form: {
								"order_number": this.$get_stamp(), // 订单号
										"article_no":  '', // 商品编号
										"trade_name":  '', // 商品名称
										"brand":  '', // 品牌
										"specifications":  '', // 规格
										"price":  '', // 价格
										"member": 0, // 会员
										"member_name":  '', // 会员姓名
										"purchase_quantity":  '', // 购买数量
										"total_price":  '', // 总价
											"purchase_goods_id": 0, // ID
						
				},
				disabledObj:{
								"order_number_isDisabled": false,
										"article_no_isDisabled": false,
										"trade_name_isDisabled": false,
										"brand_isDisabled": false,
										"specifications_isDisabled": false,
										"price_isDisabled": false,
										"member_isDisabled": false,
										"member_name_isDisabled": false,
										"purchase_quantity_isDisabled": false,
										"total_price_isDisabled": false,
										},

	
		
		
		
		
		
		
					// 用户列表
				list_user_member: [],
						// 用户组
				group_user_member: "",
				
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
			
	
			
	
			
	
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
			
	
			
	
			
	
										set_total_price(){
				this.form.total_price = parseFloat(this.form.price) * parseFloat(this.form.purchase_quantity)
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
					bl = this.$check_action('/purchase_goods/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_goods/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_goods/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_goods/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/purchase_goods/view','get');
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
