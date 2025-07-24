import { Heart, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información del retiro */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-warm-orange">
              Renace en el Fuego
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Un espacio íntimo para desconectar de la rutina, reconectar contigo mismo 
              y renacer a través del poder transformador de la naturaleza.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/facuenviaje" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-warm-orange transition-smooth"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">@facuenviaje</span>
              </a>
            </div>
          </div>

          {/* Información práctica */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-orange">
              Información Práctica
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>📍 Santa Rosa de Calamuchita</li>
              <li>📅 Sábado 2 & Domingo 3 de Agosto</li>
              <li>👥 Cupo limitado: 12 personas</li>
              <li>💰 Reserva con $45.000</li>
              <li>📱 WhatsApp: +54 9 351 242-0145</li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-orange">
              Incluye
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>🧘‍♀️ Clases de Yoga</li>
              <li>🚴‍♂️ Bicicleteada</li>
              <li>🔥 Meditación + Ritual de Fuego</li>
              <li>🏡 Alojamiento 1 noche</li>
              <li>🍽️ Cena + Desayuno + Snack</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-warm-orange" /> para tu transformación
          </p>
          <p className="text-white/40 text-xs mt-2">
            © 2024 Renace en el Fuego. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};