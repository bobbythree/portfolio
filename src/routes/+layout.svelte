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
    color: rgb(221, 221, 221);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
  }

  #nav-logo {
    color: rgb(221, 221, 221);
  }

  .nav-links {    
    display: flex;
    gap: 3rem;
    align-items: center;    
  }

  a {    
    text-decoration: none;
    color: rgb(221, 221, 221);
  }

  a:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;    
    transition: 0.5s;
  }
</style>