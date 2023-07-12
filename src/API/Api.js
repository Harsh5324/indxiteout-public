import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        const api_token = user && user.token ? user.token : null;
      let client = null;
      const api_url = process.env.REACT_APP_BASE_URL;
      const init = () => {
        let headers = {
          Accept: "application/json",
          "x-access-token": api_token
        };
        if (api_token) {
          headers.Authorization = `Bearer ${
            api_token
          }`;
        }
        client = axios.create({baseURL: api_url, timeout: 31000, headers: headers});
        return client;
      };
      
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPosts: (params) => init().get("/posts", { params: params }),
    getPostsByPage: (url, params) => init().get(`/posts?${url}`, { params: params }),
    getCaseStudies: (params) => init().get("/caseStudies", { params: params }),
    setCategories: (data) => init().post("/categories", data),
    setPosts: (data) => init().post("/posts", data),
    updatePosts: (id,data) => init().put("/posts/"+id, data),
    getCategories: (data) => init().get("/categories", data),
    putCategories: (data,id) => init().put("/categories/"+id, data),
    deleteCategories: (data,id) => init().delete("/categories/"+id, data),
    getSolutions: (params) => init().get("/solutions", { params: params }),
    getSingleSolution: (id) => init().get("/solutions/"+id),
    getSingleCaseStudy: (id) => init().get("/caseStudies/"+id),
    getSingleExpertise: (id) => init().get("/expertise/"+id),
    getSingleBlog: (id) => init().get("/posts/"+id),
    getExpertise: (params) => init().get("/expertise", { params: params }),
    deletePost: (id,body) => init().delete("/posts/"+id, body),
    deleteExpertise: (id,body) => init().delete('/expertise/'+id,body),
    deleteSolutions: (id,body) => init().delete('/solutions/'+id,body),
    deleteCS: (id,body) => init().delete('/caseStudies/'+id,body),
    updateSolution: (id,body) => init().put('/solutions/'+id,body),
    addSolution: (body) => init().post('/solutions',body),
    fetchApiCall: (url,type,body) => {
      return fetch(api_url + url,{
        method:type,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": api_token,
            "Authorization": `Bearer ${
              api_token
            }`
        },
        body: JSON.stringify(body)
      })
    }
}