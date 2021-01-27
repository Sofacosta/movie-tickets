//Business Logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

let worker = function (ticket) {
  let movie = ticket.movie;
  let time = ticket.time;
  let age = ticket.age;
  let ticketPrice = 10;

  if (age === 10) {
    ticketPrice = ticketPrice / 2;
  }
  else if (age === 70) {
    ticketPrice = .70 * ticketPrice;
  } else if (time === "matinee") {
    ticketPrice = .80 * ticketPrice;
  }
  else {
    ticketPrice = ticketPrice;
  }
  return ticketPrice;
}
//User Interface Logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $("input:checkbox[name=movie]:checked").val();
    const inputtedTime = $("input:checkbox[name=time]:checked").val();
    const inputtedAge = parseInt($("input:checkbox[name=age]:checked").val());
    // console.log("Captured values are " + inputtedMovie + ":" + inputtedTime + ":" + inputtedAge);
    let newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    // console.log(newTicket);

    let ticketPrice = worker(newTicket);
    // console.log("Inside DOC Ready function - ticketPrice:" + ticketPrice);
    $("#result").show().text("Ticket price: " + ticketPrice);
  })

}); 