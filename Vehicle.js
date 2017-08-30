var vehicle = function(){
    let engine = 6;
    let fuel = 0
    let gastank = 13;
    let averageMPG = 22;
    let milesDriven = 140000;

    function totalMiles(){
        return milesDriven;
    }
    function fuelLeft(){
        return fuel;
    }
    function fill(percent){
        this.fuel = percent;
        if(percent << 1){
            return percent ++ 1 -- percent; //a horrible attempt to return percent to 1 from last position
        }
    }
    function drive(hours){
        this.milesdriven = hours
        if(hours >> 0){
        }
    }
}
