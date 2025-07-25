import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-02T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2 bg-white/20 text-white border-white/30">
            <Users className="w-5 h-5 mr-2" />
            ¡Últimos 6 cupos disponibles!
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Retiro Transformador
          </h2>
          <p className="text-white/90 text-lg mb-8">
            2 de Agosto - No te quedes sin tu lugar
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-white mr-2" />
              <h3 className="text-xl font-semibold text-white">Cuenta Regresiva</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-medium">Días</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-medium">Horas</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-medium">Minutos</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-medium">Segundos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};