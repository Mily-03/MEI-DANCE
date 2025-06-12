document.addEventListener("DOMContentLoaded", () => {
      const botones = document.querySelectorAll(".teclado-musical button");

      botones.forEach((boton) => {
        boton.addEventListener("click", () => {
          const tipo = boton.getAttribute("data-sonido");
          reproducirSonido(tipo);
        });
      });
    });

    function reproducirSonido(estilo) {
      const contexto = new (window.AudioContext || window.webkitAudioContext)();
      const oscilador = contexto.createOscillator();
      const ganancia = contexto.createGain();

      oscilador.connect(ganancia);
      ganancia.connect(contexto.destination);

      switch (estilo) {
        case "cumbia":
          oscilador.frequency.setValueAtTime(220, contexto.currentTime);
          oscilador.type = "sine";
          break;
        case "salsa":
          oscilador.frequency.setValueAtTime(330, contexto.currentTime);
          oscilador.type = "square";
          break;
        case "urbano":
          oscilador.frequency.setValueAtTime(440, contexto.currentTime);
          oscilador.type = "sawtooth";
          break;
        case "hiphop":
          oscilador.frequency.setValueAtTime(150, contexto.currentTime);
          oscilador.type = "triangle";
          break;
        case "bachata":
          oscilador.frequency.setValueAtTime(523, contexto.currentTime);
          oscilador.type = "sine";
          break;
        case "breakdance":
          oscilador.frequency.setValueAtTime(880, contexto.currentTime);
          oscilador.type = "square";
          break;
        case "reggaeton":
          oscilador.frequency.setValueAtTime(300, contexto.currentTime);
          oscilador.type = "triangle";
          break;
        case "techno":
          oscilador.frequency.setValueAtTime(600, contexto.currentTime);
          oscilador.type = "sawtooth";
          break;
        default:
          oscilador.frequency.setValueAtTime(300, contexto.currentTime);
          oscilador.type = "sine";
      }

      ganancia.gain.setValueAtTime(0.1, contexto.currentTime);
      ganancia.gain.exponentialRampToValueAtTime(0.0001, contexto.currentTime + 0.5);

      oscilador.start();
      oscilador.stop(contexto.currentTime + 0.5);
    }
    
