const presidents = [
    {"name": "Donald Trump", "party": "Republican"},
    {"name": "Barack Obama", "party": "Democrat"},
    {"name": "George Bush", "party": "Republican"},
    {"name": "Bill Clinton", "party": "Democrat"},
    {"name": "George H.W Bush", "party": "Republican"},
    {"name": "Ronald Reagan", "party": "Republican"},
    {"name": "Jimmy Carter", "party": "Democrat"},
    {"name": "Gerald Ford", "party": "Republican"},
    {"name": "Richard Nixon", "party": "Republican"},
    {"name": "Lyndon Johnson", "party": "Democrat"},
    {"name": "John Kennedy", "party": "Democrat"}
]

export const getPresidents = () => {
    return presidents;
}

export const filterDemocrats = (presidents) => {
    return presidents.filter((pres) => {
        return pres.party === 'Democrats'
      });
}

export const filterRepublicans = (presidents) => {
    return presidents.filter((pres) => {
        return pres.party === 'Democrats'
      });
}