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
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: '', subtitle: '', price: '' })

  const openBookingModal = (service, price, subtitle = '') => {
    setBookingModal({ isOpen: true, service, subtitle, price })
  }

  const closeBookingModal = () => {
    setBookingModal({ isOpen: false, service: '', subtitle: '', price: '' })
  }

  return (
    <>
      <Navbar />
      <MusicPlayer />
      <DepthIndicator />
      <main>
        <Hero />
        <Experiences onReserve={openBookingModal} />
        <Quiz onReserve={openBookingModal} />
        <Gallery onReserve={openBookingModal} />
        <Booking onReserve={openBookingModal} />
        <FAQ />
      </main>
      <Footer />
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={closeBookingModal}
        serviceName={bookingModal.service}
        serviceSubtitle={bookingModal.subtitle}
        servicePrice={bookingModal.price}
      />
    </>
  )
}
