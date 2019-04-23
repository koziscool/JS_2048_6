
import model2048 from "./model_2048.js"
controller2048 = {

  model: model2048,
  view: view2048,

  init: function(  ){
    this.model.init();
    this.view.init();
  },

};

