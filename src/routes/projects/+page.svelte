<script>  
  import Heading from '$lib/components/heading.svelte';

  let cards = [
    {
      name: 'Ixonia',
      image: 'src/lib/images/ixoniaThumbnail.png',
      link: 'https://github.com/bobbythree/ixonia',
      alt: 'Ixonia',
      tooltip: 'A text-based adventure game built with Javascript'       
    },
    {
      name: 'Canvas Bubbles',
      image: 'src/lib/images/bubblesThumbnail.png',
      link: 'https://github.com/bobbythree/HTML-canvas-bubbles',
      alt: 'Canvas Bubbles',
      tooltip: 'a simple animation built with HTML Canvas'    
    },
    {
      name: 'Drum Machine',
      image: 'src/lib/images/DMThumbnail.png',
      link: 'https://github.com/bobbythree/drum-machine',
      alt: 'Drum Machine',
      tooltip: 'a drum machine and sequencer built with Javascript'   
    }
  ]
</script>


<Heading 
  heading={'Projects'}
/>

<div id="container">  
  {#each cards as card}
  <div>
    <p>{card.name}</p>
    <img src="{card.image}" alt="{card.alt}" title="{card.tooltip}">
    <p>click <a href="{card.link}">here</a> to view code</p>
  </div>  
  
  {/each}
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

  img:hover {
    filter: blur(8px);
    transition: 0.5s;
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