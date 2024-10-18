import { FaRegStar } from 'react-icons/fa'
import { MdDeleteForever, MdUpdate } from 'react-icons/md'
const Contact = ({id, makeFavorite, removeFavorite, removeContact, deleteContact, updateContact, enableUpdate, showInfoPage, img, name="Hina R", tag="Family", type="Mobile", favorite=false}) => {
  return (
    <div className='contact'>
        <img src={img} onClick={showInfoPage} className='cursor-pointer' />
        <div className='contactDetails'>
            <div className='contactName'>
                <h2 onClick={showInfoPage} className='text-xl cursor-pointer'>{name}</h2>
                <p className={`${tag==="" ? "hidden" : tag.toLowerCase()==='friend' ? ("bg-[var(--friend)]") : ("bg-[var(--family)]")}`}>{tag}</p>
            </div>
            <p>{type}</p>
        </div>
        <div className='contactFavorite'>
            {
            removeContact ?
                (
                    <MdDeleteForever onClick={() => deleteContact(id)} className="cursor-pointer text-[var(--accent)]"/>
                )
            :   updateContact ?
                    (
                        <MdUpdate onClick={enableUpdate} className='text-[var(--friend)] cursor-pointer'/>
                    )
                :
                    (
                        <FaRegStar onClick={() => favorite ? removeFavorite(id) : makeFavorite(id)} className={`cursor-pointer ${favorite ? 'text-[var(--body)]' : 'text-[var(--icon)]'}`}/>
                    )
            }
            {
                removeContact ? (<p>Remove</p>) : updateContact ? (<p>Update</p>) : (<p>{favorite ? "Remove" : "Add"}</p>)
            }
        </div>
    </div>
  )
}
export default Contact
