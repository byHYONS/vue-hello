# ESERCIZIO: Hello Vue

> [!NOTE]
>
> nome repo: vue-hello

#### Consegna:
- Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
#### Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

### Svolgimento:
1. scrivo nel mio documento html il CDN di VUEJS;

2. sul mio foglio `main.js` inizializzo VUEJS;

3. sull'html scrivo l'`h1` con dendro la **DIRETTIVA** VUEJS e imposto anche un colore per il testo cambiandolo con `v-bind:class`, scivo anche quelle relative all'immagine:
```
<h1 :class="color">{{ message }}</h1>
```
```
<img :src="image" :alt="descrizione">
```

4. in JavaScript all'interno di `data()` inserisco i parametri per modificare il DOM:
```
return {
    message: 'Hello VUE JS',
    color: 'gold',
    image: 'https://picsum.photos/200/100?grayscale',
    descrizione: 'immagine di prova',
};
```

##### FINE