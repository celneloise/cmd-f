import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, School, Building2, GraduationCap, MapPin, Users, CheckCircle } from "lucide-react";

const opportunities = [
  { type: "School", icon: School, name: "Lincoln High School", location: "Chicago, IL", need: "High need", spots: 3 },
  { type: "University", icon: GraduationCap, name: "UCLA", location: "Los Angeles, CA", need: "Medium need", spots: 5 },
  { type: "Workplace", icon: Building2, name: "TechCorp Inc.", location: "Austin, TX", need: "High need", spots: 2 },
  { type: "School", icon: School, name: "Brooklyn Academy", location: "New York, NY", need: "Critical need", spots: 4 },
  { type: "University", icon: GraduationCap, name: "University of Michigan", location: "Ann Arbor, MI", need: "Medium need", spots: 6 },
  { type: "Workplace", icon: Building2, name: "Federal Government Office", location: "Washington, DC", need: "Low need", spots: 8 },
];

const filters = ["All", "School", "University", "Workplace"];

const VolunteerPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [signedUp, setSignedUp] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", motivation: "" });
  const [showForm, setShowForm] = useState(false);
  const [selectedOpp, setSelectedOpp] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? opportunities
    : opportunities.filter((o) => o.type === activeFilter);

  const handleSignUp = (name: string) => {
    setSelectedOpp(name);
    setShowForm(true);
  };

  const handleSubmit = () => {
    setSignedUp(selectedOpp);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Become a Mental Health Ambassador
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Volunteer at schools, universities, and workplaces to promote mental health awareness.
            Your presence can make a life-changing difference.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {signedUp && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-success/10 border border-success/30 rounded-2xl p-6 mb-8 text-center max-w-xl mx-auto"
          >
            <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-foreground font-semibold">
              Thank you! You've signed up to volunteer at <strong>{signedUp}</strong>.
            </p>
            <p className="text-muted-foreground text-sm mt-1">We'll be in touch with next steps.</p>
          </motion.div>
        )}

        {showForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border max-w-lg mx-auto mb-8"
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-4">
              Sign Up for {selectedOpp}
            </h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Why do you want to volunteer?</label>
                <textarea value={formData.motivation} onChange={(e) => setFormData({ ...formData, motivation: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none resize-none" placeholder="Tell us briefly..." />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowForm(false)} className="flex-1 rounded-xl border-border">
                Cancel
              </Button>
              <Button onClick={handleSubmit} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                Submit Application
              </Button>
            </div>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((opp, i) => (
            <motion.div
              key={opp.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <opp.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                  {opp.type}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{opp.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <MapPin className="w-3 h-3" /> {opp.location}
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                  opp.need === "Critical need" ? "bg-crisis/20 text-crisis" :
                  opp.need === "High need" ? "bg-warning/20 text-warning" :
                  "bg-success/20 text-success"
                }`}>
                  {opp.need}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Users className="w-3 h-3" /> {opp.spots} spots
                </span>
              </div>
              <Button
                onClick={() => handleSignUp(opp.name)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                disabled={signedUp === opp.name}
              >
                {signedUp === opp.name ? "Applied ✓" : "Sign Up"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
