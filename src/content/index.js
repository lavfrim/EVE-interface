export const url = {
    sourseURL: 'https://esi.evetech.net/dev/',
    universe: 'universe', 
    fractions: 'factions',
    systems: 'systems',
    races: 'races',
    corporations: 'corporations',
    characters: 'characters',
}

export default function getURL(adressString, id) {
    let fullURL = url.sourseURL;
    adressString.split('/').forEach(urlPart => {
        fullURL += `${url[urlPart]}/`
    });
    if (id) {
        fullURL += `${id}`;
    }
    return fullURL;
}

export const text = {
    appName: 'EVE interface / interview task',
    loading: 'Loading...',
    buttons: {
        forward: '>',
        backward: '<',
        close: 'X',
    },
    card: {
        ceoName: 'CEO name:',
        description: 'Description:',
        system: 'System:',
        corporationName: 'Corporation name:',
        memberCount: 'Member count:',
        birthday: 'Birthday:',
        race: 'Race:',
    }
}

export const popUpStage = {
    basic: 0,
    cliked: 1,
    returned: -1,
}