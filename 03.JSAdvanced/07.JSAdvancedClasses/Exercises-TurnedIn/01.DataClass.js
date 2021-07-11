//  Write a ​class​ that holds data about an HTTP ​Request​. It has the following properties:●method​ (String)●uri​ (String)●version​ (String)●message​ (String)●response​ (String)●fulfilled​ (Boolean)
//The first four properties (​method​, ​uri​, ​version​, ​message​) are set through the ​constructor​, in the listed order. Theresponse​ property is initialized to ​undefined​ and the ​fulfilled​ property is initially set to ​false​.Constraints●The constructor of your class will receive ​valid parameters​.●Submit the class definition as is, ​without​ wrapping it in any function.
//ExamplesSample InputResulting objectlet myData = new Request('GET','http://google.com', 'HTTP/1.1', ''){ method: 'GET',  uri: 'http://google.com',  version: 'HTTP/1.1',  message: '',  response: undefined,  fulfilled: false }HintsUsing ES6 syntax, a class can be defined similar to a function, using the ​class​ keyword:At this point, the ​class​ can already​ be instantiated​, but it won’t hold anything useful, since it doesn’t have aconstructor. A ​constructor​ is a function that ​initializes​ the object’s ​context​ and attaches ​values​ to it. It is definedwith the keyword ​constructor​ inside the body of the class definition and it follows the syntax of regular JSfunctions - it can take ​arguments​ and execute ​logic​. Any variables we want to be attached to the ​instance​ must beprefixed with the ​this​ identifier:

class Request {
    constructor (method, uri, version, message) {
      this.method = method;
      this.uri = uri;
      this.version = version;
      this.message = message;
      this.response = undefined;
      this.fulfilled = false;
    }
}
  
  // Don't copy the code below in judge, you won't get any points, just the code above
  let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
  console.log(myData);