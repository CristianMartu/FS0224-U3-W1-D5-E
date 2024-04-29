import { Component } from 'react'
import { Alert, Image } from 'react-bootstrap'
import Slider from 'react-slick'

const URL = 'http://www.omdbapi.com/?apiKey=956e8978&s='
class MyCarouselSlick extends Component {
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
    const settings = {
      infinite: true,
      speed: 3000,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 485,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    }

    return (
      <Slider {...settings} style={{ height: '360px' }}>
        {this.state.search.map((item) => {
          return this.state.error === true ? (
            <Alert variant="danger">{this.state.errorMsg}</Alert>
          ) : (
            item.map((film) => {
              return film.Poster !== 'N/A' ? (
                <div key={film.imdbID}>
                  <Image
                    className="d-inline"
                    src={film.Poster}
                    alt="movie picture"
                    style={{ height: '320px', width: '200px' }}
                  />
                </div>
              ) : (
                <div className="text-center text-white mt-5 mx-0" key={film.imdbID}>
                  <p>{film.Title}</p>
                  <p>{film.Year}</p>
                </div>
              )
            })
          )
        })}
      </Slider>
    )
  }
}

export default MyCarouselSlick
