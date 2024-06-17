<script>
  export let heading;    
</script>

<div id="container">
  <div id="heading-div">
    <h1 id="heading">{heading}</h1>
  </div>  
</div>


<style>
  #container {    
    padding: 3rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;  
  }

  #heading-div {
    width: 50vw;
    background-color: rgb(36, 36, 36);    
    padding: 1rem;
    border-radius: 33px;
    filter: drop-shadow(8px 8px 10px black);    
  }

  #heading {
    color: rgb(252, 190, 110);
    text-align: center;
    padding: 1rem;    
  }

  
</style>