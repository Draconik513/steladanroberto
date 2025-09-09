import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import vidioWishes from '../assets/videos/Wishes.mp4'

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false)

  const wishes = `
eh eh sblm baca e sii , 
Kan u suka kann w long text ho uu , nah karna ini u e special day jadii w buatt khusus hoo uuu wkwkwkwk

Happy birthday luvv 🎂🤍. Honestly, our relationship hasn't always been easy...sometimes there are misunderstandings, sometimes you and I are both stubborn.But I'm so grateful that, despite all the small dramas, we've still chosen to stick it out until now.
I just wanna make you the happiest you've ever been 🥰. I want to make you feel safe 👩‍❤️‍👨 and loved 💗and comforted. I want you to know that you can come to me when you're not ok, when your eyes are filled with tears 🥺 and I'll hold you til you're a little more ok☺️. I'm always here for you. I love you at your best and at your worst.
Don't listen to other people 's words that have brought you down , you will be served by the right person.
Stay confident and be yourself, you can change but change for the better, okay?
 We had our share of ups and downs, well a lot of them ,  but we never gave up on each other and how much I appreciate you for everything that you've done for me!! 😘 Thank youu for always choosing me, even though we are not perfect, we are still us. lovv uuu so much bebii today , tomorrow and forever 👉🏻👈🏻😘
sorry yaa kalau cuman bisa kasi kata kata gituu ehehhehehe

ini ada gamesss sedikitt 

🐷+🐕= ? Jadi apa hayo 
 JADI JAWABAN NYA 

ROBTEL

Ie jawaban prik kann wkwkwkwkkww ya iya laa kann yang penting walang e hubungan bo prikk , tapiii pastiii uuu sukaaa eee w buat giniii * kepedean gapapa ya sekali kaliii * xixixixi.
  `

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>
        
        <div className="mb-8">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split('\n').map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? 'Sembunyikan Cintaku' : 'Lihat Cintaku'}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">
                  ❤️
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Roberto 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default SpecialWishes