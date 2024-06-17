<script>  
  import Typewriter from 'svelte-typewriter'
</script>

<Typewriter interval=60>
  <h1 id="heading">Robert Edward Lewis III</h1>
</Typewriter>

<Typewriter mode=scramble scrambleDuration=2000>
  <h2 id="subHeading">Frontend Programmer, Wielder of Javascript</h2>
</Typewriter>


<style>
  #heading {    
    color: rgb(250, 192, 117);
    /* text-align: center; */
    padding: 2rem;
    --cursor-color: #121212;    
  }

  #subHeading { 
    position: absolute;
    top: 150px;
    left: 0px;   
    color: rgb(189, 110, 149);
    font-weight: 200;
    /* text-align: center; */
    padding: 2rem;
    padding-top: 0;
  }

  
</style>
