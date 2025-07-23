import { Card, CardContent } from "@/components/ui/card";

export const ScheduleSection = () => {
  const schedule = [
    {
      day: "Día 1 – Sábado 1 de Agosto",
      activities: [
        { time: "17:00", activity: "Llegada y check-in" },
        { time: "18:00", activity: "Ronda de bienvenida" },
        { time: "19:00", activity: "Meditación guiada" },
        { time: "20:00", activity: "Cena consciente" },
        { time: "21:30", activity: "Silencio nocturno y descanso" }
      ]
    },
    {
      day: "Día 2 – Domingo 2 de Agosto",
      activities: [
        { time: "07:30", activity: "Yoga al amanecer" },
        { time: "08:30", activity: "Desayuno nutritivo" },
        { time: "10:00", activity: "Bicicleteada" },
        { time: "12:00", activity: "Caminata meditativa" },
        { time: "16:30", activity: "Snack e integración" },
        { time: "17:30", activity: "Círculo de cierre" },
        { time: "18:00", activity: "Despedida" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-warm-brown">
          Tu viaje día a día
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <Card key={dayIndex} className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-warm-brown border-b border-border pb-3">
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.activities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-accent font-semibold text-sm bg-accent/10 px-2 py-1 rounded min-w-fit">
                        {item.time}
                      </span>
                      <span className="text-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};