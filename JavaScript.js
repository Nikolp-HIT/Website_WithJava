function checkFormCompletion() {
    const nameInput = document.getElementById("childName").value;

    const isPlaceChecked = document.getElementById("situationPlace").checked;
    const isSocialChecked = document.getElementById("situationSocial").checked;
    const isRoutineChecked = document.getElementById("situationRoutine").checked;

    if (nameInput !== "" && (isPlaceChecked === true || isSocialChecked === true || isRoutineChecked === true)) {
        document.getElementById("submitBtn").disabled = false;
    } else {
        document.getElementById("submitBtn").disabled = true;
    }
}

function handleRadioSelection(techKey) {
    const previewContainer = document.getElementById("mainTechPreview");
    const mainImg = document.getElementById("primaryTechImg");

    previewContainer.style.display = "block";

    if (techKey === "vr") {
        mainImg.src = "existing_tech_2.jpg";
        mainImg.alt = "מציאות מדומה להכרת בית ספר או מקום חדש";
    } else if (techKey === "robot") {
        mainImg.src = "existing_tech_1.jpg";
        mainImg.alt = "רובוט חברתי לתרגול שיחה ומפגש חברתי";
    } else if (techKey === "schedule") {
        mainImg.src = "future_tech_3.jpg";
        mainImg.alt = "לוח סדר יום ורצף אירועים חזותי";
    }
}

function toggleSupportImage(imgElementId, checkboxElementId) {
    const isChecked = document.getElementById(checkboxElementId).checked;
    const targetImage = document.getElementById(imgElementId);

    if (isChecked === true) {
        targetImage.style.opacity = "1";
    } else {
        targetImage.style.opacity = "0.5";
    }
}

function generateRecommendationSummary() {
    const name = document.getElementById("childName").value;
    let selectedSituation = "";

    if (document.getElementById("situationPlace").checked === true) {
        selectedSituation = document.getElementById("situationPlace").value;
    } else if (document.getElementById("situationSocial").checked === true) {
        selectedSituation = document.getElementById("situationSocial").value;
    } else if (document.getElementById("situationRoutine").checked === true) {
        selectedSituation = document.getElementById("situationRoutine").value;
    }

    const checkboxesList = document.getElementsByClassName("support-checkbox");
    let chosenSupports = "";
    let countChecked = 0;

    for (let i = 0; i < checkboxesList.length; i++) {
        if (checkboxesList[i].checked === true) {
            chosenSupports += checkboxesList[i].value + ", ";
            countChecked++;
        }
    }

    if (countChecked === 0) {
        chosenSupports = "לא נבחרו עזרי תמיכה נוספים.";
    }

    alert("תוכנית ההכנה הופקה בהצלחה!\n\n" +
        "שם הילד/ה: " + name + "\n" +
        "המצב הנבחר: " + selectedSituation + "\n" +
        "עזרי תמיכה מבוקשים: " + chosenSupports);
}