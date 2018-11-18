<template>
    <div class="overview" id="overview">
        <div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/Icon_1.png" alt="">
                <p>软件系统解决方案</p>
                <div>伶道为企业提供量身定制软件软件系统解决方案，采取专业的定制开发流程来满足各大企业软件产品的不同需求，服务流程由前期需求调研至开发阶段，最后到后期维护。</div>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/Icon_2.png" alt="">
                <p>智能化技术</p>
                <div>伶道的技术团队凭借多年积累的全球视野，对智能化技术的全面深入把握，拥有优势的智能硬件产业供应链资源，搭配顶尖的专业人才团队满足制造业企业独立的需求。</div>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/Icon_3.png" alt="">
                <p>咨询服务</p>
                <div>伶道拥有一批高素质咨询顾问团队，包括高级软件架构咨询师、软件技术规划师，以及通过国内外权威机构培训认证的，具有丰富理论知识及实践经验的专家顾问。</div>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/Icon_4.png" alt="">
                <p>物联网技术</p>
                <div>伶道将依托在智能控制、数据安全、机器视觉、数据分析与可视化、深度学习等方面的核心技术，给客户提供不断优化的物联网技术服务。</div>
            </div>
            <div>
                <img src="http://127.0.0.1:0808/LingDao/Icon_5.png" alt="">
                <p>大数据服务</p>
                <div>数据正迅速成为当前全新数据经济中最有价值的货币。它对公司业务取得更大成功至关重要，而且已经改变了我们已知的局面。</div>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
.overview{
    width:100%;
    max-width:1170px;
    margin:0 auto;
}
    .overview>div{
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        text-align:center;
        color:#666;
        padding: 2rem 0;
    }
    .overview>div>div{
        width:30%;
        height:20rem;
        box-sizing:border-box;
        padding:4rem 0;
        /* transform: scale(.5); */
        transition:.5s;
    }
    .overview>div>div:hover{
        width:30%;
        height:20rem;
        box-sizing:border-box;
        padding:4rem 0;
        transform: scale(1)
    }
    .overview>div>div>p{
        font-size:1.3rem;
        margin:1rem;
    }
    .overview>div>div>div{
        text-align:left;
    }

    /*******************响应式分割线*******************/
    @media screen and (max-width:1000px){
        .overview>div>div{
            width:100%;
            padding:0 1rem;
        }
    }
</style>