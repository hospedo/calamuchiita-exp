import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué nivel de experiencia necesito para participar?",
      answer: "No se requiere experiencia previa. Las actividades están diseñadas para todos los niveles, desde principiantes hasta practicantes avanzados. Nuestros guías adaptan las prácticas según las necesidades de cada participante."
    },
    {
      question: "¿Qué debo traer?",
      answer: "Recomendamos traer ropa cómoda para yoga y actividades al aire libre, protector solar, repelente, botella de agua reutilizable, y una mente abierta. Nosotros proporcionamos esterillas de yoga y todo el equipamiento necesario."
    },
    {
      question: "¿Las comidas están incluidas?",
      answer: "Sí, incluimos cena del sábado, desayuno del domingo y snacks. Todas las comidas son conscientes, preparadas con ingredientes naturales y opciones vegetarianas disponibles."
    },
    {
      question: "¿Qué tipo de alojamiento ofrecen?",
      answer: "Ofrecemos alojamiento en habitaciones compartidas en un entorno natural y acogedor. Las instalaciones son simples pero cómodas, diseñadas para fomentar la desconexión y el descanso reparador."
    },
    {
      question: "¿Qué pasa si llueve?",
      answer: "En caso de lluvia intensa, el retiro se suspende por seguridad de los participantes. Te contactaremos con anticipación para reprogramar o reembolsar tu reserva."
    },
    {
      question: "¿Cómo confirmo mi reserva?",
      answer: "Puedes reservar tu lugar completando el formulario y realizando el pago de $45.000 por WhatsApp. Te enviaremos toda la información detallada sobre ubicación y qué traer."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-warm-brown">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-smooth"
                >
                  <h3 className="text-lg font-semibold text-warm-brown pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};