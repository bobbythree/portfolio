<script>
  import Typewriter from 'svelte-typewriter';
  export let heading;    
</script>

<Typewriter interval=60>
  <h1 id="heading">{heading}</h1>
</Typewriter>

<style>
  #heading {
    position: absolute;
    top: 70px;    
    color: rgb(250, 192, 117);    
    padding: 2rem;
    padding-bottom: 0;
    --cursor-color: #121212;    
}

@media screen and (max-width: 666px) {
  #heading {
    font-size: 24px;
    position: static;
    text-align: center;
  }
}
</style>
