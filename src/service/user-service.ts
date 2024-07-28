import apiClient  from "./api-client";
export interface User {
    id: number;
    name: String;
    email: String;
}
 class UserService {
    getAllUser=()=> {
        const controller = new AbortController();
        const request =  apiClient.get<User[]>("/users/", {signal: controller.signal, })
        const cancel = () => controller.abort() 
        return {request,cancel}
     }
    addNewUser = (user:User) => apiClient.post("/users/",user) 
    updateUser = (user: User) => apiClient.put("/users/" + user.id, user)  
    deleteUser = (id: number) => apiClient.delete("/users/" + id)  
        
 }
export default new UserService