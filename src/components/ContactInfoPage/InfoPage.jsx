import { IoChevronBack } from 'react-icons/io5'
import { LuPencilLine, LuPhone } from 'react-icons/lu'
import { CiVideoOn } from 'react-icons/ci'
import { MdOutlineMailOutline } from 'react-icons/md'
const InfoPage = ({hideInfoPage, updateContact, contactImg, contactName="Hina R", contactNumber="07457200786", contactMail="Hinarida@icloud.com",}) => {
  return (
    <section className='contactInfoPage'>
        <div className='contactInfo'>
            <div className='contactInfoMenu'>
                <IoChevronBack className='infoIcon' onClick={hideInfoPage} />
                <LuPencilLine className='infoIcon' onClick={updateContact}/>
            </div>
            <div className='contactMainInfo'>
                <img src={contactImg} alt="" />
                <h2>{contactName}</h2>
                <p>{contactNumber}</p>
                <p>{contactMail}</p>
            </div>
            <div className='contactOptions'>
                <LuPhone className='infoIcon' />
                <CiVideoOn className='infoIcon'/>
                <MdOutlineMailOutline className='infoIcon'/>
            </div>
        </div>
        <div className='callInfo'>
            <p>Call History</p>
            <div className='totalCallInfo'>
                <h1>NONE!</h1>
            </div>
        </div>
    </section>
  )
}

export default InfoPage
