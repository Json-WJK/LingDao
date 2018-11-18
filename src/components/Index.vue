<template>
    <div>
        <Header></Header>
        <Tbg></Tbg>
        <Overview></Overview>
        <Join></Join>
        <Skill></Skill>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './grouping/Header.vue'
import Footer from './grouping/Footer.vue'
import Tbg from './grouping/Tbg.vue'
import Overview from './grouping/Overview.vue'
import Join from './grouping/Join.vue'
import Skill from './grouping/Skill.vue'
import Work from './grouping/Work.vue'
import Contact from './grouping/Contact.vue'
    export default{
        components:{
            Header,
            Footer,
            Tbg,
            Overview,
            Join,
            Skill,
            Work,
            Contact,
        },
        data(){
            return{
                stop:"",
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                // sessionStorage.setItem(stop,scrollTop)
                this.stop=scrollTop
                // console.log(this.stop)
                /************顶部栏 *****************/
                var header=document.getElementById("header")
                var header_h1=header.firstChild.firstChild.children[1].firstChild
                var header_logo=document.querySelector(".logo>img")
                // console.log(header_logo)
                if(scrollTop>=50){
                    header.className="header header_scroll"
                    header_h1.className="header_h1"
                    header_logo.setAttribute("src","http://127.0.0.1:0808/LingDao/伶道最终方-黑.png")
                }else if(scrollTop<50){
                    header.className="header"
                    header_h1.className=""
                     header_logo.setAttribute("src","http://127.0.0.1:0808/LingDao/伶道最终方白.png")
                }
            }
        }

    }
</script>
<style>
/*导航栏滚动样式*/
    .header_scroll{
    position:fixed !important;
    top:0 !important;
    background: rgba(255,255,255,0.7);
    color:#3d3d3d !important;
    }
    .header_h1{
        color:#3d3d3d !important;
    }
</style>