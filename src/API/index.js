

export default async function getPlayers() {

    const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-a/players'
    try {
        const response = await fetch(url);
        const result = response.json();
        return(result)
        
    } catch (error) {
        alert(error)
    }
    getPlayers();
}