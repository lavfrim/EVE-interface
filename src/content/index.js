const sourseURL = 'https://esi.evetech.net/dev/';
export const url = {
    universe: {
        fractions: `${sourseURL}universe/factions/`,
        systems: `${sourseURL}universe/systems/`,
        races: `${sourseURL}universe/races/`,
    },
    corporation: `${sourseURL}corporations/`,
    characters: `${sourseURL}characters/`,
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