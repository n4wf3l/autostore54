import { Hero } from "@/sections/Hero"
import { OfferForm } from "@/sections/OfferForm"
import { Benefits } from "@/sections/Benefits"
import { Steps } from "@/sections/Steps"
import { VehicleTypes } from "@/sections/VehicleTypes"
import { FAQ } from "@/sections/FAQ"

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Steps />
      <VehicleTypes />
      <OfferForm />
      <FAQ />
    </div>
  )
}
