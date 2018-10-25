<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item image logo" to="/about">
          <img class="is-rounded" src="https://cdn.buttercms.com/Wa3MLTp0SPaqYtUlbcuC">
        </nuxt-link>

        <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
      <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/"> Главная </nuxt-link>
          <nuxt-link class="navbar-item" to="/about"> Кто я</nuxt-link>
        </div>
      </div>
    </div>

  </nav>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      navIsActive: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.navIsActive = !this.navIsActive;
    }
  }
};
</script>

<style scoped>
.logo {
  padding-top: 3px;
  padding-bottom: 3px;
}

.logo img {
  max-height: none;
}

#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .nav-menu {
  display: block;
}
</style>


