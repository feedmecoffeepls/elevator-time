const ElevatorTime = ({ acceleration, topSpeed, distanceBetweenFloors, currentFloor, targetFloor }) => {

    
    const floors = Math.abs(targetFloor - currentFloor)
    const totalDistance = floors * distanceBetweenFloors

    const timeToMaxSpeed = () => {
        let time = 0 
        // Assumes that the elevator must always reach top speed, and have an equal amount of time to decelerate
        time = topSpeed / acceleration
        // Fix for the case where the elevator doesn't reach top speed
        const accelerationWindow = totalDistance / 2
        if (time * acceleration > accelerationWindow) {
            time = Math.sqrt(accelerationWindow / acceleration)
        }
        return time
    }

    const accelerateDecelerateTime = () => {
        // Assumes acceleration is equal to deceleration
        return timeToMaxSpeed() * 2
    }

    const totalTime = () => {
        if (targetFloor === currentFloor) {
            return "You are on that floor"
        }
        const accelerateDistance = 0.5 * acceleration * Math.pow(timeToMaxSpeed(), 2)
        const remainingDistance = totalDistance - 2 * accelerateDistance
        const remainingTime = remainingDistance / topSpeed
        return remainingTime + accelerateDecelerateTime()
    }

    return (
        <div>
            <p className="font-bold my-[2rem]">
                {totalTime() ?  "Total Time:" +  totalTime() + "s" : "Something unexpected happened"}
            </p>
        </div>
    )
}

export default ElevatorTime;