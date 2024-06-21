<script>  
  import Heading from '$lib/components/heading.svelte'
</script>


<Heading 
  heading={'Projects'}
/>
  
<div id="container">
  <div>
    <p>Ixonia!</p>
    <img src="src/lib/images/ixoniaThumbnail.png" alt="DM" title="A text-based adventure game built with Javascript">
    <p>click <a href="https://github.com/bobbythree/ixonia">here</a> to view code</p>
  </div>
  <div>
    <p>Canvas Bubbles</p>
    <img src="src/lib/images/bubblesThumbnail.png" alt="DM" title="a simple animation built with HTML Canvas">
    <p>click <a href="https://github.com/bobbythree/HTML-canvas-bubbles">here</a> to view code</p>
  </div>
  <div>
    <p>Drum Machine</p>
    <img src="src/lib/images/DMthumbnail.png" alt="DM" title="a drum machine and sequencer built with Javascript">
    <p>click <a href="https://github.com/bobbythree/drum-machine">here</a> to view code</p>    
  </div>  
</div>


<style>
  #container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  #container div {
    color: rgb(97, 159, 124);
    font-size: 18px;
    display: grid;
    place-items: center;
    height: 300px;
    width: 200px;
    background-color: black;
    padding: 5px;
    border-radius: 5%;
    
  }

  p {
    text-align: center;    
    width: 90%;
    background-color: #121212;
    padding: 5px;
    border-radius: 10px;
  }

  img {
    height: 150px;
    border: 2px solid rgb(89, 89, 89);
    border-radius: 50%;  
  }

  a:hover{
    color: rgb(228, 226, 226);
    transition: 0.5s;
  }

  @media screen and (max-width: 700px) {
    #container {
      display: flex;
      flex-direction: column;
    }
  }
</style>