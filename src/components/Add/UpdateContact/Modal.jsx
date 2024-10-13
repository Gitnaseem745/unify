import { Formik } from 'formik'
import React from 'react'
import Button from '../../Button/Button'
import { IoIosCloseCircle } from 'react-icons/io'

const Modal = () => {
  return (
    <div className='modalForm'>
        <div className="flex justify-end items-center">
        <IoIosCloseCircle className='text-[var(--body)] text-2xl cursor-pointer' />
        </div>
        <Formik>
            <form>
                {formFields.map((field) => (
                    <div className="formFields" key={field.label}>
                        <div>
                            <label htmlFor={field.label} >{field.label}</label>
                            <input type={field.type} className='formInput' placeholder={field.placeHolder} />
                        </div>
                    </div>
                ))}
            </form>
        </Formik>
        <Button btnText='Add Contact' isActive={true}/>
    </div>
  )
}
const formFields = [
    {
    label: "Name:",
    type: "text",
    placeHolder: "Hina R",
    },
    {
    label: "Phone:",
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
