import { Component } from 'react'
import { Image } from 'react-bootstrap'

const URL = 'http://www.omdbapi.com/?apikey=956e8978&s='
class MyGallery extends Component {
  state = {
    search: [],
  }

  fetchReservations = (films) => {
    fetch(URL + films)
      .then((response) => {
        if (response.ok) {
          console.log('fetch success')
          return response.json()
        } else {
          throw new Error('Error requesting images from server')
        }
      })
      .then((data) => {
        const search = data.Search
        console.log(search)
        this.setState({ search })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchReservations(this.props.filmName)
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {this.state.search > 0
          ? console.log('nessuna foto')
          : this.state.search.slice(0, 6).map((film) => {
              return (
                <div className="col mb-2 text-center px-1" key={film.imdbID}>
                  <Image className="img-fluid" src={film.Poster} alt="movie picture" />
                </div>
              )
            })}
      </div>
    )
  }
}

export default MyGallery
