import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, BedDouble, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import dosSolesRiver from "@/assets/dos-soles-river.jpg";
import dosSolesCabins from "@/assets/dos-soles-cabins.jpg";

export const AccommodationSection = () => {
  const galleryImages = [
    {
      src: "https://www.dossoles.com.ar/lovable-uploads/b392c8de-2564-401f-aaac-e3ea788399e5.png",
      alt: "El Paraíso - Vista principal"
    },
    {
      src: "https://www.dossoles.com.ar/lovable-uploads/74e54c73-5bfe-49ab-8c27-f938793cabdd.png",
      alt: "El Rancho - Vista principal"
    },
    {
      src: "https://www.dossoles.com.ar/lovable-uploads/49c659d4-a853-4104-8ca6-f2d6a8264d1f.png",
      alt: "El Oasis - Vista principal"
    },
    {
      src: "https://www.dossoles.com.ar/lovable-uploads/f335c864-e325-4717-841e-be230cbb937f.png",
      alt: "El Oasis - Interior"
    },
    {
      src: "https://www.dossoles.com.ar/lovable-uploads/c7b9bf78-4680-428d-9615-2a893449ea4d.png",
      alt: "El Oasis - Cocina"
    },
    {
      src: "https://www.dossoles.com.ar/lovable-uploads/06f33bc2-19ce-43b0-b2b7-4fec11541ddd.png",
      alt: "El Oasis - Vista exterior"
    }
  ];

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

        {/* Gallery Carousel */}
        <div className="mb-16">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-soft">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-soft">
                  <iframe 
                    src="https://www.youtube.com/embed/GiXLc_KeZkE?autoplay=1&mute=1&loop=1&playlist=GiXLc_KeZkE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                    title="Cabañas Dos Soles Video"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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