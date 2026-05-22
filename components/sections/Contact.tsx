'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Send, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const contactInfo = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  { icon: Clock, label: 'Timezone', value: 'GMT (West Africa)', href: null },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/NasamuAlhassan' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/alhassan-prince' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/PrinceAlha50083' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const subject = encodeURIComponent((fd.get('subject') as string) || 'Portfolio Inquiry')
    const body = encodeURIComponent(
      `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 600)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0b12]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Get in Touch</h2>
          <p className="text-slate-400 mt-3 max-w-md text-sm leading-relaxed">
            Have a project, opportunity, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-10">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[#0e1018] border border-white/[0.06] rounded-xl p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-slate-200 text-sm hover:text-indigo-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-2.5 pt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="bg-[#0e1018] border border-emerald-500/30 rounded-2xl p-10 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 size={22} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0e1018] border border-white/[0.06] rounded-2xl p-6 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-2">Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-[#131521] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#131521] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-2">Subject</label>
                  <input
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full bg-[#131521] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    className="w-full bg-[#131521] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20"
                >
                  <Send size={14} />
                  {loading ? 'Opening...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
