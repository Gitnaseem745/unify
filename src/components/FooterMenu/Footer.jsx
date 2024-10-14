import { useState } from "react"

const Footer = ({makeFav, removeFav}) => {
    const menu = [
        {
            text: 'All',
            action: removeFav
        },
        {
            text: "Favorite",
            action: makeFav
        },
        {
            text: 'Dev',
            action: removeFav,
            link: "https://www.instagram.com/_still_sahil/",
        }
    ]
    // changing all elems color
    // const [isActive, setIsActive] = useState(false);
    // const toggleActive = () => {
    //     setIsActive(!isActive);
    // }
    // className={isActive && 'text-[var(--body)]'}
  return (
    <div className="footer">
    <div className='menus'>
        {menu.map((item,  i) => (
            <a key={i} onClick={item.action} href={item.link}>{item.text}</a>
        ))}
    </div>
    </div>
  )
}

export default Footer
