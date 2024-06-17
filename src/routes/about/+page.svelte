<script>  
  import Heading from '$lib/components/heading.svelte'
</script>


<Heading 
  heading={'About Me'}
/>

<div id="bio">
  <p>
    My love of computers dates all the way back to when I was a small child. As soon as I got my hands on my first computer I was trying to figure out how it worked and what I could do with it. I spent a lot of those early years playing text adventure games and tinkering with the command line. Computers have always remained a part of my life through work, music and gaming. I never had a computer or tech job per se, but at my past jobs, I have been the employee who best understood the computer system we used on the job, be it a point of sale software and shipping/recieving software in retail, or electronic medical records (EMR) software in clinical environments. Instead of memorizing computer tasks, I always found a deeper understanding of how things worked and so could solve problems and improvise when needed. As a musician and audio engineer, I have learned to operate multiple recording software suites such as Logic, Pro Tools and Studio one. To this day I still enjoy adventure games and hacking away at the terminal.
  </p>
  <p>
    It was in the summer of 2023 that I made the choice to persue computer programming as a career. I took a life changing trip to Alaska with my family and something struck me very profoundly out there in the wilderness. I realized that I could do anything with the rest of my life from that moment forward and I made a decision to learn to program. Since that trip I have spent every single day learning and applying my newfound skills. I started with an online course on the fundamentals of <span>Javascript/HTML/CSS</span> and immediately began attempting to build things on my own. Most of my focus has remained in the frontend but I have experimented some with <span>mySQL/Express.js/Node</span> on the back end. My current journey has mostly been exploring the <span>HTML Canvas API</span>, with which I've been learning how to build/animate particle systems, sine waves and games. I've also been learning <span>Svelte/Sveltekit</span>, using it to build this porfolio website.
  </p>
</div>


<style>
  #bio {
    text-align: left;
    padding: 2rem 10rem;
    color: rgb(97, 159, 124);;
  }

  p {
    text-indent: 2rem;
  }

  span {
    color: antiquewhite;
  }
</style>