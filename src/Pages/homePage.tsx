import ReadyCall from '../components/ReadyCall'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Home from '../screen/home'

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <ReadyCall />
      <Footer></Footer>
    </>
  )
}
