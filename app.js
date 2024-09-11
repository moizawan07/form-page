//  Stored each input value in variable inside the function

function submit_form (){
    let namevalue = document.getElementById("full-name").value;

    let  passvalue = document.getElementById("Password").value;

    let  emailvalue = document.getElementById("email").value;

    let Adressvalue = document.getElementById ("Address").value;

    let cityvalue = document.getElementById("City").value;

    let statevalue = document.getElementById("State").value;


//   ShoW The user Data 

   let userdata =  document.getElementById("userdata");
   
 userdata.innerHTML = `
  <h3 class ="da"> Your Data:</h3>
  <hr>
  <p> Fullname : ${namevalue}</p>
  <p> Password : ${passvalue}</p>
  <p> Email : ${emailvalue}</p>
  <p> Adress : ${Adressvalue}</p>
  <p> City : ${cityvalue}</p> 
  <p> State : ${statevalue}</p>`  
}
