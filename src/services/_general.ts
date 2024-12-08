export const request = async (url: string, method: string, header?: HeadersInit, requestBody?: BodyInit) => { 
    try {
        return await fetch(url, {
            method: method,
            headers: header,
            body: requestBody 
        })
    } catch (requestError) {
        return requestError;
    }
}