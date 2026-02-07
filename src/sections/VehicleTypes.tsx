import { motion } from "framer-motion"
import { 
  AlertCircle, 
  FileX, 
  Gauge, 
  CarFront, 
  Truck, 
  Wrench,
  FileWarning,
  Ship
} from "lucide-react"
import { SectionTitle } from "@/components/SectionTitle"
import { siteConfig } from "@/config/site"

const vehicleTypes = [
  {
    icon: AlertCircle,
    title: "Sans contrôle technique",
    description: "Avec ou sans CT valide"
  },
  {
    icon: FileWarning,
    title: "Carte grise en retard",
    description: "En règle ou en retard"
  },
  {
    icon: Gauge,
    title: "Fort kilométrage",
    description: "Peu importe le kilométrage"
  },
  {
    icon: CarFront,
    title: "Véhicules accidentés",
    description: "État après accident"
  },
  {
    icon: Wrench,
    title: "Avec frais à prévoir",
    description: "Carrosserie en mauvais état"
  },
  {
    icon: FileX,
    title: "Véhicules gagés",
    description: "Nous étudions votre dossier"
  },
  {
    icon: AlertCircle,
    title: "VEI",
    description: "Véhicule économiquement irréparable"
  },
  {
    icon: Ship,
    title: "Pour export",
    description: "Véhicules pour pièce ou export"
  }
]

export function VehicleTypes() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Professionnel dans l'automobile, nous rachetons tous types de véhicules dans l'état"
        >
          Nous rachetons aussi...
        </SectionTitle>

        {/* Badge central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-brand-red px-6 py-3 text-white font-semibold shadow-lg">
            <Truck className="h-5 w-5" />
            <span>Camions & utilitaires acceptés</span>
          </div>
        </motion.div>

        {/* Grille de types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {vehicleTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-brand-red hover:shadow-lg transition-all duration-300">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-all duration-300">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {type.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message de réassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Dans l'état, sans garantie
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous nous adaptons à votre situation et proposons des solutions pour tous types de véhicules. 
              Contactez-nous pour une estimation personnalisée, même si votre véhicule ne correspond pas aux critères habituels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
