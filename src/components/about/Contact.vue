<template>
    <div>
        <div class="contact">
            <h2>联系我们</h2>
            <router-link tag="h3" to="/about/contact/wechat">微信</router-link>
            <router-link tag="h3" to="/about/contact/qq">QQ</router-link>
            <router-link tag="h3" to="/about/contact/email">邮箱</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.contact h3:hover{
    color: red;
    cursor:pointer;
}
</style>

