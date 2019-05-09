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

    
body,html,#app{
width: 100%;
height: 100%;
background: #324057;
}
.v-modal{
  width:0;
  height:0;
  z-index: 0;
}
*{
margin: 0;
padding: 0;
box-sizing:border-box;
}
</style>
