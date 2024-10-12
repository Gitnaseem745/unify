import { CiSearch } from "react-icons/ci"
import { LuPencilLine } from "react-icons/lu"

const Search = ({isFav}) => {
  return (
    <div className="search">
        <div className="upper">
            <h2 className="text-[28px]">{isFav ? "Favorites" : "Recents"}</h2>
            <LuPencilLine className="penIcon" />
        </div>
        <div className="lower relative">
            <CiSearch className="searchIcon" />
            <input type="text" placeholder="Search"/>
        </div>
    </div>
  )
}

export default Search
