import { Link } from "react-router-dom"
import { Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "./ui/button"
import logoAutoStore from "@/assets/logo-autostore54.png"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoAutoStore} 
              alt="Auto Store 54" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:block"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                {siteConfig.phoneFormatted}
              </Button>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="sm:hidden"
              aria-label="Appeler"
            >
              <Button variant="outline" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
