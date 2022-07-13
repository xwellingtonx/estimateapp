<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <navbar></navbar>
        <div class="header-content">
          <div class="brand">
            <img src="./assets/icons/coins.png" />
            <h1>How Much Will It Cost?</h1>
          </div>
          <h3>Select the features that your application requires to find out how much it will cost.</h3>
          <p>All estimates are approximate, for more details please contact us.</p>
        </div>
        <div class="header-footer pull-right">
          <span>Show calculations</span>
          <div class="switch">
            <input type="checkbox" id="calculations" checked="checked" v-on:change="showCalculations"/><label for="calculations">Toggle</label>
          </div>
        </div>
      </div>
    </div>
    <home></home>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  },
  methods: {
    showCalculations: function (event) {
      this.$children[1].showDays(event.target.checked)
    }
  }
}
</script>

<style>
.no-padding {
  padding: 0px !important;
}

.clearfix {
  overflow: auto;
  zoom: 1;
}

body {
  font-family: 'Lato', sans-serif;
  background: #f5f5f5 !important;
  font-size: 14px;
  margin: 0px;
}

.header {
  background: #55acee;
}

.header-content {
  text-align: center;
  margin-top: 60px;
}

.header-content h3 {
  margin-top: 30px;
  color: #fff;
  font-size: 1.6em;
}

.header-content p {
  margin-top: 30px;
  color: #ececec;
  font-size: 1.1em;
}

.brand img {
  margin-top: -80px;
  margin-right: 20px;
}
.brand h1 {
  display:inline-block;
  display:-moz-inline-stack;
  zoom:1;
  *display:inline;
  font-size: 3.6em;
  font-weight: 700;
  color: #000;
}

.header-footer {
  margin-top: 18px;
}

.header-footer span {
  color: #ececec;
  position: absolute;
  margin-top: 3px;
  margin-left: -130px;
  font-size: 1.1em;
}

.header-footer .switch {
  display:inline-block;
  display:-moz-inline-stack;
  zoom:1;
  *display:inline;
}

/*Switch*/
  .switch input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 26px;
    background: #e74c3c;
    border-radius: 50px;
    position: relative;
  }

  .switch label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 30px;
    transition: 0.3s;
  }

  .switch input:checked + label {
    background: #2ecc71;
  }

  .switch input:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
  .switch label:active:after {
    width: 35px;
  } 

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {  
  .header-content h3 {
    font-size: 1.1em;
  }

  .header-content p {
    font-size: 0.8em;
  }

  .header-footer {
    margin-top:5px;
  }

  .header-footer span {
    font-size: 0.8em;
    margin-top: 5px;
    margin-left: -95px;
  }
}

/* Small devices (landscape phones, less than 768px)  */
@media (max-width: 767px) { 
  .header-content {
    margin-top: 5px;
  }
  .header-content h3 {
    margin-top: 20px;
    font-size: 1.3em;
  }

  .header-content p {
    margin-top: 20px;
  }

  .brand h1 {
    display: block;
    *display: block;
    font-size: 2.4em;
  }
  .brand img {
    margin: 0px;
    width: 84px;
  }
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991px) { }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199px) {  }

</style>
