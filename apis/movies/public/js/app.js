Vue.component('movie', {
  template: '#movie-row',
});

new Vue({
  el: '.container',
  data: {
    movies: [],
    movie: {}
  },
  mounted: function () {
    this.fetchMovies()
  },
  methods: {
    fetchMovies: function () {
      let vm = this;
      axios.get('http://localhost:3000/api/movies').then(function (response) {
          let moviesReady = response.data.map(function (movie) {
            movie.editing = false;
            return movie
          });
          Vue.set(vm, 'movies', moviesReady)
      })
    },
  }
});
