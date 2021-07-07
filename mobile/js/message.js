var vm = new Vue({
	el:'#box1',
	data:{
			// 路径
			url: 'http://www.huidait.cn/php/',
			// url:'http://localhost/item2/Hd-OutsourcingWebsite/php/',
			text:'',
			name:'',
			tel:''
	},
	methods:{
		btn(){
			if(this.text==''){
				alert('请输入留言内容')
				$('.text').focus()
				return
			}
			if(this.name==''){
				alert('请输入用户名')
				$('.name').focus()
				return
			}
			if(this.tel==''){
				alert('请输入手机号')
				$('.tel').focus()
				return
			}
			axios.get(this.url+'liuyan.php',{
				params:{
					text:this.text,
					name:this.name,
					tel:this.tel,
				}
			}).then(res=>{
				console.log(res.data)
				if(res.data=='ok'){
					alert('留言已送达、2个小时内与您联系')
					setTimeout(()=>{
						window.location='index.html'
					},100)
				}
			})
		}
	}
})