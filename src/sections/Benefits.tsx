import { motion } from "framer-motion"
import { 
  Zap, 
  DollarSign, 
  Shield, 
  Clock, 
  CreditCard, 
  Truck 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionTitle } from "@/components/SectionTitle"

const benefits = [
  {
    icon: Zap,
    title: "Rapide",
    description: "Réponse immédiate après envoi de votre demande. Nous vous contactons sous 24h maximum."
  },
  {
    icon: DollarSign,
    title: "Estimation gratuite",
    description: "100% gratuite et sans aucun engagement de votre part. Aucun frais caché."
  },
  {
    icon: Shield,
    title: "Meilleur prix",
    description: "Nous vous proposons le meilleur prix pour votre véhicule, quelle que soit sa condition."
  },
  {
    icon: Clock,
    title: "Offre valable 7 jours",
    description: "Notre offre reste valable pendant 7 jours, vous laissant le temps de réfléchir."
  },
  {
    icon: CreditCard,
    title: "Paiement immédiat",
    description: "Paiement sécurisé immédiatement après accord. Transaction rapide et transparente."
  },
  {
    icon: Truck,
    title: "Enlèvement gratuit",
    description: "Déplacement offert pour récupérer votre véhicule, où que vous soyez dans la région."
  }
]

export function Benefits() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Pourquoi choisir Auto Store 54 pour vendre votre véhicule ?"
        >
          Nos avantages
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
