<template>
 <div class="block">
    <div class="toheader" height="400px">
      <h2>欢迎来到本餐厅</h2>
    </div>
      <el-carousel :interval="3000" type="card" height="300px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
           <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
      <div>
        <button class="button-cd" @click="goTo">菜单</button>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
          return {
             imagesbox:[
               {id:0,idView:require("../assets/images/img_01.jpg")},
               {id:1,idView:require("../assets/images/img_02.jpg")},
              {id:2,idView:require("../assets/images/img_03.jpg")},
              {id:3,idView:require("../assets/images/img_04.jpg")},
              {id:4,idView:require("../assets/images/img_05.jpg")},
              {id:5,idView:require("../assets/images/img_06.jpg")},
              {id:6,idView:require("../assets/images/img_07.jpg")}
              ]

          }            
        },
        methods:{
            back(){
                this.$router.go(-1);    //跳转到上一次打开的页面
            },
            goTo(){
                //this.$router.replace('/manage');
                //this.$router.replace({name:'dishesLink'});
                //this.$router.push('/order');
                this.$router.push({name:'dishesLink'});
            }
        }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
.el-carousel{
  margin-top: 250px;
}
.toheader{
  text-align: center;
  color:#1F9C34;
  font-size: 60px;
  margin-top: 50px;
}
.button-cd{
  width: 200px;
  height: 50px;
  font-size: 30xp;
  text-align: center;

}
</style>