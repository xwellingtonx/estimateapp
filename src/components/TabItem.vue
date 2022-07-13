<template>
    <!-- eslint-disable -->
    <div class="tab-content" v-if="tab.isActive">
      <div class="painel-feature">
        <div class="feature-icon">
          <label>1°</label>
        </div>
        <div class="painel-feature-content">
          <h3>How big is your app?</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays}">Base Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.appSizes" :key="'appSize_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="radioOnChange(item, tab.features.appSizes)"/>
                      <div class="control-indicator control-circle"></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><em>* Number of developer days for the app core</em></p>
          </div>
        </div>
      </div>

      <div class="painel-feature">
        <div class="feature-icon">
          <label>2°</label>
        </div>
        <div class="painel-feature-content">
          <h3>What level of UI would you like?</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Percentage</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.appDetails" :key="'ui_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="radioOnChange(item, tab.features.appDetails)"/>
                      <div class="control-indicator control-circle"></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="100" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><em>* UX/UI design required as a percentage of base app days</em></p>
          </div>
        </div>
      </div>

      <div class="painel-feature">
        <div class="feature-icon">
          <label>3°</label>
        </div>
        <div class="painel-feature-content">
          <h3>Users & Accounts</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.usersAndAccounts" :key="'userAccounts_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="painel-feature">
        <div class="feature-icon">
          <label>4°</label>
        </div>
        <div class="painel-feature-content">
          <h3>User Generated Content</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.contents" :key="'contents_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>            

      <div class="painel-feature">
        <div class="feature-icon">
          <label>5°</label>
        </div>
        <div class="painel-feature-content">
          <h3>Dates & Locations</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.datesAndLocations" :key="'datesLocations_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>   
 
      <div class="painel-feature">
        <div class="feature-icon">
          <label>6°</label>
        </div>
        <div class="painel-feature-content">
          <h3>Social & Engagement</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.socialAndEngagements" :key="'engagements_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>   

      <div class="painel-feature">
        <div class="feature-icon">
          <label>7°</label>
        </div>
        <div class="painel-feature-content">
          <h3>Billing & eCommerce</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.billingAndECommerceServices" :key="'billing_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  

      <div class="painel-feature">
        <div class="feature-icon">
          <label>8°</label>
        </div>
        <div class="painel-feature-content">
          <h3>Admin, Feedback & Analytics</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.analytics" :key="'analytics_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  

      <div class="painel-feature">
        <div class="feature-icon">
          <label>9°</label>
        </div>
        <div class="painel-feature-content">
          <h3>External APIs & Integrations</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.integrations" :key="'integrations_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>    

      <div class="painel-feature">
        <div class="feature-icon">
          <label style="margin-left: -16px;">10°</label>
        </div>
        <div class="painel-feature-content">
          <h3>Security</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.protections" :key="'protections_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>     

      <div class="painel-feature">
        <div class="feature-icon">
          <label style="margin-left: -16px;">11°</label>
        </div>
        <div class="painel-feature-content">
          <h3>App Specific Development</h3>
          <div class="feature-row">
            <span v-bind:class="{ 'days-hidden': !tab.features.canShowDays }">Days</span>
            <table>
              <tbody>
                <tr v-for="(item, index) in tab.features.specificDevelopments" :key="'developments_' + index">
                  <td>
                    <label class="control control-checkbox">{{item.name}}
                      <input type="checkbox" v-model="item.checked"  v-on:change="checkboxOnChange(item)"/>
                      <div class="control-indicator "></div>
                    </label>      
                  </td>
                  <td>
                    <div class="feature-number" v-bind:class="{ 'days-hidden': !item.canShowDays}">
                      <input type="number" min="0" max="50" class="form-control" v-bind:id="item.id" v-model.number="item.days" v-on:change="calculateDays(item)" v-on:click="calculateDays(item)" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>       

      <div class="painel-feature" v-if="tab.features.canShowRate">
        <div class="feature-icon">
          <label style="margin-left: -16px;">12°</label>
        </div>
        <div class="painel-feature-content">
          <div class="feature-row">
            <span>Rate</span>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label class="control no-padding reset-cursor">Design Day</label>      
                  </td>
                  <td>
                    <div class="feature-number">
                      <input type="number" min="0" class="form-control" v-model="tab.features.designDayRate" v-on:change="calculateCost" v-on:click="calculateCost" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="control no-padding reset-cursor">Developer Day</label>      
                  </td>
                  <td>
                    <div class="feature-number">
                      <input type="number" min="0" class="form-control" v-model="tab.features.developerDayRate" v-on:change="calculateCost" v-on:click="calculateCost" />
                    </div>
                  </td>
                </tr>  
                <tr v-if="tab.features.projectManagerDaysRateVisible">
                  <td>
                    <label class="control no-padding reset-cursor">Project Manager Day</label>      
                  </td>
                  <td>
                    <div class="feature-number">
                      <input type="number" min="0" class="form-control" v-model="tab.features.projectManagerDayRate" v-on:change="calculateCost" v-on:click="calculateCost" />
                    </div>
                  </td>
                </tr>                                
              </tbody>
            </table>
          </div>
        </div>
      </div>                                                                                              
    </div>
