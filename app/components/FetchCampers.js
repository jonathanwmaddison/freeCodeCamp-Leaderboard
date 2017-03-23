import React from 'react'
import axios from 'axios'


function FetchCampers(i) {
    var camperData = ['https://fcctop100.herokuapp.com/api/fccusers/top/recent', 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime']
   return axios.get(camperData[i]).then(function(data) {
        return data;
   })
}

export default FetchCampers;
