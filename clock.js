var select = document.getElementById('format');

select.onchange = updateClock

function updateClock()
{
    var date = new Date()
    var clock = document.getElementById('clock');
    var hours = date.getHours().toLocaleString('en-US',{minimumIntegerDigits: 2})
    var minutes = date.getMinutes().toLocaleString('en-US',{minimumIntegerDigits: 2})
    var seconds = date.getSeconds().toLocaleString('en-US',{minimumIntegerDigits: 2})
    if (select.value == "24hs"){
        clock.innerHTML = hours+":"+minutes+":"+seconds; 
    } else{
        var ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours.toLocaleString('en-US',{minimumIntegerDigits:2})
        clock.innerHTML = hours+":"+minutes+":"+seconds+ampm
    }

}

setInterval(updateClock,1000)
