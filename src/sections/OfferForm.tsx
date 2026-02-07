import { useState } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { SectionTitle } from "@/components/SectionTitle"
import { siteConfig } from "@/config/site"

const carBrands = [
  "Renault", "Peugeot", "Citroën", "Volkswagen", "Mercedes-Benz", 
  "BMW", "Audi", "Toyota", "Ford", "Opel", "Fiat", "Seat", "Skoda", 
  "Nissan", "Hyundai", "Kia", "Autre"
]

const vehicleStates = [
  { value: "roule", label: "Roule normalement" },
  { value: "ne-roule-pas", label: "Ne roule pas" },
  { value: "accidentee", label: "Accidentée" },
  { value: "vei", label: "VEI (véhicule économiquement irréparable)" },
  { value: "gagee", label: "Gagée" },
  { value: "autre", label: "Autre" }
]

export function OfferForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    state: "",
    mileage: "",
    email: "",
    phone: "",
    price: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const emailBody = `
Nouvelle demande d'estimation Auto Store 54

Véhicule:
- Marque: ${formData.brand}
- Modèle: ${formData.model}
- Année: ${formData.year}
- État: ${formData.state}
- Kilométrage: ${formData.mileage} km

Contact:
- Email: ${formData.email}
- Téléphone: ${formData.phone}
- Prix souhaité: ${formData.price}€

Message:
${formData.message}
    `.trim()

    // Ouvrir mailto
    window.location.href = `mailto:${siteConfig.email}?subject=Demande d'estimation - ${formData.brand} ${formData.model}&body=${encodeURIComponent(emailBody)}`
    
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    const message = `Bonjour, je souhaite une estimation pour mon véhicule:
    
Marque: ${formData.brand}
Modèle: ${formData.model}
Année: ${formData.year}
État: ${formData.state}
Kilométrage: ${formData.mileage} km
Prix souhaité: ${formData.price}€

${formData.message}`

    window.open(
      `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  return (
    <section id="offer-form" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Remplissez le formulaire et recevez une estimation gratuite sous 24h"
        >
          Demandez une offre
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-6 sm:p-8 md:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations véhicule */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Informations du véhicule</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                        Marque *
                      </label>
                      <Select
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Sélectionner</option>
                        {carBrands.map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                        Modèle *
                      </label>
                      <Input
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="Ex: Clio, 208..."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                        Année *
                      </label>
                      <Select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Sélectionner</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">
                        Kilométrage *
                      </label>
                      <Input
                        id="mileage"
                        name="mileage"
                        type="number"
                        value={formData.mileage}
                        onChange={handleChange}
                        placeholder="Ex: 120000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      État du véhicule *
                    </label>
                    <Select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionner</option>
                      {vehicleStates.map(state => (
                        <option key={state.value} value={state.value}>{state.label}</option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                      Prix souhaité (optionnel)
                    </label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Ex: 5000"
                    />
                  </div>
                </div>

                {/* Informations contact */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">Vos coordonnées</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message complémentaire
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez l'état de votre véhicule, les équipements, etc."
                      rows={4}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Mail className="h-5 w-5" />
                  Envoyer ma demande
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Demande préparée !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Votre client email devrait s'être ouvert. Vous pouvez aussi nous contacter via WhatsApp.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Button onClick={handleWhatsApp} className="w-full gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Envoyer via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitted(false)}
                    className="w-full"
                  >
                    Modifier ma demande
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
