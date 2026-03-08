import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ClipboardCheck, BookOpen, Users, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ClipboardCheck,
    title: "Mental Health Assessment",
    description: "Take a quick, confidential assessment to understand your mental well-being and get matched with the right support.",
    link: "/assessment",
    cta: "Take Assessment",
  },
  {
    icon: BookOpen,
    title: "Self-Help Resources",
    description: "Access guided exercises, mindfulness tools, and daily well-being activities designed by mental health professionals.",
    link: "/self-help",
    cta: "Explore Resources",
  },
  {
    icon: Users,
    title: "Therapist Matching",
    description: "Get matched with licensed therapists based on your needs. Free or subsidized access for eligible individuals.",
    link: "/therapist-match",
    cta: "Find a Therapist",
  },
  {
    icon: Heart,
    title: "Become a Volunteer",
    description: "Join our network of mental health ambassadors in schools, universities, and workplaces across the country.",
    link: "/volunteer",
    cta: "Volunteer Now",
  },
];

const partners = [
  "SAMHSA", "NIMH", "HHS", "VA",
  "NAMI", "Mental Health America", "Crisis Text Line", "The Trevor Project", "AFSP", "Born This Way Foundation",
  "Google.org", "Johnson & Johnson", "Starbucks", "Headspace for Work",
  "United Way", "The Jed Foundation", "Give an Hour",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Are You OK?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-body mb-8 max-w-2xl leading-relaxed">
              A meaningful conversation can change a life. We connect you with
              mental health support, from self-help tools to licensed therapists, all in one place.
              <strong> Because everyone deserves to be heard.</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/assessment">
                <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-base px-8 py-6 rounded-xl font-semibold">
                  <ClipboardCheck className="w-5 h-5 mr-2" />
                  Take the Assessment
                </Button>
              </Link>
              <Link to="/crisis">
                <Button size="lg" variant="outline" className="border-2 border-card/50 text-primary-foreground hover:bg-card/10 text-base px-8 py-6 rounded-xl font-semibold bg-transparent">
                  <Phone className="w-5 h-5 mr-2" />
                  Need Help Now?
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              4 Steps to Start a Conversation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              You don't need to be a therapist to make a difference. A simple check-in can save a life.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Ask", desc: "Ask R U OK? and be prepared to listen." },
              { step: "2", title: "Listen", desc: "Give them time to respond and listen without judgment." },
              { step: "3", title: "Encourage Action", desc: "Help them think about one small step they can take." },
              { step: "4", title: "Check In", desc: "Follow up to show you care and are there for them." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary rounded-2xl p-6 text-center shadow-soft"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Everything You Need, One Platform
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Prevention, therapy, self-care, and community integrated for your mental well-being.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body mb-5 leading-relaxed">{feature.description}</p>
                <Link to={feature.link}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1 in 5", label: "Adults experience mental illness" },
              { value: "60%", label: "Don't receive treatment" },
              { value: "24/7", label: "Crisis support available" },
              { value: "Free", label: "For eligible individuals" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Our Partners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Working alongside trusted organizations to bring mental health support to every community.
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-6 px-8 py-4 bg-secondary rounded-xl border border-border"
              >
                <span className="font-display font-bold text-foreground text-sm whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Your Mental Health Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Whether you need support yourself or want to help others, we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/assessment">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl text-base font-semibold">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-6 rounded-xl text-base font-semibold">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
              <span className="font-display font-bold text-foreground">R U OK?</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              If you or someone you know is in crisis, please call <strong>988 Suicide & Crisis Lifeline</strong> or <strong>911</strong>.
            </p>
            <p className="text-muted-foreground text-xs">© 2026 R U OK? All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
