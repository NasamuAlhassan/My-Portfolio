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

const inputClass =
  'w-full bg-white/30 backdrop-blur-sm border border-white/55 rounded-2xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-violet-400/60 focus:bg-white/45 transition-all duration-200'

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.22em] mb-3">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Get in Touch</h2>
          <p className="text-slate-500 mt-3 max-w-md text-sm leading-relaxed">
            Have a project, opportunity, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.52, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                className="glass glass-shine flex items-center gap-4 rounded-2xl p-4"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 480, damping: 38 }}
              >
                <div className="w-9 h-9 rounded-xl bg-violet-100/70 border border-violet-300/60 flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <Icon size={14} className="text-violet-700" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-slate-700 text-sm font-semibold hover:text-violet-700 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 text-sm font-semibold">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-2.5 pt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-violet-700 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.52, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="glass glass-shine rounded-3xl p-10 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 border border-emerald-300/60 flex items-center justify-center">
                  <CheckCircle2 size={22} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold text-lg">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass glass-shine rounded-3xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-500 text-xs font-bold block mb-2">Name</label>
                    <input name="name" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs font-bold block mb-2">Email</label>
                    <input name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-slate-500 text-xs font-bold block mb-2">Subject</label>
                  <input name="subject" placeholder="What's this about?" className={inputClass} />
                </div>
                <div>
                  <label className="text-slate-500 text-xs font-bold block mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full glass-btn flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm disabled:opacity-60"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                >
                  <Send size={14} />
                  {loading ? 'Opening...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
