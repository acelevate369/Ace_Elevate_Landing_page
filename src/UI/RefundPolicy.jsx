import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

const RefundPolicy = () => {
    return (
        <div className="bg-[#080707] min-h-screen text-[#F9F8F6] font-sans overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <Link to="/" className="inline-flex items-center gap-2 text-[#C48B68] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gradient-accent mb-4 pb-2">Refund Policy</h1>
                <p className="text-white/50 text-lg font-light mb-12">
                    We believe in Ace Elevate. But if our agents don't deliver as promised, we've got you covered.
                </p>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Clock className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">14-Day Guarantee</h3>
                        <p className="text-white/40 text-sm leading-relaxed">If you are not satisfied with the service within the first 14 days, you are eligible for a full refund.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <ShieldCheck className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">Secure Process</h3>
                        <p className="text-white/40 text-sm leading-relaxed">Refunds are processed securely back to your original payment method. All processed via WhatsApp admin.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <MessageCircle className="text-[#C48B68] mb-3" size={24} />
                        <h3 className="font-serif font-bold text-white mb-2">Contact Support</h3>
                        <p className="text-white/40 text-sm leading-relaxed">To initiate a refund, simply reach out to our WhatsApp admin. We'll handle it promptly.</p>
                    </div>
                </div>

                {/* Policy Sections */}
                <div className="space-y-10 text-white/60 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Eligibility for Refund</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>You are within the first 14 days of your initial purchase.</li>
                            <li>The service was not functioning as described due to technical issues on our end (e.g., AI agent failure or persistent errors).</li>
                            <li>You have not violated our Terms of Service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Non-Refundable Items</h2>
                        <p>There are certain situations where only partial refunds are granted or denied:</p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li>Any request made more than 14 days after purchase.</li>
                            <li>Renewal payments where the user failed to cancel before the billing cycle.</li>
                            <li>Refunds are not available if the user has violated our Terms of Service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">3. How to Request a Refund</h2>
                        <p>
                            To start a refund request, please contact us via WhatsApp at{' '}
                            <a href="https://wa.me/6285753442122?text=Hello%2C%20I%20would%20like%20to%20request%20a%20refund" target="_blank" rel="noopener noreferrer" className="text-[#C48B68] hover:text-white transition-colors">
                                +62 857-5344-2122
                            </a>
                            {' '}or email us at{' '}
                            <a href="mailto:acelevateglobal@gmail.com" className="text-[#C48B68] hover:text-white transition-colors">
                                acelevateglobal@gmail.com
                            </a>
                            {' '}with your order details. We will notify you of the approval or rejection within 2 business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Processing Time</h2>
                        <p>If your refund is approved, it will be processed and a credit will automatically be applied to your original method of payment, typically within 5-10 business days depending on your payment provider.</p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-white/30 text-sm">
                        <p>Last Updated: January 2026</p>
                        <p>Ace Elevate &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
