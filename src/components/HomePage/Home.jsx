import Navbar from '../Navbar/Navbar.jsx'
import Contact from '../ContactCard/Contact.jsx'
import Footer from '../FooterMenu/Footer.jsx'
const Home = () => {
  return (
    <div className="home">
            <Navbar fav={false}/>
            <div className="contactList">
                <Contact />
                <Contact />
            </div>
            {/* <Footer /> */}
    </div>
  )
}

export default Home
