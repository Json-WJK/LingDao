<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*公共样式*/
  body,html{
    font-size:14px;
    font-family: Open Sans, sans-serif;
    background:#fff;
  }
  p,h1,h2,h3,h4,h5,h6,body,ul,ol,dl,pre{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  input,button,select,textarea{outline:none;}


  /**/
  h1{
    text-align: center;
    font-size:2.5rem;
    margin-bottom:2.5rem;
    color:#666;
  }

</style>
