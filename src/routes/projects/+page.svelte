<script>
  import Heading from '$lib/components/heading.svelte'; 

  const projects = [
    {
      title: 'Ixonia!', 
      description: 'a text based adventure game',
      hrefCode: 'https://github.com/bobbythree/ixonia',
      hrefPlay: '/'
    },
    {
      title: 'Bubbles', 
      description: 'a simple animation built with HTML Canvas',
      hrefCode: 'https://github.com/bobbythree/HTML-canvas-bubbles',
      hrefPlay: '/'
    },
    {
      title: 'Drum Machine', 
      description: 'a drum machine and sequencer built with Javascript',
      hrefCode: 'https://github.com/bobbythree/drum-machine',
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
        <h2 class="title">{project.title}</h2>
        <h3 class="description">{project.description}</h3>
        <div class="icons">
          <a href="{project.hrefCode}" target="_blank" rel="noopener noreferrer">
            {@html icons[0]}
          </a>
          <a href="{project.hrefPlay}" target="_blank" rel="noopener noreferrer">
            {@html icons[1]}
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
    position: absolute;
    top: 22%;
    left: 15%;    
  }

  #project-list {           
    width: 700px;    
    display: flex;
    flex-direction: column;  
    justify-content: center;
    gap: 2rem;
    border-radius: 0.5rem;       
  }

  .project {
    background-color: rgba(102, 102, 102, 0.2);
    backdrop-filter: blur(3px);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
  }

  .title {    
    color: hsl(207, 33%, 60%);;
    padding: 1rem 2rem;
    padding-bottom: 0;     
  }
 
  .description {    
    color: rgb(223, 223, 223);
    padding-left: 2rem;
    font-weight: 100;   
  }

  .icons {    
    padding-left: 2rem;
    padding-bottom: 0.7rem;            
  }

  
</style>