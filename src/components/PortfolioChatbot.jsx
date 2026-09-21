
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  MessageCircle,
  Mail,
  Sparkles,
} from "lucide-react";

import "../styles/chatbot.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwlkzzdo";

const OWNER_NAME = "M. Hasnain Ali Saeed";
const CHATBOT_NAME = "Hasnain AI";

const STORAGE_KEYS = {
  messages: "hasnain-ai-messages",
  email: "hasnain-chat-email",
  access: "hasnain-chat-access",
};

const quickQuestions = [
  "What services do you offer?",
  "What are your main skills?",
  "Tell me about ThemeForest work",
  "Which projects have you worked on?",
];

const initialMessage = {
  role: "assistant",
  content: `Hi! I'm ${CHATBOT_NAME}. I can answer questions about ${OWNER_NAME}'s skills, experience, services, projects, ThemeForest work, and availability.`,
};

function loadStoredMessages() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEYS.messages);
    if (!stored) return [initialMessage];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length
      ? parsed
      : [initialMessage];
  } catch {
    return [initialMessage];
  }
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState(
    () => sessionStorage.getItem(STORAGE_KEYS.email) || ""
  );

  const [hasAccess, setHasAccess] = useState(
    () => sessionStorage.getItem(STORAGE_KEYS.access) === "true"
  );

  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [messages, setMessages] = useState(loadStoredMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatError, setChatError] = useState("");

  const messagesEndRef = useRef(null);

  const apiMessages = useMemo(
    () =>
      messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    [messages]
  );

  useEffect(() => {
    sessionStorage.setItem(
      STORAGE_KEYS.messages,
      JSON.stringify(messages)
    );

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setEmailError("Please enter your email address.");
      return;
    }

    setIsSubmittingEmail(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New ${CHATBOT_NAME} Portfolio Chat User`,
          visitorEmail: cleanEmail,
          source: `${CHATBOT_NAME} Portfolio Assistant`,
          message: `A visitor with email ${cleanEmail} started using ${OWNER_NAME}'s AI portfolio assistant.`,
        }),
      });

      if (!response.ok) {
        throw new Error("Email capture failed");
      }

      sessionStorage.setItem(STORAGE_KEYS.email, cleanEmail);
      sessionStorage.setItem(STORAGE_KEYS.access, "true");

      setEmail(cleanEmail);
      setHasAccess(true);
    } catch (error) {
      console.error(error);
      setEmailError(
        "Unable to start the chat. Please try again."
      );
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const sendMessage = async (questionOverride) => {
    const question = (questionOverride ?? input).trim();

    if (!question || isTyping) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setChatError("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          messages: nextMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Chat request failed"
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setChatError(
        error.message ||
          `${CHATBOT_NAME} is temporarily unavailable. Please try again.`
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="chatbot-launcher"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={
          isOpen
            ? `Close ${CHATBOT_NAME}`
            : `Open ${CHATBOT_NAME}`
        }
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <MessageCircle size={23} />
        )}

        {!isOpen && (
          <span className="chatbot-launcher-dot" />
        )}
      </button>

      {isOpen && (
        <div
          className="chatbot-window"
          role="dialog"
          aria-label={`${CHATBOT_NAME} portfolio assistant`}
        >
          <div className="chatbot-header">
            <div className="chatbot-header-icon">
              <Bot size={21} />
            </div>

            <div className="chatbot-header-copy">
              <h3>{CHATBOT_NAME}</h3>

              <span>
                <i /> AI Portfolio Assistant
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>

          {!hasAccess ? (
            <div className="chatbot-email-gate">
              <div className="chatbot-email-icon">
                <Sparkles size={25} />
              </div>

              <h4>Chat with {CHATBOT_NAME}</h4>

              <p>
                Enter your email first, then ask anything
                about {OWNER_NAME}'s work, skills, services,
                projects, or experience.
              </p>

              <form onSubmit={handleEmailSubmit}>
                <div className="chatbot-email-field">
                  <Mail size={17} />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                {emailError && (
                  <span className="chatbot-error">
                    {emailError}
                  </span>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingEmail}
                >
                  {isSubmittingEmail
                    ? "Starting..."
                    : "Start AI Chat"}

                  <span aria-hidden="true">→</span>
                </button>
              </form>

              <small>
                Your email is sent to {OWNER_NAME} when
                you start the assistant.
              </small>
            </div>
          ) : (
            <>
              <div className="chatbot-messages">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`chatbot-message ${
                      message.role === "user"
                        ? "user"
                        : "bot"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="chatbot-message-avatar">
                        <Bot size={15} />
                      </div>
                    )}

                    <div className="chatbot-bubble">
                      {message.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="chatbot-message bot">
                    <div className="chatbot-message-avatar">
                      <Bot size={15} />
                    </div>

                    <div className="chatbot-bubble chatbot-typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                {chatError && (
                  <div className="chatbot-chat-error">
                    {chatError}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="chatbot-quick-questions">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() =>
                      sendMessage(question)
                    }
                    disabled={isTyping}
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="chatbot-input-area">
                <textarea
                  rows="1"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask about ${OWNER_NAME}'s work...`}
                  disabled={isTyping}
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  aria-label="Send message"
                  disabled={isTyping || !input.trim()}
                >
                  <Send size={17} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}