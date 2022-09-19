function daysInAMonth(day,year){
   const days = new Date(year,day,0).getDate();

   console.log(days);
}
daysInAMonth(2, 2021);
