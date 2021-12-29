const day1 = new Date()
const day2 = new Date(new Date().setDate(new Date().getDate() - 1));
const day3 = new Date(new Date().setDate(new Date().getDate() - 2));
const day4 = new Date(new Date().setDate(new Date().getDate() - 3));
const day5 = new Date(new Date().setDate(new Date().getDate() - 4));
const dateToString = (day) => day.toISOString().substring(5, 10);
const BarData = [
    {
      "date": dateToString(day5),
      "dev": 2,
      "devColor": "hsl(120, 70%, 50%)",
      "diet": 3,
      "dietColor": "hsl(38, 70%, 50%)"
    },
    {
      "date": dateToString(day4),
      "dev": 2,
      "devColor": "hsl(120, 70%, 50%)",
      "diet": 0,
      "dietColor": "hsl(38, 70%, 50%)"
    },
    {
      "date": dateToString(day3),
      "dev": 4,
      "devColor": "hsl(120, 70%, 50%)",
      "diet": 1,
      "dietColor": "hsl(38, 70%, 50%)"
    },
    {
      "date": dateToString(day2),
      "dev": 3,
      "devColor": "hsl(120, 70%, 50%)",
      "diet": 4,
      "dietColor": "hsl(38, 70%, 50%)"
    },
    {
      "date": dateToString(day1),
      "dev": 1,
      "devColor": "hsl(120, 70%, 50%)",
      "diet": 1,
      "dietColor": "hsl(38, 70%, 50%)"
    }
  ]
  export default BarData