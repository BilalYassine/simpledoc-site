'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'
import PricingDecoration from '@/public/images/pricing-decoration.png'
import Tooltip from '@/components/tooltip'
import Accordion from '@/components/accordion'

export default function PricingTabs() {
  const prices = [
    {
      contacts: '1K',
      plans: {
        essential: '5',
        premium: '9',
        enterprise: '19'
      }
    },
    {
      contacts: '5K',
      plans: {
        essential: '19',
        premium: '29',
        enterprise: '59'
      }
    },
    {
      contacts: '10K',
      plans: {
        essential: '29',
        premium: '49',
        enterprise: '99'
      }
    },
    {
      contacts: '15K',
      plans: {
        essential: '39',
        premium: '59',
        enterprise: '119'
      }
    },
    {
      contacts: '1M',
      plans: {
        essential: '1,490',
        premium: '2,490',
        enterprise: '4,999'
      }
    },
  ]

  const [tier, setTier] = useState<number>(2)
  const [segmentsWidth, setSegmentsWidth] = useState<string>('100%');
  const [progress, setProgress] = useState<string>('0%');
  const segments = prices.length - 1;

  const calculateProgress = () => {
    setSegmentsWidth(`${100 / segments}%`);
    setProgress(`${100 / segments * tier}%`);
  };

  useEffect(() => {
    calculateProgress();
  }, [tier]);

  const faqs = [
    {
      title: 'Can I use the product for free?',
      text: 'Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.',
      active: false,
    },
    {
      title: 'What payment methods can I use?',
      text: 'Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.',
      active: false,
    },
    {
      title: 'Can I change from monthly to yearly billing?',
      text: 'Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.',
      active: false,
    },
    {
      title: 'Can I use the tool for personal, client, and commercial projects?',
      text: 'Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.',
      active: true,
    },
    {
      title: 'How can I ask other questions about pricing?',
      text: 'Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.',
      active: false,
    },
    {
      title: 'Do you offer discount for students and no-profit companies?',
      text: 'Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.',
      active: false,
    },
  ]

  return (
    <section className="bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">How It Works</h2>
            {/* <p className="text-lg text-zinc-500">Start creating realtime design experiences for free. Upgrade for extra features and collaboration with your team.</p> */}
          </div>

          {/* Pricing tabs component */}
          <div className="pb-12 md:pb-20">

            {/* Pricing toggle */}
            {/* <div className="max-w-sm mx-auto lg:max-w-3xl space-y-3 mb-12 lg:mb-16">
              <div className="text-center text-sm text-zinc-700 font-medium" x-text="`${prices[value].contacts} contacts/month`"></div>
              <div className="relative flex items-center" style={{ '--progress': `${progress}`, '--segments-width': `${segmentsWidth}` } as React.CSSProperties}>
                <div className="absolute left-2.5 right-2.5 h-1.5 bg-zinc-200 rounded-full overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-zinc-400 before:to-zinc-800 before:[mask-image:_linear-gradient(to_right,theme(colors.white),theme(colors.white)_var(--progress),transparent_var(--progress))] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(to_right,transparent,transparent_calc(var(--segments-width)-1px),theme(colors.white/.7)_calc(var(--segments-width)-1px),theme(colors.white/.7)_calc(var(--segments-width)+1px))]" aria-hidden="true"></div>
                <input className="relative appearance-none cursor-pointer w-full bg-transparent focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:focus-visible:ring [&::-webkit-slider-thumb]:focus-visible:ring-zinc-300 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:focus-visible:ring [&::-moz-range-thumb]:focus-visible:ring-zinc-300" type="range" min="0" max={prices.length - 1} aria-valuetext={`${prices[tier].contacts} contacts/month`} aria-label="Pricing Slider" onChange={e => setTier(parseInt(e.target.value))} />
              </div>
              <div>
                <ul className="flex justify-between text-xs font-medium text-zinc-500 px-2.5">
                  {prices.map((price, index) => (
                    <li key={index} className="relative"><span className="absolute -translate-x-1/2">{price.contacts}</span></li>
                  ))}
                </ul>
              </div>
            </div> */}

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

              {/* Pricing tab 1 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">For Patients</div>
                    <div className="text-zinc-500">*Benefits of personalized education & Examples of structured and unstructured use cases*</div>
                  </div>
    
                  <div className="mt-8">
                    <a className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow" href="#0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg bg-zinc-800">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-200 font-semibold mb-1">Demo</div>
                    <div className="text-zinc-200">*Short video or interactive demo & Screenshots of the app interface, GIFs, etc.*</div>
                  </div>
                  
                  <div className="mt-8">
                    <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="#0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">For Healthcare Providers</div>
                    <div className="text-zinc-500">*Benefits for healthcare providers & Examples of patient engagement and outcome improvement*</div>
                  </div>
                  
                  <div className="mt-8">
                    <a className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow" href="#0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* FAQs */}
          {/* <div className="max-w-2xl mx-auto">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}