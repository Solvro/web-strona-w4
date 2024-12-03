import { Seminar } from "@/types/types"
import { CalendarHeatmap } from "@/components/ui/calendar-heatmap"

export function SeminarCalendar({ seminars }: { seminars: Seminar[] }) {
  const dates = seminars.map((seminar) => ({
    date: new Date(seminar.date),
    weight: 1,
  }))

  const styles = ["text-white hover:text-white bg-red-600 hover:bg-red-700 duration-300"]
  
  //! https://shadcn-calendar-heatmap.vercel.app/
  return (
    <CalendarHeatmap
      mode="single"
      numberOfMonths={2}
      variantClassnames={styles}
      weightedDates={dates}
    />
  )
}