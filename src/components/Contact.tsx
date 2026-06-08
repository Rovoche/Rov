import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", brand: "", email: "" });
  const [placeholders, setPlaceholders] = useState({ name: "Name", brand: "Brand", email: "Email" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFocus = (field: string) => {
    setPlaceholders((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field: string, defaultValue: string) => {
    if (!formData[field as keyof typeof formData]) {
      setPlaceholders((prev) => ({ ...prev, [field]: defaultValue }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section 
      className="relative py-28 md:py-40 bg-[#F2EDE4] select-none text-brand-black" 
      id="contact"
    >
      {/* Editorial layout grid vertical lines */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none">
        <div className="md:col-span-3 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-6 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-3 h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start z-20">
        
        {/* Left Side: Editorial headline & Central Action Email Target */}
        <div className="lg:col-span-6 space-y-12 text-left">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-[#8C7B6E] block">
              communication channel
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1A1614]">
              Begin a conversation.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-sm sm:text-base text-[#8C7B6E] leading-relaxed font-light max-w-md">
              We collaborate with a limited number of brands per quarter to guarantee absolute dedication and structural excellence. Contact us directly or use the portal.
            </p>

            {/* Magnificent deep burgundy email link */}
            <div className="pt-4">
              <a 
                href="mailto:hello@rovoche.com"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#5C1A1A] hover:opacity-85 transition-opacity duration-300 block tracking-tight line-clamp-1 break-all cursor-pointer underline decoration-[#5C1A1A] underline-offset-8 interactive-element"
              >
                hello@rovoche.com
              </a>
            </div>
          </div>

          {/* Core markets and operational outposts */}
          <div className="border-t border-[#8C7B6E]/15 pt-8 flex flex-wrap gap-x-8 gap-y-4 text-xs font-serif italic text-[#8C7B6E]">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#5C1A1A]" />
              <span>Nigeria</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#5C1A1A]" />
              <span>United Kingdom</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#5C1A1A]" />
              <span>United States</span>
            </div>
          </div>
        </div>

        {/* Right Side: Minimalist layout contact input portal */}
        <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:ml-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
              {/* Input: Name */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name", "Name")}
                  placeholder={placeholders.name}
                  required
                  className="w-full bg-transparent text-[#1A1614] border-b border-[#8C7B6E]/20 focus:border-[#5C1A1A] py-4 text-sm font-sans placeholder-brand-stone/60 outline-none transition-all duration-300 relative z-10 font-normal interactive-element"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5C1A1A] transition-all duration-400 group-focus-within:w-full" />
              </div>

              {/* Input: Brand */}
              <div className="relative group">
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  onFocus={() => handleFocus("brand")}
                  onBlur={() => handleBlur("brand", "Brand")}
                  placeholder={placeholders.brand}
                  className="w-full bg-transparent text-[#1A1614] border-b border-[#8C7B6E]/20 focus:border-[#5C1A1A] py-4 text-sm font-sans placeholder-brand-stone/60 outline-none transition-all duration-300 relative z-10 font-normal interactive-element"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5C1A1A] transition-all duration-400 group-focus-within:w-full" />
              </div>

              {/* Input: Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email", "Email")}
                  placeholder={placeholders.email}
                  required
                  className="w-full bg-transparent text-[#1A1614] border-b border-[#8C7B6E]/20 focus:border-[#5C1A1A] py-4 text-sm font-sans placeholder-brand-stone/60 outline-none transition-all duration-300 relative z-10 font-normal interactive-element"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5C1A1A] transition-all duration-400 group-focus-within:w-full" />
              </div>

              {/* Action submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5C1A1A] text-[#F2EDE4] font-serif text-sm uppercase tracking-[0.3em] font-light py-5 px-8 flex justify-between items-center group cursor-pointer transition-all duration-300 hover:bg-[#1A1614] hover:shadow-[0_10px_25px_rgba(26,22,20,0.1)] active:scale-[0.99] disabled:opacity-50 select-none interactive-element"
                >
                  <span>{isSubmitting ? "TRANSMITTING..." : "INITIATE CONNECTIONS"}</span>
                  <Send size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#5C1A1A] text-[#F2EDE4] p-8 md:p-12 rounded border border-white/5 shadow-2xl space-y-4 text-left"
            >
              <span className="font-serif italic text-2xl font-light">
                Secure link initialized.
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#F2EDE4]/85 leading-relaxed font-light">
                Your brand metadata has bypassed public networks and cataloged directly on our solid servers. Our directors will construct a response within one solar cycle.
              </p>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.2em] text-[#8C7B6E]">
                <span>TRANSMISSION OK</span>
                <span>ID // {Math.floor(Math.random() * 90000) + 10000}</span>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
