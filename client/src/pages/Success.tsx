import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Success() {
    const [, setLocation] = useLocation();

    // WhatsApp number of Liz
    const WHATSAPP_NUMBER = "5511968673124";
    const WHATSAPP_MESSAGE = encodeURIComponent("Oi Liz! 🔮 Acabei de realizar o pagamento da minha consulta pelo site. Segue meu comprovante! Quando podemos agendar?");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

    return (
        <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-void text-foreground relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] min-w-[300px] bg-gold/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] min-w-[250px] bg-amethyst/5 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg px-4"
            >
                <Card className="bg-void/80 border border-gold-dim backdrop-blur-md shadow-2xl">
                    <CardContent className="pt-10 pb-10 text-center flex flex-col items-center">

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6"
                        >
                            <CheckCircle2 className="w-10 h-10 text-green-400" />
                        </motion.div>

                        <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-dim mb-3">
                            Pagamento Aprovado
                        </p>

                        <h1 className="font-display text-3xl md:text-4xl text-parchment mb-4">
                            Sua leitura está confirmada!
                        </h1>

                        <p className="font-body text-smoke text-base leading-relaxed mb-8 max-w-sm">
                            Gratidão pela confiança. Para agendarmos o seu horário e darmos início ao nosso ritual, por favor, me envie uma mensagem no WhatsApp.
                        </p>

                        <div className="w-full flex justify-center mb-8">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-body py-6 px-8 rounded-none text-base border-0 shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all hover:scale-105 group">
                                    <MessageCircle className="w-5 h-5 mr-3" />
                                    Garantir meu horário agora
                                    <ArrowRight className="w-4 h-4 ml-3 opacity-70 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>

                        <div className="border-t border-gold-dim/30 w-full pt-6">
                            <button
                                onClick={() => setLocation("/")}
                                className="font-body text-xs text-smoke/60 hover:text-gold transition-colors"
                            >
                                ← Voltar para a página inicial
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
