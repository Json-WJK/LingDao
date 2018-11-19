<template>
    <div class="scheme" id="scheme">
        <h1>典型技术解决方案</h1>
        <div class="items">
            <div>
                <img src="http://127.0.0.1:0808/LingDao/桌面-宽屏.jpg" alt="">
                <h4>智能办公解决方案</h4>
                <p>SMART OFFICE SOLUTION</p>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/桌面-宽屏副本-1.jpg" alt="">
                <h4>软件工厂</h4>
                <p>SOFTWARE FACTORY</p>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/桌面-宽屏副本.jpg" alt="">
                <h4>智慧知识库系统</h4>
                <p>INTELLIGENT KNOWLEDGE BASE SYSTEM</p>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/桌面-宽屏-1.jpg" alt="">
                <h4>技术储备和实现</h4>
                <p>TECHNICAL RESERVES AND REALIZATION</p>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
    .scheme{
        color:#888;
        padding:5rem 0;
    }
    .scheme>.items{
        display:flex;
        justify-content: space-around;
        width:100%;
        max-width:1170px;
        margin:0 auto;
        flex-wrap:wrap;
    }
    .scheme>.items>div{
        text-align:center;
        width:20%;
    }
    .scheme>.items>div>img{
        width:100%;
    }
    .scheme>.items>div>h4{
        font-size:1.4rem;
        font-weight:500;
    }
    .scheme>.items>div>p{
        width:100%;
        
        font-weight:500;
    }

    /*******************响应式分割线*******************/
    @media screen and (max-width:1000px){
        .scheme>.items>div{
            width:80%;
        }
    }
</style>
