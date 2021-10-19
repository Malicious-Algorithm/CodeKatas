/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/


function bmi(weight, height) {
  
  let calc = weight/Math.pow(height,2);

  if(calc <= 18.5){
  	return "Underweight";

  }else if(calc <= 25.0){
  	return "Normal";

  }else if(calc <= 30.0){
  	return "Overweight";

  }else	if(calc > 30){
  	return "Obese";

  }else
  return "";

}

//can we use an object?
function bmi(weight, height) {

    let calc = weight/Math.pow(height,2);

	//mmm this is not the way i imagine in the first place, but gets the work done
    let obj = {
        'Underweight':18.5,
        'Normal':25.0,
        'Overweight':30.0,
        'Obese':30,
        sizeComparision : function (calc){
            if(calc <= this.Underweight)    return "Underweight";
            if(calc <= this.Normal)         return "Normal";
            if(calc <= this.Overweight)     return "Overweight";
            if(calc >  this.Obese)          return "Obese";
        }
    };
    return obj.sizeComparision(calc);
}

console.log(bmi(80, 1.80), "Normal");