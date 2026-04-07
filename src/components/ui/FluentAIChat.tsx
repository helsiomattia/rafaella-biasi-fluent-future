import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, X, User } from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export const FluentAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hi there! Sou a IA da Rafaella Biasi. O que você gostaria de praticar no seu Business English hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock AI response delay
    setTimeout(() => {
      let aiText = "That's a great question! Lembre-se que no Business English, preferimos usar 'Could you...' ao invés de 'Can you...' para soar mais polido. Tente novamente!";
      
      if (userMsg.text.toLowerCase().includes("reunião") || userMsg.text.toLowerCase().includes("meeting")) {
        aiText = "Em reuniões (meetings), uma boa forma de interromper educadamente é dizer: 'Sorry to interrupt, but could I add something here?' ✨";
      } else if (userMsg.text.toLowerCase().includes("email")) {
        aiText = "Para finalizar emails formais, use 'Best regards' ou 'Sincerely'. Esqueça o 'Kisses' ou abraços em contextos gringos! 👔";
      }

      const aiMsg: Message = { id: (Date.now() + 1).toString(), sender: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1800);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-tr from-gold-dark to-gold flex items-center justify-center shadow-hero cursor-pointer group hover:shadow-[0_0_40px_rgba(200,150,50,0.4)] transition-shadow"
          >
            <Bot className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[360px] max-h-[600px] h-[80vh] bg-background border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-16 bg-gradient-to-r from-[#1A1A24] to-charcoal text-white flex items-center justify-between px-6 shrink-0 z-10 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <h3 className="font-display font-bold leading-tight">Fluent AI</h3>
                  <p className="text-xs text-gold-light/70 font-medium">Assistant Premium</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/50 hover:text-white" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-secondary/20">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-3`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-gold-dark" />
                    </div>
                  )}
                  
                  <div className={`p-4 text-sm max-w-[80%] ${
                    msg.sender === "user" 
                      ? "bg-gold text-white rounded-2xl rounded-tr-sm" 
                      : "bg-white border border-border shadow-sm text-foreground rounded-2xl rounded-tl-sm leading-relaxed"
                  }`}>
                    {msg.text}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-gold-dark" />
                    </div>
                    <div className="bg-white border border-border p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5 h-10 w-16">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 rounded-full bg-gold/50" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 rounded-full bg-gold/50" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 rounded-full bg-gold/50" />
                    </div>
                 </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-border shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pergunte sobre aulas, gramática..."
                  className="w-full h-12 bg-secondary/50 border border-transparent hover:border-border focus:border-gold focus:ring-1 focus:ring-gold rounded-full pl-5 pr-14 text-sm font-medium outline-none transition-all placeholder:font-light"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1 w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-charcoal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
