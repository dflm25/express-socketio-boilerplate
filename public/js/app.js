/**
 * 
 */

var userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1MyIsImlhdCI6MTU4ODI3NzUxOCwiZXhwIjoxNTg5NDg3MTE4fQ.XAdwB2Hww8DtNnd1b8IWm072Qg9DkHAkrUEfKnP6_Rw"
var socket = io({ transports: ["websocket"], query: `token=${userToken}` });

var app = new Vue({
    el: '#app',
    data: {
        title: 'Ejemplo chat',
        message: ''
    },
    mounted: function () {
        socket.on('render message', function (data) {
            console.log('render message', data)
        });
    },
    methods: {
        sendMessage: function () {
            socket.emit('send message to room', { 
                message: this.message, 
                room: '123456789',// 'all-users',
                type: 'text'
            })
          this.message = '';
        }
    }
})