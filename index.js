
function takeANumber(line, name){
line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}
 function nowServing(katzDeliLine){
   
    if ( katzDeliLine.length === 0){
     
     return "There is nobody waiting to be served!";
  
   } else {
     
   
   return  `Currently serving ${katzDeliLine.shift(0)}.`;
   
   }
   // katzDeliLine.slice(1);
   }
   
  function currentLine(katzDeliLine){
    //line.push(line.length)
    //return (line.toString())
<<<<<<< HEAD
   if ( katzDeliLine.length === 0){
    return "The line is currently empty." }
     else
    {
    
  var string = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length - 1 ; i++  ){

     string += `${i + 1}. ${katzDeliLine[i]}, `
    }
    
    string += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    
    return string;
  }
  }
  
  
  
  
  
  
  
  
=======
    if (katzDeliLine.length === 0){
      return "The line is currently empty."
    } else {
    return ("The line is currently: " + katzDeliLine());
  }
  }
>>>>>>> 2d79261c761aa2d0ec71cc7a357ca73b5a123a1f
