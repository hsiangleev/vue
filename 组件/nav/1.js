
(function (w){
	var tem={
		props: ["message"],
		template: `<div class="box">
			<ul class="clearfix">
				<li v-for="val in arr"><a :href="val.src" :class="{current: val.isTrue}">{{ val.msg }}</a></li>
			</ul>
		</div>`,
		data: function (){
			return {
				arr: [
					{msg: "aaa",src: "1.html",isTrue: false},
					{msg: "sss",src: "2.html",isTrue: false},
					{msg: "ddd",src: "3.html",isTrue: false},
					{msg: "xxx",src: "#",isTrue: false},
					{msg: "bbb",src: "#",isTrue: false},
					{msg: "nnn",src: "#",isTrue: false},
					{msg: "jjj",src: "#",isTrue: false},
					{msg: "zzz",src: "#",isTrue: false}
				]
			}
		},
		// 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置： 数据观测(data
		// observer)，属性和方法的运算，watch/event 事件回调。 然而，挂载阶段还没开始，$el
		// 属性目前不可见。
		//加载之后自动执行
		created: function (){
			this.arr[this.message].isTrue=true;
		}
	}
	var vm=new Vue({
		el: "#app",
		components: {
			"mybox": tem
		}
	})
})(window)