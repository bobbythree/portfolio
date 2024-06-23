<script>  
  import Typewriter from 'svelte-typewriter';
  import { onMount } from 'svelte';
  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');    
    canvas.width = 500;
    canvas.height = 500;

    //flower variables
    let hue = 0;
    let number = 0;
    let scale = 10;

    
    function drawFlower() {
      ctx.globalCompositeOperation = 'destination-over'
      let angle = number * 5 ;
      let radius = scale * Math.sqrt(number);
      let posX = radius * Math.sin(angle) + canvas.width / 2;
      let posY = radius * Math.cos(angle) + canvas.height / 2; 

      ctx.fillStyle = 'black'; 
      ctx.strokeStyle = 'steelblue';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(posX, posY, number, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      number ++;
      hue += 2;
    }

    function animateFlower() {  
      drawFlower();
      if (number > 100) return;
      requestAnimationFrame(animateFlower);
    }
    animateFlower();
  });

  
</script>

<Typewriter interval=60>
  <h1 id="heading">Robert Edward Lewis III</h1>
</Typewriter>

<Typewriter mode=scramble scrambleDuration=2000>
  <h2 id="subHeading">Frontend Programmer, Wielder of Javascript</h2>
</Typewriter>

<canvas bind:this={canvas} />


<style>
  #heading {    
    color: rgb(250, 192, 117);
    /* text-align: center; */
    padding: 2rem;
    --cursor-color: #121212;    
  }

  #subHeading { 
    position: absolute;
    top: 150px;
    left: 0px;   
    color: rgb(189, 110, 149);
    font-weight: 200;
    /* text-align: center; */
    padding: 2rem;
    padding-top: 0;
  }

  canvas {
    background-color: #121212;
    
  }
</style>
