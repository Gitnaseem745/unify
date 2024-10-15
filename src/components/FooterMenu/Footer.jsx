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
            link: "https://www.linkedin.com/in/naseem-ansari-25474b269/",
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