</template>

<style>
.days-hidden {
  visibility: hidden;
}
.reset-cursor {
  cursor: default !important;
}

.painel-feature {
  margin-bottom: 15px;
}
.painel-feature 
.painel-feature-content {
  position: relative;
  margin-top: -25px;
  background: white;
  padding: 15px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
}

.painel-feature 
.painel-feature-content h3{ 
    text-align: center;
    margin-top: 5px;
    margin-bottom: 35px;
}

.painel-feature 
.painel-feature-content 
.feature-row .feature-number {
  margin-top: 3px;
  background: #f7f7f7;
  padding-left: 30px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-left-radius: 25px;
  -moz-border-top-left-radius: 25px;
  -moz-border-bottom-left-radius: 25px;
  border: 1px dashed #55acee;
  border-right-width: 0;
  margin-bottom: 15px;
}

.painel-feature .painel-feature-content 
.feature-row .feature-number input {
  width: 64px;
  text-align: right;
}
.painel-feature 
.painel-feature-content 
.feature-row .feature-number input:focus {
  border-color: #55acee;
  box-shadow: none;
}

.painel-feature 
.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: black;
  text-align: center;
  margin: 0 auto;
  font-size: 1.7em;
  padding: 7px;
  box-shadow: 0 -1px 2px rgba(0,0,0,.1);
}
.painel-feature 
.feature-icon label {
  font-weight: normal !important;
  z-index: 999;
  position: absolute;
  margin-left: -9px;
}

.feature-row table {
  margin-right: -15px;
}
.feature-row table > tbody > tr > td:first-child {
  width: 100%
}

.feature-row span {
  display: block;
  text-align: right;
  font-weight: bold;
}

.form-control {
  box-shadow: none;
  border-radius: 0px;
}
.control {
  font-size: 1.2em;
	position: relative;
	display: block;
	margin-bottom: 0px;
	padding-left: 30px;
	cursor: pointer;
  font-weight: normal;
}

.control input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}
.control-circle {
  border-radius: 50%;
}
.control-indicator {
	position: absolute;
	top: 2px;
	left: 0;
	width: 20px;
	height: 20px;
	background: #e6e6e6;
}

/* Hover and focus states */
.control:hover input ~ .control-indicator,
.control input:focus ~ .control-indicator {
	background: #ccc;
}

/* Checked state */
.control input:checked ~ .control-indicator {
	background: #55acee;
}

/* Hover state whilst checked */
.control:hover input:not([disabled]):checked ~ .control-indicator,
.control input:checked:focus ~ .control-indicator {
	background: #55acee;
}

/* Disabled state */
.control input:disabled ~ .control-indicator {
	pointer-events: none;
	opacity: .6;
	background: #e6e6e6;
  cursor: default;
}

/* Check mark */
.control-indicator:after {
	position: absolute;
	display: none;
	content: '';
}

