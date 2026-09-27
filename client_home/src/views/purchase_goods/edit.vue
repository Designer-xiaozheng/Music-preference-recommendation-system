<template>
	<div class="diy_edit page_purchase_goods" id="purchase_goods_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','order_number') || $check_field('add','order_number') || $check_field('get','order_number')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								订单号:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_order_number" v-model="form['order_number']" placeholder="请输入订单号" v-if="(form['order_number'] && $check_field('set','order_number')) || (!form['order_number'] && $check_field('add','order_number'))" :disabled="true"/>
							<span v-else-if="$check_field('get','order_number')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','article_no') || $check_field('add','article_no') || $check_field('get','article_no')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								商品编号:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_article_no" v-model="form['article_no']" placeholder="请输入商品编号" v-if="(form['article_no'] && $check_field('set','article_no')) || (!form['article_no'] && $check_field('add','article_no'))"  :disabled="disabledObj['article_no_isDisabled']"/>
							<span v-else-if="$check_field('get','article_no')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','trade_name') || $check_field('add','trade_name') || $check_field('get','trade_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								商品名称:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_trade_name" v-model="form['trade_name']" placeholder="请输入商品名称" v-if="(form['trade_name'] && $check_field('set','trade_name')) || (!form['trade_name'] && $check_field('add','trade_name'))"  :disabled="disabledObj['trade_name_isDisabled']"/>
							<span v-else-if="$check_field('get','trade_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','brand') || $check_field('add','brand') || $check_field('get','brand')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								品牌:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_brand" v-model="form['brand']" placeholder="请输入品牌" v-if="(form['brand'] && $check_field('set','brand')) || (!form['brand'] && $check_field('add','brand'))"  :disabled="disabledObj['brand_isDisabled']"/>
							<span v-else-if="$check_field('get','brand')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','specifications') || $check_field('add','specifications') || $check_field('get','specifications')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								规格:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_specifications" v-model="form['specifications']" placeholder="请输入规格" v-if="(form['specifications'] && $check_field('set','specifications')) || (!form['specifications'] && $check_field('add','specifications'))"  :disabled="disabledObj['specifications_isDisabled']"/>
							<span v-else-if="$check_field('get','specifications')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','price') || $check_field('add','price') || $check_field('get','price')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								价格:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_price" v-model="form['price']" placeholder="请输入价格" v-if="(form['price'] && $check_field('set','price')) || (!form['price'] && $check_field('add','price'))"  :disabled="disabledObj['price_isDisabled']"/>
							<span v-else-if="$check_field('get','price')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','member') || $check_field('add','member') || $check_field('get','member')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								会员:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_member" :disabled="disabledObj['member_isDisabled']" v-model="form['member']" v-if="(form['member'] && $check_field('set','member')) || (!form['member'] && $check_field('add','member'))" >
								<option v-for="o in list_user_member" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','member')">{{ form['member'] }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','member_name') || $check_field('add','member_name') || $check_field('get','member_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								会员姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_member_name" v-model="form['member_name']" placeholder="请输入会员姓名" v-if="(form['member_name'] && $check_field('set','member_name')) || (!form['member_name'] && $check_field('add','member_name'))"  :disabled="disabledObj['member_name_isDisabled']"/>
							<span v-else-if="$check_field('get','member_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','purchase_quantity') || $check_field('add','purchase_quantity') || $check_field('get','purchase_quantity')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								购买数量:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_purchase_quantity" v-model="form['purchase_quantity']" placeholder="请输入购买数量" v-if="(form['purchase_quantity'] && $check_field('set','purchase_quantity')) || (!form['purchase_quantity'] && $check_field('add','purchase_quantity'))"  :disabled="disabledObj['purchase_quantity_isDisabled']"/>
							<span v-else-if="$check_field('get','purchase_quantity')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','total_price') || $check_field('add','total_price') || $check_field('get','total_price')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								总价:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_total_price" v-model="form['total_price']" placeholder="请输入总价" v-if="(form['total_price'] && $check_field('set','total_price')) || (!form['total_price'] && $check_field('add','total_price'))"  @focus="set_total_price()" :disabled="disabledObj['total_price_isDisabled']"/>
							<span v-else-if="$check_field('get','total_price')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
	




				</div>
				<div class="diy_edit_submit_box row">
					<div class="col-12">
						<div class="btn_box">
							<button class="btn_submit" @click="submit()">提交</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mixin from "@/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_get_obj: "~/api/purchase_goods/get_obj?",
				url_add: "~/api/purchase_goods/add?",
				url_set: "~/api/purchase_goods/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"order_number": "",
							"article_no": "",
							"trade_name": "",
							"brand": "",
							"specifications": "",
							"price": "",
							"member": 0,
							"member_name": "",
							"purchase_quantity": "",
							"total_price": "",
						"purchase_goods_id": 0,
				},

				obj: {
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
						"purchase_goods_id": 0,
				},

				// 表单字段
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
						"purchase_goods_id": 0,
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
							
				// ID字段
				field: "purchase_goods_id",

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
					async get_user_session_member(){
				var _this = this;
				var json = await this.$get("~/api/user_group/get_obj?name=会员用户");
				if(json.result && json.result.obj){
					var source_table = json.result.obj.source_table;
					var user_id = _this.$store.state.user.user_id;
					if (user_id){
						var url = "~/api/"+source_table+"/get_obj?"
						this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
							if (res.result && res.result.obj) {
								var arr = []
								for (let key in res.result.obj) {
									arr.push(key)
								}
								var arrForm = []
								for (let key in _this.form) {
									arrForm.push(key)
								}
								_this.form["member"] = user_id
								_this.disabledObj['member' + '_isDisabled'] = true
								for (var i=0;i<arr.length;i++){
                  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== "member") {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]]
                          _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                          break;
                        }
                      }
                    }
                  }
								}
							}
						});
					}
				}
				else if(json.error){
					console.error(json.error);
				}
			},
	
				
				
				
									set_total_price(){
				this.form.total_price = parseFloat(this.form.price) * parseFloat(this.form.purchase_quantity)
        let r = /^\+?[1-9][0-9]*$/; // 正整数
        if(!r.test(this.form.total_price) ){
          this.form.total_price = this.form.total_price.toFixed(2);
        }
			},
						
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/purchase_goods/upload?", form, (res) => {
					if (res.result) {
						this.form[str] = res.result.url;
					} else if (res.error) {
						this.$toast(res.error.message);
					}
				});
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_before(param){
				var form = $.db.get("form");
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
        //   this.obj = $.push(this.obj ,form);
				// 	this.form = $.push(this.form ,form);
				// }
				// var arr = []
				// for (let key in form) {
				// 	arr.push(key)
				// }
				// for (var i=0;i<arr.length;i++){
				// 	this.disabledObj[arr[i] + '_isDisabled'] = true
				// }
        if (form) {
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
            }
          }
        }
																				
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
				// var form = $.db.get("form");
				// var obj = Object.assign({} ,form ,this.obj);
				// if (obj) {
        //   delete(obj.examine_state)
        //   delete(obj.examine_reply)
				// 	this.obj = $.push(this.obj ,obj);
				// }
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
				// 	this.form = $.push(this.form ,form);
				// }
				if(func){
					func(json);
				}
			},

		},
		created() {
																							this.get_user_session_member();
					this.get_list_user_member();
												},
	}
</script>

<style>




</style>
