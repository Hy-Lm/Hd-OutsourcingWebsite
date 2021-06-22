	new Vue({
			el: '#app',
			data: {
				url:'http://192.168.8.103/item2/Hd-OutsourcingWebsite/php/',
				imgUrl:'http://192.168.8.103/item2/Hd-OutsourcingWebsite/php/images/',
				ifyprojects:[],
				ifyprojects_item:[],
				bannerImgs: [],
					banner_title: [],
			},
			methods: {
				
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