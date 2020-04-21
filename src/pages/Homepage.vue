<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="background: linear-gradient(145deg, #15503e 15%, #133154 70%);">
      <q-toolbar style="height: 64px">
        <q-toolbar-title shrink class="row items-center no-wrap">Quasar Scrum</q-toolbar-title>

        <q-space/>
        <q-btn
          v-if="$q.screen.gt.xs"
          flat
          no-wrap
          no-caps
          label="Features"
          class="q-ml-sm q-px-md pull-right"
        ></q-btn>
        <q-btn
          v-if="$q.screen.gt.xs"
          flat
          no-wrap
          no-caps
          label="How it Works"
          class="q-ml-sm q-px-md pull-right"
        ></q-btn>
        <q-btn
          v-if="$q.screen.gt.xs"
          flat
          no-wrap
          no-caps
          label="About"
          class="q-ml-sm q-px-md pull-right"
        ></q-btn>
        <q-btn
          v-if="$q.screen.gt.xs"
          flat
          no-wrap
          no-caps
          label="Contact"
          class="q-ml-sm q-px-md pull-right"
        ></q-btn>
        <q-btn
          outline
          no-wrap
          no-caps
          label="Dashboard"
          class="q-ml-sm q-px-md pull-right"
          to="/home"
        ></q-btn>

        <q-btn outline no-wrap no-caps label="Sign Up" class="q-ml-sm q-px-md"/>
        <a style="font-size: 30px;" class="q-ml-sm" href="https://github.com/sponsors/mayank091193"
           target="_blank" title="Donate"><i class="fas fa-heart" style="color: #eb5daa"></i></a>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="flex flex-center text-center" style="padding-left:18%;padding-right:18%;background-color: #b5d8cf;">
          <h3 style="line-height:4.125rem;">Scrum tool for <span style="color:#1414dc;">managing</span> complex<br>
            knowledge work and <span style="color:#1414dc;">improving</span> the productivity.<br></h3>
        </div>
        <q-card class="flex flex-center text-center" style="padding: 40px;">
          <q-card-section horizontal>
            <q-img style="border-radius: 10px;"
                   class="col-5"
                   src="/statics/images/expert.jpg" width="32%"
            />

            <q-card-section>
              <h4><b>Need an advice?</b></h4>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </h5>
              <q-btn outline color="purple" size="lg">
                Contact Us
              </q-btn>
            </q-card-section>
          </q-card-section>
        </q-card>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-card class="q-pa-lg flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="ballot" style="color:#328163;"/>
                <div class="text-h6">Agile project management</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-card class="q-pa-lg flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="view_comfy" style="color:#328163;"/>
                <div class="text-h6">Collaboration boards</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-card class="q-pa-lg flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="people" style="color:#328163;"/>
                <div class="text-h6">Team Management</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-1 col-lg-1 col-xs-12 col-sm-12"></div>
          <div class="col-md-5 col-lg-5 col-xs-12 col-sm-12 flex flex-center text-center">
            <q-card style="margin: 40px;width:60%;border: 2px solid grey;" class="box-shadow">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"
                     style="border-top-left-radius: 1px;border-top-right-radius: 0;">
                <div class="text-h5 absolute-bottom text-center">
                  <b>Free</b>
                </div>
              </q-img>
              <div class="text-h5 q-mt-md q-mb-none text-center">
                <b>$0</b>
              </div>
              <q-card-section class="flex flex-center q-pb-none">
                <q-btn outline color="blue">
                  Sign up for free
                </q-btn>
              </q-card-section>
              <q-card-section>

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    Free for teams of up to 10 people
                  </div>
                </div>

              </q-card-section>

              <q-card-section class="q-pt-none text-left text-grey-9">
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  Unlimited task/projects
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  Up to 10 members
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="grey" name="check"/>
                  Unlimited dashboards
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="grey" name="check"/>
                  Private teams
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="grey" name="check"/>
                  Admin control
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-5 col-lg-5 col-xs-12 col-sm-12 flex flex-center text-center">
            <q-card style="margin: 40px;width:60%;border: 2px solid green;" class="box-shadow">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"
                     style="border-top-left-radius: 1px;border-top-right-radius: 0;">
                <div class="text-h5 absolute-bottom text-center">
                  <b>Premium</b>
                </div>
              </q-img>
              <div class="text-h5 q-mt-md q-mb-none text-center">
                <b>$5 per member per month</b>
              </div>
              <q-card-section class="flex flex-center q-pb-none">
                <q-btn outline color="green">
                  Calculate your price
                </q-btn>
              </q-card-section>
              <q-card-section>

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    Reduced price for small teams
                  </div>
                </div>

              </q-card-section>

              <q-card-section class="q-pt-none text-left text-grey-9">
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  Unlimited task/projects
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  No team member limit
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  Unlimited dashboards
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  Private teams
                </div>
                <div class="text-subtitle1">
                  <q-icon size="sm" color="green" name="check"/>
                  Admin control
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-pa-md" style="background-color: #113251">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center text-white">
            <div class="text-h4 text-weight-bold">About</div>
            <div class="text-h6 hover_underline_white q-mt-sm">Contact us</div>
            <div class="text-h6 hover_underline_white">About Us</div>
            <div class="text-h6 hover_underline_white">Careers</div>
            <div class="text-h6 hover_underline_white">Our Stories</div>
            <div class="text-h6 hover_underline_white">Press</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center text-white">
            <div class="text-h4 text-weight-bold">Policy</div>
            <div class="text-h6 hover_underline_white q-mt-sm">Return Policy</div>
            <div class="text-h6 hover_underline_white">Terms Of Use</div>
            <div class="text-h6 hover_underline_white">Security</div>
            <div class="text-h6 hover_underline_white">Privacy</div>
            <div class="text-h6 hover_underline_white">Sitemap</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center text-white">
            <div class="text-h4 text-weight-bold">Help</div>
            <div class="text-h6 hover_underline_white q-mt-sm">Payments</div>
            <div class="text-h6 hover_underline_white">Queries</div>
            <div class="text-h6 hover_underline_white">FAQ</div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
    export default {
        name: "Homepage",
        data() {
            return {}
        }
    }
</script>
<style scoped>
  .box-shadow:hover {
    box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;
  }
</style>
