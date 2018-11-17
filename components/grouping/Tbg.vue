<template>
    <div class="tbg">
        <div class=""></div>
        <div class="bg">
            <div class="bgs"></div>
            <div>
                <div class="tel">
                    <div>Tel: 010-86485274</div>
                </div>
                <div class="description">
                    <h1><span>伶道</span> LINGDAO</h1>
                    <p>软件定义世界</p>
                    <button>了解我们</button>
                </div>  
            </div>  
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
.tbg{
    width:100%;
    margin:0 auto;
}
    .tbg>.bg{/*大背景区域*/
        width:100%;
        height:70rem;
        position:relative;
    }
    .tbg>.bg>.bgs{/*背景*/
        width:100%;
        height:70rem;
        background:url("http://127.0.0.1:0808/LingDao/画板-1-3.jpg");
        background-size:1920px 70rem;
        background-attachment:fixed;
    }
    /*页头号*/
    .tbg>.bg>div>.tel{
        position:absolute;
        top:0;
        color:#fff;
        width:1920px;
        margin:0 auto;
        font-size:.8rem;
        padding:.5rem 0;
        margin-bottom:5rem;
    }
    .tbg>.bg>div>.tel>div{
        max-width:1170px;
        margin:0 auto;
    }
    /*背景区域文字*/
    .tbg>.bg>div>.description{
        position:absolute;
        top:50%;
        left:20%;
        width:29rem;
        color:#fff;
        margin:0 auto;
    }
    .tbg>.bg>div>.description>h1{
        font-size:4rem;
        border-top:2px solid #fff;
        border-bottom:2px solid #fff;
    }
    .tbg>.bg>div>.description>h1>span{
        font-size:4rem;
        font-weight:400;
    }
    .tbg>.bg>div>.description>p{
        font-size:1.2rem;
        margin-top:2rem;
    }
    .tbg>.bg>div>.description>button{
        font-size:1.1rem;
        border:1px solid #fff;
        background:none;
        text-align:center;
        height:3rem;
        width:7rem;
        line-height:3rem;
        color:#fff;
        margin-top:2rem;
    }

    /*媒体查询*/
</style>