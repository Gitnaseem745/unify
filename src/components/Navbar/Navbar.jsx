import Button from "../Button/Button"
import Search from "../SearchBar/Search"

const Navbar = ({isFav, showModal, enableUpdate, filterSearch}) => {

  return (
    <div className="nav">
        <div className="btns">
            <Button btnText="Add" isActive={true} showModal={showModal} />
            <Button btnText="Remove" />
        </div>
        <Search isFav={isFav} enableUpdate={enableUpdate} filterSearch={filterSearch}/>
    </div>
  )
}

export default Navbar
