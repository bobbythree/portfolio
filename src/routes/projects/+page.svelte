<script>
  import Heading from '$lib/components/heading.svelte';
  

  const projects = [
    {
      title: 'Ixonia!',
      description: 'An interactive fiction written in JavaScript',
      // image: "/public/ixoniaThumbnail.png",
      hrefCode: 'https://github.com/bobbythree/ixonia',
      hrefPlay: 'https://bobbythree.github.io/ixonia/'
    },
    {
      title: 'Maitreya\'s Quest', 
      description: 'A text-based adventure game written in Python',
      // image: "./maitreyaThumbnail.png",
      hrefCode: 'https://github.com/bobbythree/maitreya-text-adventure',
      hrefPlay: '/'
    },
    {
      title: 'Automation script', 
      description: 'A Python script for setting up project files',
      // image: "./automationThumbnail.png",
      hrefCode: 'https://github.com/bobbythree/py-project-structure-automation',
      hrefPlay: '/'
    },
    {
      title: 'Bubbles', 
      description: 'An animation built with the JS Canvas API',
      // image: "./bubblesThumbnail.png",
      hrefCode: 'https://github.com/bobbythree/HTML-canvas-bubbles',
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
            {@html icons[0]}
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