/* Show check mark */
.control input:checked ~ .control-indicator:after {
	display: block;
}

/* Checkbox tick */
.control-checkbox .control-indicator:after {
	top: 5px;
	left: 8px;
	width: 4px;
	height: 8px;
	transform: rotate(45deg);
	border: solid #fff;
	border-width: 0 2px 2px 0;
}

/* Disabled tick colour */
.control-checkbox input:disabled ~ .control-indicator:after {
	border-color: #7b7b7b;
}

</style>

<script>
/* eslint-disable */
export default {
  name: "TabItem",
  data () {
    return {
      selectedFeatures: [],
      lastTotalDays: 0,
      lastDeveloperDays: 0,
      lastDesignDays: 0
    }
  },
  props: ['tab'],
  methods: {
    radioOnChange: function (feature, list) {
      list.forEach(function (item) {
        if (feature.name !== item.name) {
          if (item.checked) {
            item.checked = false
          }
        } else {
          if (!item.checked) {
            item.checked = true // check again
          }
        }
      })
      this.calculateDays(feature)
    },
    calculatePercentageOfBaseDays: function (appSize, appDetail) {
      let days = 0

      if (appSize !== undefined && appDetail !== undefined) {
        days = appSize.days * (appDetail.days / 100)
      }
      return Math.ceil(days)
    },
    checkboxOnChange: function (feature) {
      if (feature.id !== 'projectManager') {
        if (feature.checked) {
          this.addSelectedFeature(feature)
        } else {
          this.removeSelectedFeature(feature)
        }
      } else {
        this.tab.features.projectManagerDaysRateVisible = feature.checked
      }
      this.calculateDays(feature)
    },
    calculateDays: function (feature) {
      let projectManagerId = 'projectManager'
      if (feature.id !== projectManagerId) {
        let projectManagerFeature = this.getFeatureItem('id', projectManagerId, this.tab.features.specificDevelopments)
        if (projectManagerFeature !== undefined) {
          this.lastDeveloperDays = 0
          this.lastDesignDays = 0
          let self = this

          // checkboxes
          this.selectedFeatures.forEach(function (item) {
            self.lastDeveloperDays += item.days
          })

          // radio
          let appSize = this.getFeatureItem('checked', true, this.tab.features.appSizes)
          if (appSize !== undefined) {
            let appDetail = this.getFeatureItem('checked', true, this.tab.features.appDetails)

            this.lastDeveloperDays += appSize.days
            this.lastDesignDays += this.calculatePercentageOfBaseDays(appSize, appDetail)
          }

          projectManagerFeature.days = this.lastDeveloperDays + this.lastDesignDays
        }
      }
      this.calculateCost()
    },
    calculateCost: function () {
      console.log('Calculating cost')

      let developerCost = this.lastDeveloperDays * this.tab.features.developerDayRate
      let designCost = this.lastDesignDays * this.tab.features.designDayRate

      this.tab.developerDays = this.lastDeveloperDays
      this.tab.designerDays = this.lastDesignDays
      this.tab.totalCost = parseFloat(developerCost + designCost)

      let projectManagerFeature = this.getFeatureItem('id', 'projectManager', this.tab.features.specificDevelopments)
      if (projectManagerFeature !== undefined && projectManagerFeature.checked) {
        this.tab.totalCost += projectManagerFeature.days * this.tab.features.projectManagerDayRate
      }
    },
    sumValues: function (list) {
      let sum = 0

      list.forEach(function (item) {
        if (item.checked) {
          sum += item.days
        }
      })
      return sum
    },
    addSelectedFeature: function (feature) {
      this.selectedFeatures.push(feature)
    },
    removeSelectedFeature: function (feature) {
      let index = this.selectedFeatures.indexOf(feature)
      if (index >= 0) {
        this.selectedFeatures.splice(index, 1)
      }
    },
    getFeatureItem: function (key, value, list) {
      let feature

      list.forEach(function (item) {
        if (item[key] === value) {
          feature = item
          return 0
        }
      })
      return feature
    }
  }
}
</script>

