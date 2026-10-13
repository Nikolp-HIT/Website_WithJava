function checkFormCompletion() { //פונקציה שבודקת את מצב הטופס וקובעת האם כפתור הסיכום זמין ללחיצה או שלא
    // handleRadioSelection הפונקציה מופעלת לאחר לחיצה על כפתור רדיו, בתוך פונקציית 

    const nameInput = document.getElementById("childName").value; //קליטת שם הילד
    
    const situations = [ //מערך שכולל את מצבי כפתורי הרדיו, כלומר - true אם הכפתור לחוץ, false אם לא

        document.getElementById("situationPlace").checked, //.checked -> בודק מה הערך הבוליאני של הכפתור

        document.getElementById("situationSocial").checked,

        document.getElementById("situationRoutine").checked

    ];

    let isSituationSelected = false; //הגדרת משתנה שבהמשך הקוד יקבע האם לפחות כפתור רדיו אחד מסומן 
    
    for (let i = 0; i < situations.length; i++) { //לולאה שעוברת על מערך מצבי הכפתורים

        if (situations[i] === true) {  //אם ערך התא הנוכחי במערך הוא true, אז ערך המשתנה שהגדרנו מקודם גם משתווה לtrue

            isSituationSelected = true;

        }
    }
    
    if (nameInput !== "" && isSituationSelected === true) {  // אם משתנה השם לא ריק, וגם לפחות אחד מכפתורי הרדיו מסומןisSituationSelected === true, אז מתקיים התנאי הזה

        document.getElementById("submitBtn").disabled = false; //הפעלת כפתור הסיכום במצב שבו התנאי מתקיים

    } else { //אם התנאי לא מתקיים

        document.getElementById("submitBtn").disabled = true; //כפתור הסיכום מושבת, בהתאם להנחיות המטלה

    }

}

function handleRadioSelection(techKey) { //פונקציה שמופעלת בלחיצה על כפתור הרדיו וקובעת איזו תמונה תוצג
    //הפונקציה מקבלת את שם הכפתור שנלחץ

    checkFormCompletion(); //הפעלת פונקציה שקובעת את מצב כפתור הסיכום. אם נבחר רק כפתור רדיו אחד, נרצה להציג תמונה אבל לא לאפשר שליחה
    
    const previewContainer = document.getElementById("mainTechPreview"); 

    const mainImg = document.getElementById("primaryTechImg");
    
    //הכנסנו את איזור התצוגה והתמונה שתופיע לתוך משתנים כדי שהקוד יהיה מסודר וברור יותר
    
    const techKeys = ["vr", "robot", "schedule"];
    //מערך שכולל את שמות הכפתורים

    const imageFiles = [

        "existing_tech_2.jpg",

        "existing_tech_1.jpg",

        "future_tech_3.jpg"

    ];
    //מערך שכולל את ניתוב התמונות

    const imageDescriptions = [

        "מציאות מדומה להכרת בית ספר או מקום חדש",

        "רובוט חברתי לתרגול שיחה ומפגש חברתי",

        "לוח סדר יום ורצף אירועים חזותי"

    ];
    //מערך שכולל את הטקסט החלופי והמונגש של כל תמונה
    
    //הרכבנו 3 מערכים מקבילים, למשל-הערכים במיקומים הראשונים במערך שייכים זה לזה, וכך עבור כל מיקום
    

        for (let i = 0; i < techKeys.length; i++) { //מעבר על מערך שמות הכפתורים

            if (techKey === techKeys[i]) { //אם שם הכפתור שנקלט שווה לשם הכפתור במיקום הנוכחי במערך

                previewContainer.style.display = "block"; //תיבת הטקסט שהוסתרה בהתחלה תוצג

                mainImg.src = imageFiles[i]; //התמונה משתנה לזו שמוגדרת באותו i במערך התמונות

                mainImg.alt = imageDescriptions[i]; //תיאור התמונה משתנה לזה שמוגדר באותו מיקום במערך של התיאור, בהקבלה למיקום הכפתור

            }

        }
        

}

