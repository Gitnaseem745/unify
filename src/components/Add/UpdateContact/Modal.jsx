import { ErrorMessage, Field, Form, Formik } from 'formik'
import { IoIosCloseCircle } from 'react-icons/io'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
const contactFormValidation = Yup.object().shape({
    name: Yup.string().required("Required !"),
    number: Yup.string().required("Required !"),
    email: Yup.string().email("Please Enter a Valid Email!"),
    type: Yup.string().required("Required !"),
})
const Modal = ({visible, hideModal, isUpdate, contact}) => {
    const addContact = async (contact) => {
        try {
          const contactRef = collection(db, "contacts");
          await addDoc(contactRef, contact);
        } catch (e) {
            console.log("Function Add Contact Not Working: ", e);
        }
    };
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
        } catch (e) {
            console.log("Function Update Contact Not Working: ", e);
        }
      }
    useEffect(() => {
        console.log("Check Later File Type.");
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
        validationSchema={contactFormValidation}
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
            toast.success(`${isUpdate ? 'Updated' : 'Added'} Contact Successfully`);
            hideModal();
        }}
        >
            <Form>
                {formFields.map((field) => (
                    <div className="formFields" key={field.label}>
                        <div>
                            <label htmlFor={field.label.replace(':', '').toLowerCase()} >{field.label}</label>
                            <Field name={field.label.replace(':', '').toLowerCase()} placeholder={field.placeHolder} type={field.type}  className='formInput'/>
                            <div className=" text-xs text-[var(--accent)] mt-[-10px] mb-2 pl-2">
                                <ErrorMessage name={field.label.replace(':', '').toLowerCase()} />
                            </div>
                        </div>
                    </div>
                ))}
            <div className="modalBtn">
                <button type='submit' className={isUpdate ? ('bg-[#45CCA1]') : ('bg-[var(--body)]')}>{isUpdate ? 'Update' : 'Add'} Contact</button>
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
    placeHolder: "0912 3456 789",
    },
    {
    label: "Email:",
    type: "email",
    placeHolder: "Hina.rida@icloud.com",
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
