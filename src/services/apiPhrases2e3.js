import client from "./config";

const apiPhrases2e3 = {}

apiPhrases2e3.getList = async function (){
    return await client.records.getList('phrases', 1, 50);
}

export default apiPhrases2e3
