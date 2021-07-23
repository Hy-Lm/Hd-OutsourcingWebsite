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
        // 课程中心
		course_item: [{
                img:'./images/Payment@3x.png',
                con1:'B2C商城系统',
                con2:'商城端口全',
                con3:'多平台对接，上下游全打通'
            },
            {
                img:'./images/Shoping@3x.png',
                con1:'O2O商城系统',
                con2:'3大主流O2O模式',
                con3:' “门店+商城”一体化管理'
            },
            {
                img:'./images/OpenanOnlineStore@3x.png',
                con1:'B2B商城系统',
                con2:'零售+批发+分销模式实现',
                con3:'商家“分散经营，集中管理”'
            },
            {
                img:'./images/BigSale@3x.png',
                con1:'B2B2C商城系统',
                con2:'业务模块多',
                con3:'构建“小京东”电商平台'
            }
        ],
		kernel:[
			{
				img:'./images/7d99c246-20e1-4ad5-bfe3-0a754d843087_origin@3x.png',
				con1:'系统不断更新',
				con2:'互联网时代的变化日新月异,每周更新小版本，升级永无止境'
			},
			{
				img:'./images/多式联运系统@3x.png',
				con1:'支持定制开发',
				con2:'符合大众的淘客系统才是好系统,网坛科技淘客全面满足您的开发定制需求'
			},
			{
				img:'./images/计费系统@3x.png',
				con1:'支持各种淘客',
				con2:'淘客APP,开发定制,返利APP,淘客APP系统,原生淘客APP'
			},
			{
				img:'./images/智能调度平台系统@3x.png',
				con1:'系统技术完善',
				con2:'多元化平台特色促销功能,配合多终端的覆盖,让淘客可以更好的营销'
			}
		],
		select:[
			{
				con1:'./images/no1@3x.png',
				con2:'一流技术团队',
				con3:'80%骨干技术来自BAT',
			},
			{
				con1:'./images/12+@3x.png',
				con2:'12家500强企业',
				con3:'为大量知名企业提供系统服务',
			},
			{
				con1:'./images/sji@3x.png',
				con2:'S级成长性系统',
				con3:'S级成长性满足企业发展需求',
			},
			{
				con1:'./images/100baifenbai@3x.png',
				con2:'全渠道解决方案',
				con3:'获得100%好评反馈率',
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
		// 遮罩层
		mask() {
			this.active = !this.active
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
				window.location='App.html '
			}else if(this.top_nav_c[index]=='首页'){
				window.location=' index.html '
			}else if(this.top_nav_c[index]=='小程序定制开发'){
				window.location='applet.html '
			}else if(this.top_nav_c[index]=='网站建设开发'){
				window.location='website.html '
			}
		},

	}
})
