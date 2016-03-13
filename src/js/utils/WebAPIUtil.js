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

  getMonthReport: (date) => fetch('http://140.113.89.72:1337/table?date=' + date)
    .then(res => res.json()),

  postUser: (data) => fetch(`http://140.113.89.72:1337/table`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }),
  getToken: () => fetch('https://www.cs.nctu.edu.tw/cscc/cslogin/token',{
      method: 'get',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((res) => {
        console.log(res.token);
        return res.token;
    }),

  getUserInfo: () => fetch('https://www.cs.nctu.edu.tw/cscc/cslogin/token',{
      method: 'get',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((res) => {
      return fetch('https://www.cs.nctu.edu.tw/cscc/cslogin/me?token=' + res.token, {
        method: 'get',
        credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then(res => res.json())
    }),

  getUserHours: () => {
      return [
      {
          "year": 2016,
          "month": 1,
          "data": {
              "WWW": 7.122,
              "BSD": 3.14,
              "NET": 1.234,
          }
      },
      {
          "year": 2016,
          "month": 2,
          "data": {
              "WWW": 7.122,
              "BSD": 3.14
          }
      },
      ];
  }

};
export default WebAPIUtil;
