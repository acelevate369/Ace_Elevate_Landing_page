import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Bot } from 'lucide-react';

const TermsConditions = () => {
    return (
        <div className="bg-[#080707] min-h-screen text-[#F9F8F6] font-sans overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <Link to="/" className="inline-flex items-center gap-2 text-[#C48B68] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gradient-accent mb-4 pb-2">Terms of Service</h1>
                <p className="text-white/50 text-lg font-light mb-12">
                    By using Ace Elevate, you agree to enter the Flow state. Here are the rules of engagement for our digital ecosystem.
                </p>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <FileText className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">Usage Policy</h3>
                        <p className="text-white/40 text-sm leading-relaxed">Use Ace Elevate for productivity and growth. Do not use for illegal activities or harassment.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <AlertTriangle className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">Subscriptions</h3>
                        <p className="text-white/40 text-sm leading-relaxed">Subscriptions are billed monthly. You can cancel anytime, but flow requires consistency.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Bot className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">AI Limitations</h3>
                        <p className="text-white/40 text-sm leading-relaxed">Our agents are AI. While highly accurate, they may occasionally produce inaccuracies. Verified facts are your responsibility.</p>
                    </div>
                </div>

                {/* Terms Sections */}
                <div className="space-y-10 text-white/60 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using any Ace Elevate service via WhatsApp, Telegram, or our web interface, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Service Description</h2>
                        <p>Ace Elevate is an AI Automation Studio providing 8 specialized AI agents through WhatsApp and Telegram. We reserve the right to modify, suspend, or discontinue the service at any time, though we will aim to provide reasonable notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">3. User Responsibilities</h2>
                        <p>You are responsible for safeguarding the WhatsApp or Telegram account used to access the service. You agree not to reverse engineer the AI, attempt to bypass rate limits, or send malicious payloads to our infrastructure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p>Ace Elevate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. We will provide notice of significant changes through our official channels.</p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-white/30 text-sm">
                        <p>Effective Date: January 2026</p>
                        <p>Ace Elevate &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
