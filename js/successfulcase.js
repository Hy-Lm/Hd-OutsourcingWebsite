	new Vue({
			el: '#app',
			data: {
				// url: 'http://192.168.7.108/item2/Hd-OutsourcingWebsite/php',
				url:'http://www.huidait.cn/php',
				imgUrl:'http://www.huidait.cn/php/images/',
				ifyprojects:[],
				ifyprojects_item:[],
				bannerImgs: [],
				banner_title: [],
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
				ifyproject(){
					axios.get(this.url+'ifyproject.php').then(res=>{
						// console.log(res)
						this.ifyprojects=res.data
						this.ifyprojects_item=res.data[0].all
						this.ifyprojects.forEach((val,index)=>{
							val['active']=false
						})
						this.ifyprojects[0].active=true
					})
					// 轮播
					let ban = this.url + "/banner.php"
					axios.get(ban).then(res => {
						console.log(res.data)
						this.bannerImgs = res.data.bannerImgs
						this.banner_title = res.data.banner_title
						// console.log(this.banner_title)
					})
				},
				// 点击切换
				ifyprojectBtn(index){
					this.ifyprojects_item=this.ifyprojects[index].all
					this.ifyprojects.forEach((val,index)=>{
						val['active']=false
					})
					this.ifyprojects[index].active=true
				},
				// 跳转app页面
				fun(index) {
					// console.log(index)
					if (this.banner_title[index] == 'APP开发') {
						window,open('app.html')
					}
				},
			},
			mounted() {
				this.ifyproject()
			},
		})