import { DatePipe } from '@angular/common';

export function getReportDate(incrementDay: number): string{
    const dateYesterday: Date = new Date(),
        datePipe: DatePipe = new DatePipe('en-US'),
        previousDay = new Date(dateYesterday.setDate(dateYesterday.getDate() + incrementDay));

    return datePipe.transform(previousDay, 'MM-dd-yyyy');
}
