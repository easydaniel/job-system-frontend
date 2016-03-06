import fetch from 'isomorphic-fetch';
const url = 'http://www.filltext.com/';

const WebAPIUtil = {
  getRemoteInfo: (row) => fetch(`${url}?rows=${row}&fname={firstName}&lname={lastName}`)
    .then(res => res.json()),

  postUser: (data) => fetch(`${url}/users`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }),
  getReport: () => fetch('http://140.113.89.72:1337/table')
    .then(res => res.json()),
  getToken: () => fetch('http://cs.nctu.edu.tw/cscc/cslogin/token')
    .then(res => res.json())
    .then((res) => {
        return res.token;
    }),
};
export default WebAPIUtil;
