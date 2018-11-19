<template>
    <div class="join" id="join">
        <div class="bj-box">
            <h1 class="h_text">合作伙伴</h1>
            <div>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/滴滴出行-1.png " alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/荣之联.png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/博士林.png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/大块搜索.png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/三角兽.png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/大块搜索 (1).png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/裕同印刷.png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/中软国际.png" alt="">
                </span>
                <span>
                    <img src="http://127.0.0.1:0808/LingDao/一汽集团.png" alt="">
                </span>
                
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
    .join{
        width:100%;
        background:#eee;
        padding:2.5rem 0;
    }
    /*背景色*/
    .join>.bj-box{
        width:100%;
        max-width:1170px;
        margin:0 auto;
    }
    .join>.bj-box>div{/*品牌分类*/
        width:100%;
        background:#fff;
    }
    .join>.bj-box>div>span{
        display: inline-block;
        width:33%;
        opacity:0;
    }
    .join>.bj-box>div>span>img{
        width:100%;
        cursor: pointer;
    }
    /*合作伙伴*/
    .join>.bj-box>h1.h_text{
        color:#666;
        font-size:2.5rem;
        width:100%;
        text-align:center;
    }
    

    /*******************响应式分割线*******************/
    @media screen and (max-width:1000px){
        .join>.bj-box>div>span{
            display:block;
            width:90%;
            margin:0 auto;
            margin-top:-4px;
        }
        .join>.bj-box>div{/*品牌分类*/
            width:100%;
            background:#eee;
        }
    }
</style>