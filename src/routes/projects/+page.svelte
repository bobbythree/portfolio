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
  <!-- {#each projects as project}  
  <div id="{project}">
    <h2 class="title">{project}</h2>
    <h3 class="description">{descriptions}</h3>         
  </div>
  {/each} -->
  
  <div id="ixonia">
    <h2 class="title">Ixonia!</h2>
    <h3 class="description">a text based adventure game</h3>
  </div>  
  
  <div id="canvas">
    <h2 class="title">Bubbles</h2>
    <h3 class="description">a simple animation built with HTML Canvas</h3>
  </div>
  <div id="drum-machine">
    <h2 class="title">Drum Machine</h2>
    <h3 class="description">a drum machine and sequencer built with Javascript</h3>
  </div>  
</div>

<style>
  #heading-div {
    padding: 0 15vw;
  }

  #project-list {
    padding: 10vh 15vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;      
  }

  #ixonia, #canvas, #drum-machine {
    max-width: 600px;
    padding: 1rem 0;
    border: 3px, solid rgb(36, 36, 36);
    border-radius: 5px;
    background-color: black;
  }

  #ixonia:hover,
  #canvas:hover,
  #drum-machine:hover {
    background-color: rgb(36, 36, 36);   
    transition: 0.3s;
  }

  .title {
    color: rgb(189, 110, 149);
    padding-left: 2rem;
    
  }

  .description {
    color: gray;
    padding-left: 2rem;
    
  }
</style>