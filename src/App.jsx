import './App.css'
import Banner from './Components/Banner'
import Deal from './Components/Deal'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

function App() {
  
  return (
    <>
    <div className='lg:px-6'>
       <Navbar></Navbar>
     <Banner></Banner>
     <Feature></Feature>
     <Main></Main>   
     </div>
       <Hero></Hero>
       <div>
         <Deal></Deal>
       </div>
      <Footer></Footer>
    </>
  )
}

export default App
