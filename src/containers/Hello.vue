<template>
  <div id="app">
	<img class="logo" src="../assets/logo.png">
	<div class="hello">
	  <h1>{{ msg }}</h1>
	</div>
	<p>
	  Welcome to your Vue.js app! {{ user.name }}
	 </p>
	<p>
	  <a v-link="{ path: '/world' }">world</a>.
	</p>
  </div>
</template>

<script>
import Resource from 'resources';
export default {
  data () {
	return {
		// note: changing this line won't causes changes
		// with hot-reload because the reloaded component
		// preserves its current state and we are modifying
		// its initial state.
		msg: 'Hello World!',
		user: { name: 'xixi' }
	};
  },
  ready () {
	Resource.user.get().then(user => {
		this.$set('user', user);
	}).catch(error => {
		window.console.log(error.message);
	});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: 100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
h1 {
  color: #42b983;
}
</style>
