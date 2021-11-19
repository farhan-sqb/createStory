

window.onload = function(){



  let element = document.querySelector('div#flex-container');



  let wrapper = document.createElement('div');

  wrapper.id = 'story_selection';

  let selectList = document.createElement("select");

  selectList.id = "story";

  selectList.className = "custom-select";

  wrapper.appendChild(selectList);



  let option = document.createElement("option");

  option.value = "";

  option.text = "Please Select Story";

  selectList.appendChild(option);

  //Create and append the options

  for (let i = 0; i < stories.length; i++) {

      let option = document.createElement("option");

      option.value = i;

      option.text = stories[i].title;

      selectList.appendChild(option);

  }



  element.appendChild(wrapper);





  document.getElementById('story').addEventListener('change', function() {



    if(this.value != ""){

      document.getElementById('story_selection').style.display = 'none';

      document.getElementById('section-heading').innerHTML = 'Provide the following words:';

      

      for (let i = 0; i < stories[this.value].words.length; i++) {

        let div = document.createElement('div');

        div.className = 'story_items';

        let input = document.createElement("input");

        input.type = 'text';

        input.setAttribute('required', 'required');

        input.id = stories[this.value].words[i];

        input.className = "custom-select fields";

        input.name = stories[this.value].words[i];

        input.placeholder = stories[this.value].words[i];

        div.appendChild(input);

        

        element.appendChild(div);

      }



      //Add Read Button

      let div = document.createElement('div');

      div.className = 'story_items';

      let input = document.createElement("input");

      input.type = 'button';

      input.value = 'Read Story';

      input.id = 'read_story';

      input.className = "btn_story";

      div.appendChild(input);

      

      element.appendChild(div);



      document.getElementById('read_story').addEventListener('click', function() {



        const words = {};

        let fields = document.querySelectorAll('.fields').forEach(function(el){

          words[el.name] = el.value;

        });



        //Get Current Story

        let currentStory = document.getElementById('story').value;



        const story = stories[currentStory];



        let divsToHide = document.getElementsByClassName("story_items");

        for(let i = 0; i < divsToHide.length; i++){

            divsToHide[i].style.display = "none";

        }



        document.getElementById('section-heading').style.display = 'none';



        let div = document.createElement('div');

        div.id = 'story_final';

        div.innerHTML = '<h2>'+stories[currentStory].title+'</h2>' + story.output(words);



        element.appendChild(div);

        

        //Add Restart Button

        let input = document.createElement("input");

        input.type = 'button';

        input.value = 'Create another story';

        input.id = 'create_story';

        input.className = "btn_story";

        div.appendChild(input);

        

        element.appendChild(div);

        

        document.getElementById('create_story').addEventListener('click', function() {

          window.location.href = window.location.href;

        });



      });



    }

  });

  

}

