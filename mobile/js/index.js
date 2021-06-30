var vm = new Vue({
	el: '#box',
	data: {
		// 路径
		url: 'http://www.huidait.cn/php/',
		// 图片路径
		// urlImg: 'http://www.huidait.cn/admin/php/images/',
		banners: []
	},
	mounted() {
		this.banner()
	},
	methods: {
		banner() {
			axios.get(this.url + 'banner.php').then(res => {
				console.log(res.data.bannerImgs)
				this.banners=res.data.bannerImgs
			})
		}


	}
})
