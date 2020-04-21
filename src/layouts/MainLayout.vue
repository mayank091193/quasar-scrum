<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="background: linear-gradient(145deg, #15503e 15%, #133154 70%);">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">Quasar Scrum</q-toolbar-title>

        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <a style="font-size: 30px;" class="float-right" href="https://github.com/sponsors/mayank091193"
             target="_blank" title="Donate"><i class="fas fa-heart" style="color: #eb5daa"></i></a>
          <q-btn round dense flat icon="apps">
            <q-tooltip>Customize</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="notifications">
            <q-badge color="red" text-color="white" floating>2</q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png"/>
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="fas fa-sign-out-alt" to="/">
            <q-tooltip>Logout</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              :mini="miniState"
              @mouseover="miniState = false"
              @mouseout="miniState = true"
              mini-to-overlay
              bordered
              content-class="bg-grey-3">
      <q-list>
        <q-item active-class="tab-active" to="/home" exact class="q-ma-none navigation-item" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item active-class="tab-active" to="/dashboard-grid" exact class="q-ma-none navigation-item" clickable
                v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>

          <q-item-section>
            Dashboard - Grid
          </q-item-section>
        </q-item>
        <q-item active-class="tab-active" to="/dashboard-list" exact class="q-ma-none navigation-item" clickable
                v-ripple>
          <q-item-section avatar>
            <q-icon name="view_headline"/>
          </q-item-section>

          <q-item-section>
            Dashboard - List
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container style="background-color:#f4f4f4">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
    import EssentialLink from "components/EssentialLink";

    export default {
        name: "MainLayout",
        data() {
            return {
                leftDrawerOpen: false,
                miniState: true,
            };
        }
    };
</script>

<style>
  .tab-active {
    background-color: green;
    color: white;
  }
</style>
