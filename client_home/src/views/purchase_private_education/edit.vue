<template>
	<div class="diy_edit page_purchase_private_education" id="purchase_private_education_edit">
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
							<div v-if="$check_field('set','coach_no') || $check_field('add','coach_no') || $check_field('get','coach_no')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								教练编号:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_coach_no" :disabled="disabledObj['coach_no_isDisabled']" v-model="form['coach_no']" v-if="(form['coach_no'] && $check_field('set','coach_no')) || (!form['coach_no'] && $check_field('add','coach_no'))" >
								<option v-for="o in list_user_coach_no" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','coach_no')">{{ form['coach_no'] }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','coach_name') || $check_field('add','coach_name') || $check_field('get','coach_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								教练姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_coach_name" v-model="form['coach_name']" placeholder="请输入教练姓名" v-if="(form['coach_name'] && $check_field('set','coach_name')) || (!form['coach_name'] && $check_field('add','coach_name'))"  :disabled="disabledObj['coach_name_isDisabled']"/>
							<span v-else-if="$check_field('get','coach_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_no') || $check_field('add','course_no') || $check_field('get','course_no')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程编号:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_no" v-model="form['course_no']" placeholder="请输入课程编号" v-if="(form['course_no'] && $check_field('set','course_no')) || (!form['course_no'] && $check_field('add','course_no'))"  :disabled="disabledObj['course_no_isDisabled']"/>
							<span v-else-if="$check_field('get','course_no')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_name') || $check_field('add','course_name') || $check_field('get','course_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程名称:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_name" v-model="form['course_name']" placeholder="请输入课程名称" v-if="(form['course_name'] && $check_field('set','course_name')) || (!form['course_name'] && $check_field('add','course_name'))"  :disabled="disabledObj['course_name_isDisabled']"/>
							<span v-else-if="$check_field('get','course_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_classification') || $check_field('add','course_classification') || $check_field('get','course_classification')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程分类:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_classification" v-model="form['course_classification']" placeholder="请输入课程分类" v-if="(form['course_classification'] && $check_field('set','course_classification')) || (!form['course_classification'] && $check_field('add','course_classification'))"  :disabled="disabledObj['course_classification_isDisabled']"/>
							<span v-else-if="$check_field('get','course_classification')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_price') || $check_field('add','course_price') || $check_field('get','course_price')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程价格:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_price" v-model="form['course_price']" placeholder="请输入课程价格" v-if="(form['course_price'] && $check_field('set','course_price')) || (!form['course_price'] && $check_field('add','course_price'))"  :disabled="disabledObj['course_price_isDisabled']"/>
							<span v-else-if="$check_field('get','course_price')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_time') || $check_field('add','course_time') || $check_field('get','course_time')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程时间:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_time" v-model="form['course_time']" placeholder="请输入课程时间" v-if="(form['course_time'] && $check_field('set','course_time')) || (!form['course_time'] && $check_field('add','course_time'))"  :disabled="disabledObj['course_time_isDisabled']"/>
							<span v-else-if="$check_field('get','course_time')">{{ form['${obj.name}'] }}</span>
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
							<div v-if="$check_field('set','time_of_appointment') || $check_field('add','time_of_appointment') || $check_field('get','time_of_appointment')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约时间:
							</span>
						</div>
								<!-- 日长 -->
						<div class="diy_field diy_datetime">
							<input type="datetime-local" :disabled="disabledObj['time_of_appointment_isDisabled']" id="form_time_of_appointment" v-model="form['time_of_appointment']" placeholder="请输入预约时间" v-if="(form['time_of_appointment'] && $check_field('set','time_of_appointment')) || (!form['time_of_appointment'] && $check_field('add','time_of_appointment'))" />
							<span v-else-if="$check_field('get','time_of_appointment')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
	


					<div v-if="user_group === '管理员' || $check_examine()" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								审核状态:
							</span>
						</div>
						<div class="diy_field diy_select" v-if="$check_action('/purchase_private_education/edit','examine')">
							<!--<span> {{ form['examine_state'] }} </span>-->
							<select v-model="form['examine_state']">
								<option value="未审核">
									未审核
								</option>
								<option value="已通过">
									已通过
								</option>
								<option value="未通过">
									未通过
								</option>
							</select>
						</div>
						<div class="diy_field diy_text" v-else>
							<span>
								{{ form['examine_state'] }}
							</span>
						</div>
					</div>
					<div v-if="user_group === '管理员' || $check_examine()" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								审核回复:
							</span>
						</div>
						<div class="diy_field diy_desc" v-if="$check_action('/purchase_private_education/edit','examine')">
							<textarea v-model="form['examine_reply']"></textarea>
						</div>
						<div class="diy_field diy_text" v-else>
							<span>
								{{ form['examine_reply'] }}
							</span>
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
				url_get_obj: "~/api/purchase_private_education/get_obj?",
				url_add: "~/api/purchase_private_education/add?",
				url_set: "~/api/purchase_private_education/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"order_number": "",
							"coach_no": 0,
							"coach_name": "",
							"course_no": "",
							"course_name": "",
							"course_classification": "",
							"course_price": "",
							"course_time": "",
							"member": 0,
							"member_name": "",
							"time_of_appointment": "",
						"purchase_private_education_id": 0,
				},

				obj: {
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
							"time_of_appointment": new Date().getTime(),
						"examine_state": "未审核",
					"examine_reply": "",
					"purchase_private_education_id": 0,
				},

				// 表单字段
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
							"time_of_appointment": new Date().getTime(),
						"examine_state": "未审核",
					"examine_reply": "",
					"purchase_private_education_id": 0,
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
					
				// ID字段
				field: "purchase_private_education_id",

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
	
				
				
	
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/purchase_private_education/upload?", form, (res) => {
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
																					        if (JSON.stringify(this.form["time_of_appointment"]).indexOf("-")===-1) {
          this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]), "yyyy-MM-ddThh:mm")
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
									this.get_list_user_coach_no();
																								this.get_user_session_member();
					this.get_list_user_member();
									},
	}
</script>

<style>




</style>
