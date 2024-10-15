import Navbar from '../Navbar/Navbar.jsx'
import Contact from '../ContactCard/Contact.jsx'
import Footer from '../FooterMenu/Footer.jsx'
import Modal from '../Add/UpdateContact/Modal.jsx'
import { useEffect, useState } from 'react'
import { db } from '../../database/firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
const Home = () => {

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        const getContacts = async () => {
          try {
            const contactsRef = collection(db, "contacts");
            const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
              const contactLists = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setData(contactLists);
            });
            return unsubscribe;
          } catch (error) {
            console.log("Error while adding contact: ", error);
          }
        };
        getContacts();
      }, []);

    const makeFav = () => {
        setIsFav(true);
    }
    const removeFav = () => {
        setIsFav(false);
    }
    const showModal = () => {
        setVisible(true);
    }
    const hideModal = () => {
        setVisible(false);
        setIsUpdate(false);
    }
    const enableUpdate = () => {
        setIsUpdate(true);
        setVisible(true);
    }
    const filterSearch = (e) => {
        let query = e.target.value;
        // console.log("Query: ", query);
        //fix filtered
        let filtered = contacts?.filter((contact) => contact.name.equals(query));
        setData(filtered);
    }
  return (
    <div className='relative'>
    <div className="home">
            <Navbar filterSearch={filterSearch} isFav={isFav} showModal={showModal} enableUpdate={enableUpdate}/>
            <div className="contactList">
                {data?.map((person, i) => (
                    <Contact name={person?.name} key={i}  tag={person?.tag} type={person?.type} isFav={person?.isFav}/>
                ))}
            </div>
    </div>
    <Modal visible={visible} hideModal={hideModal} isUpdate={isUpdate}/>
    <Footer makeFav={makeFav} removeFav={removeFav}/>
    </div>
  )
}
export default Home