function toggleSupportImage(imgElementId, checkboxElementId) { 
    //הפונקציה מקבלת 2 פרמטרים: מזהה של הצקבוקס שנלחץ, ומזהה של התמונה הרלוונטית לצקבוקס
    //הפרמטרים נקלטים ב-HTML בonclick לכל checkbox
    //בחרנו לממש את הפונקציה בדרך הזו, כדי שלא נצטרך לכתוב פונקציה נפרדת עבור כל checkbox
    //הפונקציה שולטת במידת השקיפות של כל תמונה
    
    const isChecked = document.getElementById(checkboxElementId).checked; 
    //בודק מה מצב הכפתור ששמו הוכנס לפונקציה- האם לחוץ או שלא

    const targetImage = document.getElementById(imgElementId);
    //משייך את מזהה התמונה שנקלט לצק בוקס שנקלט
    
        if (isChecked === true) { //אם כפתור הצקבוקס לחוץ

            targetImage.style.opacity = "1"; //הגדרת הבהירות של התמונה לערך המקסימלי-1

        } else { //אם הכפתור לא לחוץ

            targetImage.style.opacity = "0.5"; //מחזיר את התמונה לשקיפות בינונית.
            //הelse פותר מצב שבו צקבוקס מסוים נבחר, ולאחריו המשתמש בחר צקבוקס אחר. במקרה כזה נרצה שהתמונה של הצקבוקס הראשון תחזור למצב בהירות חלקית

        }

    }
    

function generateRecommendationSummary() {
    //מופעלת בלחיצה על כפתור הסיכום, מטרתה להציג את סיכום הבחירות של המשתמש

    const name = document.getElementById("childName").value; //קליטת שם הילד שהוזן

    const situationIds = [ //יצירת מערך שכולל מזהים של כפתורי הרדיו

        "situationPlace",

        "situationSocial",

        "situationRoutine"

    ];
    

    let selectedSituation = ""; //הגדרת משתנה שיכיל את כפתור הרדיו הנבחר
    
    for (let i = 0; i < situationIds.length; i++) {  //מעבר על מערך המזהים של כפתורי הרדיו

        if (document.getElementById(situationIds[i]).checked === true) { //אם מצב כפתור הרדיו הנוכחי הוא דלוק

            selectedSituation = document.getElementById(situationIds[i]).value; //המשתנה שהגדרנו מקודם מקבל את מזהה כפתור הרדיו

        }

    }



    const checkboxesList = document.getElementsByClassName("support-checkbox"); //משתנה ששומר את כל כפתורי הצקבוקס שמוגדרים תחת class מסוים 

    let chosenSupports = ""; //משתנה שבהמשך יצבור את כל הצקבוקסים שסומנו

    let countChecked = 0; //סופר כמה צקבוקסים סומנו בפועל



    for (let i = 0; i < checkboxesList.length; i++) { //עובר על כפתורי הצקבוקס

        if (checkboxesList[i].checked === true) { //אם הצקבוקס במיקום הנוכחי בלולאה הוא מסומן

            chosenSupports += checkboxesList[i].value + ", "; //הוספת שם הצקבוקס למשתנה השרשור

            countChecked++; //הגדלה של כמות הצקבוקסים שסומנו

        }

    }



    if (countChecked === 0) { //אם כמות הצקבוקסים שסומנו שווה ל-0, אז משתנה השרשור מקבל ערך מסוים

        chosenSupports = "לא נבחרו עזרי תמיכה נוספים.";

    }



    alert("תוכנית ההכנה הופקה בהצלחה!" + "\n" +

        "שם הילד/ה: " + name + "\n" + //הצגת שם הילדה

        "המצב הנבחר: " + selectedSituation + "\n" + //הצגת הבחירה בכפתור רדיו

        "עזרי תמיכה מבוקשים: " + chosenSupports); //הצגת הבחירה בכפתורי צקבוקס
    }