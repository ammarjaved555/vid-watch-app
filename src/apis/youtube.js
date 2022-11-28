import axios from 'axios';

const KEY='AIzaSyDrLX-iP6KwHoD3CcqaXwfmVAXzpxVzFcQ'
//const KEY='AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho';


export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    maxResults: 50,
    key: KEY
}

});


