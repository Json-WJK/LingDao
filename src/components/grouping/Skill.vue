<template>
    <div class="skill">
        <div class="bg-box">
            <h1>关于我们</h1>
            <div class="content">
                <div>
                    <h3>企业简介</h3>
                    <div>北京伶道科技有限公司（简称“伶道科技”）专注于各类应用软件系统解决方案、人工智能技术集成、物联网技术、大数据服务、软件定制及敏捷开发五大领域。伶道科技采用国际先进的IT技术及实施方法论，结合自身丰富的成功经验及项目实践，研发了一系列极具竞争力的互联网+应用产品。伶道科技不断追求产品更好的兼容性、更便捷的操作性、更庞大的集中库、更直观的数据分析，通过严格的质量标准和交付流程，全面打造公司的核心竞争力。 伶道科技以为社会创造卓越价值为使命，将持续打造信息时代的管理与服务新模式，为全国各级政府单位及相关行业的信息化提供优质服务，为客户推动变革及业务创新全力贡献力量。</div>
                </div>
                <div>
                    <h3>企业信息</h3>
                    <ul>
                        <li><img src="http://127.0.0.1:0808/LingDao/电话.png" alt="">010-86485274</li>
                        <li><img src="http://127.0.0.1:0808/LingDao/定位.png" alt="">北京市昌平区流星花园一区16-2</li>
                        <li><img src="http://127.0.0.1:0808/LingDao/邮箱.png" alt="">lingdaokeji@lingdao-tech.com</li>
                        <li><img src="http://127.0.0.1:0808/LingDao/浏览器-IE.png" alt=""><a href="">www.lingdao-tech.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
.skill{
    background:url("http://127.0.0.1:0808/LingDao/bg1.jpg");
    background-attachment:fixed;
    padding:5rem 0;
    color:#555;
}
    .skill .bg-box{
        width:100%;
        max-width:1170px;
        margin:0 auto;
    }
    .skill .bg-box>h1{
        text-align: center;
        font-size:2.5rem;
        margin-bottom:2.5rem;
        color:#666;
    }
    .skill .content{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .skill .content>div:nth-child(1){
        width:65%;
        line-height:2rem;  
    }
    .skill .content>div:nth-child(2){
        width:30%;
    }
    .skill .content ul{
        line-height:3rem;
    }
    .skill .content ul>li{
        line-height:2.5rem;
    }
    .skill .content ul>li>a{
        color: #37cadd;
    }
    .skill .content ul>li>img{
        width:1rem;
        height:1rem;
        margin-right:1rem;
        vertical-align:middle;
    }
    .skill .content h3{
        font-size:2rem;
        line-height:4rem;
        font-weight:normal;
    }

    /*******************响应式分割线*******************/
    @media screen and (max-width:1000px){
        .skill{
            padding:5rem 1rem;
        }
        .skill .content>div{
            width:100% !important;
        }
    }
</style>