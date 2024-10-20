import Navbar from '../Navbar/Navbar.jsx'
import Contact from '../ContactCard/Contact.jsx'
import Footer from '../FooterMenu/Footer.jsx'
import Modal from '../Add/UpdateContact/Modal.jsx'
import { useEffect, useState } from 'react'
import { db } from '../../database/firebase.js'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import InfoPage from '../ContactInfoPage/InfoPage.jsx'
import { IoPersonAddSharp } from 'react-icons/io5'
import { userImg } from '../../assets/index.js'
const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [removeContact, setRemoveContact] = useState(false);
    const [activeMenu, setActiveMenu] = useState("All");
    const [isRemoveActive, setIsRemoveActive] = useState(false);
    const [updateContact, setUpdateContact] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [infoTrue, setInfoTrue] = useState(false);
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
          } catch (e) {
            console.log("Function Get Contacts Not Working: ", e);
          }
        };
        getContacts();
      }, []);

      const showInfoPage = (person) => {
        setInfoTrue(true);
        setSelectedContact(person);
        setUpdateContact(false);
        setRemoveContact(false);
        hideModal();
      }
      const hideInfoPage = () => {
        setInfoTrue(false);
        hideModal();
        setUpdateContact(false);
      };
      const showFavorite = () => {
          const favorites = data?.filter((contact) => contact.favorite);
          setFilteredData(favorites);
      }
      const showAll = () => {
          setFilteredData(data);
      }
    const makeFav = (e) => {
        const currentActiveMenu = e.target.innerHTML;
        setActiveMenu(currentActiveMenu);
        setIsFav(true);
        showFavorite();
    }
    const removeFav = (e) => {
        const currentActiveMenu = e.target.innerHTML;
        setActiveMenu(currentActiveMenu);
        setIsFav(false);
        showAll();
    }
    const showModal = () => {
        setVisible(true);
        setIsUpdate(false);
        setRemoveContact(false);
        setIsRemoveActive(false);
        setUpdateContact(false);
    }
    const hideModal = () => {
        setVisible(false);
        setIsUpdate(false);
    }
    const updateTrial = () => {
        setUpdateContact((prev) => !prev);
        setRemoveContact(false);
        setVisible(false);
    }
    const enableUpdate = (person) => {
        setIsUpdate(true);
        setVisible(true);
        setSelectedContact(person);
        setRemoveContact(false);
        setUpdateContact(true);
        setIsRemoveActive(false);
    }
    const filterSearch = (e) => {
        let query = e.target.value;
        let filtered = data?.filter((contact) => contact.name.replace(" ", "").toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered);
    }
    const makeFavorite = async (id) => {
        try {
            const contactRef = doc(db, 'contacts', id);
            await setDoc(contactRef,{
            favorite: true,
        }, {merge: true});
    } catch (e) {
            console.log("Function Make Favorite Not Working: ", e);
        }
    }
    const removeFavorite = async (id) => {
        try {
            const contactRef = doc(db, 'contacts', id);
            await setDoc(contactRef,{
            favorite: false,
        }, {merge: true});
    } catch (e) {
            console.log("Function Remove Favorite Not Working: ", e);
        }
    }
    const deleteContact = async (id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await deleteDoc(contactRef);
        } catch (e) {
            console.log("Function Delete Contact Not Working: ", e);
        }
    }
    const handleRemove = () => {
        setRemoveContact((prev) => !prev);
        hideModal();
        setIsRemoveActive((prev) => !prev);
    }
  return (
    <div className='relative'>
    {
    infoTrue ?
    (
        <>
        <InfoPage hideInfoPage={hideInfoPage} updateContact={() => enableUpdate(selectedContact)} contactName={selectedContact?.name} contactMail={selectedContact?.email} contactNumber={selectedContact?.number} contactImg={selectedContact?.image || userImg}/>
        <Modal visible={visible} hideModal={hideModal} isUpdate={isUpdate} contact={selectedContact}/>
        </>
    )
    :
    (
            <>
            <div className="home">
                <Navbar isRemoveActive={isRemoveActive} handleRemove={handleRemove} filterSearch={filterSearch} isFav={isFav} showModal={showModal} enableUpdate={updateTrial}/>
                <div className="contactList">
                    {
                        filteredData.length <= 0 ?
                        <div className='nothingFound'>
                            <IoPersonAddSharp className='text-8xl' />
                            <h1>No Contact Found</h1>
                        </div>
                        :
                        (
                            filteredData?.sort().map((person, i) => (
                            <Contact name={person?.name} key={i}  tag={person?.tag} type={person?.type} favorite={person?.favorite} makeFavorite={makeFavorite} contact={person} id={person.id} removeFavorite={removeFavorite} removeContact={removeContact} deleteContact={deleteContact} updateContact={updateContact} img={person?.image || userImg} enableUpdate={() => enableUpdate(person)} showInfoPage={() => showInfoPage(person)}/>
                            ))
                        )}
                </div>
        </div>
        <Modal visible={visible} hideModal={hideModal} isUpdate={isUpdate} contact={selectedContact}/>
        <Footer activeMenu={activeMenu} makeFav={makeFav} removeFav={removeFav}/>
        </>
    )}
    </div>
  )
}
export default Home
