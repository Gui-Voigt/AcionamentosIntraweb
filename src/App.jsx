import Content from "./Layouts/Content"
import Navbar from "./Layouts/Navbar"
import {useState} from "react"

function App() {

  const [link, setLink] = useState()

  return (
    <div className="App">
      <Navbar setLink={setLink} />
      <Content link={link}/>
    </div>    
  )
}

export default App
