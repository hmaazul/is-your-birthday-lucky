const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const output = document.querySelector("#output-area");

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    var s=0;
    for(var i=0;i<dob.length;i++)
    {
        s += Number(dob.charAt(i));
    }
    return s;
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    const num = luckyNumber.value;
    if(sum && num)
    {
        if(sum % num == 0){
            output.innerText = "Your birthday is lucky";
        }
        else{
            output.innerText = "Ohh so sad you're not that lucky";
        }
    }
    else
    {
        output.innerText = "Please enter both field don't waste my time";
    }
    
}

checkNumber.addEventListener('click',checkBirthdayIsLucky);