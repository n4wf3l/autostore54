import { motion } from "framer-motion"
import { FileText, MessageSquare, CheckCircle2 } from "lucide-react"
import { SectionTitle } from "@/components/SectionTitle"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Estimation gratuite",
    description: "Remplissez notre formulaire en ligne avec les informations de votre véhicule. C'est simple, rapide et sans engagement."
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Recevez une offre",
    description: "Nous vous contactons sous 24h avec une offre de rachat claire et transparente, valable pendant 7 jours."
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Enlèvement & formalités",
    description: "Une fois l'offre acceptée, nous nous occupons de tout : déplacement gratuit, paiement immédiat et formalités administratives."
  }
]

export function Steps() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Un processus simple et transparent du début à la fin"
        >
          Une vente rapide en 3 étapes
        </SectionTitle>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Ligne de connexion (desktop uniquement) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-brand-red/20 -z-10" />
                )}

                <div className="text-center">
                  {/* Numéro et icône */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-bold text-brand-red/10">
                        {step.number}
                      </span>
                    </div>
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand-red text-white shadow-lg">
                      <step.icon className="h-10 w-10" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
