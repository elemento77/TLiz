/**
 * Social Proof — Testimonials & Stats
 * Glassmorphism cards with gold accents. Atmospheric and intimate.
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id?: string;
  name: string;
  message: string;
  rating: number;
}

const STATIC_TESTIMONIALS: Testimonial[] = [
  {
    name: "Camila R.",
    message: "A leitura foi cirúrgica. Ela tocou em pontos que eu nem tinha falado. Me deu clareza num momento de muita confusão.",
    rating: 5,
  },
  {
    name: "Thiago M.",
    message: "Fui cético, mas saí da sessão com respostas que eu buscava há meses. Vale cada centavo.",
    rating: 5,
  },
  {
    name: "Ana G.",
    message: "Acabei de terminar de ler o mapa e tô em choque! Sério, ele bateu EXATAMENTE com a fase que eu tô passando agora. O que mais me impressionou foi que até uns planos pro futuro que eu tava guardando só pra mim, que ninguém sabia, apareceram ali certinho. Era exatamente o que eu precisava ler para ter coragem de colocar em prática o que eu já estava pensando. Amei demais, parece que você desenhou meu ano! Parabéns pelo trabalho, de verdade.",
    rating: 5,
  },
];

const STATS = [
  { value: "500+", label: "Leituras realizadas" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "24h", label: "Prazo de entrega" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} size={13} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      className="esoteric-card p-6 relative h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Quote
        size={24}
        className="absolute top-4 right-4 text-gold/10"
        strokeWidth={1}
      />
      <StarRating count={testimonial.rating} />
      <p className="font-body text-sm text-smoke leading-relaxed mb-4 flex-grow">
        "{testimonial.message}"
      </p>
      <p className="font-display text-sm text-gold-dim">
        — {testimonial.name}
      </p>
    </motion.div>
  );
}

function StatItem({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  return (
    <motion.div
      key={stat.value}
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="font-display text-4xl text-gold text-shadow-md">
        {stat.value}
      </div>
      <div className="font-body text-xs uppercase tracking-widest text-smoke mt-1">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(STATIC_TESTIMONIALS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('name, message, rating')
          .eq('status', 'approved')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setTestimonials([...data, ...STATIC_TESTIMONIALS]);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">
            ✦ Tarot da Liz
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-parchment text-shadow-md">
            O que dizem sobre as leituras
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="glass-panel px-6 py-8 mb-12">
          <div className="flex flex-wrap justify-center gap-10">
            {STATS.map((stat, index) => (
              <StatItem key={stat.value} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Ornamental divider */}
        <div className="ornament mb-12">
          <span className="text-gold-dim text-sm">✦</span>
        </div>

        {/* Testimonials Carousel */}
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : (
          <div className="px-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={testimonial.id || index}
                    className="pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      index={index}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-gold/20 text-gold hover:bg-gold/10 hover:text-gold -left-4 md:-left-8" />
              <CarouselNext className="border-gold/20 text-gold hover:bg-gold/10 hover:text-gold -right-4 md:-right-8" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
