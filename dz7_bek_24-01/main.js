class TrafficLight {
        constructor() {
          this.red = document.querySelector('.red');
          this.yellow = document.querySelector('.yellow');
          this.green = document.querySelector('.green');
          this.timer = null;
          this.duration = {
            green: 5000,
            yellow: 2000,
            red: 3000
          };
          this.init();
        }

        init() {
          this.red.classList.add('active');
          this.timer = setTimeout(() => this.changeLight('yellow'), this.duration.red);
        }

        changeLight(color) {
          switch(color) {
            case 'red':
              this.red.classList.add('active');
              this.yellow.classList.remove('active');
              this.green.classList.remove('active');
              this.timer = setTimeout(() => this.changeLight('green'), this.duration.red);
              break;
            case 'yellow':
              this.red.classList.remove('active');
              this.yellow.classList.add('active');
              this.green.classList.remove('active');
              if (this.timer) clearTimeout(this.timer);
              this.timer = setTimeout(() => this.changeLight('red'), this.duration.yellow);
              break;
            case 'green':
              this.red.classList.remove('active');
              this.yellow.classList.remove('active');
              this.green.classList.add('active');
              this.timer = setTimeout(() => this.changeLight('yellow'), this.duration.green);
              break;
          }
        }

        promptControl() {
          const input = prompt('Введите "stop", чтобы остановить светофор');

          if (input === 'stop') {
            clearTimeout(this.timer);
            this.red.classList.remove('active');
            this.yellow.classList.remove('active');
            this.green.classList.remove('active');
          }
        }
      }

      const trafficLight = new TrafficLight();
      trafficLight.promptControl();