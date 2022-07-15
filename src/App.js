import './App.css';
import Navbar from "./navbar"
import Home from "./pages/home"
import Products from "./pages/products"
import Contact from "./pages/contact-us"

function App() {
  let Component 
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
      case "/products":
        Component = Products
        break
        case "/contact-us":
          Component = Contact
          break
  }
  return (
  <>
  <Navbar />
  <Component />
  </>
  )
}

export default App;
