<template>
  <div id="app">

    <PkmHeader />
    <router-view path="$router.key"/>

  </div>
</template>

<script>
import './styles/globalstyle.css';

import PkmHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    PkmHeader,
  },
}
</script>
