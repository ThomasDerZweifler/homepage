import React from 'react';
import Header from '@/components/header';
import { useState } from 'react';
import './style.css';

const TagCloud = () => {
  let items = [];

  const [inputValue, setInpuValue] = useState(String);

  const [cloudTags, setCloudTags] = useState(React.ReactComponentClass);

  const makeTextCloud = (str) => {
    str = str.split(' ');

    var words = [];
    for (var i = 1; i < str.length; i++) {
      var wordExists = false;

      for (var j = 0; j < words.length; j++) {
        if (str[i] == words[j].word) {
          words[j].freq += 1;

          wordExists = true;
          break;
        }
      }

      if (str[i] != '' && !wordExists) {
        words.push({
          word: str[i],
          freq: 1
        });
      }
    }

    for (var i = 0; i < words.length; i++) {
      var obj = words[i];

      var component = React.createElement(
        'font',
        {
          size: obj.freq,
          key: i,
          id: 'word'
        },
        obj.word + ' '
      );

      items.push(component);
    }

    setCloudTags(items);
  };

  var demoText =
    'Word4 Word5 Word5 Word3 Word1 Word2 Word2 Word2 Word2 Word3 Word3 Word2 Word7 Word Word Word Word ' +
    'Word6 Word6 Word6 Word6 Word6 Word6';

  var hint = 'Bitte gib einen Text ein oder d für eine Demotext';

  const handleChange = (event) => {
    var inputText = event.target.value;
    if (inputText == 'd') {
      inputText = demoText;
    }
    setInpuValue(inputText);
    makeTextCloud(inputText);
  };

  return (
    <div>
      <Header />
      <h1>Textwolke</h1>

      <div class="flex-container">
        <div>
          <textarea
            class="input"
            onChange={handleChange}
            value={inputValue}
            placeholder={hint}
            rows={30}
            cols={80}>
            {demoText}
          </textarea>
        </div>

        <div class="tagcloud"> {cloudTags}</div>
      </div>
    </div>
  );
};

export default TagCloud;
