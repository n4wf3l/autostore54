import { Link } from "react-router-dom"
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"
import logoAutoStore from "@/assets/logo-autostore54.png"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* À propos */}
          <div>
            <div className="mb-4">
              <img 
                src={logoAutoStore} 
                alt="Auto Store 54" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Professionnel dans l'automobile, spécialisé dans l'achat et la revente de véhicules.
              Nous rachetons tous types de véhicules, quel que soit l'état.
            </p>
            <p className="text-sm text-gray-500">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 group-hover:bg-brand-red transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>{siteConfig.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 group-hover:bg-brand-red transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 group-hover:bg-brand-red transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span>WhatsApp</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p>{siteConfig.address.street}</p>
                  <p>{siteConfig.address.postalCode} {siteConfig.address.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Accueil
              </Link>
              <Link
                to="/mentions-legales"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <a
                href="#offer-form"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Demander une offre
              </a>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                Horaires indicatifs
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Contactez-nous par téléphone ou WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Auto Store 54. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
