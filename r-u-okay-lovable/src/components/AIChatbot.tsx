import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const quickReplies = [
  "What resources do you offer?",
  "How does the assessment work?",
  "Am I eligible for free therapy?",
  "How can I volunteer?",
];

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("assessment") || lower.includes("test") || lower.includes("check")) {
    return "Our mental health assessment is a quick, confidential questionnaire. It connects you with the right support based on your responses. You can take it from the Assessment page. It takes about 3 to 5 minutes.";
  }
  if (lower.includes("therapist") || lower.includes("therapy") || lower.includes("counsell")) {
    return "We match you with licensed therapists based on your needs. If your income is below $45,000/year, you may qualify for government funded sessions at no cost. Visit the Find a Therapist page to get started.";
  }
  if (lower.includes("free") || lower.includes("cost") || lower.includes("price") || lower.includes("fund") || lower.includes("eligible")) {
    return "Individuals in lower tax brackets (under $45,000/year) may qualify for fully government funded therapy. During the therapist matching process, we'll ask about your financial situation to determine eligibility. The assessment and self-help resources are always free.";
  }
  if (lower.includes("volunteer") || lower.includes("ambassador")) {
    return "You can become a Mental Health Ambassador at schools, universities, and workplaces. Visit the Volunteer page to see available opportunities and sign up. No prior experience needed, training is provided!";
  }
  if (lower.includes("crisis") || lower.includes("suicide") || lower.includes("emergency") || lower.includes("help now")) {
    return "If you're in crisis, please reach out immediately:\n\n🆘 988 Suicide & Crisis Lifeline: Call or text 988\n📞 Crisis Text Line: Text HOME to 741741\n🚨 Emergency: 911\n\nYou are not alone. Visit our Crisis Help page for more resources.";
  }
  if (lower.includes("resource") || lower.includes("self-help") || lower.includes("mindful") || lower.includes("meditat")) {
    return "We offer guided exercises including mindfulness meditation, breathing exercises, sleep tools, gratitude journaling, and more. Visit the Self-Help page to explore all resources. They're completely free.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hi there! 👋 I'm here to help you navigate R U OK?. You can ask me about our assessment, therapy matching, self-help resources, volunteering, or crisis support. How can I help?";
  }
  return "I can help you with:\n\n• Mental health assessment\n• Therapist matching\n• Self-help resources\n• Volunteering\n• Crisis support\n\nWhat would you like to know more about?";
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm here to help. Ask me anything about R U OK?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(msg);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6 text-primary-foreground" /> : <MessageCircle className="w-6 h-6 text-primary-foreground" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[70vh] bg-card rounded-2xl shadow-xl border border-border flex flex-col overflow-hidden"
          >
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-card/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm">R U OK? Assistant</p>
                <p className="text-primary-foreground/70 text-xs">Always here to help</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content.split("\n").map((line, j) => (
                      <p key={j} className={j > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3 text-sm text-muted-foreground">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs bg-secondary text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="p-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:border-primary focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
