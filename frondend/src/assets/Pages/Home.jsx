import React from 'react'
import Header from '../components/HeaderBar'
import Slider from '../components/Slider'
import App from '../../App'
import Footer from '../components/Footer'
// import Login from '../Pages/Login'

const Home = () => {
  return (
    <div>
        <Header/>
        <Slider/>
        <App/>
        <Footer/>
        {/* <Login/> */}
 </div>
  )
}

export default Home