<script setup>

</script>

<template>
  <div class="container chat-container">
    <div class="row">
      <div class="row body-form">
        <div class="col-12 body-text">
          <div v-for="message in messages">
            <div v-if="message.id === my_id">
            <div class="text-my">
              <div class="message-user">{{ message.name }}</div>
              <div class="message-text">{{ message.message }}</div>
              <div class="message-time">{{ message.date }}</div>
            </div>
            </div>
            <div v-else>
            <div class="text-other">
              <div class="message-user">{{ message.name }}</div>
              <div class="message-text">{{ message.message }}</div>
              <div class="message-time">{{ message.date }}</div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row body-button">
        <div class="col body-button-text">
          <textarea class="textarea-send" name="message" id="message" placeholder="Введите сообщение" v-model="text"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="btn-chat" v-on:click="sendMessage">Отправить</div>
      </div>
    </div>
  </div>
</template>
<script>
// import Pusher from "pusher-js";
// Pusher.logToConsole = true;
// const pusher = new Pusher('75f4b0fe93296de23495', {
//   cluster: 'eu'
// });

// const pusher = new Pusher('75f4b0fe93296de23495', {
//   cluster: 'eu'
// });
//
// const channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//   let textMessage = {id: 1, name: 'data.name', message: 'data.message', date: 'data.date'};
//   console.log(textMessage)
//   console.log(data.mes);
//   addMessage();
//   this.addMessage();
//
// });



import Pusher from "pusher-js";
import axios from "axios";

const pusher = new Pusher('75f4b0fe93296de23495', {
  cluster: 'eu'
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  let textMessage = {id: 1, name: 'data.name', message: 'data.message', date: 'data.date'};
  console.log(textMessage)
  console.log(this.mes);

});
export default {
  name: 'Pusher',
  data() {
    return {
      text: '',
      mes:'fhghg',
      my_id: document.getElementById('num').value,
      messages: [],
    }
  },
  // mounted() {
  //   Pusher.logToConsole = true;
  //
  //   const pusher = new Pusher('75f4b0fe93296de23495', {
  //     cluster: 'eu'
  //   });
  //
  //   const channel = pusher.subscribe('my-channel');
  //   channel.bind('my-event', function(data) {
  //     let textMessage = {id: 1, name: 'data.name', message: 'data.message', date: 'data.date'};
  //     console.log(textMessage)
  //     this.mes=textMessage.message;
  //     console.log(this.addMessage());
  //   });
  //
  // },

  methods: {
    addMessage: function () {
     return 'oku';
    },
    sendMessage: function () {
      let username = document.getElementById('username').value;
      let message = this.text;
      let id = this.my_id;
      let date = document.getElementById('date').value;
      let csfr = document.getElementById('csrf').value;
      // $.ajax(
      //   {
      //     url: 'http://192.168.0.107:8082/chat/pusher',
      //     type: 'POST',
      //     data: {body:{
      //       id: id,
      //       name: username,
      //       message: message,
      //       date: date
      //     }, _csfr: csfr},
      //     success: function () {
      //
      //     },
      //     error: function (data) {
      //       console.log('error');
      //     }
      //   }
      // )
      axios.post('http://192.168.0.107:8082/chat/pusher', {
        'body': {
          'id': id,
          'name': username,
          'message': message,
          'date': date
        },
        '_csfr': csfr}).then((response) => {
        console.log(response)
        }).catch(err=>{
        console.log(err.message);
      })
      this.text = '';
    }
  }
}
</script>

<style scoped>

</style>
