// PLEASE DON'T change function name
module.exports = makeExchange = sum => {
  if(sum < 0 || sum == 0) return {};
  if(sum >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  const obj = {};
    if((sum - 50) >= 0) {
      obj['H'] = 0;
     while(sum >= 50){
      sum -= 50;
      obj['H']++;
     }
    }
    if((sum - 25) >= 0) {
      obj['Q'] = 0;
     while(sum >= 25){
      sum -= 25;
      obj['Q']++;
     }
    }
    if((sum - 10) >= 0) {
      obj['D'] = 0;
     while(sum >= 10){
      sum -= 10;
      obj['D']++;
     }
    }
    if((sum - 5) >= 0) {
      obj['N'] = 0;
     while(sum >= 5){
      sum -= 5;
      obj['N']++;
     }
    }
    if((sum - 1) >= 0) {
      obj['P'] = 0;
     while(sum > 0){
      sum -= 1;
      obj['P']++;
     }
    }
return obj;
}