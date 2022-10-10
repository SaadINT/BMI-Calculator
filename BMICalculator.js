// Collectiong data from user
var usersName =prompt ("Hi Enter Your Name Here Please");
var userHeight = prompt("Please Enter Your Heights in Inches");
var userWeight = prompt("Please Enter your weight in Pounds");
//Converting Height into Centimeters
var heightCm = userHeight * 2.54 ;
//Converting Weight into Pounds
var weightKilos = userWeight * 0.453592;

document.write("Your weight in Kilos is " + weightKilos);
document.write("<br>");
document.write("Your Height in Centimeters is " + heightCm);
// [weight (kg) / height (cm) / height (cm)] x 10,000
// Using above given formula to calculate BMI value
document.write("<br>");
finalBmi =  (weightKilos / heightCm / heightCm)*10000;
document.write("<br>");
document.write("<br>");
document.write(" Hi Mr." + usersName + "Your BMI according to Your Age , Height and Weight is " +finalBmi);
document.write("<br>");
if (finalBmi <= 24.8 && finalBmi >= 18.5)
{
    document.write("Your BMI is" + finalBmi + "You're Physically Fit !!");
}
else 
{
    document.write("Your BMI is" +finalBmi+  " You Should Consult your Doctor");
}
