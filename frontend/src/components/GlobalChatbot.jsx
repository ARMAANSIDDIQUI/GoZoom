import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const GlobalChatbot = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    
    const [messages, setMessages] = useState([
        { role: 'bot', text: t('chatbot.greeting') }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Update greeting if language changes and no messages yet
    useEffect(() => {
        if (messages.length === 1 && messages[0].role === 'bot') {
            setMessages([{ role: 'bot', text: t('chatbot.greeting') }]);
        }
    }, [t]);

    const knowledgeBase = [
        {
            pattern: /hello|hi|hey|greetings|morning|evening|hey there|howdy|hi there|yo|whats up|hola|asalam|namaste|morning|evening|afternoon|bonjour|salut|coucou/i,
            responseKey: 'hello'
        },
        {
            pattern: /services|what do you do|capability|expert|offer|portfolio|work|products|expertise|specialties|features|solutions|skills|development|design|services|offres/i,
            responseKey: 'services'
        },
        {
            pattern: /contact|call|email|reach|address|location|office|phone|number|whatsapp|map|support|help me|talk to human|representative|agent|chat with person|speak with someone|contacter|appel|courriel|adresse|bureau/i,
            responseKey: 'contact'
        },
        {
            pattern: /price|cost|quote|budget|how much|rate|estimation|pricing|fees|expensive|cheap|charges|payment|billing|invoice|estimate|prix|coût|devis|budget/i,
            responseKey: 'pricing'
        },
        {
            pattern: /angular|react|laravel|php|node|frontend|backend|java|python|javascript|stack|vue|nextjs|typescript|golang|ruby|asp\.net|c#|spring|mern|mean/i,
            responseKey: 'tech_stack'
        },
        {
            pattern: /mobile|android|ios|app dev|flutter|react native|smartphone|iphone|playstore|appstore|tablet|ipad|native|hybrid|cross platform/i,
            responseKey: 'mobile'
        },
        {
            pattern: /ai|machine learning|ml|chatbot|automation|intelligent|bot|nlp|data science|gpt|llm|neural|deep learning|vision|predictive|ia|intelligence/i,
            responseKey: 'services' // Maps to services which covers AI
        },
        {
            pattern: /hire|recruit|career|job|join|work at|position|vacancy|internship|hiring|employment|developer for hire|talent|staffing|candidate|recruter|embaucher|emploi/i,
            responseKey: 'hire'
        },
        {
            pattern: /about|company|who are you|history|team|gozoom|corporate|vision|mission|background|founded|ceo|owner|director|propos|entreprise/i,
            responseKey: 'why_gozoom'
        },
        {
            pattern: /seo|marketing|digital|rank|google|ads|sem|social media|traffic|optimization|growth|content|strategy|adwords/i,
            responseKey: 'seo'
        },
        {
            pattern: /thank|great|perfect|awesome|thanks|cool|ok|thanks bot|good bot|well done|excellent|helpful|superb|merci|génial|parfait/i,
            responseKey: 'thank'
        },
        {
            pattern: /bye|goodbye|see you|later|exit|close|quit|leave|stop|done|au revoir|salut|quitter/i,
            responseKey: 'bye'
        },
        {
            pattern: /why choose|why gozoom|benefits|advantages|reliable|trust|different|unique|select|pick|reason|pourquoi/i,
            responseKey: 'why_gozoom'
        },
        {
            pattern: /process|methodology|how you work|workflow|steps|lifecycle|sprint|agile|managed|delivery|timeline|processus|méthodologie/i,
            responseKey: 'process'
        },
        {
            pattern: /security|privacy|data|safe|secure|nda|confidential|protection|legal|compliance|sécurité|confidentialité|données/i,
            responseKey: 'security'
        },
        {
            pattern: /support|maintenance|after sales|update|fix|bug|warranty|uptime|hosting/i,
            responseKey: 'support'
        }
    ];

    const handleBotResponse = (userInput) => {
        let botResponse = t('chatbot.responses.default');

        // Check suggested questions (exact match regardless of language)
        const suggestedKeys = [
            'why_gozoom', 'services', 'process', 'contact', 'tech_stack', 
            'security', 'pricing', 'support', 'hire', 'mobile'
        ];

        let found = false;
        for (const key of suggestedKeys) {
            if (userInput === t(`chatbot.suggested.${key}`)) {
                botResponse = t(`chatbot.responses.${key}`);
                found = true;
                break;
            }
        }

        if (!found) {
            for (const item of knowledgeBase) {
                if (item.pattern.test(userInput)) {
                    botResponse = t(`chatbot.responses.${item.responseKey}`);
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
        const currentInput = input;
        setInput('');

        // Simulate bot typing
        setTimeout(() => {
            handleBotResponse(currentInput);
        }, 800);
    };

    const handleSuggestedClick = (key) => {
        const question = t(`chatbot.suggested.${key}`);
        const userMsg = { role: 'user', text: question };
        setMessages(prev => [...prev, userMsg]);

        setTimeout(() => {
            handleBotResponse(question);
        }, 800);
    };

    const suggestedKeys = [
        'why_gozoom', 'services', 'process', 'contact', 'tech_stack', 
        'security', 'pricing', 'support', 'hire', 'mobile'
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
                                    <span className="text-white/70 text-xs">{t('chatbot.online')}</span>
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
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${msg.role === 'user'
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
                        {suggestedKeys.map((key) => (
                            <button
                                key={key}
                                onClick={() => handleSuggestedClick(key)}
                                className="text-[10px] sm:text-xs bg-white/10 border border-white/10 hover:bg-[var(--color-gozoom-blue)]/30 hover:border-[var(--color-gozoom-blue)]/50 text-slate-200 py-1.5 px-4 rounded-full transition-all text-left whitespace-nowrap shadow-sm active:scale-95"
                            >
                                {t(`chatbot.suggested.${key}`)}
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
                                placeholder={t('chatbot.placeholder')}
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
