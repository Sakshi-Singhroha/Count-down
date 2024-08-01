const endDate = "19 May 2024 8:50 PM";
document.getElementById("end-date").innerText = endDate; 
/* js date object provides you the time stamp of  [articular dates from 1st jan 1970*/
// const clock = () =>{
//}
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end- now)/1000; // in seconds 
    if(diff<0) return; 
    //console.log(end,now);
    //console.log(diff);

    // console.log(Math.floor(diff/3600/24));
    inputs[0].value= Math.floor(diff/3600/24); 
    // inputs[1].value= (Math.floor(diff/3600) - (Math.floor(diff/3600/24)*24) );
    inputs[1].value= Math.floor(diff/3600)%24;
    inputs[2].value= Math.floor(diff/60)%60;
    inputs[3].value= Math.floor(diff)%60;
}
// initial call  
// convert into days 


clock()
/**
 * 1 day=24 hrs
 * 1hr = 60 mins
 * 1min =60 secs
 * 
 */

setInterval(
    () => {
        clock()
    },
    1000
)

