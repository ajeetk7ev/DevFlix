'use client'

import Image from 'next/image'

const companies = [
  { name: 'Google', logo: '/companies/google.png' },
  { name: 'Meta', logo: '/companies/meta.png' },
  { name: 'Amazon', logo: '/companies/amazon.png' },
  { name: 'Netflix', logo: '/companies/netflix.png' },
  { name: 'Microsoft', logo: '/companies/microsoft.png' },
  { name: 'Uber', logo: '/companies/uber.png' },
  { name: 'Adobe', logo: '/companies/adobe.png' },
  { name: 'Flipkart', logo: '/companies/flipkart.png' },
]

export default function CompanySlider() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-12 overflow-hidden border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
          Trusted by engineers from top tech companies
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...companies, ...companies].map((company, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
