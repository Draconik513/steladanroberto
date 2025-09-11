import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navigation = ({ isBirthday }) => {
  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex bg-white bg-opacity-80 backdrop-blur-md rounded-full shadow-lg p-2 pointer-events-auto"
      >
        <Link 
          to="/"
          className="mx-2 p-2 rounded-full hover:bg-pink-100 transition-colors"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            🏠
          </motion.div>
        </Link>
        
        <Link 
          to="/countdown"
          className="mx-2 p-2 rounded-full hover:bg-pink-100 transition-colors"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            ⏳
          </motion.div>
        </Link>
        
        {/* Hanya tampilkan Special Wishes jika sudah ulang tahun */}
        {isBirthday ? (
          <Link 
            to="/wishes"
            className="mx-2 p-2 rounded-full hover:bg-pink-100 transition-colors"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              💌
            </motion.div>
          </Link>
        ) : (
          <div 
            className="mx-2 p-2 rounded-full opacity-50 cursor-not-allowed"
            title="Tersedia pada 12 September 2025"
          >
            <div className="opacity-50">
              💌
            </div>
          </div>
        )}
        
        {/* Hanya tampilkan Memories jika sudah ulang tahun */}
        {isBirthday ? (
          <Link 
            to="/memories"
            className="mx-2 p-2 rounded-full hover:bg-pink-100 transition-colors"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              📸
            </motion.div>
          </Link>
        ) : (
          <div 
            className="mx-2 p-2 rounded-full opacity-50 cursor-not-allowed"
            title="Tersedia pada 12 September 2025"
          >
            <div className="opacity-50">
              📸
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  )
}

export default Navigation