function compute()
{
    var amount = document.getElementById("principal").value || 0
    var rate = document.getElementById("rate").value 
    var years = document.getElementById('years').value
    
    document.getElementById('result-content').style.display ="inline" 
    
    document.getElementById('r_amount').innerHTML = amount
    document.getElementById('r_interest').innerHTML = rate
    document.getElementById('result').innerHTML = amount*rate/100*years
    document.getElementById('r_date').innerHTML = new Date().getFullYear() + parseInt(years)
}
        
function showValue(val) {
    document.getElementById('percentage').innerHTML = val
}