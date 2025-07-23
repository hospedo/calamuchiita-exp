import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "María José",
      text: "Una experiencia transformadora. El ambiente, los guías y las actividades crearon el espacio perfecto para reconectar conmigo misma.",
      stars: 5
    },
    {
      name: "Santiago",
      text: "La combinación de yoga, naturaleza y meditación fue exactamente lo que necesitaba. Recomiendo 100% esta experiencia.",
      stars: 5
    },
    {
      name: "Valentina",
      text: "Cada momento fue cuidadosamente diseñado. Salí renovada y con herramientas nuevas para mi bienestar diario.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-warm-brown">
          Experiencias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warm-orange text-warm-orange" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-warm-brown">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};