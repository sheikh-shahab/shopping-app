


import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Fashion from "./components/Fashion";
import Accessories from "./components/Accessories";
import Desgin from "./components/Desgin";
import New from "./components/New";
import Footer from "./components/Footer";




export default function Home() {
  // const [category, setCategory] = useState("All")
  return (
    <div>
        
      <Hero/>
      <Fashion/>
      <Newest  />
      <Accessories/>
      <Desgin/>
      <New/>
      <Footer/>
    
    </div>
  )
}
