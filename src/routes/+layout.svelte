<script>
  import '../app.css'
</script>

<nav id="nav-bar">
  <h3 id="nav-logo">RELIII</h3>
    <div class="nav-links">
      <a href="/">home</a>
      {#each ['projects', 'contact'] as link}
        <a href="{link}">{link}</a>
      {/each}
    
  </div>  
</nav>

<slot></slot>

<style>

  #nav-bar {
    background-color: #121212;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    height: 10vh;
  }

  #nav-logo {
    color: antiquewhite;    
  }

  .nav-links {    
    display: flex;
    gap: 3rem;
    align-items: center;    
  }

  a {    
    text-decoration: none;
    color: gray;
  }

  a:hover {
    color: antiquewhite;
    text-decoration: underline;    
    transition: 0.5s;
  }

  @media screen and (max-width: 666px) {
    #nav-bar {
      justify-content: space-evenly;
    }

    #nav-logo {
      display: none;
    }
  }
</style>