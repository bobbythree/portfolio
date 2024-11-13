<script>  
  import Heading from '$lib/components/heading.svelte'
  
  const contacts = [
    {
      name: "email",
      href: "mailto:mynameisbobbylewis@hotmail.com",
    },
    {
      name: "GitHub",
      href: "https://github.com/bobbythree",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bobbythree/",
    }
  ]  

</script>

<div id="heading-div">
  <Heading 
    heading={'Contact Me'}
  />
</div>

<div id="container">
  <div id="contact-links">
    {#each contacts as contact}
      <a href={contact.href} target="_blank" rel="noopener noreferrer">
        <h2>{contact.name}</h2>
      </a>
    {/each}    
  </div>  
</div>


<style>
  #heading-div {
    padding: 0 15vw;
  }

  #contact-links {
    display: flex;
    margin: 10rem 5rem;
    padding: 10rem 10vw;    
    gap: 3rem;
    justify-content: space-around;
    /* background-color: rgba(255, 255, 255, 0.08); */
    
  }

  #contact-links a {       
    color: rgb(189, 110, 149);
    text-decoration: none; 
  }

  #contact-links a:hover {
    color: rgb(199, 167, 183);
    text-decoration: underline;    
    text-decoration-thickness: 2px;
    transition: 0.5s;
  }

  @media screen and (max-width: 666px) {
    #contact-links {
      flex-direction: column;
      text-align: center;
      padding: 0;
    }
  }

</style>
