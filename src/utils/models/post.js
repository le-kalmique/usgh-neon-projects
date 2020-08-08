import Server from '../server'

const ContentType = {
    Text : 0,
    Images : 1,
    Videos : 2,
    Model : 3,
    Game : 4,
    Poll : 5,
    File : 6
};

export default class Post {

    static get ContentType() {
        return ContentType;
    }

    static getById(id) {
        return Server.makeARequest('/posts/' + id);
    }

    static getFeed (page, numberOfRecordsOnAPage) {
        let uri = `/users?numberOfRecordsOnAPage=${numberOfRecordsOnAPage}&page=`;
        if (page)
            uri += page;
        else
            uri += 1;
        return Server.makeARequest(uri);
    }

    static insert (formData) {
        return Server.makeARequest("/posts/", Server.Method.POST, formData)
    }

    static deleteById (id){
        return Server.makeARequest('/posts/' + id, Server.Method.DELETE);
    }
}
