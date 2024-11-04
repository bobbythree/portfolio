<script>  
  import Heading from '$lib/components/heading.svelte'
  
</script>

<div id="heading-div">
  <Heading 
    heading={'Contact Me'}
  />
</div>

<div id="contact-links">
  <a href="mailto:mynameisbobbylewis@hotmail.com" target="_blank" rel="noopener noreferrer">
    <h2>email</h2>
  </a>
  <a href="https://github.com/bobbythree" target="_blank" rel="noopener noreferrer">
    <h2>GitHub</h2>
  </a>
  <a href="https://www.linkedin.com/in/robert-lewis-iii-314497290/" target="_blank" rel="noopener noreferrer">
    <h2>LinkedIn</h2>
  </a>
</div>

<style>
  #heading-div {
    padding: 0 15vw;
  }

  #contact-links {
    display: flex;
    flex-direction: column;
    padding: 8rem 15vw;
    
    gap: 1rem;
    /* background-color: white; */
  }

  #contact-links a {
    width: 0;   
    color: rgb(189, 110, 149);
    text-decoration: none;
    padding-left: 2rem;
    /* background-color: gray; */
  }

  #contact-links a:hover {
    color: antiquewhite;
    text-decoration: underline;    
    text-decoration-thickness: 2px;
    transition: 0.5s;
  }
</style>
