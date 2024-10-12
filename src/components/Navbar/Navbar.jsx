import Button from "../Button/Button"
import Search from "../SearchBar/Search"

const Navbar = ({fav}) => {
  return (
    <div className="nav">
        <div className="btns">
            <Button btnText="Add" isActive={true} />
            <Button btnText="Remove" />
        </div>
        <Search isFav={fav} />
    </div>
  )
}

export default Navbar
