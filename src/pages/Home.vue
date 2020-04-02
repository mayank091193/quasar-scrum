<template>
  <q-page class="q-pa-sm">
    <div>
      <q-card class="bg-transparent no-shadow no-border">
        <q-card-section class="q-pa-none">
          <div class="row q-col-gutter-sm ">
            <div class="col-md-3 col-sm-12 col-xs-12">
              <q-item style="background-color: #4fbb91" class="q-pa-none q-ml-xs">
                <q-item-section side style="background-color: #419e7a" class="q-pa-lg q-mr-none text-white">
                  <q-icon name="list" color="white" size="44px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none  text-white">
                  <q-item-label class="text-white text-h3 text-weight-bolder">40</q-item-label>
                  <q-item-label>Tasks Added Today</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <q-item style="background-color: #ee9835" class="q-pa-none q-ml-xs ">
                <q-item-section side style="background-color: #d3862d" class="q-pa-lg q-mr-none text-white">
                  <q-icon name="sync" size="44px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none  text-white">
                  <q-item-label class="text-white text-h3 text-weight-bolder">50</q-item-label>
                  <q-item-label>Tasks In Progress Today</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <q-item style="background-color: #8f64e3" class="q-pa-none q-ml-xs">
                <q-item-section side style="background-color: #6d46bb" class="q-pa-lg q-mr-none text-white">
                  <q-icon name="compare_arrows" size="44px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none  text-white">
                  <q-item-label class="text-white text-h3 text-weight-bolder">30</q-item-label>
                  <q-item-label>Tasks In Testing Today</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <q-item style="background-color: #3d8117" class="q-pa-none q-ml-xs q-mr-xs">
                <q-item-section side style="background-color: #376a1a" class="q-pa-lg q-mr-none text-white">
                  <q-icon name="las la-check-circle" size="44px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none  text-white">
                  <q-item-label class="text-white text-h3 text-weight-bolder">80</q-item-label>
                  <q-item-label>Tasks Completed Today</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-none q-mt-sm">
          <div class="row text-center q-ma-xs bg-white q-pa-sm">
            <q-linear-progress class="q-my-xs q-mb-sm" rounded color="green" stripe size="12px" :value="progress"/>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <h5 class="q-pa-none q-ma-none text-grey-9">Planning</h5>
              <q-avatar size="90px" icon="las la-check-circle" text-color="white" color="green"/>
              <br>
              <span class="text-grey-9" style="font-size: 16px">Completed</span>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <h5 class="q-pa-none q-ma-none text-grey-9">Design</h5>
              <q-avatar size="90px" icon="las la-check-circle" text-color="white" color="green"/>
              <br>
              <span class="text-grey-9" style="font-size: 16px">Completed</span>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <h5 class="q-pa-none q-ma-none text-grey-9">Development</h5>
              <q-circular-progress
                show-value
                font-size="12px"
                value="75"
                size="90px"
                :thickness="0.22"
                color="green"
                track-color="grey-3"
                class="q-ma-none"
              >
                75%
              </q-circular-progress>
              <br>
              <span class="text-grey-9" style="font-size: 16px">In Progress</span>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12" style="background-color: #b4dfc3;border-radius: 7px;">
              <h5 class="q-pa-none q-ma-none text-grey-9">Project</h5>
              <h5 class="q-pa-none q-ma-none text-grey-9">Launch Date</h5>
              <q-icon size="56px" color="green" name="fas fa-flag-checkered" class="q-pa-none q-ma-none"/>
              <span class="text-h6 text-grey-9" style="vertical-align: bottom;">80 Days</span>
              <br>
              <span class="text-grey-9" style="font-size: 16px">Friday, May 29</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-pa-xs q-col-gutter-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="max-height: 500px">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Project Budget
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section style="height: 282px !important;">
            <div class="row">
              <div class="col-5">
                <IEcharts :option="barChartOption" ref="bar" :resizable="true" style="height:250px;width:260px;"/>
              </div>
              <div class="col-7" style="margin-top: 54px;">
                <span class="text-h6 text-grey-9">
                  <q-icon
                  filled
                  size="xs"
                  name="fas fa-square"
                  style="vertical-align: baseline;color:#2f3333"
                  class="q-mr-sm"
                />
                  Total Budget:
                </span>
                <span
                class="text-h5 text-weight-bolder text-grey-9">$30,000</span>
                <br>
                <br>
                <span class="text-h6 text-grey-9">
                  <q-icon
                  filled
                  size="xs"
                  name="fas fa-square"
                  style="vertical-align: baseline;color:#52af50"
                  class="q-mr-sm"
                />
                  Budget Amount Used:
                </span>
                <span
                class="text-h5 text-weight-bolder text-grey-9">$21,000</span>
                <br>
                <br>
                <span class="text-h6 text-grey-9">
                  <q-icon
                  filled
                  size="xs"
                  color=""
                  name="fas fa-square"
                  style="vertical-align: baseline;color:#b3b3b3"
                  class="q-mr-sm"
                />
                  Budget Remaining:
                </span>
                <span
                class="text-h5 text-weight-bolder text-grey-9">$9,000</span>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered>
          <q-card-section class="row">
            <div class="text-h6 col-12">Deadlines
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section style="height: 282px !important;">
            <q-table
              :data="data"
              :columns="columns"
              row-key="name"
              :filter="filter"
              :pagination.sync="pagination"
            >
              <template v-slot:body-cell-progress="props">
                <q-td :props="props">
                  <div>
                    <q-linear-progress :label="props.value" rounded size="15px" :value="props.value" color="green"
                                       class="q-mt-sm"/>
                  </div>
                  <div class="my-table-details">
                    {{ props.row.details }}
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="max-height: 500px">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Workload
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section style="height: 282px !important;">
            <div class="row">
              <IEcharts :option="workLoadChartOption" ref="bar" :resizable="true" style="height:250px;"/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered>
          <q-card-section class="row">
            <div class="text-h6 col-12">Deadlines
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section style="height: 282px !important;">
            <q-table
              :data="overdue_data"
              :columns="overdue_columns"
              row-key="name"
              :filter="filter"
              :pagination.sync="pagination"
            >
              <template v-slot:body-cell-overdue="props">
                <q-td :props="props">
                  <div class="my-table-details">
                    <span v-if="props.value>5" class="text-weight-bolder" style="color: red">{{ props.value }} Days</span>
                    <span v-else class="text-weight-bolder" style="color: yellow">{{ props.value }} Days</span>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
    import Vue from "vue";
    import draggable from "vuedraggable";
    import {Notify} from "quasar";
    import IEcharts from 'vue-echarts-v3/src/full.js';

    Vue.component("draggable", draggable);
    Vue.component('IEcharts', IEcharts);

    export default {
        name: "Home",
        data() {
            return {
                progress: 0.75,
                filter: '',
                columns: [
                    {
                        name: 'name',
                        required: true,
                        label: 'Employee',
                        align: 'left',
                        field: row => row.name,
                        sortable: true,
                        style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'
                    },
                    {name: 'task', align: 'left', label: 'Task', field: 'task', sortable: true, style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'},
                    {
                        name: 'deadline_date',
                        align: 'left',
                        label: 'Deadline',
                        field: 'deadline_date',
                        sortable: true,
                        style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'
                    },
                    {
                        name: 'progress',
                        align: 'left',
                        label: 'Workload',
                        field: 'progress',
                        sortable: true,
                        style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'
                    }
                ],
                data: [
                    {
                        emp_id: "C001",
                        name: 'John',
                        task: 'Develop the static routing',
                        progress: 0.3,
                        deadline_date: '12-09-2019'
                    },
                    {
                        activity_id: "C002",
                        name: 'Jacob',
                        task: 'Fix the sharing issue',
                        progress: 0.65,
                        deadline_date: '09-02-2019'
                    },
                    {
                        activity_id: "C003",
                        name: 'Nancy',
                        task: 'Back-end API enhancement',
                        progress: 0.15,
                        deadline_date: '03-25-2019'
                    },
                ],
                overdue_columns: [
                    {
                        name: 'overdue',
                        align: 'left',
                        label: 'Overdue',
                        field: 'overdue',
                        sortable: true,
                        style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'
                    },
                    {
                        name: 'name',
                        required: true,
                        label: 'Employee',
                        align: 'left',
                        field: row => row.name,
                        sortable: true,
                        style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'
                    },
                    {name: 'task', align: 'left', label: 'Task', field: 'task', sortable: true,style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'},
                    {
                        name: 'deadline_date',
                        align: 'left',
                        label: 'Deadline',
                        field: 'deadline_date',
                        sortable: true,
                        style: 'font-size: 17px',
                        headerStyle: 'font-size: 17px'
                    }
                ],
                overdue_data: [
                    {
                        emp_id: "C001",
                        name: 'John',
                        task: 'Develop the static routing',
                        overdue: 2,
                        deadline_date: '12-09-2019'
                    },
                    {
                        activity_id: "C002",
                        name: 'Jacob',
                        task: 'Fix the sharing issue',
                        overdue: 9,
                        deadline_date: '09-02-2019'
                    },
                    {
                        activity_id: "C003",
                        name: 'Nancy',
                        task: 'Back-end API enhancement',
                        overdue: 15,
                        deadline_date: '03-25-2019'
                    },
                ],
                pagination: {
                    rowsPerPage: 10
                },
                barChartOption: {
                    grid: {
                        bottom: '10%',
                        left: '25%',
                        top: '10%'
                    },
                    tooltip: {show: false},
                    xAxis: {
                        type: 'category',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            formatter: function (value, index) {
                                return '$' + value;
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                    },
                    series: [{
                        data: [
                            {
                                value: 30000,
                                itemStyle: {color: '#2f3333'},
                            },
                            {
                                value: 21000,
                                itemStyle: {color: '#52af50'},
                            },
                            {
                                value: 9000,
                                itemStyle: {color: '#b3b3b3'},
                            }
                        ],
                        type: 'bar'
                    }]
                },
                workLoadChartOption: {
                    grid: {
                        bottom: '20%',
                        left: '15%',
                        top: '3%'
                    },
                    legend: {
                        bottom: 0
                    },
                    tooltip: {},
                    dataset: {
                        dimensions: ['name', 'progress'],
                        source: [
                            {name: 'John', progress: 70},
                            {name: 'Jacob', progress: 75},
                            {name: 'Nancy', progress: 80},
                            {name: 'Paula', progress: 85}
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        splitLine: {
                            show: false
                        },
                    },
                    yAxis: {
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            formatter: function (value, index) {
                                return value + '%';
                            }
                        },
                    },
                    series: [
                        {
                            type: 'bar',
                            name: 'progress',
                            color: 'green',
                            barWidth: 50,
                            label: {

                                normal: {
                                    color: 'black',
                                    show: true,
                                    position: 'top',
                                    formatter: '{@progress}%'
                                },

                            }
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>
  font-size{
    font-size: 18px;
  }
</style>
