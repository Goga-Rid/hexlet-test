import _ from 'lodash';

export default function solution(content){
  // BEGIN

  //step 1
  let result1 = content.split('\n').slice(2);
  /*
    [
  '2023-04-16,78,58,63,1019,7,N,Los Angeles,CA,PST\r',
  '2023-04-15,68,51,73,1012,9,SW,Seattle,WA,PST\r',
  '2023-04-16,67,51,78,1009,10,W,Seattle,wa,PST\r',
  '2023-04-15,82,66,58,1010,8,SE,Miami,FL,EST\r',
  '2023-04-16,84,68,60,1009,7,ESE,Miami,fl,EST\r',
  '2023-04-15,72,54,72,1009,10,W,Chicago,IL,CST\r',
  '2023-04-16,69,52,76,1010,9,SSE,Chicago,IL,CST\r',
  '2023-04-15,71,50,69,1014,7,ESE,Denver,co,MST\r',
  '2023-04-16,73,52,64,1016,8,NE,Denver,CO,MST\r',
  '2023-04-17,78,58,58,1017,6,N,Los Angeles,CA,PST\r',
  '2023-04-18,90,59,61,1018,7,N,Los Angeles,CA,PST\r',
  '2023-04-17,71,52,75,1010,9,S,Seattle,WA,PST\r',
  '2023-04-18,68,51,80,1008,11,W,Seattle,wA,PST\r',
  '2023-04-17,83,67,59,1012,8,ESE,Miami,FL,EST\r',
  '2023-04-18,85,68,62,1011,7,E,Miami,FL,EST\r',
  '2023-04-17,68,49,80,1015,10,WSW,Chicago,IL,CST\r',
  '2023-04-18,70,52,76,1013,11,SSE,Chicago,IL,CST\r',
  '2023-04-17,74,53,70,1017,8,E,Denver,CO,MST\r',
  '2023-04-18,76,52,63,1016,9,NE,Denver,CO,MST\r',
  ''
]
  */
  console.log(`Count: ${result1.length}`);
  //step 2
  const idealForm = result1.map((e) => e.slice(2).split(',')).slice(0, -1);
  const result2 = idealForm.map((n) => n[7]);
  const uniqChanges = _.uniq(result2).sort();
  console.log(`Cities: ${uniqChanges.join(', ')}`);

  //step 3
  const result3 = idealForm.map((el) => el[3]);
  const maxHumidity = Math.max(...result3);
  const minHumidity = Math.min(...result3);
  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);

  //step 4
  
 // const findMaxTemp = (idealForm) => {
 //   const sortedArr = idealForm.map((newEl) => newEl[1]);
 //const maxTemp = Math.max(...sortedArr);
 // for(let i = 1; i < idealForm.length; i++){
 //   if (maxTemp > sortedArr[i]) {
 //     let acc = 0;
 //    acc++
 //   } else return ideal
 // }
 // };
  const result4 = idealForm.sort((a, b) => b[1] - a[1])[0];
  console.log(`HottestDay: ${result4[0]} ${result4[7]}`);

  //step 5 

  //console.log(result5);
  //console.log(`HottestCity: ${result5}`);
  // END
}