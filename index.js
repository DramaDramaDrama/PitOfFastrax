
module.exports = function pop(dispatch) {
  let zone = null;
  let loc = {x: -130600.015625, y: -114000.203125, z: 249.25588989257812};
  dispatch.hook('S_LOAD_TOPO', 3, (event) => {
    zone = event.zone;
  });
  dispatch.hook('S_SPAWN_ME', 2, {order: 200}, (event) => {
    if(zone == 9126) {
      event.loc = loc;
      return true;
    }
  });
}