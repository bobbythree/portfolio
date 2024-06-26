<script>
  import Heading from '$lib/components/heading.svelte';
</script>
  

<div id="heading-div">
  <Heading 
    heading={'Projects'}
  />
</div>
<div id="project-list">
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
    padding: 10vh 19vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;    
  }

  .title {
    color: rgb(189, 110, 149);
  }

  .description {
    color: gray;
  }
</style>