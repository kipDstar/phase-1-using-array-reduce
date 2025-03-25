const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0
// Code your solution here
totalBatteries = batteryBatches.reduce(function (batteryNumberAccumulator, element) {
    return element += batteryNumberAccumulator;
});
console.log(totalBatteries)
