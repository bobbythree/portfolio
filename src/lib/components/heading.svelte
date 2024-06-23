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
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;  
  }

  #heading-div {
    width: 100vw;
    background-color: rgb(36, 36, 36);    
    padding: 0.35rem;
           
  }

  #heading {
    color: rgb(252, 190, 110);
    text-align: center;
    padding: 1rem;    
  }

  
</style>