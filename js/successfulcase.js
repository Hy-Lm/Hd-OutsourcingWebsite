	new Vue({
			el: '#app',
			data: {
				url:'http://192.168.8.103/item2/Hd-OutsourcingWebsite/php/',
				imgUrl:'http://192.168.8.103/item2/Hd-OutsourcingWebsite/php/images/',
				ifyprojects:[],
				ifyprojects_item:[]
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
				},
				// 点击切换
				ifyprojectBtn(index){
					this.ifyprojects_item=this.ifyprojects[index].all
					this.ifyprojects.forEach((val,index)=>{
						val['active']=false
					})
					this.ifyprojects[index].active=true
				}
			},
			mounted() {
				this.ifyproject()
			},
		})