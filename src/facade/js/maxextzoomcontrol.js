/**
 * @module M/control/MaxExtZoomControl
 */

import MaxExtZoomImplControl from 'impl/maxextzoomcontrol';
import template from 'templates/maxextzoom';

export default class MaxExtZoomControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor() {
    if (M.utils.isUndefined(MaxExtZoomImplControl)) {
      M.exception('La implementación usada no puede crear controles MaxExtZoomControl');
    }
    const impl = new MaxExtZoomImplControl();
    super(impl, 'MaxExtZoom');
  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {
    this.map = map;
    return new Promise((success, fail) => {
      const html = M.template.compileSync(template);
      html.querySelector('#m-maxextzoom-button').addEventListener('click', this.zoomToDefaultBox.bind(this));
      success(html);
    });
  }

  zoomToDefaultBox() {
    this.map.zoomToMaxExtent();
  }


  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   */
  equals(control) {
    return control instanceof MaxExtZoomControl;
  }
}
