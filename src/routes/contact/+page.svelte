<script>  
  import Heading from '$lib/components/heading.svelte'
  
</script>

<div id="heading-div">
  <Heading 
    heading={'Contact Me'}
  />
</div>

<div id="contact-links">
  <a href="mailto:mynameisbobbylewis@hotmail.com">email</a>
  <a href="https://github.com/bobbythree">GitHub</a>
  <a href="https://www.linkedin.com/in/robert-lewis-iii-314497290/">LinkedIn</a>
</div>

<style>
  #heading-div {
    padding: 0 15vw;
  }

  #contact-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    gap: 1rem;
  }

  #contact-links a {
    color: rgb(97, 159, 124);;
    text-decoration: none;
  }

  #contact-links a:hover {
    color: rgb(175, 234, 255);
    text-decoration: underline;
    text-decoration-color: rgb(193, 237, 179);
    text-decoration-thickness: 2px;
    transition: 0.5s;
  }
</style>