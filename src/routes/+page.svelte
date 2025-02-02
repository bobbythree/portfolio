<script>
  import Heading from "$lib/components/heading.svelte";
  import SubHeading from "$lib/components/subHeading.svelte";

  import { onMount } from "svelte";
  let canvas;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;

    //flower variables
    let number = 0;
    let scale = 10;

    function drawFlower() {
      ctx.globalCompositeOperation = "destination-over";
      let angle = number * 5;
      let radius = scale * Math.sqrt(number);
      let posX = radius * Math.sin(angle) + canvas.width / 2;
      let posY = radius * Math.cos(angle) + canvas.height / 2;

      ctx.fillStyle = "black";
      ctx.strokeStyle = "steelblue";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(posX, posY, number, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      number++;
    }

    function animateFlower() {
      drawFlower();
      if (number > 110) return;
      requestAnimationFrame(animateFlower);
    }
    animateFlower();
  });
</script>

<div id="heading-div">
  <Heading heading={"Robert Edward Lewis III"} />
  <SubHeading
    subHeading={"Software Developer. Wielder of JavaScript/Python/SQL"}
  />
</div>


<div id="main-container">
  
  <div id="flower-container">
    <canvas bind:this={canvas} />
  </div>
  <div id="bio-container">
    <div id="bio">
      <div id="p-div">
        <p>
          <span class="bio-heading">$_WHOAMI:</span>
          <br />
          A strategic thinker and creative coder. I am an avid chess player, multi-instrumentalist musician, and text-adventure enthusiast. My passion for creativity and critical thinking fuels my interest in solving complex problems with innovative software solutions.
        </p>
        <br />
        <p>
          <span class="bio-heading">MY TECH STACK:</span>
          <br />
          <span>JavaScript</span>: React, Svelte/SvelteKit, Canvas API, Node.js, Express.js<br />
          <span>Python:</span> Flask, FastAPI, Pytest<br />
          <span>SQL:</span> MySQL, SQLite
        </p>
        <br />
        <p>
          <span class="bio-heading">EXPERIENCE:</span>
          <br />
          I have 2 years of experience building personal projects such as: Web apps(React, Svelte, vanilla JS), RESTful APIs (Express.js, Flask, FastAPI), automation scripts(Python, Bash), text adventures, text parsers and simple audio software. I have experience with <span>git, Vercel and Docker and Gemini</span>.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  #heading-div {
    padding-left: 15vw;
  }

  #main-container {
    padding-left: 15vw;
    display: flex;
  }

  #flower-container {
    margin-top: 8rem;
    width: 50vw;
  }

  .bio-heading {
    color: hsl(123, 33%, 65%);
  }

  #bio-container {
    margin-top: 8rem;
    margin-right: 5rem;
    margin-left: 5rem;
    max-width: 100%;
  }

  #bio {
    margin: 4rem 4rem;
    padding-left: 1rem;
    color: hsl(207, 33%, 55%);
    max-width: 100%;    
  }

  p {    
    padding: 2rem;
    border-width: 1px;    
    border-radius: 5px;
  }

  span {
    color: hsl(34, 50%, 88%);
  }

  @media screen and (max-width: 1368px) {
    #bio-container {
      margin-left: 0;
    }
  }
  
  @media screen and (max-width: 1260px) {
    #main-container {
      padding: 0;
      flex-direction: column;
      align-items: center;
    }
    #flower-container {   
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #bio-container{
      margin-top: 0;
      margin-left: 5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #bio {
      width: 100%;
      margin: 3rem;
      padding: 0;
      width: 75vw;
    }
  }

  

  @media screen and (max-width: 800px) {
    #heading-div {
      padding: 0;
    }
    #main-container {
      padding: 0;
    }
  }

  @media screen and (max-width: 666px) {
    #flower-container {
      margin-top: 3rem;
    }
    canvas {
      width: 75vw;
    }
    #bio-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #bio {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }
  
</style>
