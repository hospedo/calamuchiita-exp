import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ReservationFormProps {
  children: React.ReactNode;
}

export const ReservationForm = ({ children }: ReservationFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    edad: "",
    instagram: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos requeridos
    if (!formData.nombre || !formData.email || !formData.edad) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa nombre, email y edad.",
        variant: "destructive"
      });
      return;
    }

    // Crear mensaje para WhatsApp
    const mensaje = `¡Hola! Quiero reservar mi lugar en "Renace en el Fuego"

*Datos del participante:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Edad: ${formData.edad}
• Instagram: ${formData.instagram || "No proporcionado"}

Estoy listo/a para hacer la reserva de $45.000. ¡Gracias!`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = "5493512420145";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Cerrar modal y mostrar confirmación
    setOpen(false);
    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Te hemos enviado a WhatsApp con tus datos para completar la reserva.",
    });

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      edad: "",
      instagram: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-warm-brown text-center">
            Reserva tu lugar
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-warm-brown font-medium">
              Nombre completo *
            </Label>
            <Input
              id="nombre"
              type="text"
              value={formData.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
              placeholder="Tu nombre completo"
              required
              className="border-warm-brown/20 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-warm-brown font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="tu@email.com"
              required
              className="border-warm-brown/20 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edad" className="text-warm-brown font-medium">
              Edad *
            </Label>
            <Input
              id="edad"
              type="number"
              min="16"
              max="99"
              value={formData.edad}
              onChange={(e) => handleInputChange("edad", e.target.value)}
              placeholder="25"
              required
              className="border-warm-brown/20 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instagram" className="text-warm-brown font-medium">
              Instagram (opcional)
            </Label>
            <Input
              id="instagram"
              type="text"
              value={formData.instagram}
              onChange={(e) => handleInputChange("instagram", e.target.value)}
              placeholder="@tuusuario"
              className="border-warm-brown/20 focus:border-accent"
            />
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            <Button type="submit" variant="warm" size="lg" className="w-full">
              Continuar en WhatsApp
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Al continuar, serás redirigido a WhatsApp para completar tu reserva con el pago de $45.000
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};