// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let numBlocks = Math.abs(location - 42);
    return numBlocks;
}

function distanceFromHqInFeet(location){
    //distanceFromHqInBlocks(location);
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(block1, block2){
    let numFeet = Math.abs(block1 - block2) * 264;
    return numFeet;
}
function calculatesFarePrice(block1, block2){
    let distance = distanceTravelledInFeet(block1, block2);
    if(distance < 400) {
        return 0;
    }
    else if(distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if(distance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

    
}