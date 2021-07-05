var vm = new Vue({
	el: '#app',
	data: {
		// 路径
		url: 'http://www.huidait.cn/php/',
		// url: 'http://192.168.7.108/item2/Hd-OutsourcingWebsite/php/',
		// 电话隐藏
		mskss:false,
		backs: true,
		// 项目
		ifyproject: [],
		advantages:[
			{
				img:'images/zhuanye-icon@2x.png',
				name:'专业性强',
				title:'Strong Professional',
				con:'资深策划进行逻辑分析与最优实现方式，专业技术团队进行开发，适用性强、标准化验收，确保正常上线'
			},
			{
				img:'images/jiage-icon@2x.png',
				name:'价格透明',
				title:'Price Transparency',
				con:'免费提供合作方案，公共报价，让客户清晰知道每一笔投入，产生的价值所在'
			},
			{
				img:'images/kaifa-icon@2x.png',
				name:'开发周期短',
				title:'Short Development',
				con:'数十位专业的技术开发团队，强大的研发能力，快速实现需求，产品运作稳定'
			},
			{
				img:'images/anquan-icon@2x.png',
				name:'安全性高',
				title:'Strong Professional',
				con:'项目开发前，签订正规合同，提供官方保障；项目完成后，提供源码服务确保产品安全'
			}
		]
	},
	mounted() {
		this.ifyprojects()
		if(window.pageYOffset<=500){
			this.backs=false
		}
		// 滚动条的获取
		window.addEventListener('scroll', this.handleScrollx, true)
	},
	methods: {
		zixun(){
			window.location="message.html"
		},
		 handleScrollx() {
				  if(window.pageYOffset<=500){
					  this.backs=false
				  }else{
					  this.backs=true
				  }
		        },
		// 回到顶部
		back() {
			let top = document.documentElement.scrollTop || document.body.scrollTop;
			// 实现滚动效果 
			const timeTop = setInterval(() => {
				document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
				if (top <= 0) {
					clearInterval(timeTop);
				}
			}, 10);
		},
		// 项目
		ifyprojects() {
			axios.get(this.url + 'ifyproject.php').then(res => {
				this.ifyproject = res.data[0].all.splice(0, 6)
			})
		},
		// 电话遮罩
		telBtn(){
			this.mskss=true
		},
		msksss(){
			this.mskss=!this.mskss
		},
		// 咨询客服
		zixun(){
			window.location="message.html"
		}
	}
})
