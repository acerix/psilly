import Atom from './atom'
import Particle from './particle'

interface Electron extends Particle {
  temperature: number
}

export function createElectron(x: number, y: number): Electron {
  const speed = 32 - 16 * Math.random()
  const direction = Math.random() * 2 * Math.PI
  return {
    position: {
      x: x,
      y: y,
    },
    velocity: {
      x: speed * Math.sin(direction),
      y: speed * Math.cos(direction),
    },
    temperature: 0,
  }
}

//     this.move = function() {

//         if (lottery(69)) self.direction+=.3*Math.random();

//         if (self.temperature < 5000) self.temperature++;
//         else {
//             self.radius = 0;
//             atoms.push(new Atom());
//             return;
//         }

//         var move_x = self.move_x = self.m_x();
//         var move_y = self.move_y = self.m_y();

//         self.x += Math.floor(move_x);
//         self.y += Math.floor(move_y);

//         self.wrap_canvas();

//         self.collide();

//         if (self.direction >= TAU) self.direction -= TAU;
//         if (self.direction < 0) self.direction += TAU;

//     }

//     this.eat = function(particle) {
//         switch (particle.type) {

//             case PARTICLE_ELECTRON:
//                 self.temperaure = (self.temperaure + particle.temperature ) / 2;
//                 break;

//         }
//         particle.radius = 0;
//     }

//     this.collide = function() {

//         for (var i in atoms) {

//             if ( // collision
//                 Math.sqrt(Math.pow(self.x-atoms[i].x,2)+Math.pow(self.y-atoms[i].y,2))
//                 <=
//                 10 + atoms[i].protons
//                 ) {

//                 atoms[i].eat(self);
//             }
//         }

//         for (var i in electrons) if (electrons[i] !== self) {

//             if ( // collision
//                 Math.sqrt(Math.pow(self.x-electrons[i].x,2)+Math.pow(self.y-electrons[i].y,2))
//                 <=
//                 5
//                 ) {
//                 self.eat(electrons[i]);
//                 //atoms.push(new Atom(self.x, self.y));
//             }
//         }

//     };

export default Electron
