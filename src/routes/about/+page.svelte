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
      <span class="bio-heading">HISTORY:</span>
      <br>
      My love of computers dates all the way back to when I was a small child. As soon as I got my hands on my first computer I was trying to figure out how it worked and what I could do with it. I spent a lot of those early years playing text adventure games and tinkering with the command line. Computers have always remained a part of my life through work, music and gaming. I haven't as of yet had a computer programming job, but at my past jobs, I have been the employee who best understood the computer programs we used on the job, be it point of sale software and shipping/recieving software in retail, or electronic medical records (EMR) software in clinical environments. Instead of memorizing computer tasks, I always found a deeper understanding of how things worked and so could solve problems and improvise when needed. As a musician and audio engineer, I have learned to operate multiple complex recording software suites such as Logic, Pro Tools and Studio one. To this day I still enjoy adventure games and hacking away at the terminal.
    </p>
    <br>
    <p>
      <span class="bio-heading">EXPERIENCE:</span>
      <br>      
      I began programming in the summer of 2023. I started with an online course on the fundamentals of <span>Javascript/HTML/CSS</span> and immediately began attempting to build things on my own. I have spent every single day since learning and building personal projects. Most of my focus in the first year was on the frontend, using mostly vanilla JavaScript and <span>HTML Canvas</span> and I have some experience with <span>Svelte/Sveltekit</span>. For the past 6 months I have become much more interested in the backend. With JavaScript I have been exploring <span>Express.js/Node.js/mySQL</span>, and for Python I have been using <span>Flask/mySQL</span>. I have experience also with <span>pyTest, git, BASH and python scripting.</span> I am currently learning about containerization with <span>Docker</span>.
    </p>
    <br>
    <p>
      <span class="bio-heading">OBJECTIVES:</span>
      <br>
      I am highly motivated to join a team as a backend dev, fullstack dev or similar role. I code for the love of it and want to put my skills toward a meangful carreer in tech. Wherever I choose to work, I will align myself with the values of the job at hand while bringing my experience, creativity and critical thinking to the table.
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
    margin: 8rem 15vw;
    padding-left: 1rem;
    color: hsl(207, 33%, 55%)  }

  #p-div {
    background-color: rgb(0, 0, 0);
    padding: 1rem;    
    border-radius: 5px;
    
  }

  p {
    padding-left: 2rem;
    background-color: rgb(30, 30, 30);
    padding: 1rem;
    border-width: 1px;
    border: 1px solid rgb(82, 82, 82);
    border-radius: 5px;
  }

  span {
    color: hsl(34, 50%, 91%);
  }
</style>
