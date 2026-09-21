"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MessageSquareText, X, Send, Bot, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  cta?: {
    label: string;
    href: string;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hello! Welcome to Vijaya Infrastructures. I can answer quick questions about our commercial fit-outs, timelines, and services, or guide you to our project consultation team.",
  },
];

const SUGGESTED_QUERIES = [
  "What services do you offer?",
  "What is your project timeline?",
  "Which regions do you serve?",
  "Tell me about your retail experience",
  "How can I get a quotation?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Generate intelligent response based on company facts
    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = "";
      let cta: { label: string; href: string } | undefined = {
        label: "Navigate to Contact Page",
        href: "/contact",
      };

      if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you do")) {
        responseText =
          "We deliver turnkey commercial fit-outs including retail stores & corporate offices, certified HT/LT electrical works, ACP & structural glass facades, and civil/structural modifications. We also have Design Nest Interiors for bespoke residential projects.";
        cta = { label: "View Services & Contact Us", href: "/contact" };
      } else if (lower.includes("time") || lower.includes("schedule") || lower.includes("fast") || lower.includes("duration") || lower.includes("days")) {
        responseText =
          "Our standard turnkey delivery takes 30–45 days. We hold a record turnaround of 23 days for a ~14,000 sq.ft retail store with full multi-trade synchronization.";
        cta = { label: "Schedule Project on Contact Page", href: "/contact" };
      } else if (lower.includes("region") || lower.includes("location") || lower.includes("where") || lower.includes("city") || lower.includes("hyderabad") || lower.includes("south india")) {
        responseText =
          `We operate across South India—principally in Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu. Our Corporate HQ is located in Nizampet, Hyderabad.`;
        cta = { label: "Find Us on Contact Page", href: "/contact" };
      } else if (lower.includes("retail") || lower.includes("style union") || lower.includes("store") || lower.includes("experience") || lower.includes("portfolio")) {
        responseText =
          "We have successfully delivered 20+ large-format retail stores, including flagship outlets for brands like Style Union (~14,000 sq.ft), with in-house joinery, fixtures, electrical, and facade execution.";
        cta = { label: "Discuss Retail Fit-Out on Contact", href: "/contact" };
      } else if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("estimate") || lower.includes("boq") || lower.includes("consult")) {
        responseText =
          "For customized project estimates, BOQ review, or site inspections, our technical leadership is ready to evaluate your architectural drawings.";
        cta = { label: "Submit Scope on Contact Page", href: "/contact" };
      } else if (lower.includes("phone") || lower.includes("call") || lower.includes("number") || lower.includes("contact") || lower.includes("reach")) {
        responseText =
          `You can reach our team at +91 ${COMPANY_DETAILS.phones[0]} or email ${COMPANY_DETAILS.email}. For complete inquiry submission and map directions, visit our Contact page.`;
        cta = { label: "Go to Contact Page", href: "/contact" };
      } else if (lower.includes("design nest") || lower.includes("residential") || lower.includes("home") || lower.includes("villa") || lower.includes("apartment")) {
        responseText =
          "Design Nest Interiors is our premium residential division, crafting bespoke living spaces, modular woodwork, and custom home interior solutions.";
        cta = { label: "Inquire via Contact Page", href: "/contact" };
      } else {
        responseText =
          "Thank you for your question! For specific architectural scope, site inspections, and formal project proposals, please reach out directly to our engineering team.";
        cta = { label: "Navigate to Contact Page", href: "/contact" };
      }

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: responseText,
        cta,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setInputValue("");
  };

  return (
    <>
      {/* Floating Launcher Button positioned above WhatsApp */}
      <aside
        aria-label="Vijaya Assistant"
        className="fixed bottom-24 right-5 sm:bottom-24 sm:right-6 z-50 flex items-center gap-3"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Assistant" : "Open Vijaya Infra Chatbot"}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#01477A]/30 ${
            isOpen
              ? "bg-[#373435] rotate-90"
              : "bg-gradient-to-tr from-[#01477A] via-[#006997] to-[#0098DA]"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageSquareText className="w-6 h-6 text-white" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F96A02] opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#F96A02] text-[9px] font-bold items-center justify-center text-white">
                    1
                  </span>
                </span>
              )}
            </>
          )}
        </button>
      </aside>

      {/* Standalone Chat Window */}
      {isOpen && (
        <section
          aria-label="Vijaya Infra Chat Assistant"
          className="fixed bottom-40 right-5 sm:bottom-40 sm:right-6 z-50 w-[92vw] max-w-[390px] sm:w-96 rounded-2xl shadow-2xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl overflow-hidden flex flex-col max-h-[580px] animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#01477A] via-[#006997] to-[#00567C] px-5 py-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/15 border border-white/25">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#01477A]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm tracking-tight font-manrope">
                    Vijaya Assistant
                  </span>
                  <Sparkles className="w-3 h-3 text-[#FFCC29]" />
                </div>
                <span className="text-[11px] text-slate-200 flex items-center gap-1">
                  Commercial Fit-Out Specialist
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart chat"
                aria-label="Restart chat"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70 max-h-[340px] text-xs">
            {messages.map((msg) => {
              const isBot = msg.sender === "bot";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      isBot
                        ? "bg-white text-slate-800 border border-slate-200/80 shadow-sm rounded-tl-sm"
                        : "bg-[#01477A] text-white shadow-sm rounded-tr-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>

                  {/* Call to Action Button inside message */}
                  {isBot && msg.cta && (
                    <div className="mt-2 pl-1">
                      <Link
                        href={msg.cta.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F96A02] hover:bg-[#E05F00] text-white font-bold text-[11px] shadow-sm transition-all duration-150 transform hover:translate-x-0.5"
                      >
                        <span>{msg.cta.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-2xl border border-slate-200/80 w-fit text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Query Pills */}
          <div className="px-3 py-2 border-t border-slate-200/70 bg-white/80 overflow-x-auto flex gap-1.5 no-scrollbar">
            {SUGGESTED_QUERIES.map((query) => (
              <button
                key={query}
                onClick={() => handleSend(query)}
                className="shrink-0 text-[11px] font-medium text-slate-700 bg-slate-100 hover:bg-[#006997] hover:text-white px-2.5 py-1 rounded-full transition-colors border border-slate-200/60"
              >
                {query}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about fit-outs, timelines..."
              className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#01477A] focus:ring-1 focus:ring-[#01477A] bg-slate-50 text-slate-900"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-[#01477A] hover:bg-[#006997] text-white disabled:opacity-40 disabled:hover:bg-[#01477A] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer Quick Link to Contact Page */}
          <div className="px-4 py-2 bg-slate-50/90 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-500">
            <span>Have a complex project?</span>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="font-bold text-[#006997] hover:text-[#01477A] hover:underline flex items-center gap-1"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
