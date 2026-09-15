const bodyPlantButton = document.getElementById("activity-button");
const bodyActivitiesPanel = document.getElementById("activities-panel");
const bodyForm = document.getElementById("body-form");
const bodyPlantActivitieButtons = document.querySelectorAll(".body-activities");
const bodyMinutes = document.getElementById("body-minutes");
const bodyResultMessage = document.getElementById("body-result");


let selectedActivity = "";


bodyPlantButton.addEventListener("click", ()=>{
    bodyActivitiesPanel.classList.toggle("hidden");
})

bodyPlantActivitieButtons.forEach((button) => {
    button.addEventListener("click", ()=> {
        selectedActivity = button.dataset.activity;
    })
})

bodyForm.addEventListener("submit", (event)=> {
    event.preventDefault();

    if(!selectedActivity){
        bodyResultMessage.innerHTML = "Select An Activity!"
        return;
    }

   const currentMinutes = Number(bodyMinutes.value);

   bodyResultMessage.innerHTML = `Completed ${currentMinutes} mins on the ${selectedActivity} activity!`;

})