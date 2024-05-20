// reset 
'use strict';

// VUE JS
const {createApp} = Vue;

createApp({
    data() {
       return {
         message: 'Hello VUE JS',
         color: 'gold',
         image: 'https://picsum.photos/200/100?grayscale',
         descrizione: 'immagine di prova',
       };
    },
    methods: {
        
    },
}).mount('#app');