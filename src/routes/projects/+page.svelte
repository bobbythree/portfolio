<script>
  import Heading from '$lib/components/heading.svelte';    
    import { EventDispatcher } from 'three';

  const projects = [
    {
      title: 'Ixonia!', 
      description: 'a text based adventure game',
      href: 'https://github.com/bobbythree/ixonia'
    },
    {
      title: 'Bubbles', 
      description: 'a simple animation built with HTML Canvas',
      href: 'https://github.com/bobbythree/HTML-canvas-bubbles'
    },
    {
      title: 'Drum Machine', 
      description: 'a drum machine and sequencer built with Javascript',
      href: 'https://github.com/bobbythree/drum-machine'
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
          {#each icons as icon}
            <a href="{project.href}" target="_blank" rel="noopener noreferrer">
              {@html icon}
            </a>
          {/each}        
        </div>        
      </div>      
    {/each}
  </div>
</div>

<!-- <div id="container">
  <div id="project-list">
      <div class="project">
        <div id="ixonia">    
          <h2 class="title">Ixonia!</h2>
          <h3 class="description">
            a text based adventure game      
          </h3>
          <div class="icons">
            <a href="https://github.com/bobbythree/ixonia" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
            </a>
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
            </a>      
          </div>
        </div>          
      </div>  
      
      <div id="canvas">
        <div class="project">
          <h2 class="title">Bubbles</h2>
          <h3 class="description">a simple animation built with HTML Canvas</h3>
          <div class="icons">
          <a href="https://github.com/bobbythree/HTML-canvas-bubbles" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
          </a>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
          </a>        
        </div> 
      </div>
    </div>
        
      <div id="drum-machine">
        <div class="project">
          <h2 class="title">Drum Machine</h2>
          <h3 class="description">a drum machine and sequencer built with Javascript</h3>
          <div class="icons">
          <a href="https://github.com/bobbythree/drum-machine" target="_blank"        rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
          </a>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
          </a>
        </div> 
      </div>
    </div>
        
  </div>
</div>   -->



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
    color: rgb(250, 192, 117)  ;
    padding: 1rem 2rem;
    padding-bottom: 0;     
  }
 
  .description {    
    color: rgb(223, 223, 223);
    padding-left: 2rem;    
  }

  .icons {    
    padding-left: 2rem;
    padding-bottom: 0.7rem;            
  }

  svg:hover {
    fill: white;
    transition: 0.5s;
  }
  
</style>