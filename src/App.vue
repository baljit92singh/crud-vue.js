<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-dark">
      <ul class="navbar-nav header">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Create' }" class="nav-link"
            >Add</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link"
            >List</router-link
          >
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.gap {
  margin-top: 50px;
}
ul.header li a {
  color: white;
  font-size: 18px;
  font-weight: 500;
}

ul.header li a:hover,ul.header li a:focus {
  color: wheat;
  font-size: 18px;
  font-weight: 500;
}
</style>
