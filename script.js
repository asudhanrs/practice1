// var age = parseInt(prompt("enter a age"));
// var weight = parseInt(prompt("enter a weight"));
// var height = parseInt(prompt("enter a height"));
// var result = '';
// var bmi = (weight/(height*height/10000)).toFixed(1);

function bmiCal(){
    let weight1 = document.getElementById("weight").value;
    let height1 = document.getElementById("height").value;
    let bmi = (weight1/(height1*height1/10000)).toFixed(1);
    if(bmi<18.5){
      result = 'Underweight';
      }else if(18.5<=bmi&&bmi<=24.9){
      result = 'Healthy';
      }else if(25<=bmi&&bmi<=29.9){
      result = 'Overweight';
      }else if(30<=bmi&&bmi<=34.9){
      result = 'Obese';
      }else if(35<=bmi){
      result = 'Extremely obese';
      }else if(bmi="NaN"){
       bmi = "Enter all value";
      };
    document.getElementById("bmi1").innerHTML = "<p class='output'>"+"BMI Value is "+ bmi +"<br>"+"You are "+ result+"</p>";
}









// document.write("BMI Value: ");
// document.write(bmi);
// document.write("<br>");
// document.write("You are: ");
// document.write(result);

// document.write("<button onClick='openNewTab()'>Can</button>")

// function openNewTab(){
//     window.open("http://www.facebook.com/");
// }