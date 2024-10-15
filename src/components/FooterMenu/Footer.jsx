const Footer = ({makeFav, removeFav, activeMenu}) => {
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
    return (
        <div className="footer">
    <div className='menus'>
        {menu.map((item,  i) => (
            <a key={i} className={`${activeMenu == item.text ? "text-[var(--body)]" : "text-[var(--icon)]"}`} onClick={item.action} href={item.link}>{item.text}</a>
        ))}
    </div>
    </div>
  )
}
export default Footer
