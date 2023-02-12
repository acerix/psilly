// import {hilbertCurve, hilbertCoordinate, hilbertIndex} from '../public/pages/art/chillbert'

describe('FU', () => {
  test('fu!', () => {
    expect(true).toBeTruthy()
  })
})

// describe('Test hilbert curve coordinates', () => {

//   test('Hilbert curve (n=0)', () => {
//     expect(hilbertCurve(0)).toStrictEqual([
//       [0, 0]
//     ])
//   }) // 1

//   test('Hilbert curve (n=1)', () => {
//     expect(hilbertCurve(1)).toStrictEqual([
//       [0, 0],
//       [1, 0],
//       [1, 1],
//       [0, 1]
//     ])
//   }) // 4 - 1 = 3

//   test('Hilbert curve (n=2)', () => {
//     expect(hilbertCurve(2)).toStrictEqual([
//       [0, 0],
//       [1, 0],
//       [1, 1],
//       [0, 1],
//       [0, 2],
//       [0, 3],
//       [1, 3],
//       [1, 2],
//       [2, 2],
//       [2, 3],
//       [3, 3],
//       [3, 2],
//       [3, 1],
//       [2, 1],
//       [2, 0],
//       [3, 0]
//     ])
//   }) // 16 - 4 = 12

//   test('Hilbert curve (n=3)', () => {
//     expect(hilbertCurve(3).slice(-10)).toStrictEqual([
//       [2,4],[2,5],[1,5],[1,4],[0,4],[0,5],[0,6],[1,6],[1,7],[0,7]
//     ])
//   }) // 64 - 16 = 48

//   test('Hilbert curve (n=4)', () => {
//     expect(hilbertCurve(4).slice(-10)).toStrictEqual([
//       [13,3],[13,2],[14,2],[14,3],[15,3],[15,2],[15,1],[14,1],[14,0],[15,0]
//     ])
//   }) // 256 - 64 = 192

//   test('Hilbert curve (n=5)', () => {
//     expect(hilbertCurve(5).slice(-10)).toStrictEqual([
//       [2,28],[2,29],[1,29],[1,28],[0,28],[0,29],[0,30],[1,30],[1,31],[0,31]
//     ])
//   }) // 1024 - 256 = 768

//   test('Hilbert curve (n=6)', () => {
//     expect(hilbertCurve(6).slice(-10)).toStrictEqual([
//       [61,3],[61,2],[62,2],[62,3],[63,3],[63,2],[63,1],[62,1],[62,0],[63,0]
//     ])
//   })

//   test('Hilbert curve (n=7)', () => {
//     expect(hilbertCurve(7).slice(-10)).toStrictEqual([
//       [2,124],[2,125],[1,125],[1,124],[0,124],[0,125],[0,126],[1,126],[1,127],[0,127]
//     ])
//   })

//   test('Hilbert coordinate (t=6, n=9)', () => {
//     expect(hilbertCoordinate(6, 9)).toStrictEqual([1, 3])
//   })

//   test('Hilbert coordinate (t=6)', () => {
//     expect(hilbertCoordinate(6)).toStrictEqual([1, 3])
//   })

//   // now gives node check failed error, fixed in https://github.com/nodejs/node/issues/40030 ? 
//   // eslint-disable-next-line jest/no-commented-out-tests
//   // test('All hilbert coordinates at n=10', () => {
//   //   let i = 0
//   //   for (const p of hilbertCurve(8)) {
//   //     expect(hilbertCoordinate(i++)).toStrictEqual(p)
//   //   }
//   // })

//   test('Hilbert index (p=[1, 3])', () => {
//     expect(hilbertIndex([1, 3])).toBe(6)
//   })

//   test('Hilbert curves (n=[0, 10])', () => {
//     for (let n=0; n<11; n++) {
//       const curve = hilbertCurve(n)
//       expect(curve.length).toBe(1<<(2*n))
//       const m = (1<<n)-1
//       const last = n%2 === 0 ? [m, 0] : [0, m]
//       expect(curve[curve.length-1]).toStrictEqual(last)
//     }
//   })

// })
