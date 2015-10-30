// hey hey hey

window.onload= function(){
  //alert('hey hey hey');
  statusReport('Hey hey hey!!!');

  var username = prompt('What is your name?');
  var mission = prompt('this is the next thing?');
  var x = prompt('dfkjdfa');
  var y=prompt('lka;sjfklfjdf');
  var z=prompt('kdfjfsalf');


  var contentContainer = document.getElementById('content');

  contentContainer.innerHTML = username + ' is on a mission to' + mission+'lkjfldsajflas'+x+'lkfjdsafjasf'+'fjkasfjask;f'+y+'dfjsdalfajdlsfsf'+z+'dfjsdl;asf';

}

function statusReport(message){
  console.log(message);
  return message;
}
