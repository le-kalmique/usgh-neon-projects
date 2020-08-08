import Server from '../server'

const UserRoles = {
    User : 0,
    Admin : 1
}

export function getRoleName (role) {
    if (isNaN(role))
        return "Unknown";
    switch (Number(role)) {
        case 0:
            return "User";
        
        case 1:
            return "Admin";

        default:
            return "Unknown";
    }
}

export default class User {

    static get UserRoles() {
        return UserRoles;
    }

    static getById(id) {
        return Server.makeARequest('/users/' + id);
    }

    static getAll (page, query, numberOfRecordsOnAPage) {
        let uri = `/users?numberOfRecordsOnAPage=${numberOfRecordsOnAPage}&page=`;
        if (page)
            uri += page;
        else
            uri += 1;
        if (query)
            uri += "&query=" + query;
        return Server.makeARequest(uri);
    }

    static update (user){
        let body = new URLSearchParams();
        if (user.fullname)
            body.set("fullname", user.fullname);
        if (user.username)
            body.set("username", user.username);
        if (user.password)
            body.set("password", user.password);
        if (user.role)
            body.set("role", user.role);
        if (user.telegramId)
            body.set("telegramId", user.telegramId);
        return Server.makeARequest('/users/'+user.id, Server.Method.PUT, body);
    }

    static deleteById (id){
        return Server.makeARequest('/users/' + id, Server.Method.DELETE);
    }
}
