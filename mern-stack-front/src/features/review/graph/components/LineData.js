const day1 = new Date()
const day2 = new Date(new Date().setDate(new Date().getDate() - 1));
const day3 = new Date(new Date().setDate(new Date().getDate() - 2));
const day4 = new Date(new Date().setDate(new Date().getDate() - 3));
const day5 = new Date(new Date().setDate(new Date().getDate() - 4));
const dateToString = (day) => day.toISOString().substring(5, 10);
const LineData = [
    {
      "id": "Routines",
      "color": "hsl(137, 70%, 50%)",
      "data": [
        {
          "x": dateToString(day5),
          "y": 2
        },
        {
          "x": dateToString(day4),
          "y": 3
        },
        {
          "x": dateToString(day3),
          "y": 4
        },
        {
          "x": dateToString(day2),
          "y": 5
        },
        {
          "x": dateToString(day1),
          "y": 6
        }
      ]
    },
    {
      "id": "Yours",
      "color": "hsl(328, 70%, 50%)",
      "data": [
        {
          "x": dateToString(day5),
          "y": 2
        },
        {
          "x": dateToString(day4),
          "y": 3
        },
        {
          "x": dateToString(day3),
          "y": 4
        },
        {
          "x": dateToString(day2),
          "y": 5
        },
        {
          "x": dateToString(day1),
          "y": 6
        }
      ]
    }
  ]

  export default LineData