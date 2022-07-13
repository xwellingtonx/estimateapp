<template>
  <nav class="navbar">
      <div class="container-fluid">
        <div class="row"> 
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" v-on:click="showCollapse" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>

            </div>

            <!-- <div class="navbar-collapse" v-bind:class="{ collapse: !collapseIsActive}" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Menu1</a></li>
                    <li><a href="#">Menu2</a></li>
                    <li><a href="#">Menu3</a></li>
                </ul>
            </div> -->
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data () {
    return {
      collapseIsActive: false
    }
  },
  methods: {
    showCollapse () {
      if (this.collapseIsActive) {
        this.collapseIsActive = false
      } else {
        this.collapseIsActive = true
      }
    }
  }
}
</script>

<style scoped>
.navbar{
  font-weight: 700;
  margin-bottom: 0px;
  border: 0px;
  height: 50px;
}

.nav > li > a {
  color: #fff;
  padding-right: 0px;
}

.nav > li > a:hover, .nav > li > a:focus {
  background-color: transparent;
  color: #dedede;
}

.navbar-toggle {
  padding: 0px;
  font-size: 26px;
  color: white;
  margin-right: 0px;
}
.navbar-collapse {
  border-top: 0px;
  -webkit-box-shadow: none;
  box-shadow: none; 
}



/* Small devices (landscape phones, less than 768px)  */
@media (max-width: 767px) {
  .navbar-nav {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .navbar-collapse {
    background: white;
    border-top: 1px solid #ccc;
    margin-left: -15px;
    margin-right: -15px;    
  }

  .nav > li > a {
    color: #000;
    font-weight: 400;
  }

  .nav > li > a:hover, .nav > li > a:focus {
    background-color: #dedede;
    color: white;
  }
 }
</style>