<template>
  <div class="container">
    <div class="row app-type ">
      <div class="app-type-item col-md-4 col-sm-4 col-xs-4" v-for="tab in tabs" :key="tab.id"
        :class="[tab.iconColor + '-box' , {'item-selected': tab.isActive}]" 
        @click="tabShow(tab)">
        <label class="platform-icon" :class="tab.icon"></label> 
        <p><span>{{tab.name}}</span></p>
      </div>
    </div>

    <tab-item v-for="tab in tabs" :key="tab.id" :tab="tab"></tab-item >  

    <div class="painel-feature">
      <div class="feature-icon">
        <label style="margin-left: -7px;">$</label>
      </div>
      <div class="painel-feature-content text-center">
        <div class="feature-row" style="margin-top: 15px;">
          <div class="row">
            <div class="col-md-4 col-sm-4" v-for="(tab, index) in tabs" :key="'feature_' + index">
              <label class="platform-icon" :class="[tab.iconColor, tab.icon]"></label> 
              <h4>{{tab.designerDays}} Designer Days ({{calculeWeeks(tab.designerDays)}} Weeks)</h4>
              <h4>{{tab.developerDays}} Developer Days ({{calculeWeeks(tab.developerDays)}} Weeks)</h4>
              <h3 class="feature-cost">${{tab.totalCost.toLocaleString()}}</h3>
            </div>
          </div>
          <hr />
          <h2 class="total-cost">Total: ${{projectCost.toLocaleString()}}</h2>
        </div>
      </div>
    </div>      
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4, .h4 {
  font-size: 1.1em;
  margin-top: 0px;
  margin-bottom: 15px;
}

.item-selected {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: none !important;
  cursor: default !important;
}

.item-selected > * { 
  cursor: default !important;
}

.app-type {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
}

.app-type .app-type-item {
  min-height: 60px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #fff;
  cursor:pointer;
}

.yellow-box {
    background-color: #f1c40f;
    box-shadow: 0px 5px 0px 0px #D8AB00;
}
.yellow {
  color: #f1c40f;
}

.yellow-box:hover {
  background-color: #FFDE29;
}

.green-box {
    background-color: #2ecc71;
    box-shadow: 0px 5px 0px 0px #15B358;
}
.green {
  color: #2ecc71;
}

.green-box:hover {
  background-color: #48E68B;
}

.orange-box {
  background-color: #e67e22;
  box-shadow: 0px 5px 0px 0px #CD6509;
}

.orange {
  color: #e67e22;
}

.orange-box:hover {
  background-color: #FF983C;
}

.app-type .app-type-item p {
  margin-bottom: 0px;
  font-weight: bold;
}

.app-type .app-type-item > * {
  cursor: pointer;
}

.app-type .app-type-item > a {
  text-decoration: none;
  color: black;
  text-align: center;
}

.platform-icon {
  font-size: 4em;
}
.painel-feature-content .feature-cost {
  margin-bottom: 15px;
  font-size: 18px;
}

.painel-feature-content hr {
  color: #ccc;
  margin: 0px;
}

.painel-feature-content .platform-icon {
  margin-bottom: 15px;
}
.total-cost {
  font-size: 24px;
}
</style>

<script>
import TabItem from '@/components/TabItem'
import AppFeature from '@/AppFeature.json'

export default {
  components: {
    TabItem
  },
  data () {
    return {
      projectCost: 0,
      tabSelected: null,
      tabs: [
        {
          id: 0,
          name: 'Web',
          description: 'A web app or a back-end to a mobile app',
          icon: 'fa fa-desktop fa-fw',
          iconColor: 'yellow',
          isActive: true,
          features: this.getAppObject(),
          totalCost: 0,
          developerDays: 0,
          designerDays: 0
        },
        {
          id: 1,
          name: 'iOS',
          description: 'An iPhone / iPad app (Excluding back-end)',
          icon: 'fa fa-apple fa-fw',
          iconColor: 'orange',
          isActive: false,
          features: this.getAppObject(),
          totalCost: 0,
          developerDays: 0,
          designerDays: 0
        },
        {
          id: 2,
          name: 'Android',
          description: 'An Android Phone / Tablet app (Excluding back-end)',
          icon: 'fa fa-android fa-fw',
          iconColor: 'green',
          isActive: false,
          features: this.getAppObject(),
          totalCost: 0,
          developerDays: 0,
          designerDays: 0
        }
      ]
    }
  },
  watch: {
    'tabs': {
      handler: function () {
        this.projectCost = this.tabs.reduce((a, b) => a + b.totalCost, 0)
      },
      deep: true
    }
  },
  methods: {
    tabShow: function (tab) {
      tab.isActive = true
      // Clear tabs active
      this.tabs.forEach(function (item) {
        if (tab.id !== item.id) {
          item.isActive = false
        }
      })
    },
    getAppObject: function () {
      let obj = JSON.parse(JSON.stringify(AppFeature))
      return obj
    },
    calculeWeeks: function (days) {
      return days / 5
    },
    showDays: function (value) {
      this.tabs.forEach(function (item) {
        item.features.canShowDays = value
        // mark the lists
        let keys = Object.keys(item.features)
        keys.forEach(function (key) {
          if (Array.isArray(item.features[key])) {
            item.features[key].forEach(function (obj) {
              obj.canShowDays = value
            })
          }
        })
      })
    }
  }
}
</script>