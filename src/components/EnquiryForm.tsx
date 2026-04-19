'use client'

import { useState, useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { allDestinations } from '@/lib/data'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().regex(/^(\+91)?[6-9]\d{9}$/, 'Enter a valid Indian mobile number'),
  destination: z.string().min(1, 'Please select a destination'),
  travelDate: z.string().optional(),
  dateFlexible: z.boolean().optional(),
  flexibilityDays: z.string().optional(),
  adults: z.coerce.number().min(1, 'At least 1 adult'),
  children: z.coerce.number().min(0).default(0),
  childrenAges: z.array(z.coerce.number().min(0).max(17)).optional(),
  budgetRange: z.string().optional(),
  budgetType: z.enum(['per_person', 'total_group']).optional(),
  specialRequirements: z.string().optional(),
  whatsappOptin: z.boolean().default(true),
})

type FormData = z.infer<typeof schema>

interface EnquiryFormProps {
  defaultDestination?: string
  className?: string
}

export default function EnquiryForm({ defaultDestination = '', className = '' }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      destination: defaultDestination,
      adults: 1,
      children: 0,
      whatsappOptin: true,
      dateFlexible: false,
      budgetType: 'per_person',
    },
  })

  const dateFlexible = useWatch({ control, name: 'dateFlexible' })
  const children = useWatch({ control, name: 'children' })
  const childCount = Number(children) || 0

  useEffect(() => {
    if (defaultDestination) setValue('destination', defaultDestination)
  }, [defaultDestination, setValue])

  async function onSubmit(data: FormData) {
    setLoading(true)
    setServerError('')
    try {
      const apiUrl = process.env.NEXT_PUBLIC_SAAS_API_URL || 'https://eztrips-saas.vercel.app'
      const res = await fetch(`${apiUrl}/api/website/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'website' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white/10 backdrop-blur rounded-2xl p-10 text-center ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <CheckCircle size={64} className="text-tertiary mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">We&apos;ve got your enquiry!</h3>
        <p className="text-white/70 max-w-sm mx-auto leading-relaxed">
          Our travel expert will call you within 2 hours to discuss your perfect trip.
        </p>
      </motion.div>
    )
  }

  const inputClass = 'w-full bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-tertiary transition-colors'
  const labelClass = 'block text-white/70 text-xs font-semibold uppercase tracking-label mb-1.5'
  const errClass = 'text-red-300 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-5 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register('name')} placeholder="Rahul Sharma" className={inputClass} />
          {errors.name && <p className={errClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register('email')} type="email" placeholder="rahul@example.com" className={inputClass} />
          {errors.email && <p className={errClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input {...register('phone')} type="tel" placeholder="+91 98765 43210" className={inputClass} />
          {errors.phone && <p className={errClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Destination *</label>
          <select {...register('destination')} className={inputClass + ' appearance-none cursor-pointer'}>
            <option value="" className="bg-primary text-white">Select destination...</option>
            <optgroup label="Holiday" className="bg-primary">
              {allDestinations.slice(0, 21).map(d => (
                <option key={d.slug} value={d.slug} className="bg-primary text-white">{d.name}</option>
              ))}
            </optgroup>
            <optgroup label="Pilgrimage" className="bg-primary">
              {allDestinations.slice(21).map(d => (
                <option key={d.slug} value={d.slug} className="bg-primary text-white">{d.name}</option>
              ))}
            </optgroup>
          </select>
          {errors.destination && <p className={errClass}>{errors.destination.message}</p>}
        </div>
      </div>

      {/* Travel Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Approx. Travel Date</label>
          <input {...register('travelDate')} type="date" className={inputClass} />
        </div>
        <div className="flex flex-col justify-end gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input {...register('dateFlexible')} type="checkbox" className="w-4 h-4 rounded accent-tertiary" />
            <span className="text-white/70 text-sm">My dates are flexible</span>
          </label>
          <AnimatePresence>
            {dateFlexible && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                <select {...register('flexibilityDays')} className={inputClass + ' appearance-none'}>
                  <option value="" className="bg-primary">How flexible? ± days</option>
                  {['3', '5', '7', '10', '14'].map(d => (
                    <option key={d} value={d} className="bg-primary">± {d} days</option>
                  ))}
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Travellers */}
      <div>
        <label className={labelClass}>Travellers</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <input {...register('adults')} type="number" min="1" placeholder="Adults" className={inputClass} />
            {errors.adults && <p className={errClass}>{errors.adults.message}</p>}
          </div>
          <div>
            <input {...register('children')} type="number" min="0" placeholder="Children" className={inputClass} />
          </div>
        </div>
        <AnimatePresence>
          {childCount > 0 && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-3">
              <p className="text-white/50 text-xs mb-2">Children&apos;s ages</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Array.from({ length: Math.min(childCount, 6) }).map((_, i) => (
                  <input
                    key={i}
                    type="number"
                    min="0"
                    max="17"
                    placeholder={`Child ${i + 1} age`}
                    {...register(`childrenAges.${i}`)}
                    className={inputClass}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Budget Range (optional)</label>
          <select {...register('budgetRange')} className={inputClass + ' appearance-none'}>
            <option value="" className="bg-primary">Select budget...</option>
            <option value="under_50k" className="bg-primary">Under ₹50,000</option>
            <option value="50k_1l" className="bg-primary">₹50,000 – ₹1,00,000</option>
            <option value="1l_2l" className="bg-primary">₹1,00,000 – ₹2,00,000</option>
            <option value="2l_5l" className="bg-primary">₹2,00,000 – ₹5,00,000</option>
            <option value="above_5l" className="bg-primary">Above ₹5,00,000</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget Type</label>
          <div className="flex rounded-xl overflow-hidden border border-white/20">
            {(['per_person', 'total_group'] as const).map((type) => (
              <label key={type} className="flex-1 cursor-pointer">
                <input {...register('budgetType')} type="radio" value={type} className="sr-only" />
                <div className={`text-center py-3 text-sm font-medium transition-colors ${
                  type === 'per_person' ? 'bg-white/10 text-white/70 hover:bg-white/20' : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}>
                  {type === 'per_person' ? 'Per Person' : 'Total Group'}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Special requirements */}
      <div>
        <label className={labelClass}>Special Requirements (optional)</label>
        <textarea
          {...register('specialRequirements')}
          placeholder="Any dietary restrictions, accessibility needs, preferences..."
          rows={3}
          className={inputClass + ' resize-none'}
        />
      </div>

      {/* WhatsApp opt-in */}
      <label className="flex items-center gap-3 cursor-pointer">
        <input {...register('whatsappOptin')} type="checkbox" className="w-4 h-4 rounded accent-tertiary" defaultChecked />
        <span className="text-white/70 text-sm">Send me updates on WhatsApp</span>
      </label>

      {serverError && <p className="text-red-300 text-sm">{serverError}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary text-base py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <><Loader2 size={18} className="animate-spin" /> Sending...</>
        ) : (
          "Let's Plan My Trip →"
        )}
      </button>
    </form>
  )
}
