import {FC} from 'react'
import Image from 'next/image'
import mountains from '@/assets/mountains.jpg'
import { ContactData } from '@/components/ContactData'

export const ContactSection: FC = () => {
    return(
        <section className="flex flex-col items-center justify-start h-[533px] w-[100vw] absolute right-0 bg-background mt-20">
        <div className="relative w-full h-[90vh] ">
          <div className="absolute inset-0 w-full">
            <div className="relative h-full w-full">
              <Image
                src={mountains}
                alt="Background banner"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#9d0620]/40" />
            </div>
          </div>
          <div className="relative w-full h-full px-4 flex flex-col md:flex-row items-center justify-center">
            <ContactData />
          </div>
        </div>
      </section>
    )
}
