import elements from './elements'
import Particle from './particle'

interface Atom extends Particle {
  protons: number
}

export function createAtom(x: number, y: number): Atom {
  const atom = {
    position: {
      x: x,
      y: y,
    },
    direction: Math.random() * 2 * Math.PI,
    speed: 0.5 - Math.random(),
    protons: 1,
  }
  return atom
}

export function drawAtom(ctx: CanvasRenderingContext2D, atom: Atom) {
  ctx.beginPath()
  ctx.arc(atom.position.x, atom.position.y, atom.protons, 0, 2 * Math.PI, false)
  ctx.fill()
  ctx.fillText(
    elements[atom.protons].symbol,
    atom.position.x + 2 * atom.protons,
    atom.position.y + 0.5 * atom.protons,
  )
}

export function collideAtom(atom: Atom, atoms: Atom[]) {
  for (const particle of atoms)
    if (particle !== atom) {
      // if collision
      if (
        Math.sqrt(
          Math.pow(particle.position.x - atom.position.x, 2) +
            Math.pow(particle.position.y - atom.position.y, 2),
        ) <=
        10 + atom.protons
      ) {
        //console.log('join!')
        // @todo fusion
        particle.speed = 0
        atom.speed = 0
      }
    }
}

// const PARTICLE_ATOM = 1;
// var atoms = [];
// function Atom(x, y, direction) {
//     var self = this;

//     this.type = PARTICLE_ATOM;

//     this.x = x === undefined ? randi(canvas_width) : x;
//     this.y = y === undefined ? randi(canvas_height) : y;
//     this.direction = direction === undefined ? TAU*Math.random() : direction;

//     this.move_x = randi(16)-8;
//     this.move_y = randi(16)-8;

// //    this.protons = 1+randi(elements.length);
//     this.protons = 1;

//     this.electrons = this.protons;

//     this.temperature = randi(22);
//     this.speed = Math.random()/3;

//     this.toString = function() {return elements[this.protons]===undefined?'A('+this.protons+')':elements[this.protons].symbol;};

//     this.fillStyle = function() {return spectrum_rgb(this.temperature);};

//     this.m_x = function() {return self.speed * Math.sin(self.direction);};
//     this.m_y = function() {return self.speed * Math.cos(self.direction);};

//     this.move = function() {

//         // can't have more protons than what are defined
//         if (self.protons > elements.length) self.explode();

//         if (self.protons <= 0) return;

//         if (self.electrons > self.protons) return;

//         var move_x = self.move_x = self.m_x();
//         var move_y = self.move_y = self.m_y();

//         self.x += Math.floor(move_x);
//         self.y += Math.floor(move_y);

//         self.wrap_canvas();

//         self.collide();

//         if (self.direction >= TAU) self.direction -= TAU;
//         if (self.direction < 0) self.direction += TAU;
//     };

//     this.eat = function(particle) {
//         switch (particle.type) {

//             case PARTICLE_ATOM:
//                 self.protons += particle.protons;
//                 if (self.protons > elements.length) self.explode();
//                 self.electrons += particle.electrons;
//                 self.x = Math.floor( (self.x + particle.x) / 2 );
//                 self.y = Math.floor( (self.y + particle.y) / 2 );
//                 self.temperature += particle.temperature;
//                 self.speed = Math.floor(Math.sqrt( Math.pow(self.move_x + particle.move_x, 2) + Math.pow(self.move_y + particle.move_y, 2) ));
//                 particle.protons = 0;
//                 break;

//             case PARTICLE_ELECTRON:
//                 self.electrons++;
//                 self.temperature += 32;
//                 particle.radius = 0;
//                 break;

//         }
//         //self.speed++;
//         //self.direction += Math.PI;
//         //atoms[i].speed = Math.sqrt( Math.pow(self.move_x + atoms[i].move_x, 2) / Math.pow(move_y + atoms[i].move_y, 2);
//         //atoms[i].direction = Math.atan( (self.move_x + atoms[i].move_x) / (self.move_y + atoms[i].move_y) );

//     }

//     this.wrap_canvas = function() {
//         if (self.x < 0 - .5 * self.protons)
//             self.x += canvas_width;
//         else if(self.x > canvas_width + .5 * self.protons)
//             self.x -= canvas_width;
//         if (self.y < 0 - .5 * self.protons)
//             self.y += canvas_height;
//         else if(self.y > canvas_height + .5 * self.protons)
//             self.y -= canvas_height;
//     }

