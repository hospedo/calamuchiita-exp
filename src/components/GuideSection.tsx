import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const GuideSection = () => {
  const guides = [
    {
      name: "Facu",
      handle: "@facuenviaje",
      initial: "F",
      description: "Soy viajero y anfitrión. Me mueve diseñar y sostener espacios donde la naturaleza, el encuentro y la introspección abren nuevas posibilidades. Hoy quiero encender la chispa de lo que podemos crear en los años que vienen."
    },
    {
      name: "Sole",
      handle: "@soleobieta___",
      initial: "S",
      description: "Instructora de yoga y meditación, especializada en prácticas conscientes y rituales de sanación. Guía de procesos de autoconocimiento y bienestar."
    }
  ];

  return (
    <section className="py-20 px-4 bg-light-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-warm-brown">
          Conoce a tus guías
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
              <CardContent className="p-8 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-gradient-warm">
                  <AvatarFallback className="text-2xl font-bold text-white bg-gradient-warm">
                    {guide.initial}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-2xl font-bold mb-2 text-warm-brown">{guide.name}</h3>
                <p className="text-sm text-accent mb-4 font-medium">{guide.handle}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {guide.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};