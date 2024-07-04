export const apiGanerator = async(api_url, method, body)=>{
    const fetchApi = await fetch(`http://localhost:9000/${api_url}`,{
        method: method,
        "Access-Control-Allow-Origin": "*",
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const responseData = await fetchApi.json();

    

    return responseData;


}

