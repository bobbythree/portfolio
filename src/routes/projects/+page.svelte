<script>
  import Heading from "$lib/components/heading.svelte";

  const projects = [
    {
      title: "Weather App",
      description:
        "By integrating with the OpenWeatherMap API, this React app provides real-time weather updates and dynamically adjusts its background to reflect current conditions. ",
      hrefCode: "https://github.com/bobbythree/react-weather-app",
      hrefPlay: "https://react-weather-app-rouge-iota.vercel.app/",
    },
    {
      title: "This website",
      description:
        "Built with Svelte/SvelteKit. Hand-coded animation using the JavaScript Canvas API. Custom CSS. Fast load time. Responsive design for all screen sizes.",
      hrefCode: "https://github.com/bobbythree/portfolio",
      hrefPlay: "/",
    },
    {
      title: "EMR System",
      description:
        "A mock Electronic Medical Records System (EMR). Fullstack application built with React, React Router, TailwindCSS, Express.js and SQLite.",
      hrefCode: "https://github.com/bobbythree/emr-system",
      hrefPlay: "/",
    },
    {
      title: "Virtual DM Screen",
      description:
        "A React app for managing D&D parties. Provides quick reference to charater data. Written in TypeScript. Utilizes the ContextAPI for state management.",
      hrefCode: "https://github.com/bobbythree/dnd-party-builder",
      hrefPlay: "/",
    },
  ];
</script>

<div id="heading-div">
  <Heading heading={"Projects"} />
</div>

<div id="container">
  <div id="project-list">
    {#each projects as project}
      <div class="project">
        <!-- <img class="image" src="{project.image}" alt="thumbnail"> -->
        <h2 class="title">{project.title}</h2>
        <h3 class="description">{project.description}</h3>
        <div class="icons">
          <a href={project.hrefCode} target="_blank" rel="noopener noreferrer">
            <i id="code" class="fa-solid fa-code fa-xl"></i>
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  #heading-div {
    padding: 0 15vw;
  }

  #container {
    width: 100%;
  }

  #project-list {
    margin: 15rem 15vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    gap: 3rem;
  }

  .project {
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    color: hsl(207, 33%, 60%);
    padding: 2rem;
    padding-bottom: 0;
  }

  .description {
    color: hsl(123, 33%, 65%);
    padding: 2rem;
    font-weight: 100;
    text-align: center;
  }

  .icons {
    padding-bottom: 1.7rem;
  }

  #code {
    color: gray;
  }

  #code:hover {
    color: #d3d3d3;
    transition: 0.5s;
  }

  @media screen and (max-width: 1400px) {
    #project-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 1000px) {
    #project-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 666px) {
    #container {
      display: flex;
      /* align-items: center; */
      justify-content: center;
    }

    #project-list {
      grid-template-columns: 1fr;
      margin-top: 3rem;
      width: 14rem;
    }
  }
</style>
