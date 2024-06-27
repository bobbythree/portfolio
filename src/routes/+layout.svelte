<script>
  import '../app.css'
</script>

<nav id="nav-bar">
  <h3 id="nav-logo">RELIII</h3>
    <div class="nav-links">
      <a href="/">home</a>
      {#each ['about', 'projects', 'contact'] as link}
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
    height: 5rem;
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
    color: rgb(255, 255, 255);
    text-decoration: underline;    
    transition: 0.5s;
  }
</style>