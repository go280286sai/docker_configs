import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'



import Pusher from 'pusher-js';
import app from "@/App.vue";
// Pusher.logToConsole = true;
//
// const pusher = new Pusher('75f4b0fe93296de23495', {
//     cluster: 'eu'
// });
//
// const channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//     let textMessage = {id: 1, name: 'data.name', message: 'data.message', date: 'data.date'};
// });
 createApp(App).mount('#app');