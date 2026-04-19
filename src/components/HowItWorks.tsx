'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Map, Plane } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <MessageSquare size={28} />,
    title: 'Tell Us Your Dream',
    description: 'Fill our quick form with your destination, travel dates, and preferences. Takes less than 2 minutes.',
  },
  {
    number: '02',
    icon: <Map size={28} />,
    title: 'We Craft Your Journey',
    description: 'Our travel experts build a personalised, detailed itinerary just for you — hotels, activities, transfers, everything.',
  },
  {
    number: '03',
    icon: <Plane size={28} />,
    title: 'You Travel, We Handle the Rest',
    description: 'From flights to hotels to on-ground support — fully managed. You just pack your bags and show up.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">The EzTrips Way</p>
          <h2 className="section-heading">Hassle-Free Travel in 3 Steps.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-surface z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary-gradient flex items-center justify-center text-white shadow-ambient">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-tertiary text-tertiary-dark text-xs font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-on-surface text-lg mb-3">{step.title}</h3>
                <p className="text-on-surface/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
