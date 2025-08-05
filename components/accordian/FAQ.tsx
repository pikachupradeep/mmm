import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/constant"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full p-4 mt-16 max-w-3xl mx-auto">
        <h4 className="text-3xl font-semibold text-center mb-6">Frequently asked questions</h4>

        {faq.map((item)=>(
            <AccordionItem key={item.id} value={item.value}>
            <AccordionTrigger><h6 className="text-[1rem]">{item.id}. {item.question}</h6></AccordionTrigger>
            <AccordionContent>
                <p>{item.answer}</p>
            </AccordionContent>
            </AccordionItem>        
        ))}
    </Accordion>
  )
}
