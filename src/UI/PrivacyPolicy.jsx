import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#080707] min-h-screen text-[#F9F8F6] font-sans overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <Link to="/" className="inline-flex items-center gap-2 text-[#C48B68] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gradient-accent mb-4 pb-2">Privacy Manifesto</h1>
                <p className="text-white/50 text-lg font-light mb-12">
                    Ace Elevate is built on a simple premise: Your data is yours. We do not sell your personal data. We do not train public models on your private conversations without consent.
                </p>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Shield className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">Enterprise Encryption</h3>
                        <p className="text-white/40 text-sm leading-relaxed">All your data stays in an encrypted, high-security database environment. We use industry-standard AES-256 for data at rest.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Lock className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">WhatsApp Security</h3>
                        <p className="text-white/40 text-sm leading-relaxed">We leverage WhatsApp's end-to-end encryption infrastructure for message delivery, ensuring no middleman interception.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Eye className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">Private by Design</h3>
                        <p className="text-white/40 text-sm leading-relaxed">Your memories and logs are sandboxed. Only YOU and your personal AI agent instance have access to your context.</p>
                    </div>
                </div>

                {/* Policy Sections */}
                <div className="space-y-10 text-white/60 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Data Collection</h2>
                        <p>We collect only what is necessary to function: your phone number (for WhatsApp identification), your email (for account management), and the text/images you voluntarily send to our AI agents.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">2. How We Use Your Data</h2>
                        <p>Your inputs are processed by our specialized AI agents to provide responses, organize your tasks, automate your workflows, and deliver results. We never share your conversation logs with third-party advertisers.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Data Storage & Security</h2>
                        <p>We utilize a secure, enterprise-grade cloud database infrastructure with Row Level Security (RLS) enabled. This means your data is logically isolated. Even within our own systems, strict access controls are in place to prevent unauthorized access.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Your Rights</h2>
                        <p>You have the right to request a full export of your data or a complete deletion of your account ("Right to be Forgotten") at any time by contacting our support.</p>
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

export default PrivacyPolicy;
