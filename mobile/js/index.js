var vm = new Vue({
	el: '#box',
	data: {
		// 路径
		url: 'http://www.huidait.cn/php/',
		// 图片路径
		// urlImg: 'http://www.huidait.cn/admin/php/images/',
		mskss:false,
		backs: true,
		banners: [],
		top_nav_c: ['首页', '成功案例', '关于我们'], //标题
		ind: 0,
		// 切换状态
		styleobj1: {
			"color": "#0300bf"
		},
		styleobj2: {
			'color': '#000000'
		},
		inds: 0,
		// 切换状态
		style1: {
			"transform": "scale(1.2)",
			"fontWeight": "900",
			"color": "#000000"
		},
		style2: {
			'color': '#333333'
		},
		//行业
		industry_items: [],
		industry_index: 0,
		big_title: '',
		big_title_con: '',
		small_img: [],
		small_title: [],
		small_title_con: [],
		// 网站建设
		construction_items: [{
				img: './images/dingzhi-icon.svg',
				title: '电商解决方案',
				con: '结合多年开发经验及市场深度调研，需求整合 制定开发方案开发项目包括 微网后台。'
			},
			{
				img: './images/jiejue-icon.svg',
				title: '小程序解决方案',
				con: '基于微信架构原生,拥有在线城几十种促销工具支持,满足客户对各产品各方面的业务需求'
			},
			{
				img: './images/APP开发-icon.png',
				title: 'APP解决方案',
				con: '品牌产品定位，到卓越的应用策划、创意，满足客户对产品各方面业务需求。'
			},
			{
				img: './images/qukuailian-icon.svg',
				title: '区块链解决方案',
				con: '基于区块链Web3.js技术搭建，使得传统行业可以很低成本的享受区块链带来的便利。'
			}
		],
		// 服务
		serve_item: [{
				img: './images/jianzhan-icon.svg',
				con: '建站'
			},
			{
				img: './images/kongjian-icon.svg',
				con: '空间'
			},
			{
				img: './images/yuming-icon.svg',
				con: '域名'
			},
			{
				img: './images/e30cedcd21fbceff981b33fd6559378.png',
				con: '备案'
			},
			{
				img: './images/shouhou-icon.svg',
				con: '售后'
			}
		],
		safeguard_items: [{
				img: './images/wending-icon.svg',
				con: '稳定'
			},
			{
				img: './images/82844d3a2936d355e3b7f7999f76353.png',
				con: '安全'
			},
			{
				img: './images/jisu-icon.svg',
				con: '急速'
			},
			{
				img: './images/zhoudao-icon.svg',
				con: '周到'
			},
			{
				img: './images/tiexin-icon.svg',
				con: '贴心'
			}
		],
		// 项目
		ifyproject_con: ['天津连锁品牌养车APP', '轻听,倾听,轻生活', '会养道,会生活', '一款线上电子产品APP', '大人孩子都能拼出自己的世界', '生活里遇见最美的自己'],
		ifyproject: [

		],
		// 新闻
		neww: [],
		new_img: [
			'./images/xinwen-1@2x.png',
			'./images/xinwen-2@2x.png',
			'./images/xinwen-3@2x.png',
			'./images/xinwen-4@2x.png'
		],
		active: false
	},
	mounted() {
		this.banner()
		this.industry()
		this.ifyprojects()
		this.news()
		// 滚动条的获取
		window.addEventListener('scroll', this.handleScrollx, true)
	},
	methods: {
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
		},
		 handleScrollx() {
		          // console.log('滚动高度', window.pageYOffset)
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
		// 遮罩层
		mask() {
			this.active = !this.active
		},
		banner() {
			axios.get(this.url + 'banner.php').then(res => {
				// console.log(res.data)
				this.banners = res.data.bannerImgs
				var num = 0;
				res.data.banner_title.forEach(res => {
					num++;
					this.top_nav_c.splice(0 + num, 0, res)
				})
				// console.log(this.top_nav_c)
			})
		},
		
		// 行业
		industry() {
			axios.get(this.url + 'industry.php').then(res => {
				this.industry_items = res.data.splice(0, 5)
				this.big_title = this.industry_items[this.industry_index].big_title
				this.big_title_con = this.industry_items[this.industry_index].big_title_con
				this.small_img = this.industry_items[this.industry_index].small_img
				this.small_title = this.industry_items[this.industry_index].small_title
				this.small_title_con = this.industry_items[this.industry_index].small_title_con
				// console.log(this.industry_items )
			})
		},
		// 项目
		ifyprojects() {
			axios.get(this.url + 'ifyproject.php').then(res => {
				// console.log(res.data[0].all.splice(0,6))
				this.ifyproject = res.data[0].all.splice(0, 6)
			})
		},
		// 弹出弹窗
		Btn() {
			this.active = !this.active
		},
		// 新闻动态
		news() {
			axios.get(this.url + 'news.php').then(res => {
				// console.log(res)
				this.neww = res.data
			})
		},
		top_nav_cc(index) {
			this.ind = index
			if(this.top_nav_c[index]=='关于我们'){
				window.location='intro.html'
			}
		},
		// 行业状态切换
		industrys(index) {

			this.inds = index
			this.industry_index = index
			this.big_title = this.industry_items[this.industry_index].big_title
			this.big_title_con = this.industry_items[this.industry_index].big_title_con
			this.small_img = this.industry_items[this.industry_index].small_img
			this.small_title = this.industry_items[this.industry_index].small_title
			this.small_title_con = this.industry_items[this.industry_index].small_title_con
		}
	}
})
