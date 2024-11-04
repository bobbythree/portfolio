<script>
  import Heading from '$lib/components/heading.svelte';
  import SubHeading from '$lib/components/subHeading.svelte';
  
  import { onMount } from 'svelte';
  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');    
    canvas.width = 600;
    canvas.height = 600;

    //flower variables    
    let number = 0;
    let scale = 10;

    
    function drawFlower() {
      ctx.globalCompositeOperation = 'destination-over'
      let angle = number * 5;
      let radius = scale * Math.sqrt(number);
      let posX = radius * Math.sin(angle) + 250;
      let posY = radius * Math.cos(angle) + 300; 

      ctx.fillStyle = 'black'; 
      ctx.strokeStyle = 'steelblue';  
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(posX, posY, number, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      number++
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
  <Heading heading={'Robert Edward Lewis III'}/>
  <SubHeading subHeading={'Computer Programmer. Wielder of Javascript/Python/mySQL'}/>    
  <div id="image-container">
    <canvas bind:this={canvas} />
  </div>  
</div>



<style>
  #main-container {
    padding: 0 15vw;         
  }

  #image-container {
    margin-top: 5rem;
    margin-left: 1rem;
    
  }

  
</style>
