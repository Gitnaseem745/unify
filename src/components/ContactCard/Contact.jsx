import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { userImg } from '../../assets'

const Contact = ({img=userImg, id, updateContact, name="Hina R", tag="Family", type="Mobile", favorite=false}) => {
  return (
    <div className='contact'>
        <img src={img} />
        <div className='contactDetails'>
            <div className='contactName'>
                <h2 className='text-xl'>{name}</h2>
                <p className={`${tag=='Friend' ? ("bg-[var(--friend)]") : ("bg-[var(--family)]")}`}>{tag}</p>
            </div>
            <p>{type}</p>
        </div>
        <div className='contactFavorite'>
            <FaRegStar onClick={() => updateContact(id)} className={favorite ? 'text-[var(--body)]' : 'text-[var(--icon)]'}/>
            <p>{favorite ? "Remove" : "Add"}</p>
        </div>
    </div>
  )
}
export default Contact