//     this.collide = function() {

//         for (var i in atoms) if (atoms[i] !== self) {

//             // if a collision is detected
//             if (
//                 Math.sqrt(Math.pow(self.x-atoms[i].x,2)+Math.pow(self.y-atoms[i].y,2))
//                 <=
//                 self.protons + atoms[i].protons
//                 ) {

//                 if (self.protons > atoms[i].protons) {
//                     self.eat(atoms[i]);
//                 }
//                 else {
//                     atoms[i].eat(self);
//                 }

//             }
//         }

//     };

//     this.explode = function() {

//         self.temperature = randi(100);
//         self.protons = 0;

//         for (var i=0;i<self.electrons;i++)
//             electrons.push(new Electron(self.x+randi(100)-50, self.y+randi(100)-50));

//     };

//     this.draw = function() {
//         ctx.beginPath();
//         ctx.fillStyle = this.fillStyle();
//         ctx.arc(
//             self.x
//             ,cy(self.y)
//             ,self.protons
//             ,0
//             ,TAU
//             ,false
//         );
//         ctx.fill();
//         for (var i=0;i<self.electrons;i++)
//             self.draw_electron(i);

//         ctx.fillText(
//             self.toString()
//             ,self.x + 2*self.protons
//             ,cy(self.y + .5*self.protons)
//         );

//     };

//     this.draw_electron = function(i) {

//         var x = self.x;
//         var y = self.y;

//         switch (i) {

//             case 0:
//                 x += 2 * self.protons * Math.sin(pot);
//                 y += 2 * self.protons * Math.cos(pot);
//                 break;

//             case 1:
//                 x -= 2 * self.protons * Math.sin(pot);
//                 y -= 2 * self.protons * Math.cos(pot);
//                 break;

//             case 2:
//                 x += 3 * self.protons * Math.cos(pot+2);
//                 y += 3 * self.protons * Math.sin(pot+2);
//                 break;

//             case 3:
//                 x -= 3 * self.protons * Math.cos(pot+2);
//                 y -= 3 * self.protons * Math.sin(pot+2);
//                 break;

//             case 4:
//                 x += 3 * self.protons * Math.sin(pot+2);
//                 y += 3 * self.protons * Math.cos(pot+2);
//                 break;

//             case 5:
//                 x -= 3 * self.protons * Math.sin(pot+2);
//                 y -= 3 * self.protons * Math.cos(pot+2);
//                 break;

//             case 6:
//                 x += 3 * self.protons * Math.sin(pot+2);
//                 break;

//             case 7:
//                 y -= 3 * self.protons * Math.cos(pot+2);
//                 break;

//             case 8:
//                 x -= 3 * self.protons * Math.sin(pot+2);
//                 break;

//             case 9:
//                 y += 3 * self.protons * Math.cos(pot+2);
//                 break;

//             default:

//                 // todo: actual chemistry
//                 var s = 2 + Math.ceil((i-2)/8);

//                 switch (i%8) {

//                     case 0:
//                         x += s * self.protons * Math.sin(pot+i);
//                         y += s * self.protons * Math.cos(pot+i);
//                         break;

//                     case 1:
//                         x -= s * self.protons * Math.sin(pot+i);
//                         y -= s * self.protons * Math.cos(pot+i);
//                         break;

//                     case 2:
//                         x += s * self.protons * Math.cos(pot+i);
//                         y += s * self.protons * Math.sin(pot+i);
//                         break;

//                     case 3:
//                         x -= s * self.protons * Math.cos(pot+i);
//                         y -= s * self.protons * Math.sin(pot+i);
//                         break;

//                     case 4:
//                         x += s * self.protons * Math.sin(pot+i);
//                         break;

//                     case 5:
//                         y += s * self.protons * Math.cos(pot+i);
//                         break;

//                     case 6:
//                         x += s * self.protons * Math.cos(pot+i);
//                         break;

//                     case 7:
//                         y += s * self.protons * Math.sin(pot+i);
//                         break;

//                 }
//         }

//         ctx.beginPath();
//         ctx.arc(
//             x
//             ,cy(y)
//             ,1
//             ,0
//             ,TAU
//             ,false
//         );
//         ctx.fill();
//         /*
//         ctx.fillText(
//             self.toString()
//             ,self.x + 2*self.protons
//             ,cy(self.y + .5*self.protons)
//         );
//         */
//     };

// }

export default Atom
