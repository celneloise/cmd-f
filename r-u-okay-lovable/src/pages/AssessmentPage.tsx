import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClipboardCheck, ArrowRight, ArrowLeft, Phone, Users, Heart } from "lucide-react";

const questions = [
  {
    q: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often have you had little interest or pleasure in doing things?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often do you feel nervous, anxious, or on edge?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often have you had trouble relaxing?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often have you felt so restless that it's hard to sit still?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How would you rate your sleep quality?",
    options: ["Very good", "Fairly good", "Fairly bad", "Very bad"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often do you feel tired or have little energy?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often have you had thoughts that you would be better off dead, or of hurting yourself?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    scores: [0, 1, 2, 3],
  },
];

type RiskLevel = "low" | "medium" | "high";

const AssessmentPage = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<RiskLevel | null>(null);
  const navigate = useNavigate();

  const progress = ((currentQ) / questions.length) * 100;

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const total = newAnswers.reduce((a, b) => a + b, 0);
      const maxScore = questions.length * 3;
      const pct = total / maxScore;
      const selfHarmScore = newAnswers[7] || 0;

      let risk: RiskLevel;
      if (selfHarmScore >= 2 || pct > 0.65) {
        risk = "high";
      } else if (pct > 0.35) {
        risk = "medium";
      } else {
        risk = "low";
      }
      setResult(risk);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(answers[currentQ - 1]);
      setAnswers(answers.slice(0, -1));
    }
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
            <ClipboardCheck className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Mental Health Check-In
          </h1>
          <p className="text-muted-foreground">
            This confidential assessment helps connect you with the right support.
          </p>
        </motion.div>

        {result === null ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <Progress value={progress} className="mb-6 h-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Question {currentQ + 1} of {questions.length}
            </p>
            <h2 className="text-xl font-display font-bold text-foreground mb-6">
              {questions[currentQ].q}
            </h2>
            <div className="flex flex-col gap-3 mb-8">
              {questions[currentQ].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(questions[currentQ].scores[i])}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-body text-sm ${
                    selected === questions[currentQ].scores[i]
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentQ === 0}
                className="text-muted-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={selected === null}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {currentQ === questions.length - 1 ? "See Options" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border text-center"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                Here are your next steps
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose the option that feels right for you.
              </p>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => navigate("/crisis")}
                  className={`rounded-xl font-semibold flex items-center justify-center gap-3 bg-crisis text-crisis-foreground hover:bg-crisis/90 transition-all ${
                    result === "high"
                      ? "py-8 text-lg"
                      : "py-4 text-sm opacity-80"
                  }`}
                >
                  <Phone className={result === "high" ? "w-6 h-6" : "w-4 h-4"} />
                  Talk to a Crisis Hotline
                </Button>

                <Button
                  onClick={() => navigate("/therapist-match")}
                  className={`rounded-xl font-semibold flex items-center justify-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all ${
                    result === "medium"
                      ? "py-8 text-lg"
                      : "py-4 text-sm opacity-80"
                  }`}
                >
                  <Users className={result === "medium" ? "w-6 h-6" : "w-4 h-4"} />
                  Match Me With a Therapist
                </Button>

                <Button
                  onClick={() => navigate("/volunteer")}
                  className={`rounded-xl font-semibold flex items-center justify-center gap-3 bg-success text-success-foreground hover:bg-success/90 transition-all ${
                    result === "low"
                      ? "py-8 text-lg"
                      : "py-4 text-sm opacity-80"
                  }`}
                >
                  <Heart className={result === "low" ? "w-6 h-6" : "w-4 h-4"} />
                  Become a Volunteer
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default AssessmentPage;
