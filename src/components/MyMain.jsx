import { Component } from 'react'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import MyGallery from './MyGallery'
import MyCarousel from './MyCarousel'
import MyCarouselSlick from './MyCarouselSlick'

class MyMain extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <ButtonGroup>
                  <DropdownButton
                    as={ButtonGroup}
                    title="Genres"
                    variant="btn btn-dark btn-sm dropdown-toggle rounded-1 border-secondary"
                    menuVariant="dark"
                  >
                    <Dropdown.Item eventKey="1">Comedy</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Thriller</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <MyCarouselSlick filmName="Star Wars" type="movie" page="6" />
        {/* <MyCarousel filmName="Star Wars" type="movie" page="6" /> */}
        {/* <MyGallery filmName="Star Wars" /> */}
        <h4>Watch it Again</h4>
        <MyCarouselSlick filmName="movie" type="movie" page="6" />
        {/* <MyCarousel filmName="movie" type="movie" page="6" /> */}
        {/* <MyGallery filmName="marvel" /> */}
        <h4>New Releases</h4>
        <MyCarouselSlick filmName="Disney" type="movie" page="6" />
        {/* <MyCarousel filmName="Disney" type="movie" page="6" /> */}
        {/* <MyGallery filmName="Disney" /> */}
        <h4>Series</h4>
        <MyCarouselSlick filmName="series" type="series" page="6" />
        {/* <MyCarousel filmName="series" type="series" page="6" /> */}
        <h4>Game</h4>
        <MyCarouselSlick filmName="star wars" type="game" page="4" />
        {/* <MyCarousel filmName="star wars" type="game" page="3" /> */}
      </div>
    )
  }
}

export default MyMain
