import { motion } from "framer-motion";
import { Phone, MessageCircle, Globe, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hotlines = [
  { name: "988 Suicide & Crisis Lifeline", number: "988", description: "24/7 free and confidential support for people in distress.", type: "phone" },
  { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Free 24/7 text-based mental health support.", type: "text" },
  { name: "SAMHSA National Helpline", number: "1-800-662-4357", description: "Free, confidential treatment referrals and information 24/7.", type: "phone" },
  { name: "Veterans Crisis Line", number: "988 (Press 1)", description: "24/7 crisis support for veterans and their loved ones.", type: "phone" },
  { name: "Trevor Project (LGBTQ+ Youth)", number: "1-866-488-7386", description: "Crisis intervention for LGBTQ+ young people under 25.", type: "phone" },
  { name: "NAMI Helpline", number: "1-800-950-6264", description: "Free mental health support, referrals, and information.", type: "phone" },
];

const CrisisPage = () => {
  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 rounded-full bg-crisis flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
            <Phone className="w-10 h-10 text-crisis-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            You Are Not Alone
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            If you or someone you know is in crisis, please reach out now.
            These services are <strong>free, confidential, and available 24/7</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-crisis/10 border-2 border-crisis rounded-2xl p-6 mb-8 text-center"
        >
          <p className="text-foreground font-bold text-lg mb-2">
            🚨 In immediate danger? Call <span className="text-crisis">911</span>
          </p>
          <p className="text-muted-foreground text-sm">
            If someone's life is at risk, call emergency services immediately.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {hotlines.map((hotline, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {hotline.type === "text" ? (
                  <MessageCircle className="w-6 h-6 text-primary" />
                ) : (
                  <Phone className="w-6 h-6 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-foreground">{hotline.name}</h3>
                <p className="text-muted-foreground text-sm">{hotline.description}</p>
              </div>
              <a href={hotline.type === "text" ? "sms:741741&body=HOME" : `tel:${hotline.number.replace(/[^0-9]/g, "")}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold">
                  {hotline.number}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-8 text-center">
          <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
          <h2 className="font-display text-xl font-bold text-foreground mb-2">Online Resources</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Visit these websites for more mental health resources and support.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "988 Lifeline", url: "https://988lifeline.org" },
              { name: "NAMI", url: "https://www.nami.org" },
              { name: "MentalHealth.gov", url: "https://www.mentalhealth.gov" },
            ].map((site) => (
              <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-xl">
                  {site.name}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Heart className="w-6 h-6 text-primary mx-auto mb-2" fill="currentColor" />
          <p className="text-muted-foreground text-sm">
            Remember: Seeking help is a sign of strength, not weakness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrisisPage;
