// Glow Nail Spa data. This data is made up for this course.
// These services, prices and times are invented for practice. Glow Nail Spa is not a real salon.
// What this data cannot tell you: anything about a real salon, real prices or real customers.

const services = [
  { name: "Quick Hand Tidy",      category: "Manicure", priceKsh: 600,  minutes: 25 },
  { name: "Classic Manicure",     category: "Manicure", priceKsh: 900,  minutes: 40 },
  { name: "Gel Manicure",         category: "Manicure", priceKsh: 1500, minutes: 60 },
  { name: "Classic Pedicure",     category: "Pedicure", priceKsh: 1200, minutes: 50 },
  { name: "Gel Pedicure",         category: "Pedicure", priceKsh: 1800, minutes: 65 },
  { name: "Spa Pedicure",         category: "Pedicure", priceKsh: 2200, minutes: 80 },
  { name: "Two Accent Nails",     category: "Nail art", priceKsh: 500,  minutes: 20 },
  { name: "Stripes and Dots",     category: "Nail art", priceKsh: 900,  minutes: 40 },
  { name: "Full Set Design",      category: "Nail art", priceKsh: 1600, minutes: 75 },
  { name: "Cuticle Care",         category: "Care",     priceKsh: 500,  minutes: 20 },
  { name: "Hand and Arm Massage", category: "Care",     priceKsh: 700,  minutes: 30 },
  { name: "Gel Removal",          category: "Care",     priceKsh: 500,  minutes: 30 }
];

// Facts that are true of this file (use them to check your conclusions):
// 12 services, 3 in each category. 7 cost under KSh 1000 (priceKsh < 1000).
// 3 take more than 60 minutes (Gel Pedicure, Spa Pedicure, Full Set Design). Gel Manicure takes exactly 60, so it is not one of them.
// The cheapest services cost KSh 500 (3 of them). The dearest is Spa Pedicure at KSh 2200.
// No service costs under KSh 300, so a filter for priceKsh < 300 gives an empty list.

// Practice data for the labs on Days 6 to 8. Do not change it.
const clubs = [
  { name: "Chess Club",          day: "Monday",    ageGroup: "13-15", costKsh: 0,    spacesLeft: 6,  venue: "Library" },
  { name: "Robotics Lab",        day: "Monday",    ageGroup: "13-15", costKsh: 1500, spacesLeft: 2,  venue: "Science Room" },
  { name: "Junior Football",     day: "Tuesday",   ageGroup: "10-12", costKsh: 500,  spacesLeft: 10, venue: "Main Field" },
  { name: "Drama Group",         day: "Tuesday",   ageGroup: "13-15", costKsh: 0,    spacesLeft: 0,  venue: "Hall" },
  { name: "Coding Club",         day: "Wednesday", ageGroup: "13-15", costKsh: 1000, spacesLeft: 4,  venue: "Computer Room" },
  { name: "Art Studio",          day: "Wednesday", ageGroup: "10-12", costKsh: 800,  spacesLeft: 7,  venue: "Art Room" },
  { name: "Debate Society",      day: "Thursday",  ageGroup: "16-18", costKsh: 0,    spacesLeft: 12, venue: "Room 4" },
  { name: "Swimming",            day: "Thursday",  ageGroup: "10-12", costKsh: 1200, spacesLeft: 3,  venue: "Pool" },
  { name: "Music Band",          day: "Friday",    ageGroup: "13-15", costKsh: 600,  spacesLeft: 5,  venue: "Music Room" },
  { name: "Photography Walk",    day: "Friday",    ageGroup: "13-15", costKsh: 300,  spacesLeft: 8,  venue: "Meet at Gate" },
  { name: "Senior Basketball",   day: "Saturday",  ageGroup: "16-18", costKsh: 400,  spacesLeft: 1,  venue: "Court" },
  { name: "Maths Challenge",     day: "Saturday",  ageGroup: "10-12", costKsh: 0,    spacesLeft: 9,  venue: "Room 2" }
];

// Facts that are true of this file (use them to check your conclusions):
// 12 clubs. 4 are free (costKsh is 0). 6 are for ages 13-15. 1 club has no spaces left (Drama Group).
// No club for ages 16-18 runs on Friday, so a filter for that gives an empty list.
