<script>  
  import Heading from '$lib/components/heading.svelte'
</script>

<div id="heading-div">
  <Heading 
    heading={'About Me'} />
</div>


<div id="bio">
  <div id="p-div">
    <p>
      <span class="bio-heading">WHOAMI:</span>
      <br><br>
      My name is <span>Robert Lewis III</span> (Bobby Three). I am an entry level computer programmer. I code for the absolute love of it. I am highly motivated to join a team as a backend dev or fullstack dev. 
    </p>
    <br>
    <p>
      <span class="bio-heading">MY TECH STACK:</span>
      <br><br>      
      <span>JavaScript</span>: HTML, CSS, Canvas API, Svelte/SvelteKit, Node.js, Express.js<br>
      <span>Python:</span> Flask, Pytest<br>
      <span>SQL:</span> mySQL
      
    </p>
    <br>
    <p>
      <span class="bio-heading">EXPERIENCE:</span>
      <br><br>
      I have 1.5 years of experience building personal projects such as web apps, automation scripts, text adventures, simple audio software, text parsers, RESTful APIs, particle systems, and web animations. I have experience with <span>Linux, bash, git, Vercel and Docker</span>.
    </p>
  </div>
  
</div>


<style>
  #heading-div {
    padding: 0 15vw;
  }

  .bio-heading {
    color: hsl(123, 33%, 65%);
  }

  #bio {
    text-align: start;
    margin: 7rem 15vw;
    padding-left: 1rem;
    color: hsl(207, 33%, 55%);
    width: 700px;
  }

  #p-div {
    background-color: rgb(0, 0, 0);
    padding: 1rem;    
    border-radius: 5px;
    
  }

  p {
    background-color: rgb(30, 30, 30);
    padding: 2rem;
    border-width: 1px;
    border: 1px solid rgb(82, 82, 82);
    border-radius: 5px;
  }

  span {
    color: hsl(34, 50%, 88%);
  }
</style>
