<script>
  import Typewriter from 'svelte-typewriter';
  export let subHeading; 
</script>

<Typewriter mode=scramble scrambleDuration=2000>
  <h2 id="subHeading">{subHeading}</h2>
</Typewriter>


<style>
  #subHeading {      
    padding-left: 2rem;
    color: rgb(189, 110, 149);
    font-weight: 200;    
  }
</style>