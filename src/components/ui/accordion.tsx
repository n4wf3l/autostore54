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
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left font-medium text-gray-900 hover:text-brand-red transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-200 text-brand-red",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-12 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

type AccordionProps = {
  items: Array<{ question: string; answer: string }>
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-lg">
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
