let currentFloor = 0;
let inputElevatorRequest = [1,8,3];
let order = [3,2,1]

function  firstComeFirstServe(input,order) {
    let requests = []; 

    for (let i = 0; i < input.length; i++){
        requests.push({priority:order[i] , floor:input[i]});
    } 
    requests.sort((a, b) => a.priority - b.priority)

    while (requests.length > 0){
        let { floor } = requests[0];
        console.log(`Elevator is at the floor ${floor} `);
        requests.shift();
    }
}

function nearestFloorFirst(input) {
    let requests = [];
    
    for (let i = 0; i < input.length; i++){
        requests.push({priority:(input[i] - currentFloor), floor:input[i]});
    }           
    requests.sort((a, b) => a.priority - b.priority)

    while (requests.length > 0){
        let { floor } = requests[0];
        console.log(`Elevator is at the floor ${floor} `);
        requests.shift();
    }
}
firstComeFirstServe(inputElevatorRequest,order)
nearestFloorFirst(inputElevatorRequest)