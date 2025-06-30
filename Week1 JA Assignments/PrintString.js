//print login and the opentaps string from the URL?
const url = "http://leaftaps.com/opentaps/control/login";
const index = url.split("/");//[ 'http:', '', 'leaftaps.com', 'opentaps', 'control', 'login' ]
//[
 // "http:"->index[0]
 // ""->index[1] → empty because of "//"
 // "leaftaps.com"->index[2]
 // "opentaps"->index[3]
  //"control"->index[4]
  //"login"->index[5]
//]
const opentaps = index[3]; // "opentaps"
const login = index[5];    // "login"

console.log("opentaps:", opentaps);
console.log("login:", login);