import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type AccordionItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className={cn(
      "rounded-xl border-2 transition-all duration-200 mb-3 overflow-hidden",
      isOpen 
        ? "border-brand-red bg-gray-50 shadow-md" 
        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-50/50"
    )}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-5 sm:px-6 py-5 sm:py-6 text-left transition-colors group"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-relaxed pr-4 transition-colors",
          isOpen ? "text-brand-red" : "text-gray-900 group-hover:text-brand-red"
        )}>
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-all duration-250 ml-4",
            isOpen ? "rotate-180 text-brand-red" : "text-gray-500 group-hover:text-brand-red"
          )}
        />
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-250 ease-in-out",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
          <div className="border-t border-gray-200 pt-4 sm:pt-5">
            <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed [line-height:1.65]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccordionProps = {
  items: Array<{ question: string; answer: string }>
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
