const axios = require('axios');

axios({
    method: 'get',
    url: 'https://v1.nocodeapi.com/mak2506/spotify/VFIhlfCllXExmVbF/browse/new', 
    params: {},
}).then(function (response) {
        console.log(response.data);
}).catch(function (error) {
        console.log(error);
})