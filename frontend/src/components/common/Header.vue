<template>
  <v-toolbar>
    <v-toolbar-title>
        <v-icon style="font-size: 30px">domain</v-icon>
        <strong>DBMS</strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
          <strong>Firebase</strong>
      </v-btn>
      <v-btn flat>
          <strong>Mysql</strong>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
    export default  {
        name: 'app-header',
    }
</script>
<style scoped>
    .v-toolbar {
        z-index: 20 !important;
        background-color: #fff;
        position: fixed;
    }
    a {
        text-decoration: none;
    }
</style>