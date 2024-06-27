<script>
  import Heading from '$lib/components/heading.svelte';
  import SubHeading from '$lib/components/subHeading.svelte';  
  // import Typewriter from 'svelte-typewriter';
  import { onMount } from 'svelte';
  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');    
    canvas.width = 500;
    canvas.height = 500;

    //flower variables    
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
    }

    function animateFlower() {  
      drawFlower();
      if (number > 100) return;
      requestAnimationFrame(animateFlower);
    }
    animateFlower();
  });

  
</script>
<div id="main-container">
  <div id="content-container">
    <Heading heading={'Robert Edward Lewis III'}/>
    <SubHeading subHeading={'Frontend Programmer, Wielder of Javascript'}/>    
  
    <div id="flower-div">
      <canvas bind:this={canvas} />
    </div>
  </div>  
</div>



<style>
  #main-container {
    padding: 0 15vw;      
  }
  
  canvas {
    padding-top: 5rem;
    display: flex;
    place-items: center;    
  }

  #flower-div {
    padding: 3rem;   
    display: flex;
    justify-content: center;
    align-items: center;   
  }
</style>
