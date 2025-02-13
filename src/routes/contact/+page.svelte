<script>  
  import Heading from '$lib/components/heading.svelte'

  const logos = [
    '<i class="fa-solid fa-envelope fa-xl"></i>',
    '<i class="fa-brands fa-github fa-xl"></i>',
    '<i class="fa-brands fa-linkedin fa-xl"></i>'
  ]
  
  const contacts = [
    {
      name: "email",
      logo: logos[0],
      linkHeading:"Shoot me an email",
      href: "mailto:mynameisbobbylewis@hotmail.com"
    },
    {
      name: "GitHub",
      linkHeading: "See all my projects here",
      logo: logos[1],
      href: "https://github.com/bobbythree"
    },
    {
      name: "LinkedIn",
      linkHeading: "Connect with me on LinkedIn",
      logo: logos[2],
      href: "https://www.linkedin.com/in/bobbythree/"
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
      <h2 id="link">{contact.linkHeading}              
      <a href={contact.href} target="_blank" rel="noopener noreferrer">
        <div id="logo">{@html contact.logo}</div>
      </a>
      </h2>
    {/each}    
  </div>  
</div>


<style>
  #heading-div {
    padding: 0 15vw;
    display: flex;
  }

  #contact-links {
    display: flex;
    margin: 10rem 5rem;
    padding: 8rem 10vw;    
    gap: 3rem;
    justify-content: space-around;
    text-align: center;
    /* background-color: rgba(255, 255, 255, 0.08); */
    
  }

  #link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    color: hsl(207, 33%, 60%)
  }

  #logo {
    color: hsl(0, 0%, 40%);
  }

  #logo:hover {
    color: hsl(123, 33%, 65%);
    transition: 0.5s;
  }

  @media screen and (max-width: 666px) {
    #contact-links {
      flex-direction: column;
      padding: 0;
      gap: 7rem;
    }
  }

</style>
