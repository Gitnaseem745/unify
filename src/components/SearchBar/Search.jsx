import { CiSearch } from "react-icons/ci"
import { LuPencilLine } from "react-icons/lu"

const Search = ({isFav, enableUpdate, filterSearch}) => {
  return (
    <div className="search">
        <div className="upper">
            <h2 className="text-[28px]">{isFav ? "Favorites" : "Recents"}</h2>
            <LuPencilLine className="penIcon" onClick={enableUpdate} />
        </div>
        <div className="lower relative">
            <CiSearch className="searchIcon" />
            <input type="text" placeholder="Search" onChange={filterSearch}/>
        </div>
    </div>
  )
}

export default Search
