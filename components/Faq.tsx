import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQtype = {
  faq: string;
  value: string;
};

const Faq = ({ FAQS }: { FAQS: FAQtype[] }) => {
  return (
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="my-28">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground border text-sm font-medium mb-4">
            Need more help?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
            We combine traditional techniques with modern innovation to deliver
            furniture that stands the test of time.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full border rounded-md px-4"
          defaultValue="item-1"
        >
          {FAQS?.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              index={index + 1}
            >
              <AccordionTrigger>{faq.faq}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 text-balance text-foreground/80">
                <p>{faq.value}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
