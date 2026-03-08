import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck, DollarSign, Calendar, CheckCircle } from "lucide-react";

type Step = "income" | "details" | "matched";

const incomeOptions = [
  { label: "Under $13,850/year (Standard deduction threshold)", value: "very-low", funded: true },
  { label: "$13,851 to $45,000/year", value: "low", funded: true },
  { label: "$45,001 to $120,000/year", value: "medium", funded: false },
  { label: "Over $120,000/year", value: "high", funded: false },
];

const therapists = [
  { name: "Dr. Sarah Chen", specialty: "Anxiety & Depression", availability: "Mon, Wed, Fri", rating: 4.9 },
  { name: "Dr. James Okafor", specialty: "Trauma & PTSD", availability: "Tue, Thu", rating: 4.8 },
  { name: "Dr. Priya Sharma", specialty: "Stress & Burnout", availability: "Mon to Fri", rating: 4.9 },
];

const TherapistMatchPage = () => {
  const [step, setStep] = useState<Step>("income");
  const [selectedIncome, setSelectedIncome] = useState<string | null>(null);
  const [isFunded, setIsFunded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", concerns: "" });

  const handleIncomeNext = () => {
    const option = incomeOptions.find((o) => o.value === selectedIncome);
    setIsFunded(option?.funded || false);
    setStep("details");
  };

  const handleSubmit = () => {
    setStep("matched");
  };

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
            <UserCheck className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Find Your Therapist
          </h1>
          <p className="text-muted-foreground">
            We'll match you with a licensed therapist based on your needs and financial situation.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === "income" && (
            <motion.div
              key="income"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">Financial Information</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                This helps us determine if you're eligible for government funded therapy sessions.
                Individuals in lower tax brackets may qualify for fully subsidized mental health support.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                {incomeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedIncome(option.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-body text-sm flex justify-between items-center ${
                      selectedIncome === option.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    }`}
                  >
                    <span>{option.label}</span>
                    {option.funded && (
                      <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-md font-semibold">
                        Eligible for funding
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <Button
                onClick={handleIncomeNext}
                disabled={!selectedIncome}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border"
            >
              {isFunded && (
                <div className="bg-success/10 border border-success/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-foreground font-semibold">
                    ✅ Great news! Based on your income, you may qualify for government funded therapy at no cost to you.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Under the federal mental health funding program, eligible individuals can access subsidized sessions with a licensed therapist.
                  </p>
                </div>
              )}

              <h2 className="font-display text-xl font-bold text-foreground mb-6">Your Details</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Primary Concerns</label>
                  <textarea value={formData.concerns} onChange={(e) => setFormData({ ...formData, concerns: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Briefly describe what you'd like help with..." />
                </div>
              </div>
              <Button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6">
                Match Me With a Therapist <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === "matched" && (
            <motion.div
              key="matched"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center mb-6">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">We Found Matches!</h2>
                <p className="text-muted-foreground text-sm">
                  Here are therapists matched to your needs.
                  {isFunded && " Your sessions will be government funded."}
                </p>
              </div>

              {therapists.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">{t.name.charAt(4)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground">{t.name}</h3>
                    <p className="text-muted-foreground text-sm">{t.specialty}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {t.availability}
                      </span>
                      <span className="text-xs text-primary font-semibold">⭐ {t.rating}</span>
                      {isFunded && (
                        <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-md font-semibold">
                          Funded
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                    Book
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TherapistMatchPage;
