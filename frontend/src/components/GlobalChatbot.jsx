import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

const GlobalChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hi! I\'m Alex, GoZoom\'s AI assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const knowledgeBase = [
        {
            pattern: /hello|hi|hey|greetings|morning|evening|hey there|howdy|hi there|yo|whats up|hola|asalam|namaste|morning|evening|afternoon/i,
            response: "Hello! Welcome to GoZoom Technologies. How can I assist you with your digital goals today? I'm here to help with services, pricing, or hiring expert talent."
        },
        {
            pattern: /services|what do you do|capability|expert|offer|portfolio|work|products|expertise|specialties|features|solutions|skills|development|design/i,
            response: "GoZoom specializes in comprehensive tech solutions: \n• Web Development (React, Angular, Node, Laravel)\n• Mobile Apps (Android, iOS, Flutter)\n• Software Engineering & Architecture\n• Cloud Integration & DevOps\n• AI, ML & Chatbot Solutions. \nWhich specific service can I tell you more about?"
        },
        {
            pattern: /contact|call|email|reach|address|location|office|phone|number|whatsapp|map|support|help me|talk to human|representative|agent|chat with person|speak with someone/i,
            response: "You can reach our team directly at contact@gozoom.com or by calling our support line. Our headquarters is located in the primary business district. Check our 'Contact Us' page for a full map and contact form!"
        },
        {
            pattern: /price|cost|quote|budget|how much|rate|estimation|pricing|fees|expensive|cheap|charges|payment|billing|invoice|estimate/i,
            response: "Pricing depends on the scope and complexity of your project. For a quick estimate, please share your requirements via our 'Contact' form, and one of our consultants will provide a free quote within 24 hours."
        },
        {
            pattern: /angular|react|laravel|php|node|frontend|backend|java|python|javascript|stack|vue|nextjs|typescript|golang|ruby|asp\.net|c#|spring|mern|mean/i,
            response: "We are experts in modern stacks! Whether you need a React/Next.js frontend, a robust Laravel/Node backend, or a full-stack Angular enterprise app, we can build it. You can also hire our developers for your existing team."
        },
        {
            pattern: /mobile|android|ios|app dev|flutter|react native|smartphone|iphone|playstore|appstore|tablet|ipad|native|hybrid|cross platform/i,
            response: "We deliver high-end mobile experiences. Our team builds native Android/iOS apps and cross-platform solutions using Flutter/React Native, handling everything from design to store submission."
        },
        {
            pattern: /ai|machine learning|ml|chatbot|automation|intelligent|bot|nlp|data science|gpt|llm|neural|deep learning|vision|predictive/i,
            response: "AI is our forte. We build smart automation tools, predictive analytics models, and custom NLP chatbots (just like me!) to streamline your business workflows."
        },
        {
            pattern: /hire|recruit|career|job|join|work at|position|vacancy|internship|hiring|employment|developer for hire|talent|staffing|candidate/i,
            response: "Looking for talent or a new role? \n• Hire Experts: Check our 'Hire Developers' section for tech-specific talent.\n• Join Us: Visit our 'Careers' page for current job openings and internships!"
        },
        {
            pattern: /about|company|who are you|history|team|gozoom|corporate|vision|mission|background|founded|ceo|owner|director/i,
            response: "GoZoom Technologies is a premier offshore software delivery partner. With 3+ years of excellence, a team of 30+ experts, and 100+ happy global clients, we transform ideas into digital reality."
        },
        {
            pattern: /seo|marketing|digital|rank|google|ads|sem|social media|traffic|optimization|growth|content|strategy|adwords/i,
            response: "Our Digital Marketing division helps products grow. We offer technical SEO, Google Ads management, and data-driven marketing strategies to ensure you rank #1 and drive traffic."
        },
        {
            pattern: /thank|great|perfect|awesome|thanks|cool|ok|thanks bot|good bot|well done|excellent|helpful|superb/i,
            response: "My pleasure! I'm glad I could provide the information you needed. Is there anything else about GoZoom technologies you'd like to explore?"
        },
        {
            pattern: /bye|goodbye|see you|later|exit|close|quit|leave|stop|done/i,
            response: "Goodbye! It was a pleasure chatting. Feel free to reach out anytime you need assistance. Have an amazing day!"
        },
        {
            pattern: /why choose|why gozoom|benefits|advantages|reliable|trust|different|unique|select|pick|reason/i,
            response: "Choosing GoZoom means choosing excellence. We offer:\n• Deep Technical Expertise: 30+ specialists across modern stacks.\n• Global Delivery: 100+ successful projects for international clients.\n• Agile Speed: Fast turnarounds without compromising on quality.\n• Cost-Effective: High-end solutions tailored to your budget.\n• Long-term Partnership: We don't just build; we scale with you."
        },
        {
            pattern: /process|methodology|how you work|workflow|steps|lifecycle|sprint|agile|managed|delivery|timeline/i,
            response: "We follow a transparent, Agile-driven process:\n1. Discovery: Understanding your vision.\n2. Design: Creating intuitive UI/UX.\n3. Development: Sprints with regular updates.\n4. Testing: Rigorous QA for bug-free code.\n5. Launch & Support: Seamless deployment and ongoing maintenance."
        },
        {
            pattern: /security|privacy|data|safe|secure|nda|confidential|protection|legal|compliance/i,
            response: "Your data is our priority. We sign strict NDAs (Non-Disclosure Agreements) with all clients, use secure encrypted servers, and follow industry-best practices for code security and data protection."
        },
        {
            pattern: /support|maintenance|after sales|update|fix|bug|warranty|uptime|hosting/i,
            response: "Our relationship doesn't end at launch! We provide dedicated post-launch support, 24/7 monitoring, and scalable maintenance packages to ensure your application stays modern and bug-free."
        },
        {
            pattern: /help|guide|manual|instructions|how to/i,
            response: "I can help you navigate our services, explain why to choose us, or walk you through our development process. Just type a keyword like 'Process', 'Security', or 'Hiring' to get started!"
        }
    ];

    const handleBotResponse = (userInput) => {
        let botResponse = "I'm not sure I understand that. Would you like to speak to a human expert?";

        const exactMatches = {
            "Why should I choose GoZoom?": "Choosing GoZoom means choosing excellence. We offer:\n• Deep Technical Expertise: 30+ specialists across modern stacks.\n• Global Delivery: 100+ successful projects for international clients.\n• Agile Speed: Fast turnarounds without compromising on quality.\n• Cost-Effective: High-end solutions tailored to your budget.\n• Long-term Partnership: We don't just build; we scale with you.",
            "What services do you provide?": "GoZoom specializes in comprehensive tech solutions: \n• Web Development (React, Angular, Node, Laravel)\n• Mobile Apps (Android, iOS, Flutter)\n• Software Engineering & Architecture\n• Cloud Integration & DevOps\n• AI, ML & Chatbot Solutions. \nWhich specific service can I tell you more about?",
            "Tell me about your process.": "We follow a transparent, Agile-driven process:\n1. Discovery: Understanding your vision.\n2. Design: Creating intuitive UI/UX.\n3. Development: Sprints with regular updates.\n4. Testing: Rigorous QA for bug-free code.\n5. Launch & Support: Seamless deployment and ongoing maintenance.",
            "How can I contact you?": "You can reach our team directly at contact@gozoom.com or by calling our support line. Our headquarters is located in the primary business district. Check our 'Contact Us' page for a full map and contact form!",
            "What is your tech stack?": "We are experts in modern stacks! Whether you need a React/Next.js frontend, a robust Laravel/Node backend, or a full-stack Angular enterprise app, we can build it. You can also hire our developers for your existing team.",
            "Is my data secure?": "Your data is our priority. We sign strict NDAs (Non-Disclosure Agreements) with all clients, use secure encrypted servers, and follow industry-best practices for code security and data protection.",
            "Tell me about pricing.": "Pricing depends on the scope and complexity of your project. For a quick estimate, please share your requirements via our 'Contact' form, and one of our consultants will provide a free quote within 24 hours.",
            "Do you provide support?": "Our relationship doesn't end at launch! We provide dedicated post-launch support, 24/7 monitoring, and scalable maintenance packages to ensure your application stays modern and bug-free.",
            "I want to hire a developer.": "Looking for talent or a new role? \n• Hire Experts: Check our 'Hire Developers' section for tech-specific talent.\n• Join Us: Visit our 'Careers' page for current job openings and internships!",
            "Do you build mobile apps?": "We deliver high-end mobile experiences. Our team builds native Android/iOS apps and cross-platform solutions using Flutter/React Native, handling everything from design to store submission.",
        };

        if (exactMatches[userInput]) {
            botResponse = exactMatches[userInput];
        } else {
            for (const item of knowledgeBase) {
                if (item.pattern.test(userInput)) {
                    botResponse = item.response;
                    break;
                }
            }
        }

        setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate bot typing
        setTimeout(() => {
            handleBotResponse(input);
        }, 800);
    };

    const handleSuggestedClick = (question) => {
        const userMsg = { role: 'user', text: question };
        setMessages(prev => [...prev, userMsg]);

        setTimeout(() => {
            handleBotResponse(question);
        }, 800);
    };

    const suggestedQuestions = [
        "Why should I choose GoZoom?",
        "What services do you provide?",
        "Tell me about your process.",
        "How can I contact you?",
        "What is your tech stack?",
        "Is my data secure?",
        "Tell me about pricing.",
        "Do you provide support?",
        "I want to hire a developer.",
        "Do you build mobile apps?",
    ];

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end chatbot-area">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[80vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-fade-up">
                    {/* Header */}
                    <div className="p-5 bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <FaRobot className="text-white text-xl" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Alex</h3>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="text-white/70 text-xs">Online</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow overflow-y-auto p-5 space-y-4 scroll-smooth visible-scrollbar" data-lenis-prevent>
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                    ? 'bg-[var(--color-gozoom-blue)] text-white rounded-tr-none'
                                    : 'bg-white/10 text-slate-200 border border-white/10 rounded-tl-none'
                                    } shadow-lg`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions */}
                    <div className="px-5 pb-3 flex overflow-x-auto gap-2 visible-scrollbar flex-nowrap shrink-0" data-lenis-prevent>
                        {suggestedQuestions.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => handleSuggestedClick(q)}
                                className="text-[10px] sm:text-xs bg-white/10 border border-white/10 hover:bg-[var(--color-gozoom-blue)]/30 hover:border-[var(--color-gozoom-blue)]/50 text-slate-200 py-1.5 px-4 rounded-full transition-all text-left whitespace-nowrap shadow-sm active:scale-95"
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm text-white focus:outline-none focus:border-[var(--color-gozoom-blue)] transition-colors"
                            />
                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] flex items-center justify-center text-white hover:opacity-90 transition-colors">
                                <FaPaperPlane className="text-xs" />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-tr from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)]'
                    }`}
            >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-slate-900 rounded-full animate-ping"></span>
                )}
            </button>
        </div>
    );
};

export default GlobalChatbot;
