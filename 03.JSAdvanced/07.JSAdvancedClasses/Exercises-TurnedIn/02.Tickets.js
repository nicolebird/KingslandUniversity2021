//CODE OUTPUT IS MISSING THE LEADING ZERO
//Write a program that manages a database of tickets. A ticket has a ​destination​, ​a ​price​ and a ​status​. Yourprogram will receive ​two arguments​ - the first is an ​array of strings​ for ticket descriptions and the second is a ​string​,representing a ​sorting criterion​. The ticket descriptions have the following format:<destinationName>|<price>|<status>Store each ticket and at the end of execution ​return​ a sorted summary of all tickets, sorted by either ​destination​,price​ or ​status​, depending on the ​second parameter​ that your program received. Always sort in ascending order(default behavior for ​alphabetical​ sort). If two tickets compare the same, use order of appearance. See the examplesfor more information.InputYour program will receive two parameters - an ​array of strings​ and a ​single string​.
function main(ticketData, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = ticketData.slice()
                          .map(x => x.split('|'))
                          .reduce((acc, [destination, price, status]) => {
                            acc.push(new Ticket(destination, +price, status));
                            return acc;
                          }, [])
                          .sort((a, b) => sortCriteria !== 'price' ? a[sortCriteria].localeCompare(b[sortCriteria]) : a[sortCriteria] - b[sortCriteria]);
  return tickets;
}

// Don't copy the calling of the function in HW Grader, you won't get any points, just the code above
console.log(main(['Philadelphia|94.20|available',
                   'New York City|95.99|available',
                   'New York City|95.99|sold',
                   'Boston|126.20|departed'],'destination'));