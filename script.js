const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
];

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
