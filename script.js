// Write your JavaScript code here!

window.addEventListener("load", function(){
   const form = document.querySelector("form")
   const faultyItems = document.querySelector("#faultyItems")

   form.addEventListener("submit", function(){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

   //End user validation alerts
      //Requires Pilot Name
      if(pilotName.value === ""){
         alert("Pilot Name is required.");
         event.preventDefault();
      }

      //Requires Copilot Name
      if(copilotName.value === ""){
         alert("Copilot Name is required.");
         event.preventDefault();
      }

      //Requires Fuel Level
      if(fuelLevel.value === ""){
         alert("Fuel Level is required.");
         event.preventDefault();
      }

      //Requires Fuel Level to be a number
      if(isNaN(fuelLevel.value)){
         alert("Fuel Level must be a number.")
         event.preventDefault();
      }
      
      //Requires Cargo Mass
      if(cargoMass.value === ""){
         alert("Cargo Mass is required.");
         event.preventDefault();
      }

      //Requires Cargo Mass to be a number
      if(isNaN(cargoMass.value)){
         alert("Cargo Mass must be a number.")
         event.preventDefault();
      }


      //Makes h2 "launchStatus" "Shuttle is ready for launch" and color = green when all elements are correct
      if(Number(fuelLevel.value) >= 10000 && Number(cargoMass.value) <= 10000){
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = "green";
      }

      //Makes Faulty Items Visible && h2 "launchStatus" changes to "Shuttle not ready for launch" and color = red when fuelLevel<10000
      if(Number(fuelLevel.value) < 10000){   
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
         fuelStatus.innerHTML = `Not enough fuel for the journey`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red";
         event.preventDefault();
      }

      //Makes Faulty Items Visible && h2 "launchStatus" changes to "Shuttle not ready for launch" and color = red when cargoMass>10000
      if(Number(cargoMass.value) > 10000){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Too much weight for the journey`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red";
         event.preventDefault();
      }

      //Makes Faulty Items Visible && h2 "launchStatus" changes to "Shuttle not ready for launch" and color = red
      if(Number(fuelLevel.value)<10000 && Number(cargoMass.value)>10000){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
         fuelStatus.innerHTML = `Not enough fuel for the journey`;
         cargoStatus.innerHTML = `Too much weight for the journey`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red";
         event.preventDefault();
      }

   })

})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
