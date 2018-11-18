<template>
    <div class="header" id="header">
        <div class="bar">
            <div class="logo">
                <img src="http://127.0.0.1:0808/LingDao/伶道最终方白.png" alt="">
                <div>
                    <h1>L&nbsp;I&nbsp;N&nbsp;G&nbsp;D&nbsp;A&nbsp;O</h1>
                    <span>北京伶道科技有限公司</span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in list" :key="i" @click="to(i)"><span>{{item}}</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:["主页","合作伙伴","解决方案","关于我们","业务范围","联系我们"],
                user:false,
            }
        },
        methods:{
            to(i){
                this.user=false
                /*当前距离 */
                //var p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                clearInterval(toproll);
                clearInterval(bottomroll)
                var x;/*to终点 */ 
                var toproll; //定时器
                var bottomroll;//定时器
                var slide  //滑动距离
                /*需要滚动的距离 */
                // var roll=p-x  
                var work=document.getElementById("work").offsetTop
                var join=document.getElementById("join").offsetTop
                var overview=document.getElementById("overview").offsetTop
                var skill=document.getElementById("skill").offsetTop
                var work_h=document.getElementById("work").offsetHeight//最后一个元素的高度
                var base=document.documentElement.clientHeight-work_h //到达底部距离
                if(i==0) x=0
                if(i==1) x=join
                if(i==2) x=0
                if(i==3) x=skill
                if(i==4) x=work 
                if(i==5) x=0
                var p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//当前屏幕高度
                if(p==x) return
                // console.log(p,x)
                if(p>x){        //向上
                    toproll=setInterval(() => {  
                        if(this.user) clearInterval(toproll)
                        p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//当前屏幕高度
                        slide=Math.floor(p-p/30);//每次减少  向上
                        console.log(slide)
                        window.scrollTo(0,slide)
                        if(p<=x){
                            clearInterval(toproll)
                            window.scrollTo(0,x)//防止再次点击任然滚动
                        }     
                    },10); 
                } 
                else if(p<=x){      //向下
                    bottomroll=setInterval(() => {
                        if(this.user) clearInterval(bottomroll)
                        p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//当前屏幕高度
                        slide=Math.floor(p+x/50)//每次减少  向下
                        // console.log(slide)
                        window.scrollTo(0,slide)
                        // var bodyh=document.body.scrollHeight
                        // var clienth=document.documentElement.clientHeight
                        // var stoph=bodyh-clienth
                        if(p>=x)
                        {
                            clearInterval(bottomroll)
                            window.scrollTo(0,x)//防止再次点击任然滚动
                        } 
                    },10); 
                } 
            },
            stop(){
                this.user=true;
            }
        },
        created(){
            
        },
        mounted(){
           window.addEventListener('mousewheel', this.stop, true);
        }
    }
</script>
<style>
/* .header{
    position:fixed;
    width:100%;
    height:5rem;
    z-index:999;
    color:#fff;
} */
.header{
    position: absolute;
    top:3rem;
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
    margin-top:.3rem;
}
.header>.bar>.logo>div>h1{
    font-weight:normal;
    font-size:1.7rem;
    margin-bottom:0rem;
    color:#fff;
    box-sizing: border-box;
    padding:.3rem 0;
}
/*右侧ul导航*/
.header>.bar>ul{
    display: flex;
    line-height:5rem;
    width:40%;
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