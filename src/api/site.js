import axios from 'axios';
import { ERR_OK,baseUrl } from './config';

//地点，城市选择相关api
export const getNowCity = ()=>{
    return axios({
        url:baseUrl+'/v1/cities',
        params:{
            type: 'guess'
        }
    }).then(response=>{
        if(response.status === ERR_OK){
            return Promise.resolve(response.data);
        }
    });
}
// 获取热门城市
export const getHotCityList = ()=>{
    return axios({
        url:baseUrl+'/v1/cities',
        params:{
            type: 'hot'
        }
    }).then(response=>{
        if(response.status === ERR_OK){
            return Promise.resolve(response.data);
        }
    });
}
// 获取其他城市
export const getOtherCityList = ()=>{
    return axios({
        url:baseUrl+'/v1/cities',
        params:{
            type: 'group'
        }
    }).then(response=>{
        if(response.status === ERR_OK){
            return Promise.resolve(response.data);
        }
    });
}

export const getNowSite = (cityId)=>{
    return axios({
        url:baseUrl+'/v1/cities/'+cityId,
        method:'GET'
    }).then(response=>{
        if(response.status === ERR_OK){
            return Promise.resolve(response.data);
        }
    });
}

export const searchSite = (cityId, keyWord) => {
    return axios({
      url: baseUrl+'/v1/pois',
      method: 'GET',
      params: {
        type: 'search',
        city_id: cityId,
        keyword: keyWord
      }
    }).then(response => {
      if (response.status === ERR_OK) {
        return Promise.resolve(response.data);
      }
    })
  }