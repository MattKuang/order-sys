module.exports = {
    baseUrl: '/',       //根目录
    outputDir: 'dist',      //打包输出的路径
    assetsDir: '',      //静态资源输出的路径（js,css,img）
    lintOnSave:false,   //是否开启eslint检测
    indexPath: 'index.html',  //设置输出首页的名字
    devServe:{
        open:true,  //自动打开首页
        host:'localhost',
        port:'8080'
    }
}