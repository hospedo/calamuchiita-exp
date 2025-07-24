import { MapPin, Mountain, TreePine, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cordobaMountains from "@/assets/cordoba-mountains.jpg";

export const LocationSection = () => {
  const locationFeatures = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Sierras de Córdoba",
      description: "En el corazón de las sierras cordobesas"
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Río Santa Rosa",
      description: "Costa privada para relajación y conexión"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Naturaleza Pura",
      description: "1 hectárea de entorno natural preservado"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación Estratégica",
      description: "A 5 km del centro de Santa Rosa de Calamuchita"
    }
  ];

  return (
    <section className="py-20 px-4 bg-light-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warm-brown">
            Ubicación
          </h2>
          <h3 className="text-2xl font-semibold mb-8 text-warm-orange">
            Santa Rosa de Calamuchita
          </h3>
        </div>

        {/* Mountain Landscape */}
        <div className="relative mb-16 overflow-hidden rounded-lg shadow-soft">
          <img 
            src={cordobaMountains} 
            alt="Sierras de Córdoba - Santa Rosa de Calamuchita"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h4 className="text-2xl font-bold mb-2">Sierras de Córdoba</h4>
            <p className="text-lg opacity-90">Un paisaje que invita a la contemplación y el renacimiento</p>
          </div>
        </div>

        {/* Location Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationFeatures.map((feature, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2 text-warm-brown">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Santa Rosa de Calamuchita se encuentra en el Valle de Calamuchita, rodeada por las majestuosas Sierras de Córdoba. 
            Este entorno natural único ofrece el escenario perfecto para desconectar de la rutina urbana y reconectar con la naturaleza y contigo mismo.
          </p>
        </div>
      </div>
    </section>
  );
};