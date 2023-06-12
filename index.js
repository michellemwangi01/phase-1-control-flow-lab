function scuberGreetingForFeet(ride){
  if(ride <= 400){
    return 'This one is on me!';
  }
  else if(ride > 2000  && ride <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if(ride > 2500){
    return 'No can do.';

  }
}



function ternaryCheckCity(city){

 const message = (city === "NYC" )?  'Ok, sounds good.' : 'No go.';
 return message;
  // if (city === "N
}

function switchOnCharmFromTip(tip){

  switch (tip) {
    case "generous":
      return 'Thank you so much.'
      break;

      case "not as generous":
      return 'Thank you.';
      break;
  
    default:
      return 'Bye.';
      break;
      
  }

  // if (tip === "generous"){
  //   return 'Thank you so much.';
  // }
  // else if (tip === "not as generous"){
  //   return "Thank you."
  // }
  // else{
  //   return 'Bye.';
  // }
}