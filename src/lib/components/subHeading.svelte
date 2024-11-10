<script>
  import Typewriter from 'svelte-typewriter';
  export let subHeading; 
</script>

<Typewriter mode=scramble scrambleDuration=2000>
  <h2 id="subHeading">{subHeading}</h2>
</Typewriter>

<style>
  #subHeading {
    position: absolute;
    top: 140px;       
    padding-left: 2rem;
    color: rgb(189, 110, 149);
    font-weight: 200;    
  }

  @media screen and (max-width: 600px) {
  #subHeading {
    font-size: 18px;
    position: static;
    text-align: center;
    padding: 0 1rem;
  }
}
</style>