import http from "../common/http";

class EmployeeDataService{
    getAll(){
        return http.get("/tutorials");
    }

    get(id){
        return http.get(`/tutorials/${id}`);
    }
    create(data){
        return http.post("post", data)
    }

    delete(id){
        return http.delete(`/tutrials/${id}`);
    }

    deleteAll(){
        return http.delete(`/tutorials`);
    }

    findByTitle(title){
        return http.get(`/tutorials/title=${title}`);
    }


}

export default new EmployeeDataService();


