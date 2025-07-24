import { Heart, Users, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ParticipantsSection = () => {
  const participantTypes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Solo/a",
      description: "Tiempo para ti, autoconocimiento y nuevas conexiones"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "En Pareja",
      description: "Fortalece vínculos y crea memorias juntos"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Con Amigos",
      description: "Comparte la experiencia con quienes más querés"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "En Familia",
      description: "Momentos especiales que unen generaciones"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warm-brown">
          ¿Quiénes Pueden Participar?
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-warm-orange">
            ¡Todos son bienvenidos!
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ya sea que vengas solo/a, en pareja, con amigos o en familia, el grupo se conforma de forma diversa, 
            lo que enriquece y potencia la experiencia compartida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {participantTypes.map((type, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {type.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-warm-brown">{type.title}</h4>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-warm text-white p-8 rounded-lg shadow-warm">
          <h4 className="text-xl font-semibold mb-4">La Diversidad Enriquece</h4>
          <p className="text-lg leading-relaxed opacity-95">
            Cada persona que se suma al grupo aporta su propia energía, historia y perspectiva. 
            Esta diversidad crea un ambiente rico en intercambio humano, donde todos aprendemos de todos 
            y la experiencia se potencia exponencialmente.
          </p>
        </div>
      </div>
    </section>
  );
};