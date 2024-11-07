<script>
  import Heading from '$lib/components/heading.svelte'; 

  const projects = [
    {
      title: 'Ixonia!', 
      description: 'A multiple choice interactive fiction written in JavaScript',
      hrefCode: 'https://github.com/bobbythree/ixonia',
      hrefPlay: 'https://bobbythree.github.io/ixonia/'
    },
    {
      title: 'Maitreya\'s Quest', 
      description: 'A text-based adventure game written in Python',
      hrefCode: 'https://github.com/bobbythree/maitreya-text-adventure',
      hrefPlay: '/'
    },
    {
      title: 'Python Project setup automation', 
      description: 'A Python script that sets up a project directory with subdirectories',
      hrefCode: 'https://github.com/bobbythree/py-project-structure-automation',
      hrefPlay: '/'
    },
    
  ];
  
  const icons = [
    '<svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>',
    
    '<svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#808080"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>'

  ]
  
</script>
  

<div id="heading-div">
  <Heading 
    heading={'Projects'}
  />
</div>

<div id="container">
  <div id="project-list">
    {#each projects as project}
      <div class="project">
        <h2 class="title">{project.title}</h2>
        <h3 class="description">{project.description}</h3>
        <div class="icons">
          <a href="{project.hrefCode}" target="_blank" rel="noopener noreferrer">
            {@html icons[0]}
          </a>
          <a href="{project.hrefPlay}" target="_blank" rel="noopener noreferrer">
            {@html icons[1]}
          </a>               
        </div>        
      </div>      
    {/each}
  </div>
</div>

<style>
  #heading-div {
    padding: 0 15vw;
  }
  
  #container {
    position: absolute;
    top: 22%;
    left: 15%;
    
    background-color: rgb(0, 0, 0);
    padding: 1rem;    
    border-radius: 5px;  
  }

  #project-list {
    border-radius: 5px;         
    width: 700px;    
    display: flex;
    flex-direction: column;  
    justify-content: center;
    gap: 2rem;
           
  }

  .project {
    background-color: rgb(30, 30, 30);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
  }

  .title {    
    color: hsl(207, 33%, 60%);
    padding: 2rem 2rem;
    padding-bottom: 0;
    border-top: 1px solid rgb(82, 82, 82);
    border-left: 1px solid rgb(82, 82, 82);
    border-right: 1px solid rgb(82, 82, 82);     
  }
 
  .description {    
    color: rgb(223, 223, 223);
    padding-left: 2rem;
    font-weight: 100;
    border-left: 1px solid rgb(82, 82, 82);
    border-right: 1px solid rgb(82, 82, 82);   
  }

  .icons {    
    padding-left: 2rem;
    padding-bottom: 1.7rem;
    border-bottom: 1px solid rgb(82, 82, 82);
    border-left: 1px solid rgb(82, 82, 82);
    border-right: 1px solid rgb(82, 82, 82);
  }

  
</style>
