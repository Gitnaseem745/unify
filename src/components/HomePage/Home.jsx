import Navbar from '../Navbar/Navbar.jsx'
import Contact from '../ContactCard/Contact.jsx'
import Footer from '../FooterMenu/Footer.jsx'
import Modal from '../Add/UpdateContact/Modal.jsx'
import { useEffect, useState } from 'react'
import { db } from '../../database/firebase.js'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'
const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [showFav, setShowFav] = useState(false);
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
              setFilteredData(contactLists);
            });
            return unsubscribe;
          } catch (error) {
            console.log("Error while adding contact: ", error);
          }
        };
        getContacts();
      }, []);

      const showFavorite = () => {
          const favorites = data?.filter((contact) => contact.favorite);
          setFilteredData(favorites);
          setShowFav(true);
      }
      const showAll = () => {
          setFilteredData(data);
          setShowFav(false);
      }
    const makeFav = () => {
        setIsFav(true);
        showFavorite();
    }
    const removeFav = () => {
        setIsFav(false);
        showAll();
    }
    const showModal = () => {
        setVisible(true);
        setIsUpdate(false);
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
        let filtered = data?.filter((contact) => contact.name.replace(" ", "").toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered);
    }
    const updateContact = async (id) => {
        try {
            const contactRef = doc(db, 'contacts', id);
            await setDoc(contactRef,{
            favorite: true,
        }, {merge: true});
        console.log("update contact working.");
    } catch (e) {
            console.log("update contact error: ", e);
            console.log("Document ID:", id);
        }
    }
  return (
    <div className='relative'>
    <div className="home">
            <Navbar filterSearch={filterSearch} isFav={isFav} showModal={showModal} enableUpdate={enableUpdate}/>
            <div className="contactList">
                {filteredData?.sort().map((person, i) => (
                    <Contact name={person?.name} key={i}  tag={person?.tag} type={person?.type} favorite={person?.favorite} updateContact={updateContact} contact={person} id={person.id}/>
                ))}
            </div>
    </div>
    <Modal visible={visible} hideModal={hideModal} isUpdate={isUpdate}/>
    <Footer makeFav={makeFav} removeFav={removeFav}/>
    </div>
  )
}
export default Home
