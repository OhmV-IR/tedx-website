const event1 = createIcsFile(new Date(2025, 0, 24, 8, 30, 0, 0), new Date(2025, 0, 24, 10, 0, 0, 0), "event1", "https://example.com", "CHCI caf", "a cool description")
const event2 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event3 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event4 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event5 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event6 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event7 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event8 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event9 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const event10 = createIcsFile(new Date(2025, 0, 24, 10, 0, 0, 0), new Date(2025, 0, 24, 12, 0, 0, 0), "event2", "https://example.com", "Somewhere cool", "a cool description")
const eventMap = new Map([
    ["event1", event1],
    ["event2", event2],
    ["event3", event3],
    ["event4", event4],
    ["event5", event5],
    ["event6", event6],
    ["event7", event7],
    ["event8", event8],
    ["event9", event9],
    ["event10", event10],
]
)

export async function GET(request){
    var eventId = request.nextUrl.searchParams.get('eventId');
    if(eventMap.has(eventId)){
        return new Response(eventMap.get(eventId), {status: 200});
    }
    return new Response("Event not found", {status: 400});
}

function createIcsFile(startDate, endDate, title, url, location, description){
    return "BEGIN:VTIMEZONE\nTZID:America/Toronto\nLAST-MODIFIED:20240422T053451Z\nTZURL:https://www.tzurl.org/zoneinfo-outlook/America/Toronto\nX-LIC-LOCATION:America/Toronto\nBEGIN:DAYLIGHT\nTZNAME:EDT\nTZOFFSETFROM:-0500\nTZOFFSETTO:-0400\nDTSTART:19700308T020000\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\nEND:DAYLIGHT\nBEGIN:STANDARD\nTZNAME:EST\nTZOFFSETFROM:-0400\nTZOFFSETTO:-0500\nDTSTART:19701101T020000\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nDTSTAMP:" + toICalDateStr(new Date()) + "\nUID:event1@tedx-centreville-chicopee\nDTSTART;TZID=America/Toronto:" + toICalDateStr(startDate) + "\nDTEND;TZID=America/Toronto:" + toICalDateStr(endDate) + "\nSUMMARY:" + title + "\nURL:" + url + "\nDESCRIPTION:" + description + "\nLOCATION:" + location + "\nTRANSP:OPAQUE\nX-MICROSOFT-CDO-BUSYSTATUS:BUSY\nCLASS:PRIVATE\nBEGIN:VALARM\nACTION:DISPLAY\nDESCRIPTION:" + title + "\nTRIGGER:-PT15M\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR"
}
function toICalDateStr(date){
    var str = ""
    str += date.getFullYear()
    if(date.getMonth() + 1 < 10){
        str += "0"
    }
    str += date.getMonth() + 1
    if(date.getDate() < 10){
        str += "0"
    }
    str += date.getDate()
    str += "T"
    if(date.getHours() < 10){
        str += "0"
    }
    str += date.getHours()
    if(date.getMinutes() < 10) {
        str += "0"
    }
    str += date.getMinutes()
    if(date.getSeconds() < 10){
        str += "0"
    }
    str += date.getSeconds()
    return str
}