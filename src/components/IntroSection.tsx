export const IntroSection = () => {
  return (
    <section className="py-20 px-4 bg-light-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-warm-brown">
          Un espacio íntimo para renacer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 italic">
          "Un espacio íntimo para desconectar de la rutina, reconectar contigo mismo 
          y renacer a través del poder transformador de la naturaleza."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { title: "Yoga al amanecer", icon: "🧘‍♀️" },
            { title: "Bicicleteada", icon: "🚴‍♂️" },
            { title: "Meditación + Ritual de Fuego", icon: "🔥" },
            { title: "Alojamiento y alimentación consciente", icon: "🏡" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-warm-brown">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};