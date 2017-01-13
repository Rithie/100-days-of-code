import Point from './point'
import TimeTable from './timetable'

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

const daysOfWeek = ["", "seg", "ter", "qua", "qui", "sex", "sab"];  
const horarios = ['07:00 - 07:55', '7:55 - 08:50', '09:10 - 10:05' , '10:05 - 11:00', '13:00 - 13:55', '13:55 - 14:50', '15:10 - 16:05', '16:05 - 17:00', '18:30 - 19:25', '19:25 - 20:20', '20:20 - 22:00'];
const p = new TimeTable(daysOfWeek, horarios);
// console.log(Point.distance(p1, p2));
//console.log(p.greeting(),p.isFree);
p.drawTable();
console.log(p);