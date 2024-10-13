import Navbar from '../Navbar/Navbar.jsx'
import Contact from '../ContactCard/Contact.jsx'
import Footer from '../FooterMenu/Footer.jsx'
import Modal from '../Add/UpdateContact/Modal.jsx'
const Home = () => {
  return (
    <div className='relative'>
    <div className="home">
            <Navbar fav={false}/>
            <div className="contactList">
                <Contact />
                <Contact />
            </div>
            {/* <Footer /> */}
    </div>
    <Modal />
    </div>
  )
}

export default Home
