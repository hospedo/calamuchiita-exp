import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, BedDouble, Home } from "lucide-react";
import dosSolesRiver from "@/assets/dos-soles-river.jpg";
import dosSolesCabins from "@/assets/dos-soles-cabins.jpg";

export const AccommodationSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cabañas Mixtas",
      description: "Compartidas con capacidad máxima de 4 personas por cabaña"
    },
    {
      icon: <BedDouble className="w-6 h-6" />,
      title: "Equipamiento",
      description: "Camas individuales y dos plazas, 1 baño por cabaña, salamandra a leña"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Comodidades",
      description: "Frazadas y acolchados incluidos"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      description: "1 hectárea con costa del Río Santa Rosa, barrio Santa Mónica"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warm-brown">
            Nuestro Alojamiento
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-warm-orange">
            DOS SOLES
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestro refugio ofrece una experiencia de inmersión en la naturaleza, ubicado en un predio de 1 hectárea con costa del Río Santa Rosa, en el barrio de Santa Mónica. Nos encontramos a tan solo 5 km del centro de Santa Rosa de Calamuchita.
          </p>
        </div>

        {/* Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-soft">
            <img 
              src={dosSolesRiver} 
              alt="Vista del río desde Dos Soles"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-soft">
            <img 
              src={dosSolesCabins} 
              alt="Cabañas Dos Soles"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2 text-warm-brown">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-light-cream border-l-4 border-warm-orange p-6 rounded-lg">
          <h4 className="font-semibold mb-2 text-warm-brown">Nota importante:</h4>
          <p className="text-muted-foreground">
            No ofrecemos habitaciones privadas. La modalidad compartida es parte integral de la experiencia de convivencia y conexión durante las actividades del encuentro.
          </p>
        </div>
      </div>
    </section>
  );
};