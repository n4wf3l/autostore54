import { motion } from "framer-motion"
import { SectionTitle } from "@/components/SectionTitle"
import { Accordion } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Rachetez-vous les voitures sans contrôle technique ?",
    answer: "Oui, absolument. Nous rachetons les véhicules avec ou sans contrôle technique valide. L'absence de CT n'est pas un problème pour nous."
  },
  {
    question: "Ma carte grise est en retard, est-ce un problème ?",
    answer: "Non, ce n'est pas un obstacle. Nous pouvons racheter votre véhicule même si la carte grise est en retard ou nécessite une mise à jour. Nous vous accompagnons dans les démarches si nécessaire."
  },
  {
    question: "Vous vous déplacez jusqu'où ?",
    answer: "Nous nous déplaçons gratuitement dans toute la région Grand Est et départements limitrophes. Pour des distances plus importantes, contactez-nous pour étudier ensemble les possibilités."
  },
  {
    question: "Combien de temps l'offre est-elle valable ?",
    answer: "Notre offre de rachat est valable pendant 7 jours à compter de sa réception. Cela vous laisse le temps de réfléchir sereinement à notre proposition."
  },
  {
    question: "Quels documents faut-il pour vendre mon véhicule ?",
    answer: "Les documents nécessaires sont : la carte grise (certificat d'immatriculation), un justificatif d'identité, un justificatif de domicile, et si possible le carnet d'entretien. Nous vous accompagnons dans la préparation du dossier."
  },
  {
    question: "Acceptez-vous les véhicules accidentés ou en panne ?",
    answer: "Oui, nous rachetons les véhicules accidentés, en panne, ou même VEI (véhicule économiquement irréparable). Nous proposons des solutions adaptées à tous les états de véhicules."
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Le paiement est effectué immédiatement après signature du contrat de vente et vérification des documents. Nous privilégions les paiements sécurisés (virement bancaire ou chèque de banque selon le montant)."
  },
  {
    question: "Puis-je vendre un véhicule gagé ?",
    answer: "Oui, nous étudions chaque situation au cas par cas. Pour les véhicules gagés, nous vous accompagnons dans les démarches nécessaires pour régulariser la situation."
  }
]

export function FAQ() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Trouvez rapidement les réponses à vos questions"
        >
          Questions fréquentes
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
