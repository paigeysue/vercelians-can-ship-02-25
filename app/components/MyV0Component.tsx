import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const feedingSchedule = [
  { day: "Monday", morning: "7:00 AM", evening: "6:00 PM" },
  { day: "Tuesday", morning: "7:00 AM", evening: "6:00 PM" },
  { day: "Wednesday", morning: "7:00 AM", evening: "6:00 PM" },
  { day: "Thursday", morning: "7:00 AM", evening: "6:00 PM" },
  { day: "Friday", morning: "7:00 AM", evening: "6:00 PM" },
  { day: "Saturday", morning: "8:00 AM", evening: "6:00 PM" },
  { day: "Sunday", morning: "8:00 AM", evening: "6:00 PM" },
]

export default function DogFeedingSchedule() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Dog Feeding Schedule</CardTitle>
        <CardDescription>Weekly feeding times for your furry friend</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Morning Feed</TableHead>
              <TableHead>Evening Feed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedingSchedule.map((schedule) => (
              <TableRow key={schedule.day}>
                <TableCell className="font-medium">{schedule.day}</TableCell>
                <TableCell>{schedule.morning}</TableCell>
                <TableCell>{schedule.evening}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

