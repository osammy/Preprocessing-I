
// #container {
//   margin: 20px;
//   width: 400px;
//   height: 8px;
//   position: relative;
// }
// var line = new ProgressBar.Line('#container');
// const container = document.querySelector('#pb');
// console.log(container)

var bar1 = new ProgressBar.Line('#progressbar1', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#62b476',
  trailColor: '#4a4e51',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

var bar2 = new ProgressBar.Line('#progressbar2', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#62b476',
  trailColor: '#4a4e51',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar3 = new ProgressBar.Line('#progressbar3', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#62b476',
  trailColor: '#4a4e51',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar4 = new ProgressBar.Line('#progressbar4', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#62b476',
  trailColor: '#4a4e51',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar1.animate(0.5);  // Number from 0.0 to 1.0
bar2.animate(0.8);  // Number from 0.0 to 1.0
bar3.animate(0.9);  // Number from 0.0 to 1.0
bar4.animate(0.9);  // Number from 0.0 to 1.0