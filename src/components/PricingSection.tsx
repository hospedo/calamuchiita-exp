import { Button } from "@/components/ui/button";
import { ReservationForm } from "@/components/ReservationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const inclusions = [
    "Bicicleteada",
    "Clases de Yoga",
    "Meditación + Ritual de Fuego",
    "Alojamiento 1 noche",
    "Cena + Desayuno + Snack"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-warm-brown">
          Lo que incluye tu experiencia
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {inclusions.map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-light-cream p-3 rounded-lg">
              <Check className="w-5 h-5 text-sage-green flex-shrink-0" />
              <span className="text-sm font-medium text-warm-brown">{item}</span>
            </div>
          ))}
        </div>
        
        <Card className="max-w-md mx-auto shadow-warm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Valor total real:</p>
              <span className="text-2xl text-muted line-through">$180.000</span>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-semibold text-warm-brown mb-2">Precio especial:</p>
              <span className="text-4xl font-bold text-accent">$95.000</span>
            </div>
            
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Reserva tu lugar con:</p>
              <span className="text-2xl font-semibold text-warm-orange">$45.000</span>
            </div>
            
            <ReservationForm>
              <Button variant="warm" size="lg" className="w-full">
                Quiero reservar mi lugar
              </Button>
            </ReservationForm>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};