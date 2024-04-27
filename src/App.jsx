import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import MyNavbar from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyMain from './components/MyMain'
import MyEdit from './components/MyEdit'
import MySettings from './components/MySettings'
import { Container } from 'react-bootstrap'

function App() {
  return (
    // Netflix HopePage
    <div className="App">
      <Container>
        <MyNavbar />
        <MyMain />
        <MyFooter />
      </Container>
    </div>

    // Netflix Edit
    // <div className="App">
    //   <MyEdit />
    // </div>

    // Netflix Settings
    //   <div className="App bg-white">
    //     <MyNavbar />
    //     <MySettings />
    //   </div>
  )
}

export default App
