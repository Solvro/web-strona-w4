import Head from 'next/head';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

import { Seminar, Professor } from "@/types/types"
import { SeminarCalendar } from "@/components/SeminarCalendar"
import { ProfessorTitleSection } from '@/components/ProfessorTitleSection';
import { SeminarCarouselItem } from "@/components/SeminarCarouselItem"
import { ChevronDoubleLeftIcon } from '@heroicons/react/20/solid';

let seminars: Seminar[] = [
  {
    title: "Seminar XYZ with prof. Jacek Kowalski",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate consequuntur expedita atque quae enim quidem officiis dolores ratione natus maiores!",
    date: new Date("2024-12-13T17:00"),
    location: "Sala wykładowa 203, Bud. B3",
  },
  {
    title: "Seminar XYZ with prof. Jacek Kowalski",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate consequuntur expedita atque quae enim quidem officiis dolores ratione natus maiores!",
    date: new Date("2024-12-18T17:00"),
    location: "Sala wykładowa 203, Bud. B3",
  },
  {
    title: "Seminar XYZ with prof. Jacek Kowalski",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate consequuntur expedita atque quae enim quidem officiis dolores ratione natus maiores!",
    date: new Date("2025-01-15T17:00:00"),
    location: "Sala wykładowa 203, Bud. B3",
  },
  {
    title: "Seminar XYZ with prof. Jacek Kowalski",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate consequuntur expedita atque quae enim quidem officiis dolores ratione natus maiores!",
    date: new Date("2025-01-31T17:00:00"),
    location: "Sala wykładowa 203, Bud. B3",
  },
  {
    title: "Seminar XYZ with prof. Jacek Kowalski",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate consequuntur expedita atque quae enim quidem officiis dolores ratione natus maiores!",
    date: new Date("2025-02-19T17:00:00"),
    location: "Sala wykładowa 203, Bud. B3",
  },
]

let professors: Professor[] = [
  {
    firstName: "Ryszard",
    lastName: "Klempous",
    title: "dr hab. inż.",
    titleSuffix: "University prof.",
  },
  {
    firstName: "Konrad",
    lastName: "Kluwak",
    title: "dr inż.",
  },
  {
    firstName: "Grzegorz",
    lastName: "Mzyk",
    title: "dr hab. inż.",
    titleSuffix: "University prof.",
    image: "http://grzegorz.mzyk.staff.iiar.pwr.wroc.pl/gmusa.jpg",
  },
  {
    firstName: "Ewa",
    lastName: "Szlachcic",
    title: "dr inż.",
    image: "http://ewa.szlachcic.staff.iiar.pwr.wroc.pl/index_pliki/image003.jpg",
  },
  {
    firstName: "Przemysław",
    lastName: "Śliwiński",
    title: "dr hab. inż.",
    titleSuffix: "University prof.",
    image: "http://diuna.ict.pwr.wroc.pl/sliwinski/Przemys%C5%82aw%20%C5%9Aliwi%C5%84ski%20-%20Official%20Home%20Page_pliki/sliwinski-72dpi.jpg",
  },
  {
    firstName: "Paweł",
    lastName: "Wachel",
    title: "dr hab. inż.",
    titleSuffix: "University prof.",
    image: 'http://pawel.wachel.staff.iiar.pwr.wroc.pl/images/img0006.jpg',
  },
  {
    firstName: "Maciej",
    lastName: "Filiński",
    title: "mgr inż.",
  },
  {
    firstName: "Włodzimierz",
    lastName: "Greblicki",
    title: "prof. dr hab. inż.",
    titleSuffix: "Prof. Emeritius",
    image: 'http://diuna.ict.pwr.wroc.pl/greblicki/ICONS/wgre.jpg',
  },
  {
    firstName: "Zygmunt",
    lastName: "Hasiewicz",
    title: "prof. dr hab. inż.",
    titleSuffix: "Prof. Emeritius",
  },
  {
    firstName: "Barbara",
    lastName: "Łysakowska",
    title: "dr inż.",
    image: 'http://diuna.ict.pwr.wroc.pl/lysakowska/index_pliki/image001.jpg',
  },
  {
    firstName: "Jerzy",
    lastName: "Kotowski",
    title: "mgr inż.",
    image: 'http://diuna.ict.pwr.wroc.pl/kotowski/index_pliki/image003.jpg',
  },
  {
    firstName: "Adrian",
    lastName: "Gałęziowski",
    title: "mgr inż.",
    titleSuffix: "doktorant",
  },
  {
    firstName: "Sebastian",
    lastName: "Kowalewski",
    title: "mgr inż.",
    titleSuffix: "doktorant",
  },
  {
    firstName: "Bartłomiej",
    lastName: "Kozdraś",
    title: "mgr inż.",
    titleSuffix: "doktorant",
  },
  {
    firstName: "Szymon",
    lastName: "Lagosz",
    title: "mgr inż.",
    titleSuffix: "doktorant",
  },
  {
    firstName: "Aleksandra",
    lastName: "Postawka",
    title: "mgr inż.",
    titleSuffix: "doktorant",
  },
]

