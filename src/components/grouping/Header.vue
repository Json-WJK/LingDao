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
        <div class="orientation">
            <img src="http://127.0.0.1:0808/LingDao/下拉菜单.png" alt="">
        </div>
        <div class="totop" @click="to(0)">
            <img src="http://127.0.0.1:0808/LingDao/上箭头大.png" alt=""><span>TOP</span>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:["主页","合作伙伴","解决方案","关于我们","业务范围","联系我们"],
                user:false,
                bottomroll:null,
                toproll:null,
                isalready:false,
            }
        },
        methods:{
            to(i){
                this.user=false
                clearInterval(this.bottomroll)
                clearInterval(this.toproll);
                /*当前距离 */
                //var p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                /*需要滚动的距离 */  /*公用变量部分 */
                // var roll=p-x  
                var logo=document.querySelectorAll(".description")[0]
                var overview=document.getElementById("overview").offsetTop
                var join=document.getElementById("join").offsetTop
                var scheme=document.getElementById("scheme").offsetTop
                var skill=document.getElementById("skill").offsetTop
                var work=document.getElementById("work").offsetTop
                var contact=document.getElementById("contact").offsetTop
                var p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//当前屏幕高度
                var bottom_h=document.body.offsetHeight//总高度
                
/***************** 页面滚动动画 *******************************分割线**********************************************/
                /*声明变量 */
                var Overview=document.getElementById("overview").children[0].children
                var Join=document.getElementById("join").children[0].children[1].children
                var Scheme=document.getElementById("scheme")
                var Skill=document.getElementById("skill").children[0].children[1].children
                var Work=document.getElementById("work").children[1].children
                var Contact=document.getElementById("contact")

                
                /*logo*/
                logo.style.transform="translate(0px,0px)"
                logo.style.opacity="1"

                /*overview */
                if(p+overview>overview)
                for(var item1 of Overview){
                    item1.style.transform="scale(1)"
                }

                /*join */
                setTimeout(() => {
                if(p+join/2>join)
                    for(var item2=0;item2<Join.length;item2++){
                        Join[item2].style.transform="translate(0px,0px)"
                        Join[item2].style.opacity="1"
                        if(item2==Join.length-1){
                            Join[4].style.transform="rotate3d(0,1,0,1080deg)"
                            setTimeout(() => {
                                for(var item2=0;item2<Join.length;item2++){
                                    Join[item2].style.transition="0s"
                                }
                            }, 3000);
                        }
                    }
                }, 200);
                /*skill */
                if(p+skill/5>skill)
                for(var item4=0;item4<Skill.length;item4++){
                    Skill[item4].style.transform="translateX(0px)"
                    Skill[item4].style.opacity="1"
                    if(item4==Skill.length-1)
                    setTimeout(() => {
                        for(var item4 of Skill){
                            item4.style.transition="0s"
                        }
                    }, 3000);
                }
                
                /* work*/
                var num1=0;
                var num2=0;
                var num3=0;
                var num4=0;
                if(p>work-700&&this.isalready==false){
                    this.isalready=true
                    var numa=setInterval(() => {
                        num1++
                            if(Work[0].children[0].innerHTML==100) clearInterval(numa)
                            else Work[0].children[0].innerHTML=num1
                    }, 2000/100);
                    var numb=setInterval(() => {
                        num2++
                            if(Work[1].children[0].innerHTML==300) clearInterval(numb)
                            else Work[1].children[0].innerHTML=num2
                    }, 2000/300);
                    var numc=setInterval(() => {
                        num3+=4
                            if(Work[2].children[0].innerHTML==1360) clearInterval(numc)
                            else Work[2].children[0].innerHTML=num3
                    }, 2000/1360*4);
                    var numd=setInterval(() => {
                        num4++
                            if(Work[3].children[0].innerHTML==200) clearInterval(numd)
                            else Work[3].children[0].innerHTML=num4
                    }, 2000/200);
                }


/*********************滚动为定位导航添加样式*************************分割线*********************************** */
                var n;//是否为用户滚动
                if(i==undefined) n=100
                else n=800
                setTimeout(() => {
                    var lis=document.getElementById("header").firstChild.children[1].children;

                    if(p>=0&&p<join-50)
                    lis[0].children[0].style.borderBottom="2px solid #37cadd";
                    else
                    lis[0].children[0].style.borderBottom="";
                    

                    if(p>=join-50&&p<scheme-300)
                    lis[1].children[0].style.borderBottom="2px solid #37cadd";
                    else
                    lis[1].children[0].style.borderBottom="";

                    if(p>=scheme-300&&p<skill-300) 
                    lis[2].children[0].style.borderBottom="2px solid #37cadd";
                    else
                    lis[2].children[0].style.borderBottom="";

                    if(p>=skill-300&&p<work-220) 
                    lis[3].children[0].style.borderBottom="2px solid #37cadd";
                    else
                    lis[3].children[0].style.borderBottom="";

                    if(p>=work-220&&p<contact-400)
                    lis[4].children[0].style.borderBottom="2px solid #37cadd";
                    else
                    lis[4].children[0].style.borderBottom="";

                    if(p>=contact-400) 
                    lis[5].children[0].style.borderBottom="2px solid #37cadd";
                    else
                    lis[5].children[0].style.borderBottom="";
                }, n);

/******************点击滚动部分******************************分割线***********************************/
                if(i==undefined) return
                if(i==0) x=0
                if(i==1) x=join
                if(i==2) x=scheme-200
                if(i==3) x=skill-200
                if(i==4) x=work-200
                if(i==5) x=contact
                var x;/*to终点 */ 
                // console.log(toproll,bottomroll)
                var slide  //滑动距离
                var work_h=document.getElementById("work").offsetHeight//最后一个元素的高度
                var base=document.documentElement.clientHeight-work_h //到达底部距离
                if(p==x) return
                // console.log(p,x)
                if(p>x){       //向上
                    this.toproll=setInterval(() => {
                        
                        // console.log(bottomroll)
                        // console.log(toproll,1)  
                        if(this.user) clearInterval(this.toproll)
                        p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//当前屏幕高度
                        slide=Math.floor(p-p/30);//每次减少  向上
                        // console.log(slide)
                        window.scrollTo(0,slide)
                        if(p<=x){
                            clearInterval(this.toproll)
                            window.scrollTo(0,x)//防止再次点击任然滚动
                            this.stop()
                        }     
                    },10); 
                } 
                else if(p<=x){      //向下
                    this.bottomroll=setInterval(() => {
                        if(this.user) clearInterval(this.bottomroll)
                        p= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//当前屏幕高度
                        slide=Math.floor(p+x/50)//每次减少  向下
                        // console.log(slide)
                        window.scrollTo(0,slide)
                        // var bodyh=document.body.scrollHeight
                        // var clienth=document.documentElement.clientHeight
                        // var stoph=bodyh-clienth
                        if(p>=x||p>=document.documentElement.offsetHeight - window.innerHeight)//||为防止最后一个元素不触发
                        {
                            clearInterval(this.bottomroll)
                            window.scrollTo(0,x)//防止再次点击任然滚动
                            this.stop()
                        } 
                    },10); 
                } 
            },
            stop(){
                this.user=true;//滚动状态更改为用户滚动
                this.to();
            },
        },
        created(){
            
        },
        mounted(){
           window.addEventListener('mousewheel', this.stop, true);
           setTimeout(() => {
               this.to()
           }, 100);
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
    height:4rem;
    cursor:pointer;
}
.header>.bar>ul>li>span:hover{
    border-bottom:2px solid #37cadd;
    color:#37cadd;
}
.orientation{
    color:#37cadd;
    position:fixed;
    bottom:7rem;
    right:5rem;
    cursor: pointer;
    transition:.5s;
    width:1rem;
    height:1rem;
}
.orientation>img{
    width:3rem;
    height:1.5rem;
}

.totop{
    color:#37cadd;
    position:fixed;
    bottom:3rem;
    right:3rem;
    cursor: pointer;
    padding:.2rem;
    border:1px solid #37cadd;
    transition:.5s;
}
.totop:hover{
    transform:scale(1.2)
}
.totop>img{
    width:1rem;
    height:1rem;
}


/*******************响应式分割线*******************/
@media screen and (max-width:1000px){
.header>.bar>ul{
    line-height:5rem;
    width:100%;
    font-weight:bold;
    position:fixed;
    bottom:15%;
    display: block;
}   
.header>.bar>ul>li>span{
    display:block;
    height:4rem;
    cursor:pointer;
    text-align:center;
    width:70%;
    margin:0 auto;
    border-bottom:2px solid #37cadd;
    color:#37cadd;
    background: rgba(255,255,255,0.7);
    box-shadow:0rem 0rem 0rem .1rem #37cadd;
}
.header>.bar>ul>li>span:hover{
    color:#555;
}
}

</style>