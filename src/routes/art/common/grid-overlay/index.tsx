import { FunctionalComponent, h } from 'preact'
import Canvas from '../../common/canvas'
import style from './style.css'

const GridOverlay: FunctionalComponent = () => {
  const translate = [0, 0]
  const scale = [1, 1]
  const gridIncrements = [
    [1, 1],
    [1, 1]
  ]

  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.fillStyle = '#999' // font
    ctx.strokeStyle = '#999'
    ctx.lineWidth = 1
    translate[0] = -ctx.canvas.width/2
    translate[1] = -ctx.canvas.height/2
    scale[0] = scale[1] = 1/64
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    const x = -translate[0]
    const y = -translate[1]
    const s = 64

    ctx.beginPath()

    // x-axis (y=0)
    ctx.moveTo(x, 0)
    ctx.lineTo(x, ctx.canvas.height)

    // y-axis (x=0)
    ctx.moveTo(0, y)
    ctx.lineTo(ctx.canvas.width, y)

    // y=1
    ctx.moveTo(x + s, 0)
    ctx.lineTo(x + s, ctx.canvas.height)

    // x=1
    ctx.moveTo(0, y - s)
    ctx.lineTo(ctx.canvas.width, y - s)

    ctx.stroke()
   
    //   if(i == x_axis_distance_grid_lines) 
    //     ctx.strokeStyle = "#693"
    //   else
    //     ctx.strokeStyle = "#999"
        
    //   if(i == num_lines_x) {
    //     ctx.moveTo(0, grid_size*i)
    //     ctx.lineTo(ctx.canvas.width, grid_size*i)
    //   }
    //   else {
    //     ctx.moveTo(0, grid_size*i+0.5)
    //     ctx.lineTo(ctx.canvas.width, grid_size*i+0.5)
    //   }
    //   ctx.stroke()

    // const grid_size = 64
    // const x_axis_distance_grid_lines = 16
    // const y_axis_distance_grid_lines = 8

    // const num_lines_x = Math.floor(ctx.canvas.height/grid_size)
    // const num_lines_y = Math.floor(ctx.canvas.width/grid_size)

    // // Draw grid lines along X-axis
    // for(let i=0; i<=num_lines_x; i++) {
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
        
    //   if(i == x_axis_distance_grid_lines) 
    //     ctx.strokeStyle = "#693"
    //   else
    //     ctx.strokeStyle = "#999"
        
    //   if(i == num_lines_x) {
    //     ctx.moveTo(0, grid_size*i)
    //     ctx.lineTo(ctx.canvas.width, grid_size*i)
    //   }
    //   else {
    //     ctx.moveTo(0, grid_size*i+0.5)
    //     ctx.lineTo(ctx.canvas.width, grid_size*i+0.5)
    //   }
    //   ctx.stroke()
    // }

    // // Draw grid lines along Y-axis
    // for(let i=0; i<=num_lines_y; i++) {
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
  
    //   if(i == y_axis_distance_grid_lines) 
    //     ctx.strokeStyle = "#693"
    //   else
    //     ctx.strokeStyle = "#999"
  
    //   if(i == num_lines_y) {
    //     ctx.moveTo(grid_size*i, 0)
    //     ctx.lineTo(grid_size*i, ctx.canvas.height)
    //   }
    //   else {
    //     ctx.moveTo(grid_size*i+0.5, 0)
    //     ctx.lineTo(grid_size*i+0.5, ctx.canvas.height)
    //   }
    //   ctx.stroke()
    // }

    // // Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
    // ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size)

    // // Ticks marks along the positive X-axis
    // for(let i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
    //   ctx.strokeStyle = "#333"

    //   // Draw a tick mark 6px long (-3 to 3)
    //   ctx.moveTo(grid_size*i+0.5, -3)
    //   ctx.lineTo(grid_size*i+0.5, 3)
    //   ctx.stroke()

    //   // Text value at that point
    //   ctx.textAlign = 'start'
    //   ctx.fillText(i.toString(), grid_size*i-2, 15)
    // }

    // // Ticks marks along the negative X-axis
    // for(let i=1; i<y_axis_distance_grid_lines; i++) {
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
    //   ctx.strokeStyle = "#333"

    //   // Draw a tick mark 6px long (-3 to 3)
    //   ctx.moveTo(-grid_size*i+0.5, -3)
    //   ctx.lineTo(-grid_size*i+0.5, 3)
    //   ctx.stroke()

    //   // Text value at that point
    //   ctx.textAlign = 'end'
    //   ctx.fillText(i.toString(), -grid_size*i+3, 15)
    // }

    // // Ticks marks along the positive Y-axis
    // // Positive Y-axis of graph is negative Y-axis of the canvas
    // for(let i=1; i<(num_lines_x - x_axis_distance_grid_lines); i++) {
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
    //   ctx.strokeStyle = "#333"

    //   // Draw a tick mark 6px long (-3 to 3)
    //   ctx.moveTo(-3, grid_size*i+0.5)
    //   ctx.lineTo(3, grid_size*i+0.5)
    //   ctx.stroke()

    //   // Text value at that point
    //   ctx.textAlign = 'start'
    //   ctx.fillText(i.toString(), 8, grid_size*i+3)
    // }

    // // Ticks marks along the negative Y-axis
    // // Negative Y-axis of graph is positive Y-axis of the canvas
    // for(let i=1; i<x_axis_distance_grid_lines; i++) {
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
    //   ctx.strokeStyle = "#333"

    //   // Draw a tick mark 6px long (-3 to 3)
    //   ctx.moveTo(-3, -grid_size*i+0.5)
    //   ctx.lineTo(3, -grid_size*i+0.5)
    //   ctx.stroke()

    //   // Text value at that point
    //   ctx.textAlign = 'start'
    //   ctx.fillText(i.toString(), 8, -grid_size*i+3)
    // }

  }

  return (
    <div class={style.grid_overlay}>
      <Canvas init={init} onResize={init} draw={draw} />
    </div>
  )
}

export default GridOverlay