let professorOrder: string[] = [
  'prof. dr hab. inż.', //? Prof. DSc Eng.
  'dr hab. inż.', //? DSc Eng.
  'dr inż.', //? PhD Eng.
  'mgr inż.', //? MSc Eng.
]

export default function Home() {
  return (
    <div>
      <Head>
        <title key='true'>Department of Control Systems and Mechatronics</title>
      </Head>
      <main className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 px-[2rem] lg:pl-[4rem]'>
          <h1 className='font-bold text-red-700 text-3xl lg:text-5xl pb-5'>Department of Control Systems and Mechatronics</h1>
          <p className='text-justify text-base lg:text-lg leading-snug pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti, enim saepe tempora vel temporibus similique excepturi vero atque. Reprehenderit voluptas dolore quisquam ratione hic at illum velit debitis incidunt, reiciendis deserunt laborum fugit nostrum odio, labore obcaecati soluta sit, distinctio perferendis eaque? Perspiciatis velit, accusamus debitis magnam similique tempora?</p>

          <Carousel className="relative shadow-xl">
            <CarouselContent>
              {seminars.map((seminar, index) => (
                <CarouselItem key={index}>
                  <SeminarCarouselItem seminar={seminar} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-4 bg-transparent text-white hover:bg-red-800 hover:text-white duration-200"></CarouselPrevious>
            <CarouselNext className="absolute right-4 bg-transparent text-white hover:bg-red-800 hover:text-white duration-200"></CarouselNext>
          </Carousel>
          
          <div className="flex justify-center items-center w-full border-[2px] border-gray-300 shadow-xl rounded-lg mt-4">
            <SeminarCalendar seminars={seminars} />
          </div>
        </div>

        <div className='w-full lg:w-1/2 px-[2rem] lg:pr-[4rem] mt-6 lg:mt-0'>
          {professorOrder.map((title, index) => (
            <ProfessorTitleSection
              key={index}
              title={title}
              professors={professors.filter(p => p.title === title)}
            />
          ))}
        </div>
      </main>

      <section className='flex flex-col justify-center items-center w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] border-t border-black dark:border-white box-border mx-[2rem] lg:mx-[4rem]'>
        <h1 className='font-bold text-red-700 text-3xl lg:text-5xl pt-10'>Our research focus</h1>
        
        <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5 mt-[2rem]'>
          <Button variant='outline' className='flex lg:flex-1 w-4/5 h-[12rem] text-2xl border-[2px] border-gray-300'>
            <Link href='/identification'>
              Identification of systems
            </Link>
          </Button>
          <Button variant='outline' className='flex lg:flex-1 w-4/5 h-[12rem] text-2xl border-[2px] border-gray-300'>
            <Link href='/recognition'>
              Recognition, Classification
            </Link>
          </Button>
          <Button variant='outline' className='flex lg:flex-1 w-4/5 h-[12rem] text-2xl border-[2px] border-gray-300 break-words'>
            <Link href='/optimization' className='block text-center'>
              Optimization theory and techniques
            </Link>
          </Button>
        </div>

        <Button className='mt-4 bg-red-800 text-white'>
          <Link href='/research'>
            Learn more
          </Link>
        </Button>
      </section>
    </div>
  );
}