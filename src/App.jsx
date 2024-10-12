import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
   <>
   <div className="flex justify-center items-start w-full h-screen py-20">
        <div className="home">
            <Navbar fav={false}/>
        </div>
   </div>
   </>
  )
}

export default App
