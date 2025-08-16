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
  <SubHeading subHeading={"Web Dev | Linux Enthusiast"} />
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
          I'm a freelance developer passionate about creating engaging and functional
          <span>Web Applications</span>. I love building intuitive user
          interfaces, robust back-end systems, and bringing unique ideas to
          life. While my primary focus is on web development, my experience with
          <span>Linux Administration and Infrastructure</span> allows me to approach
          problems with a diverse set of tools.
        </p>
        <br />
        <p>
          <span class="bio-heading">$_MY_TECH_STACK:</span>
          <br />
          <span>Languages:</span>: JavaScript, TypeScript, Python, Bash, SQL
          <br />
          <span>Frontend technologies:</span> React, Svelte, Canvas API,
          TailwindCSS<br />
          <span>Backend Technologies:</span> Node.js, Express.js, MySQL, SQLite,
          Flask
          <br />
          <span>DevOps/Infra:</span> Git, Github, Docker/Podman, AWS, Terraform,
          VirtualBox
        </p>
        <br />
        <p>
          <span class="bio-heading">$_SKILLS:</span>
          <br />
          <span>Frontend:</span> Web Apps, Animations, Responsive Design,
          Frameworks and Libraries
          <br />
          <span>Backend:</span> Database management, RESTful APIs, ORMs and raw
          SQL
          <br />
          <span>Linux:</span> Debian and RHEL based Distros, User & Group mgmt, Storage
          & File System mgmt, Networking (TCP/IP, DNS), Security(PKI, SSL, Firewall)
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
    #bio-container {
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
