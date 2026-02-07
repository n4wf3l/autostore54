import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link to="/" className="inline-block mb-8">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* Identification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Identification
              </h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Nom de l'entreprise :</strong> {siteConfig.name}</p>
                <p><strong>Activité :</strong> Professionnel dans l'automobile - achat et revente de véhicules</p>
                <p><strong>Adresse :</strong> {siteConfig.address.full}</p>
                <p><strong>Téléphone :</strong> {siteConfig.phoneFormatted}</p>
                <p><strong>Email :</strong> {siteConfig.email}</p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Hébergement
              </h2>
              <p className="text-gray-600">
                Ce site est hébergé par un service d'hébergement web professionnel.
                Les coordonnées de l'hébergeur sont disponibles sur demande.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-gray-600">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété 
                de {siteConfig.name} ou de ses partenaires. Toute reproduction, même partielle, 
                est interdite sans autorisation préalable écrite.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Responsabilité
              </h2>
              <p className="text-gray-600 mb-3">
                {siteConfig.name} s'efforce d'assurer au mieux l'exactitude et la mise à jour 
                des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir 
                l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
              <p className="text-gray-600">
                Les estimations et offres de rachat sont données à titre indicatif et peuvent 
                être ajustées après inspection physique du véhicule.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Protection des données personnelles
              </h2>
              <p className="text-gray-600 mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la 
                loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-600 mb-3">
                Les informations collectées via nos formulaires sont exclusivement destinées à 
                {siteConfig.name} pour le traitement de votre demande d'estimation ou de contact. 
                Elles ne seront en aucun cas transmises à des tiers.
              </p>
              <p className="text-gray-600">
                Pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
                <li>Par email : {siteConfig.email}</li>
                <li>Par téléphone : {siteConfig.phoneFormatted}</li>
                <li>Par courrier : {siteConfig.address.full}</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-600">
                Ce site n'utilise pas de cookies de traçage ou publicitaires. Seuls des cookies 
                techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
              </p>
            </section>

            {/* Liens externes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Liens externes
              </h2>
              <p className="text-gray-600">
                Ce site peut contenir des liens vers des sites externes (WhatsApp, services de 
                messagerie). {siteConfig.name} ne peut être tenu responsable du contenu de ces 
                sites tiers.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Droit applicable
              </h2>
              <p className="text-gray-600">
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
