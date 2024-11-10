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
    subHeading={"Computer Programmer. Wielder of JavaScript/Python/mySQL"}
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
          <span class="bio-heading">WHOAMI:</span>
          <br />
          My name is <span>Robert Lewis III</span> (Bobby Three). I am an entry level
          computer programmer. I code for the absolute love of it. I am highly motivated
          to join a team as a backend dev or fullstack dev.
        </p>
        <br />
        <p>
          <span class="bio-heading">MY TECH STACK:</span>
          <br />
          <span>JavaScript</span>: HTML, CSS, Canvas API, Svelte/SvelteKit,
          Node.js, Express.js<br />
          <span>Python:</span> Flask, Pytest<br />
          <span>SQL:</span> mySQL
        </p>
        <br />
        <p>
          <span class="bio-heading">EXPERIENCE:</span>
          <br />
          I have 1.5 years of experience building personal projects such as web apps,
          automation scripts, text adventures, simple audio software, text parsers,
          RESTful APIs, particle systems, and web animations. I have experience with
          <span>Linux, bash, git, Vercel and Docker</span>.
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
    margin-left: 1rem;
    width: 50vw;
  }

  .bio-heading {
    color: hsl(123, 33%, 65%);
  }

  #bio-container {
    max-width: 100%;
  }

  #bio {
    margin: 10rem 3rem;
    padding-left: 1rem;
    color: hsl(207, 33%, 55%);
    max-width: 100%;    
  }

  p {
    background-color: rgb(30, 30, 30);
    padding: 2rem;
    border-width: 1px;
    border: 1px solid rgb(82, 82, 82);
    border-radius: 5px;
  }

  span {
    color: hsl(34, 50%, 88%);
  }
  
  @media screen and (max-width: 1089px) {
    #main-container {
      padding: 0;
      flex-direction: column;
    }
    #flower-container {   
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #bio-container{
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

  @media screen and (max-width: 600px) {
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
