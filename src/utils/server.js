const ErrorTypes = {
    None : 0,
    Unauthorized : 401,
    Forbidden : 403,
    NotFound : 404,
    NotAcceptable : 406,
    ServerError : 500,
    ConnecionError : 888,
}

const Method = {
    GET : 0,
    POST : 1,
    PUT : 2,
    DELETE : 3
}

const DataLoadingStatus = {
    Undefined : 0,
    NotLoaded : 1,
    Loading : 2,
    Loaded : 3
}

export default class Server {

    static get ErrorTypes() {
        return ErrorTypes;
    }

    static get Method() {
        return Method;
    }

    static get DataLoadingStatus() {
        return DataLoadingStatus;
    }

    static async makeARequest(uri, method, body) {
        try {
            let reqOptions = {
                body : body
            };
            const jwt = localStorage.getItem("jwt");
            if (jwt)
                reqOptions.headers = { Authorization: `Bearer ${jwt}`};
            switch (method) {
                case Method.POST:
                    reqOptions.method = "POST";
                    break;
                
                case Method.PUT:
                    reqOptions.method = "PUT";
                    break;
    
                case Method.DELETE:
                    reqOptions.method = "DELETE";
                    break;
    
                default:
                    break;
            }
            const response = await fetch("/api/v1" + uri, reqOptions);
            switch(response.status) {
                case 403:
                    return {
                        error : ErrorTypes.Forbidden
                    }

                case 401:
                    return {
                        error : ErrorTypes.Unauthorized
                    }

                case 406:
                    return {
                        error : ErrorTypes.NotAcceptable,
                        data : response.json()
                    }
    
                case 500:
                    return {
                        error : ErrorTypes.ServerError
                    }
    
                case 404:
                    return {
                        error : ErrorTypes.NotFound
                    }
    
                default:
                    break;
            }
            return {
                error : ErrorTypes.None,
                data : await response.json()
            };
        } catch(err) {
            console.log(err);
            return {
                error : ErrorTypes.ConnecionError
            }
        }
    }

}