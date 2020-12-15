// let x = new Date();
// console.log(x);
// console.log(x.getFullYear());

// console.log(x.getHours());

function getTime(){
    let x = new Date();
    let hours = x.getHours();
    let min = x.getMinutes();
    let sec = x.getSeconds();
    let amPM = 'AM';
    if(hours >=12)
    {
        amPM = 'PM';
        if(hours>12)
        {
            hours = hours-12;
        }
    }
    console.log(`${hours}:${min}:${sec} ${amPM}`);
}
/*
setInterval(() => {
    console.clear();
    getTime();
},1000);
*/
// Find age of person like x years Y months z days

function GetAge(dob){
    /*
    let ageDifMs = Date.now() - dob.getTime();
    console.log(dob.getTime());
    console.log(Date.now());
    console.log(ageDifMs);
    let totalDays = Math.floor(ageDifMs/(1000*60*60*24));
    let year = totalDays > 365 ? Math.floor(totalDays/365) : 0
    console.log(year);
    let month = totalDays > 30 ? Math.floor(totalDays/30)-12*year : 0;
    let days = totalDays > 0 ? totalDays - Math.floor(totalDays/30)*30 : 0;
    console.log(`${year}, ${month},${days}`) ;
    */
   let x = new Date(dob.getFullYear(), dob.getMonth()+1, 0).getDate();
   console.log(`Number of Days in month of DOB:${x}`);
   let currentDate = new Date();
   
   let year = currentDate.getFullYear()-dob.getFullYear();
   let month = currentDate.getMonth() - dob.getMonth();
   console.log(`Current Date: ${currentDate}`);
   let day = currentDate.getDate() - dob.getDate();
   console.log(`${year}, ${month},${day}`) ;
   
   monthAdj = day >= 0 ? month : month - 1;
    
   year = monthAdj >= 0 ? year: year-1;
   month = monthAdj>=0 ? monthAdj : 12+monthAdj;
   day = day >= 0 ? day : x+day;
   
   
   console.log(`Age: ${year} Years, ${month} Months,${day} Days`) ;
}

let dob = new Date("2014-02-16");
console.log(`Date of Birth: ${dob}`);
GetAge(dob);