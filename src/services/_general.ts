export const request = async (url: string, method: string, header?: HeadersInit, requestBody?: BodyInit) => { 
    try {
        return await fetch(process.env.BACKEND_URL +  url, {
            method: method,
            headers: header,
            body: requestBody 
        })
    } catch (requestError) {
        return requestError;
    }
}

export interface IGlobalResponse {
    status: number;
    message: string;
}