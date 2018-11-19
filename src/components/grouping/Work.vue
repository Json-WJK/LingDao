<template>
    <div class="work" id="work">
        <h1>业务范围</h1>
        <div class="content">
            <div>
                <div></div>
                <div>满意度</div>
            </div>
            <div>
                <div></div>
                <div>团队构成</div>
            </div>
            <div>
                <div></div>
                <div>完成项目</div>
            </div>
            <div>
                <div></div>
                <div>服务企业</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
    }
</script>
<style>
    .work{
        background-color: #37cadd;
        padding:3rem 0;
    }
    .work>h1{
        color:#fff;
    }
    .work>.content{
        width:100%;
        max-width:1170px;
        display:flex;
        flex-wrap:wrap;
        margin:0 auto;
    }
    .work>.content>div{
        width:25%;
        text-align: center;
        color:#fff;
        font-size:3.5rem;
        
    }
    .work>.content>div>div:nth-child(1){
        height:66px;
    }
    .work>.content>div>div:nth-child(2){
        font-size:1.7rem;
    }


    /*******************响应式分割线*******************/
    @media screen and (max-width:1000px){
        .work>.content>div{
            width:100%;
            margin-bottom:3rem;
        }
    }
</style>