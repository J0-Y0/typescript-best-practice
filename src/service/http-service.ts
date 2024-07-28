import apiClient from "./api-client";
export interface Entity {
    id: number;
    
}
class httpService {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll= <T>() => {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal,
        })
        const cancel = () => controller.abort()
        return { request, cancel }
    }
    create =<T> (entity: T) => apiClient.post(this.endpoint, entity)
    updateUser = <T extends Entity>(entity: T) => apiClient.put(this.endpoint + "/" + entity.id, entity)
    deleteUser = (id: number) => apiClient.delete(this.endpoint+ "/" + id)


}
const create = (endpoint: string) => { return new httpService(endpoint) }

export default create