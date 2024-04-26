import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import MyNavbar from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyMain from './components/MyMain'
import MyEdit from './components/MyEdit'
import MySettings from './components/MySettings'

function App() {
  return (
    // Netflix HopePage
    <div className="App">
      <MyNavbar />
      <MyMain />
      <MyFooter />
    </div>

    // Netflix Edit
    // <div className="App">
    //   <MyEdit />
    // </div>

    // Netflix Settings
    // <div className="App">
    //   <MyNavbar />
    //   <MySettings />
    // </div>
  )
}

export default App
