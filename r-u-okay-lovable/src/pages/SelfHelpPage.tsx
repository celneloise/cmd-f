import { motion } from "framer-motion";
import { BookOpen, Brain, Wind, Moon, Smile, Dumbbell, Music, Leaf } from "lucide-react";
import { useState } from "react";

const categories = [
  { label: "All", value: "all" },
  { label: "Mindfulness", value: "mindfulness" },
  { label: "Sleep", value: "sleep" },
  { label: "Stress", value: "stress" },
  { label: "Fitness", value: "fitness" },
];

const resources = [
  { icon: Brain, title: "5-Minute Mindfulness", description: "A quick guided meditation to center yourself. Close your eyes, follow your breath, and let go of tension.", category: "mindfulness", duration: "5 min" },
  { icon: Wind, title: "Box Breathing Exercise", description: "Breathe in for 4 seconds, hold for 4, breathe out for 4, hold for 4. Repeat 4 cycles to calm anxiety.", category: "stress", duration: "3 min" },
  { icon: Moon, title: "Sleep Meditation", description: "Progressive muscle relaxation to help you unwind before bed. Start from your toes and work up.", category: "sleep", duration: "10 min" },
  { icon: Smile, title: "Gratitude Journal", description: "Write down 3 things you're grateful for today. Research shows gratitude improves mood and well-being.", category: "mindfulness", duration: "5 min" },
  { icon: Dumbbell, title: "Movement Break", description: "Simple stretches and light exercises to boost your energy and release endorphins throughout the day.", category: "fitness", duration: "7 min" },
  { icon: Music, title: "Calming Soundscape", description: "Listen to nature sounds like rain, waves, or birdsong to reduce stress and improve focus.", category: "stress", duration: "15 min" },
  { icon: Leaf, title: "Body Scan Meditation", description: "A guided body scan to identify where you hold stress and consciously release it.", category: "mindfulness", duration: "10 min" },
  { icon: Moon, title: "Wind-Down Routine", description: "A step-by-step pre-sleep routine: dim lights, no screens, light reading, and breathing exercises.", category: "sleep", duration: "20 min" },
];

const SelfHelpPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? resources
    : resources.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Self-Help Resources
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tools and exercises to support your daily mental well-being. Start small, even 5 minutes makes a difference.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                  {resource.category}
                </span>
                <span className="text-xs text-muted-foreground">{resource.duration}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfHelpPage;
