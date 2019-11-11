var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harrypotter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/Krollew.jpg'
  },
    {
    id: 3,
    title: 'Social Network',
    desc: 'Film o wlaścicielu facebooka',
    img: 'images/social.jpg'
  },
    {
    id: 4,
    title: 'Snowden',
    desc: 'Film o historii byłego pracownika służb państwowych który ujawnia prasie ściśle tajne dokumenty doprowadzając jednocześnie do największego wycieku zastrzeżonych informacji w historii USA. ',
    img: 'images/snowden.jpg'
  },
    {
    id: 5,
    title: 'Black mirror',
    desc: 'Serial Sc-Fi',
    img: 'images/blackmirror.jpg'
  }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
      },

    render: function() {
        return (
            React.createElement('li', {},
            React.createElement('h2', {}, this.props.movie.title),
            React.createElement('p', {}, this.props.movie.desc),
            React.createElement('img', {src: this.props.movie.img})
            )
        )
    },
});

var MovieTitle = React.createClass({
    render: function() {
        return (
            React.createElement('h2', {}, this.props.movie.title)
        )
    },
});

var MovieDescription = React.createClass({
    render: function() {
        return (
            React.createElement('p', {}, this.props.movie.desc)
        )
    },
});

var MoviesList = React.createClass({
    render: function() {
    var movieElements = this.props.movies.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie});
    });

    return (
        React.createElement('ul', {}, movieElements)
        )
    }
  });

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app')); 