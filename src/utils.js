export const findIndex = (email, array)=>{
    const index = array.findIndex(user => user.email === email);
    
    return index;
}

export const searchCandidates = async (url) => {
    const request = await fetch(url);
    const respose = await request.json();
    const { results } = respose;

    return results;
}