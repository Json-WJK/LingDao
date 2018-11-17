<template>
    <div class="header">
        <div class="bar">
            <div class="logo">
                <img src="http://127.0.0.1:0808/LingDao/伶道最终方-黑.png" alt="">
                <div>
                    <h1>L&nbsp;I&nbsp;N&nbsp;G&nbsp;D&nbsp;A&nbsp;O</h1>
                    <span>北京伶道科技有限公司</span>
                </div>
            </div>
            <ul>
                <li><span>主页</span></li>
                <li><span>合作伙伴</span></li>
                <li><span>解决方案</span></li>
                <li><span>关于我们</span></li>
                <li><span>业务范围</span></li>
                <li><span>联系我们</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style>
.header{
    position:fixed;
    width:100%;
    height:5rem;
    z-index:999;
    color:#fff;
}
.header>.bar{
    width:100%;
    max-width:1170px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    /* background:url("http://127.0.0.1:0808/LingDao/cropped-1-3-1.jpg"); */
}
/*左侧logo*/
.header>.bar>.logo{
    display: flex;
}
.header>.bar>.logo>img{
    width:4rem;
    height:4rem;
    margin-right:1rem;
}
.header>.bar>.logo>div>h1{
    font-weight:normal;
    font-size:1.7rem;
    margin-bottom:0rem;
    color:#fff;
}
/*右侧ul导航*/
.header>.bar>ul{
    display: flex;
    line-height:5rem;
    width:30%;
    justify-content: space-around;
    font-weight:bold;
}
.header>.bar>ul>li>span{
    display:inline-block;
    border-bottom:1px solid #37cadd;
    height:4rem;
    cursor:pointer;
}
</style>