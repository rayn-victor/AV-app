Vue.component('player',{
    props: ['movie'],
  
    template: `
    <div class="movieCon">
      <h3 class="movie-title"> {{ movie.videotitle }}</h3>
      <video :src=" 'video/' + movie.vidsource " controls autoplay></video>
      <div class="movie-details">
        <p>{{ movie.videodescription }}</p>
      </div>
    </div>
    `
  })

  var vm = new Vue({
    el: "#app",
  
    data: {
  
      user: {
        
        isLoggedIn: true,
        settings: {}
      },
  
      videodata: [
        { name: "Young Guns", thumb: "youngguns.jpg", vidsource: "youngguns.mp4", description: "When John Tunstall is gunned down by the crooked Lawrence G. Murphy, a ragtag group of cow hands - including Doc Scurlock, Richard Brewer and young William 'Billy the Kid' Bonney - ride forth in search of bloody vengeance for the death of their beloved mentor." },
        { name: "Hawaii Five-O", thumb: "hawaiifiveo.jpg", vidsource: "hawaiifiveo.mp4", description: "'Tin Idol!!' 4 ways: live phone exchange; reel to reel taped version; nearly eidetic memory/Eureka! Moment from Steve; and in written word, with Steve M. dotting the 'i' for good measure." },
        { name: "Cat People - David Bowie", thumb: "catpeople.jpg", vidsource: "catpeople.mp4", description: "Cat People (Putting Out Fire) is a song from David Bowie's album Let's Dance. It is featured in many movies and shows such as Inglourious Basterds, Atomic Blonde and The Office." }
      ],
  
      movie:{
        videotitle: "",
        vidsource: "",
        videodescription: ""
      },
      
  
      showDetails: false
    },
  
    created: function(){
      console.log('created life cycle hook fired here, go get user data');
      this.getUserData();
    },
  
    methods: {
      getUserData(){
        const url = './includes/index.php?getUser=1';
  
        fetch(url)
          .then(res => res.json()) 
          .then(data => { 
            console.log(data) 
  
            this.user.settings = data[0];
  ;        })
          .catch((error) => console.error(error))
  
      },
  
      setUserPrefs(){
        console.log('set user prefs here');
      },
  
      userLogin(){
        console.log('do login /  logout on click');
  
        this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
      },
  
      showMovieDetails({name, vidsource, description}) {
  
        this.movie.videotitle = name;
        this.movie.vidsource = vidsource;
        this.movie.videodescription = description;
  
        this.showDetails = true;
      }
    }
  });