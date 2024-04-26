import { Component } from 'react'
import { Alert, Image, Spinner } from 'react-bootstrap'

const URL = 'http://www.omdbapi.com/?apiKey=956e8978&s='
class MyGallery extends Component {
  state = {
    search: [],
    loading: true,
    error: false,
    errorMsg: '',
  }

  fetchReservations = (films) => {
    fetch(URL + films)
      .then((response) => {
        if (response.ok) {
          //   console.log('fetch success')
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error('400 Bad Request')
          }
          if (response.status === 401) {
            throw new Error('401 Unauthorized')
          }
          if (response.status === 403) {
            throw new Error('403 Forbidden')
          }
          if (response.status === 404) {
            throw new Error('404 Not Found')
          }
          throw new Error('Generic error')
        }
      })
      .then((data) => {
        const search = data.Search
        if (!search) {
          this.setState({ error: true })
          this.setState({ errorMsg: 'No results found' })
        }

        // console.log(search)
        this.setState({ search })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: true })
        this.setState({ errorMsg: err.name + ' ' + err.message })
      })
      .finally(() => this.setState({ loading: false }))
  }

  componentDidMount() {
    this.fetchReservations(this.props.filmName)
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {this.state.loading && <Spinner animation="border" variant="primary" className="mx-auto" />}
        {this.state.error === true ? (
          <Alert variant="danger">{this.state.errorMsg}</Alert>
        ) : (
          this.state.search.slice(0, 6).map((film) => {
            return (
              <div className="col mb-2 text-center px-1" key={film.imdbID}>
                <Image className="d-block w-100" src={film.Poster} alt="movie picture" style={{ aspectRatio: 1 / 1 }} />
              </div>
            )
          })
        )}
      </div>
    )
  }
}

export default MyGallery
