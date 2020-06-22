import MaxExtZoom from 'facade/maxextzoom';

const map = M.map({
  container: 'mapjs',
});

const mp = new MaxExtZoom();


map.addPlugin(mp);
