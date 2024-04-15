// 13 The switch Statement

const day = "thurstday";

switch (day) {
  case "monday":
    console.log("Planing courses");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Preaper theory videos");
    break;
  case "wensday":
  case "thurstday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("It is monday");
} else if (day === "thurstday") {
  console.log("It is thurstday");
} else {
  console.log("It is not  a day");
}
