const cohortName = '2302-ACC-CT-WEB-PT-A';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export default async function fetchAllPlayers () {
    try {
        const response = await fetch(APIURL);
        console.log(response)
        const players = await response.json();
        console.log(players)
        return players.data.players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};



