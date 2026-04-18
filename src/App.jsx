import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import DepthIndicator from './components/DepthIndicator'
import Hero from './components/Hero'
import Experiences from './components/Experiences'
import Quiz from './components/Quiz'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import BookingModal from './components/BookingModal'
import MusicPlayer from './components/MusicPlayer'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: '', price: '' })

  const openBookingModal = (service, price) => {
    setBookingModal({ isOpen: true, service, price })
  }

  const closeBookingModal = () => {
    setBookingModal({ isOpen: false, service: '', price: '' })
  }

  return (
    <>
      <Navbar />
      <MusicPlayer />
      <DepthIndicator />
      <Hero />
      <Experiences onReserve={openBookingModal} />
      <Quiz />
      <Gallery />
      <Booking />
      <BookingModal 
        isOpen={bookingModal.isOpen} 
        onClose={closeBookingModal}
        serviceName={bookingModal.service}
        servicePrice={bookingModal.price}
      />
      <FAQ />
      <Footer />
    </>
  )
}
