import { motion } from "framer-motion"
import { MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById("offer-form")
    form?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-gray-900 py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/background-homepage.png)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-6"
          >
            <CheckCircle className="h-4 w-4" />
            Professionnel de l'automobile
          </motion.div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Vendez votre voiture au{" "}
            <span className="text-brand-red">meilleur prix</span>, en 3 étapes
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Rachat rapide depuis chez vous. Tous véhicules, quel que soit l'état.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" onClick={scrollToForm} className="text-lg px-8 py-6 h-auto shadow-2xl">
              Demander une offre
            </Button>
            <a
              href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto w-full sm:w-auto gap-2 bg-white/90 backdrop-blur-sm hover:bg-white border-white text-gray-900 shadow-2xl">
                <MessageCircle className="h-5 w-5" />
                WhatsApp immédiat
              </Button>
            </a>
          </motion.div>

          {/* Preuves sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base text-white"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-brand-red" />
              <span>Réponse rapide</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-brand-red" />
              <span>Estimation gratuite</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-brand-red" />
              <span>Paiement immédiat</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-base sm:text-lg text-white font-medium max-w-2xl mx-auto bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl"
          >
            {siteConfig.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
