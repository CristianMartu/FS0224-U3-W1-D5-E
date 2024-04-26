import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import MyNavbar from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyMain from './components/MyMain'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyMain />
      <MyFooter />
    </div>
  )
}

export default App
