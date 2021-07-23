new Vue({
	el: '#app',
	data: {
		// url: 'http://192.168.43.216/item2/Hd-OutsourcingWebsite/php/',
		// url: 'http://192.168.7.108/item2/Hd-OutsourcingWebsite/php/',
		url: 'http://www.huidait.cn/php/',
		// imgUrl:'http://www.huidait.cn/php/images/',
		ifyprojects: [],
		ifyprojects_item: [],
		bannerImgs: [],
		banner_title: [],
		text: '',
		name: '',
		tel: ''
	},
	methods: {
		// 移入
		mouseOver() {
			console.log(111)
			$('.banner .top_serve')[0].style = "display:block"
		},
		// 移出
		mouseLeave() {
			$('.banner .top_serve')[0].style = "display:none";
		},
		// 咨询，跳到底部
		consult(e) {
			// window.scrollTo(0, document.documentElement.scrollHeight - document.documentElement
			// .clientHeight);
			$('.consult')[0].style = "display:block"
			$('#myModal').modal('hide')
			clearInterval(a)
		},
		close_consult() {
			$('.consult')[0].style = "display:none"
			this.openwin()
		},
		ban() {
			// 轮播
			let ban = this.url + "banner.php"
			axios.get(ban).then(res => {
				console.log(res.data)
				this.bannerImgs = res.data.bannerImgs
				this.banner_title = res.data.banner_title
				// console.log(this.banner_title)
			})
		},
		ifyproject() {
			axios.get(this.url + 'ifyproject.php').then(res => {
				console.log(res.data)
				this.ifyprojects = res.data
				this.ifyprojects_item = res.data[0].all
				this.ifyprojects.forEach((val, index) => {
					val['active'] = false
				})
				this.ifyprojects[0].active = true
			})
		},
		// 点击切换
		ifyprojectBtn(index) {
			this.ifyprojects_item = this.ifyprojects[index].all
			this.ifyprojects.forEach((val, index) => {
				val['active'] = false
			})
			this.ifyprojects[index].active = true
		},
		// 跳转app页面
		fun(index) {
			// console.log(index)
			if (this.banner_title[index] == 'APP开发') {
				window.open('./app.html')
			} else if (this.banner_title[index] == '小程序定制开发') {
				window.open('./applet.html')
			} else if (this.banner_title[index] == '电商平台开发') {
				window.open('./commerce.html')
			} else if (this.top_nav_c[index] == '网站建设开发') {
				window.location = 'website.html '
			}
		},
		// 留言板
		btn() {
			if (this.text == '') {
				alert('请输入留言内容')
				$('.text').focus()
				return
			}
			if (this.name == '') {
				alert('请输入用户名')
				$('.name').focus()
				return
			}
			if (this.tel == '') {
				alert('请输入手机号')
				$('.tel').focus()
				return
			}
			axios.get(this.url + 'liuyan.php', {
				params: {
					text: this.text,
					name: this.name,
					tel: this.tel,
				}
			}).then(res => {
				console.log(res.data)
				if (res.data == 'ok') {
					alert('留言已送达、2个小时内与您联系')
					$('.consult')[0].style = "display:none"
				}
			})
		},
		// 弹窗
		openwin() {
			a = setInterval(function () {
				$('#myModal').modal('show')
				$('body').removeClass('modal-open')
			}, 120000)
		}
	},
	mounted() {
		this.ban()
		this.ifyproject()
		this.openwin()
		$('#myModal').modal('show')
		$('body').removeClass('modal-open')
	},
})