import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  // Upper row (left to right animation)
  {
    name: "Anuska",
    username: "@anuska",
    text: "This is hands down the best thing I've experienced. Highly recommend!",
    avatar: "👩‍💼"
  },
  {
    name: "Sujay",
    username: "@sujay",
    text: "I've never seen anything like this before. It's amazing, I love it.",
    avatar: "👨‍💻"
  },
  {
    name: "Anirban",
    username: "@anirban",
    text: "I don't know what to say. I'm speechless. This is amazing.",
    avatar: "👨‍🎨"
  },
  {
    name: "Priyobrata",
    username: "@priyobrata",
    text: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "👨‍🔬"
  }
];

const bottomTestimonials = [
  // Bottom row (right to left animation)
  {
    name: "Chandan",
    username: "@chandan",
    text: "This exceeded all my expectations. Absolutely stunning!",
    avatar: "👨‍🚀"
  },
  {
    name: "Rajanya",
    username: "@rajanya",
    text: "Simply breathtaking. The best decision I've made in a while.",
    avatar: "👩‍🎓"
  },
  {
    name: "Abdul",
    username: "@abdul",
    text: "So glad I found this. It has changed the game for me.",
    avatar: "👨‍🎤"
  },
  {
    name: "Anwesha",
    username: "@anwesha",
    text: "Incredible work! The attention to detail is phenomenal.",
    avatar: "👩‍🎨"
  }
];

const TestimonialCard = ({ testimonial, index, direction }: { 
  testimonial: typeof testimonials[0], 
  index: number, 
  direction: 'left' | 'right' 
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: direction === 'left' ? -100 : 100 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="glass-card p-6 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4">
        <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {testimonial.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.username}
              </p>
            </div>
            <Quote className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors duration-300" />
          </div>
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {testimonial.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about working with us.
          </p>
        </motion.div>

        {/* Upper row - Left to Right animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`top-${index}`}
              testimonial={testimonial}
              index={index}
              direction="left"
            />
          ))}
        </div>

        {/* Bottom row - Right to Left animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`bottom-${index}`}
              testimonial={testimonial}
              index={index}
              direction="right"
            />
          ))}
        </div>

        {/* Floating animation background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </section>
  );
};