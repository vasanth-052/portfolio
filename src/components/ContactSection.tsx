import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('https://contact-service-vom3.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-3d px-4 md:px-20 lg:px-40 py-20 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-700 ease-out"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-4xl font-bold mb-10 text-center tracking-wider">
          Contact{' '}
          <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8]">Me</span>
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-4 rounded-lg bg-slate-800/50 text-white placeholder-cyan-400/70 border border-cyan-500/20 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-4 rounded-lg bg-slate-800/50 text-white placeholder-cyan-400/70 border border-cyan-500/20 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg bg-slate-800/50 text-white placeholder-cyan-400/70 border border-cyan-500/20 md:col-span-2 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-slate-800/50 text-white placeholder-cyan-400/70 border border-cyan-500/20 md:col-span-2 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
            required
          ></textarea>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-fit px-8 py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold tracking-wide hover:from-cyan-500 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p className="text-green-400 text-center mt-6">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center mt-6">❌ Failed to send message. Try again.</p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
