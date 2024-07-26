"use client";

const ElevatorSettings = ({setDistanceBetweenFloors, setCurrentFloor, setTargetFloor, setTopSpeed, setAcceleration, distanceBetweenFloors, currentFloor, targetFloor, topSpeed, acceleration }) => {
    return (
        <div className="border p-4">
            <h2 className="text-md font-bold mb-4">Settings</h2>
            <p>Set distance Between Floors (meters)</p>
            <input onChange={e => setDistanceBetweenFloors(e.target.value)} className="border" defaultValue={distanceBetweenFloors}/>
            <p>Set Current Floor</p>
            <input onChange={e => setCurrentFloor(e.target.value)}className="border" defaultValue={currentFloor}/>
            <p>Set Target Floor</p>
            <input onChange={e => setTargetFloor(e.target.value)}className="border" defaultValue={targetFloor}/>
            <p>Set Top Speed (meters/s)</p>
            <input onChange={e => setTopSpeed(e.target.value)}className="border" defaultValue={topSpeed}/>
            <p>Set Acceleration (meters/s/s)</p>
            <input onChange={e => setAcceleration(e.target.value)}className="border" defaultValue={acceleration}/>
        </div>
    )
}

export default ElevatorSettings;