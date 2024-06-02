// src/pages/_app.js
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import "../app/globals.css"
import { useRouter } from "next/navigation"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    router.events.on("routeChangeStart", handleRouteChange)
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [router.events])

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
