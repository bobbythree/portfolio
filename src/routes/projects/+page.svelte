<script>
  import Heading from '$lib/components/heading.svelte';    

  const projects = ['Ixonia!', 'Bubbles', 'Drum Machine'];
  const descriptions = [
    'a text based adventure game',
    'a simple animation built with HTML Canvas',
    'a drum machine and sequencer built with Javascript'
  ];
  
</script>
  

<div id="heading-div">
  <Heading 
    heading={'Projects'}
  />
</div>



<div id="project-list">  
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
  
  <div id="canvas">
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
  <div id="drum-machine">
    <h2 class="title">Drum Machine</h2>
    <h3 class="description">a drum machine and sequencer built with Javascript</h3>
    <div class="icons">
      <a href="https://github.com/bobbythree/drum-machine" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
      </a>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
      </a>
    </div> 
  </div>  
</div>

<style>
  #heading-div {
    padding: 0 15vw;
  }

  #project-list {
    width: 700px;
    background-color: rgb(0, 0, 0);
    margin: 8rem 15vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border-radius: 0.5rem;       
  }

  .title {
    background-color: rgb(30, 30, 30);
    color: rgb(189, 110, 149);
    padding: 1rem 2rem;
    padding-bottom: 0; 
    border-top-left-radius: 0.5rem;  
    border-top-right-radius: 0.5rem;  
  }

  .description {
    background-color: rgb(30, 30, 30);
    color: steelblue;
    padding-left: 2rem;    
  }

  .icons {
    background-color: rgb(30, 30, 30);
    padding-left: 2rem;
    padding-bottom: 0.7rem;
    border-bottom-left-radius: 0.5rem;  
    border-bottom-right-radius: 0.5rem;        
  }

  svg:hover {
    fill: white;
    transition: 0.5s;
  }
  
</style>