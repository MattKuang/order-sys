import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dishesData:[  //这里存储菜品的数据

		],

		orderData:[	//这里存储订单页的数据

		],

		login:{	//这里存储的是用户的登录信息
			userName:'',
			isLogin:false,	//这个属性代表当前用户是否登录，登录(true)，否则（false）
		}
	},
	getters:{
		getDishesData(state){	//用来获取菜品数据
			return state.dishesData;
		},

		getOrderData(state){	//用来获取订单数据
			return state.orderData;
		},

		getLogin(state){	//用来获取用户登录的数据
			return state.login;
		},
	},
	mutations: {
		storageDishesData(state,data){	//第一个是state，第二个参数是传递过来的
			state.dishesData=data;	//把拿过来的数据存到state里
		},
		
		//更新添加的数据
		addDishesData(state,data){
			//这个data代表的是添加的那道菜的数据
			state.dishesData.push(data);
		},

		//更新删除的数据
		delDishesData(state,data){
			state.dishesData.forEach((ele,index)=>{
				if(ele.name==data.name){
					state.dishesData.splice(index,1);
				}
			});
		},

		
		storageOrderData(state,data){	//存储订单页数据 
			state.orderData=data;
		},
		delOrderData(state,index){	//用于删除数据
			state.orderData.splice(index,1);
		},

		storageUser(state,userMessage){
			state.login=userMessage;
			console.log(state);
		},
	},
	actions: {

	}
})
