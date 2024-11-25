/*
 *
 */
class TagCloud extends React.Component {

  constructor(props) {
    super(props);
    this.words = {
      value: [{
        word: '',
        freq: 0
      }]
    }
    this.descWords = {
      value: [{
        word: '',
        freq: 0
      }]
    }
    this.state = {
      value: props.value
    }
    this.freq = {
        value: ''
      }
      // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    var str = event.target.value

    str = str.split(" ");

    var words = []

    for (var i = 1; i < str.length; i++) {

      var wordExists = false;

      for (var j = 0; j < words.length; j++) {
        if (str[i] == words[j].word) {

          words[j].freq += 1;

          wordExists = true;
          break;
        }
      }

      if (str[i] != "" && !wordExists) {
        words.push({
          "word": str[i],
          "freq": 1
        });
      }
    }

    this.words = {
      value: words
    }

    //duplicate the words array for sorting
    var descWords = words.slice()

    descWords.sort(function(a, b) {
      return b.freq - a.freq
    })

    var frequencies = ''

    for (var i = 0; i < descWords.length; i++) {
      frequencies += descWords[i].word + ':' + descWords[i].freq + '; '
    }

    this.freq = {
      value: frequencies
    }

    this.setState({
      value: event.target.value
    })

  }

  render() {

    var input = < textarea id = 'input'
    onChange = {
      (event) => {
        this.handleChange(event)
      }
    }
    
    placeholder = 'your input'
    
    rows = '10'
    cols = '80'
    value = {
      this.state.value
    }
    /> 

    var frequencies = < textarea id='frequencies'

    placeholder = 'word:frequency; ...'

    rows = '10'
    cols = '80'
    value = {
      this.freq.value
    }
    /> 

    let items = [];
    for (var i = 0; i < this.words.value.length; i++) {
      var obj = this.words.value[i]
      items.push(
        React.createElement('font', {
          size: obj.freq, key: i, id: 'word'
        }, obj.word+" ")
      )
    }

    var tagcloud = <div id="tagcloud"> {
      items
    }

    </div>

    var content = < div > {
      input
    } {
      frequencies
    } {
      tagcloud
    } < /div>

    return (content)

  }
}
var words = 'Word4 Word5 Word5 Word3 Word1 Word2 Word2 Word2 Word2 Word2 Word3 Word3 Word2 Word7 Wortd'
ReactDOM.render( < TagCloud value = {
      words
    }
    / > ,
    document.getElementById('root')
  )
  //triggers the change event on start
var event = new Event('input', {
  bubbles: true
});
document.getElementById('input').dispatchEvent(event)