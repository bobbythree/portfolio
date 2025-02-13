<script>
  import Heading from '$lib/components/heading.svelte';
  

  const projects = [
    {
      title: 'Harry Potter App',
      description: 'A React application that calls a public API (PotterAPI) and displays the data to the screen. Styled with Tailwind and DaisyUI.',
      hrefCode: 'https://github.com/bobbythree/ixonia',
      hrefPlay: 'https://bobbythree.github.io/ixonia/'
    },
    {
      title: 'This website', 
      description: 'Built with Svelte/SvelteKit. Hand coded animation using the JavaScript Canvas API. Custom CSS. Fast load time. Responsive design.',
      hrefCode: 'https://github.com/bobbythree/portfolio',
      hrefPlay: '/'
    },
    {
      title: 'Maitreya\'s Quest', 
      description: 'A text-based cyberpunk adventure game written in Python. Text parser built from scratch. ANSI and Figlet graphics. A nod to the classics.',
      hrefCode: 'https://github.com/bobbythree/maitreya-text-adventure',
      hrefPlay: '/'
    },
    {
      title: 'Automation script', 
      description: 'A Python script that automates the setup of a project\'s file structure. Decreases the time spent setting up a project.',
      hrefCode: 'https://github.com/bobbythree/py-project-structure-automation',
      hrefPlay: '/'
    },    
  ];
  
  const icons = [
    '<svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>',
    
    '<svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>'

  ]
  
</script>
  

<div id="heading-div">
  <Heading 
    heading={'Projects'}
  />
</div>

<div id="container">
  <div id="project-list">
    {#each projects as project}
      <div class="project">
        <!-- <img class="image" src="{project.image}" alt="thumbnail"> -->
        <h2 class="title">{project.title}</h2>
        <h3 class="description">{project.description}</h3>
        <div class="icons">
          <a href="{project.hrefCode}" target="_blank" rel="noopener noreferrer">
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
    align-items: center;
    justify-content: space-around;    
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
  	color: #D3D3D3;
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
