self.onmessage = (event) => {
     let time = event.data;
     const stop = setInterval(() => {
          if (time <= 0) {
               clearInterval(stop)
          } else {
               time = time - 1000
               self.postMessage
          }

     }, 1000);
}