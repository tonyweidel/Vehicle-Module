var vehicle = function(e,f,g,m,d){
    let engine = e;
    let fuel = f;
    let gastank = g;
    let averageMPG = m;
    let milesDriven = d;

    function totalMiles(){
        return milesDriven;
    }
    function fuelLeft(){
        return fuel;
    }
    function fill(percent){
        fuel += percent;
        if(fuel > 1){
            fuel = 1
        }
    }
    function drive(hours){
        let fuelburn = hours*engineEfficiency();
        if(fuelburn<=fuel){
          milesDriven += (hours*averageMPG);
          fuel -= hours*engineEfficiency();
        }
        else{
          milesDriven += fuel*averageMPG;
          fuel = 0;
        }
    }
    function engineEfficiency(){
      if(engine = 4){
        return 1;
      }
      else if(engine = 6){
        return 1.2;
      }
      else if(engine = 8){
          return 1.4;
      }
      else{
        return null;
        console.log("No such thing as engine with "+engine+" cylinders!")
      }
    }
    return{totalMiles,fuelLeft,fill,drive};
}
module.exports = vehicle;
