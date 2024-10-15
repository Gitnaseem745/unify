import { Field, Form, Formik } from 'formik'
import { IoIosCloseCircle } from 'react-icons/io'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const addContact = async (contact) => {
    try {
        alert("Alert! You Don't have the Permissions to Add this Contact.");
        return;
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (e) {
      console.log("Add Contact Not Working: ", e);
    }
  };
  const updateContact = async (contact, id) => {
    try {
        alert("Alert! You Don't have the Permissions to Update this Contact.");
        return;
        const contactRef = doc(db, "contacts", id);
        await updateDoc(contactRef, contact);
        toast.success("Success Notification !", {
            position: "top-center"
          });
    } catch (e) {
        console.log("Update Contact Not Working: ", e);
    }
  }
const Modal = ({visible, hideModal, isUpdate, contact}) => {
    useEffect(() => {
        console.log(contact);
    },[isUpdate])
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(visible ? true : false)
    }, [visible]);
    return (
    <motion.div initial={{ y: 500 }} animate={animate ? {y:0} : {}} transition={{ ease: "easeInOut", delay: 0.2}} className={visible ? 'modalForm' : 'hidden'}>
        <div className="flex justify-end items-center">
        <IoIosCloseCircle onClick={hideModal} className='text-[var(--body)] text-2xl cursor-pointer' />
        </div>
        <Formik
        enableReinitialize={true}
        initialValues={
            isUpdate ?
            {
                name: contact?.name || '',
                number: contact?.number || '',
                email: contact?.email || '',
                type: contact?.type || '',
                tag: contact?.tag || '',
                image: contact?.image || ''
            }
            :
            {
                name: '',
                number: '',
                email: '',
                type: '',
                tag: '',
                image: ''
            }
        }
        onSubmit={(values, {resetForm}) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
            resetForm();
            hideModal();
        }}
        >
            <Form>
                {formFields.map((field) => (
                    <div className="formFields" key={field.label}>
                        <div>
                            <label htmlFor={field.label.replace(':', '').toLowerCase()} >{field.label}</label>
                            <Field name={field.label.replace(':', '').toLowerCase()} placeholder={field.placeHolder} type={field.type}  className='formInput'/>
                        </div>
                    </div>
                ))}
            <div className="modalBtn">
                <button className={isUpdate ? ('bg-[#45CCA1]') : ('bg-[var(--body)]')}>{isUpdate ? 'Update' : 'Add'} Contact</button>
            </div>
            </Form>
        </Formik>
    </motion.div>
  )
}
const formFields = [
    {
    label: "Name:",
    type: "text",
    placeHolder: "Hina R",
    },
    {
    label: "Number:",
    type: "tel",
    placeHolder: "0745 7200 786",
    },
    {
    label: "Email:",
    type: "email",
    placeHolder: "Hinarida@icloud.com",
    },
    {
    label: "Type:",
    type: "text",
    placeHolder: "Mobile",
    },
    {
    label: "Tag:",
    type: "text",
    placeHolder: "Family",
    },
    {
    label: "Image:",
    type: "file",
    placeHolder: "Add Image",
    }
]
export default Modal
