import { Seminar } from "@/types/types"
import { Button } from "@/components/ui/button"

const dateFormat: (date: Date) => string = (date: Date) => {
  let year = date.getFullYear()
  let month = (date.getMonth() + 1).toString().padStart(2, '0')
  let day = date.getDate().toString().padStart(2, '0')
  let hours = date.getHours().toString().padStart(2, '0')
  let minutes = date.getMinutes().toString().padStart(2, '0')

  return `${day}.${month}.${year} ${hours}:${minutes}`
}

export function SeminarCarouselItem({ seminar }: { seminar: Seminar }) {
  return (
    <div className="w-full text-center bg-red-700 dark:bg-red-800 text-white rounded-2xl px-[4rem] py-4">
      <h1 className="font-bold text-xl lg:text-2xl pt-2 lg:pt-5">{seminar.title}</h1>
      <p className="pt-1 text-justify text-sm lg:text-base">{seminar.description}</p>
      <div className="flex flex-row justify-between items-center gap-4">
      <p className="text-left py-4 lg:py-7 font-semibold text-sm lg:text-lg font-mono flex flex-col">
        <span>{dateFormat(seminar.date)}</span>
        <span>{seminar.location}</span>
      </p>
      <Button  className="h-[3rem] bg-transparent border-[1px] hover:bg-red-800">
        Add to your calendar
      </Button>
      </div>
    </div>
  )
}
