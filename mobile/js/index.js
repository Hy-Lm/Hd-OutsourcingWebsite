var vm = new Vue({
	el: '#box',
	data: {
		// 路径
		url: 'http://www.huidait.cn/php/',
		// url: 'http://192.168.7.108/item2/Hd-OutsourcingWebsite/php/',
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
		flows:[
			{
				img:'../image/zhece-icon.png',
				con1:'微信公众平台',
				con2:'注册小程序账号'
			},
			{
				img:'../image/shouquan-icon.png',
				con1:'授权小程序',
				con2:''
			},
			{
				img:'../image/muban-icon.png',
				con1:'选择模板',
				con2:'生成小程序代码'
			},
			{
				img:'../image/tijiao-icon.png',
				con1:'一键提交微信',
				con2:'平台审核'
			},
			{
				img:'../image/tongguo-icon.png',
				con1:'审核通过',
				con2:'发布小程序'
			},
		],
		abroads:[
			{
				img:'../image/zhengfu-icon.png',
				con:'政府',
			},
			{
				img:'../image/jiudian-icon.png',
				con:'酒店',
			},
			{
				img:'../image/lvyou-icon.png',
				con:'旅游',
			},
			{
				img:'../image/jiaoyu-icon.png',
				con:'教育',
			},
			{
				img:'../image/yanchu-icon.png',
				con:'演出',
			},
			{
				img:'../image/canyin-icon.png',
				con:'餐饮',
			}
		],
		active: false
	},
	mounted() {
		this.banner()
		if(window.pageYOffset<=500){
			this.backs=false
		}
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
	
		// 弹出弹窗
		Btn() {
			this.active = !this.active
		},

		top_nav_cc(index) {
			this.active=false
			this.ind = index
			console.log(this.top_nav_c[index])
			if(this.top_nav_c[index]=='关于我们'){
				window.location='intro.html'
			}else if(this.top_nav_c[index]=='APP开发'){
				window.location=' App.html '
			}
		},

	}
})
