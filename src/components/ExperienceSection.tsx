import { Card } from "@/components/ui/card";
import yogaSunrise from "@/assets/yoga-sunrise.jpg";
import cyclingAdventure from "@/assets/cycling-adventure.jpg";
import meditationFire from "@/assets/meditation-fire.jpg";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Yoga al amanecer",
      image: yogaSunrise,
      description: "Conecta con la energía del nuevo día a través de posturas y respiración consciente."
    },
    {
      title: "Bicicleteada",
      image: cyclingAdventure,
      description: "Explora los senderos naturales mientras fortaleces cuerpo y mente."
    },
    {
      title: "Meditación y Ritual de Fuego",
      image: meditationFire,
      description: "Sumérgete en la sabiduría ancestral del fuego y la meditación profunda."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-warm-brown">
          Vive la experiencia
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-warm transition-smooth">
              <div className="relative overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-30 transition-smooth" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-warm-brown">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};