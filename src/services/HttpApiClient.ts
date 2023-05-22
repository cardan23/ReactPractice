import apiClient from './ApiClient';

interface Entity{
    id: number;
}

class HttpApiClient{

    enpoint : string;

    constructor(enpoint: string){
        this.enpoint = enpoint;
    }

    getAll<T>(){

        const controller = new AbortController();
        const request = apiClient
            .get<T[]>(this.enpoint);

        return {request, cancel : () => controller.abort()};
    }

    delete(id: number){
        return apiClient.delete(this.enpoint + "/" + id);
    }

    Add<T>(entity : T){
        return apiClient
        .post(this.enpoint, entity);
    }

    Update<T extends Entity>(entity : T){
        return apiClient.patch(this.enpoint + "/" + entity.id, entity)
    }
}

const create = (endpoint: string) => new HttpApiClient(endpoint);

export default create;