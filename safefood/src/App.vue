<template>
  <div id="app">
    <Header/>

    <nav>
    <router-link class="btn btn-primary" to="/qnalist">QnA List</router-link> | 
    <!-- <router-link class="btn btn-primary" to="/api/qnaview">QnA View</router-link> | 
    <router-link class="btn btn-primary" to="/api/addqna">Add QnA</router-link> -->
    </nav>

    <div>  
      <router-view/>
    </div>
    


    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
