<template>
    <div>
        <Header></Header>
        <Footer></Footer>
        <Tbg></Tbg>
        <Overview></Overview>
        <Join></Join>
        <Skill></Skill>
        <Work></Work>
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
    export default{
        components:{
            Header,
            Footer,
            Tbg,
            Overview,
            Join,
            Skill,
            Work,
        },
        data(){
            return{

            }
        }
    }
</script>
<style>
    
</style>