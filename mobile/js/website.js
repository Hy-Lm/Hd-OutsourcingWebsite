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
            img: '../image/OBJECTS@3x.png',
            con1: '网站建设',
            con2: '专业定制网站建设',
            show1:'专业网站建设',
            
            show2:'企业品牌网站建设',
            show3:'集团上市公司官网',
            show4:'产品展示、商城网站',
            show5:'行业门户网站建设',
            show:'重新设计定制建设网站'
        },
        {
            img: '../image/手机音乐检测@3x.png',
            con1: '手机网站',
            con2: '建设手机网站或响应式网站',
            show1:'手机网站',
            show2:'响应式(电脑+手机)',
            show3:'手机端网站建设',
            show4:'创意H5设计制作',
            show5:'线上推广H5页面',
            show6:''
        },
        {
            img: '../image/Web-开发@3x.png',
            con1: '微信小程序',
            con2: '小程序、APP定制开发',
            show1:'微信小程序',
            show2:'移动APP商城',
            show3:'移动互联网产品开发',
            show4:'微信小程序',
            show5:'企业网站生成APP',
            show6:''
        },
        {
            img: '../image/域名空间@3x.png',
            con1: '域名空间',
            con2: '国内、国外空间服务器',
            show1:'域名空间',
            show2:'国内、国际顶级域名',
            show3:'阿里云虚拟空间',
            show4:'网站服务器',
            show5:'免费提供域名空间备案服务',
            show6:''
        } ],
		kernel: [
            {
                img: '../image/咨询沟通@3x.png',
                con1: '咨询沟通',
                con2: '确定网站建设功能、价格及建设周期'
            },
            {
                img: '../image/设计制作@3x.png',
                con1: '设计、制作网站',
                con2: '设计网站效果图、开发建设网站程序'
            },
            {
                img: '../image/测试@3x.png',
                con1: '网站测试',
                con2: '建设好网站,客户测试确认完成'
            },
            {
                img: '../image/开发网站指示板@3x.png',
                con1: '域名空间备案、上线',
                con2: '申请域名空间、提交备案修改网站细节,备案通过、细节修改完成上线'
            }
        ],
		active: false
	},
	mounted() {
		this.banner()
		this.ifyprojects()
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
		// 项目
		ifyprojects() {
			axios.get(this.url + 'ifyproject.php').then(res => {
				this.ifyproject = res.data[0].all.splice(0, 6)
			})
		},
		// 服务介绍移入
		overshow(index) {
			for(var i = 0 ;i<$('.show').length; i++){

				if(i == index){
					$('.show')[i].style = "display:block;transform: translateY(-100%);transition: 1s;"
				}else{
					$('.show')[i].style="display:none;"
				}
			}
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
			}else if(this.top_nav_c[index]=='电商平台开发'){
				window.location='commerce.html '
			}
		},

	}
})
