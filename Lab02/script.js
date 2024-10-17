// Define your JSON object.
const meeting = {
    "date": new Date("2022-04-12T10:45:00+02:00"),
    "invitationSent": new Date("2022-04-02T14:54:12Z"),
    "title": "Meeting: Konzeption des Frontends",
    "location" : {
        "street": "Spengergasse 20",
        "zip": "1050",
        "city": "Wien"
    },
    "attendees": [
        {
            "firstname": "Cyrillus",
            "lastname": "Landre",
            "confirmed": true,
            "confirmationDate": new Date("2022-04-02T18:12:43Z")
        },
        {
            "firstname": "Ilario",
            "lastname": "Semken",
        },
        {
            "firstname": "Geoff",
            "lastname": "Georglev",
            "confirmed": false,
            "confirmationDate": new Date("2022-04-04T07:49:03Z")
        }
    ]
};
//*************************************************************************************************
// Wie viele Tage vor dem Meeting wurde die Einladung (invitationSent) gesendet? Schreibe das Ergebnis
// in die Variable invitationSendBeforeMeeting.
console.log("* Einladung vor dem Meeting\n********************************************************");
const invitationSendBeforeMeeting = (meeting.date.valueOf()-meeting.invitationSent.valueOf())/1000/3600/24;
console.log(` Die Einladung wurde ${invitationSendBeforeMeeting.toFixed(2)} Tage
vor dem Meeting gesendet.`);
//*************************************************************************************************
// Weise die Anzahl der Teilnehmer der Variable attendeesCount zu.
console.log("* Anzahl der eingeladenen Teilnehmer\n***********************************************");
const attendeesCount = meeting.attendees.length;
console.log(` ${attendeesCount} Personen sind eingeladen.`);
//*************************************************************************************************
// Gib für jedes String Property im JSON Object den Wert aus. Verwende dafür eine Schleife, die
// das Objekt dynamisch durchgeht.
console.log("* String Properties und ihre Werte\n**************************************************");
let current;
for (current in meeting){
    try {
        if (typeof(meeting[current])=="string" || typeof(meeting[current].toISOString())=="string"){
            console.log(`Das Property ${current} ist ein String mit dem Wert \"${meeting[current]}\"`);
        }
    } catch (error) {
        continue;
    }
}

//*************************************************************************************************
// Wer hat für das Meeting schon zugesagt, d. h. confirmed hat den Wert true? Verwende dafür eine
// Schleife, die das Array durchgeht. Der Title ist dynamisch auszugeben und nicht fix im Code
// einzutragen.
console.log("* Zugesagte Teilnehmer\n*************************************************************");
for (attendant in meeting.attendees){
    let att = meeting.attendees[attendant];
    if(Boolean(att.confirmed)){
        console.log(`${att.firstname} ${att.lastname} hat für das Meeting \"${meeting.title}\" zugesagt`)
    }
}
//*************************************************************************************************
// Wer hat für das Meeting definitiv abgesagt, d. h. confirmed hat den Wert false? Verwende dafür
// eine Schleife, die das Array durchgeht.
console.log("* Abgesagte Teilnehmer\n*************************************************************");
for (attendant in meeting.attendees){
    let att = meeting.attendees[attendant];
    if(att.confirmed==false){
        console.log(`${att.firstname} ${att.lastname} hat für das Meeting \"${meeting.title}\" abgesagt`)
    }
}//Herr Professor, die Angabe liegt falsch, Geoff ist der einzige, der abgesagt hat, nicht Ilario