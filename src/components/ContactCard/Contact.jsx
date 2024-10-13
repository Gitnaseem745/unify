import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { demoImg } from '../../assets'

const Contact = ({img=demoImg, name="Hina R", tag="Family", type="Mobile", isFav="Remove"}) => {
  return (
    <div className='contact'>
        <img src={img}  />
        <div className='contactDetails'>
            <div className='contactName'>
                <h2 className='text-xl'>{name}</h2>
                <h2 className='text-[10px] bg-[var(--family)] rounded-full px-3 mb-1 mt-1 text-center content-center text-black'>{tag}</h2>
            </div>
            <p>{type}</p>
        </div>
        <div className='contactFavorite'>
            <FaRegStar className='starIcon'/>
            <p>{isFav}</p>
        </div>
    </div>
  )
}

export default Contact
