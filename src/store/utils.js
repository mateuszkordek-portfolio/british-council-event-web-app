import moment from 'moment-timezone'

function convertD2W(databaseObject) {
    let webObject = databaseObject.acf
    webObject.id = databaseObject.id
    webObject.slug = databaseObject.slug
    webObject.titleRendered = databaseObject.title.rendered
    webObject.created = databaseObject.date_gmt
    webObject.modified = databaseObject.modified_gmt
    return webObject
}

function convertDBDateToTimestamp(date) {
    return moment.tz(date, 'DD/MM/YYYY HH:mm', "Europe/Warsaw").format('x')
}

function getDateFromTimestamp(timestamp) {
    return moment(timestamp, 'x').tz("Europe/Warsaw").format("DD/MM/YYYY");
}

export { convertD2W, getDateFromTimestamp, convertDBDateToTimestamp }
