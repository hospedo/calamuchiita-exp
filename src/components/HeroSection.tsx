import { Button } from "@/components/ui/button";
import { ReservationForm } from "@/components/ReservationForm";
import { MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-yoga-fire.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Renace en el Fuego:
          <br />
          <span className="text-warm-orange">Yoga, Meditación y</span>
          <br />
          Bicicleteada
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-warm-orange" />
            <span>Santa Rosa de Calamuchita</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-warm-orange" />
            <span>Sábado 2 & Domingo 3 de Agosto</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-warm-orange" />
            <span>Cupo limitado: 12 personas</span>
          </div>
        </div>
        
        <ReservationForm>
          <Button variant="warm" size="xl" className="text-xl px-12 py-4 h-16">
            Reserva tu lugar ahora
          </Button>
        </ReservationForm>
      </div>
    </section>
  );
};