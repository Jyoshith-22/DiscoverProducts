import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import StorePage from './pages/StorePage.jsx'
import WishlistsPage from './pages/WishlistsPage.jsx'
import WishlistDetailPage from './pages/WishlistDetailPage.jsx'
import MergePage from './pages/MergePage.jsx'
import Toast from './components/ui/Toast.jsx'
import { useWishlist } from './context/WishlistContext.jsx'

function App() {
  const { toast } = useWishlist()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/wishlists/merge" element={<MergePage />} />
          <Route path="/wishlists/:id" element={<WishlistDetailPage />} />
          <Route path="/wishlists" element={<WishlistsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} key={toast.id} />}
    </div>
  )
}

export default App
