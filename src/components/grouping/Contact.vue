<template>
    <div class="contact" id="contact">
        <div>
            <h1>联系我们</h1>
            <h6>请在此输入留言内容，我们会尽快与您联系。</h6>
            <form action="">
                <input type="text">
                <input type="text">
                <textarea></textarea>
                <button>Post</button>
            </form>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
    .contact{
        background:url("http://127.0.0.1:0808/LingDao/bg1.jpg");
        padding:5rem 0;
    }
    .contact>div{
        width:100%;
        max-width:1170px;
        margin:0 auto;
    }
    .contact>div>h6{
        width:100%;
        max-width:1170px;
        margin:0 auto;
        font-size:1.1rem;
        text-align: center;
        color:#555;
        font-weight:normal;
    }
    .contact>div>form{
        width:90%;
        max-width:500px;
        margin:0 auto;
    }
    .contact>div>form>input{
        width:100%;
        margin-top:2rem;
        background:transparent;
        outline: none;
        border:1px solid #666;
        box-sizing: border-box;
        height:3rem;
        color:#666;
        font-size:1.3rem;
    }
    .contact>div>form>input:focus{
        border: 1px solid #37cadd;
    }
    .contact>div>form>textarea{
        width:100%;
        margin:0 auto;
        margin-top:2rem;
        background:transparent;
        resize:none;
        outline: none;
        border:1px solid #666;
        box-sizing: border-box;
        height:10rem;
        color:#666;
        font-size:1.3rem;
    }
    .contact>div>form>textarea:focus{
        border: 1px solid #37cadd;
    }
    .contact>div>form>button{
        width:100%;
        margin-top:2rem;
        background:transparent;
        outline: none;
        border:1px solid #666;
        box-sizing: border-box;
        height:3rem;
        color:#666;
        font-size:1.2rem;
    }
</style>
