"use client";

import Image from "next/image";
import ElevatorTime from "./components/elevatorTime";
import ElevatorSettings from "./components/elevatorSettings";
import {useState} from "react";

export default function HomePage() {
  const [distanceBetweenFloors, setDistanceBetweenFloors] = useState(3);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [targetFloor, setTargetFloor] = useState(5);
  const [topSpeed, setTopSpeed] = useState(10);
  const [acceleration, setAcceleration] = useState(5);

  const elevatorDetails = {
    distanceBetweenFloors,
    currentFloor,
    targetFloor,
    topSpeed,
    acceleration
  }
  const elevatorControls = {
    setDistanceBetweenFloors,
    setCurrentFloor,
    setTargetFloor,
    setTopSpeed,
    setAcceleration
  }

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Elevator Time problem</h1>
      <ElevatorSettings 
        {...elevatorDetails}
        {...elevatorControls}
      />
      <ElevatorTime {...elevatorDetails}/>
    </main>
  );
}
