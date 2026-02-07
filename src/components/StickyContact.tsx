import { MessageCircle, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "./ui/button"

export function StickyContact() {
  return (
    <>
      {/* Mobile: Buttons flottants */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter via WhatsApp"
        >
          <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </a>
        <a href={`tel:${siteConfig.phone}`} aria-label="Appeler">
          <Button size="icon" variant="secondary" className="h-14 w-14 rounded-full shadow-2xl">
            <Phone className="h-6 w-6" />
          </Button>
        </a>
      </div>

      {/* Desktop: Bandeau sticky en bas */}
      <div className="fixed bottom-0 left-0 right-0 z-50 hidden md:block bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-gray-900">
                Besoin d'aide ?
              </span>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-600 hover:text-brand-red transition-colors">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <a href={`tel:${siteConfig.phone}`}>
                <Button size="sm" variant="secondary" className="gap-2">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneFormatted}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
