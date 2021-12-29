const day1 = new Date()
const day2 = new Date(new Date().setDate(new Date().getDate() - 1));
const day3 = new Date(new Date().setDate(new Date().getDate() - 2));
const day4 = new Date(new Date().setDate(new Date().getDate() - 3));
const day5 = new Date(new Date().setDate(new Date().getDate() - 4));
const dateToString = (day) => day.toISOString().substring(5, 10);
// keys={[ 'visit', 'payment', 'study', 'workout', 'etc' ]}

const BarData = [
    {
      "date": dateToString(day5),
      "visit": 4,
      "visitColor": "hsl(120, 70%, 50%)",
      "payment": 1,
      "paymentColor": "hsl(38, 70%, 50%)",
      "study": 2,
      "studyColor": "hsl(26, 70%, 50%)",
      "workout": 0,
      "workoutColor": "hsl(233, 70%, 50%)",
      "etc": 3,
      "etcColor": "hsl(160, 70%, 50%)",
    },{
      "date": dateToString(day4),
      "visit": 3,
      "visitColor": "hsl(120, 70%, 50%)",
      "payment": 1,
      "paymentColor": "hsl(38, 70%, 50%)",
      "study": 3,
      "studyColor": "hsl(26, 70%, 50%)",
      "workout": 1,
      "workoutColor": "hsl(233, 70%, 50%)",
      "etc": 3,
      "etcColor": "hsl(160, 70%, 50%)",
    },{
      "date": dateToString(day3),
      "visit": 5,
      "visitColor": "hsl(120, 70%, 50%)",
      "payment": 1,
      "paymentColor": "hsl(38, 70%, 50%)",
      "study": 0,
      "studyColor": "hsl(26, 70%, 50%)",
      "workout": 0,
      "workoutColor": "hsl(233, 70%, 50%)",
      "etc": 4,
      "etcColor": "hsl(160, 70%, 50%)",
    },{
      "date": dateToString(day2),
      "visit": 1,
      "visitColor": "hsl(120, 70%, 50%)",
      "payment": 0,
      "paymentColor": "hsl(38, 70%, 50%)",
      "study": 6,
      "studyColor": "hsl(26, 70%, 50%)",
      "workout": 1,
      "workoutColor": "hsl(233, 70%, 50%)",
      "etc": 3,
      "etcColor": "hsl(160, 70%, 50%)",
    },{
      "date": dateToString(day1),
      "visit": 3,
      "visitColor": "hsl(120, 70%, 50%)",
      "payment": 2,
      "paymentColor": "hsl(38, 70%, 50%)",
      "study": 1,
      "studyColor": "hsl(26, 70%, 50%)",
      "workout": 1,
      "workoutColor": "hsl(233, 70%, 50%)",
      "etc": 2,
      "etcColor": "hsl(160, 70%, 50%)",
    },
  ]
  export default BarData