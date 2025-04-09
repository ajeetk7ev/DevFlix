'use client'
import Image from 'next/image'
import  microsoft from '@/public/top-companies/microsoft.png'
import  google from '@/public/top-companies/google.png'
import  meta from '@/public/top-companies/meta.png'
import  netfix from '@/public/top-companies/netflix.png'
import  atlassian from '@/public/top-companies/atlassian.png'
import  adobe from '@/public/top-companies/adobe.png'
import  paytm from '@/public/top-companies/paytm.png'
import amazon from '@/public/top-companies/amazon.png'

const companies = [
  { name: 'Google', logo: google},
  { name: 'Meta', logo:meta },
  { name: 'Amazon', logo:amazon },
  { name: 'Netflix', logo: netfix },
  { name: 'Microsoft', logo: microsoft },
  { name: 'Atlassian', logo: atlassian },
  { name: 'Adobe', logo:adobe },
  { name: 'Paytm', logo: paytm },
]

export default function CompanySlider() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-12 overflow-hidden border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-semibold  text-gray-800 dark:text-white">
            Get a chance to be placed at top tech companies
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...companies, ...companies].map((company, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-12 relative grayscale-0 hover:grayscale-0 transition-all duration-300">
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
