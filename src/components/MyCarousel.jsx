import { Component } from 'react'
import { Alert, Carousel, Col, Container, Image, Row, Spinner } from 'react-bootstrap'

const URL = 'http://www.omdbapi.com/?apiKey=956e8978&s='
class MyCarousel extends Component {
  state = {
    search: [],
    loading: true,
    error: false,
    errorMsg: '',
  }

  fetchReservations = (films, list) => {
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

        list.push(search)
        this.setState({ search: list })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: true })
        this.setState({ errorMsg: err.name + ' ' + err.message })
      })
      .finally(() => this.setState({ loading: false }))
  }

  componentDidMount() {
    const listImg = []
    for (let i = 1; i <= this.props.page; i++) {
      this.fetchReservations(this.props.filmName + `&page=${i}&type=${this.props.type}`, listImg)
    }
  }

  render() {
    return (
      <Carousel fade indicators={false}>
        {this.state.search.map((item, i) => {
          return (
            <Carousel.Item style={{ height: '340px' }} key={i}>
              <Row sm={2} md={3} lg={4} xl={5} xxl={6} className="row-gap-5">
                {this.state.loading && <Spinner animation="border" variant="white" className="mx-auto" />}
                {this.state.error === true ? (
                  <Alert variant="danger">{this.state.errorMsg}</Alert>
                ) : (
                  item.slice(0, 6).map((film) => {
                    return (
                      <Col key={film.imdbID}>
                        <Image
                          className="d-inline"
                          src={film.Poster}
                          alt="movie picture"
                          style={{ height: '320px', width: '200px' }}
                        />
                      </Col>
                    )
                  })
                )}
              </Row>
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}

export default MyCarousel
