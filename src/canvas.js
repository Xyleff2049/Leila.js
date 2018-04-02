
/**
* file : canvas.js
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

const CanvasManager = {};

CanvasManager.createCanvas = function (width, height, parent) {
  this._canvas = document.createElement('canvas');
  this._canvas.width = width || 400;
  this._canvas.height = height || 400;
  this.canvasParent(parent || 'body');
};

CanvasManager.canvasParams = function (params) {
  if(typeof params === 'object') {
    for(let index in params) {
      this._canvas.setAttribute(index, params[index]);
    }
  } else {
    console.error('[LeilaJs] Canvas.bindParam: params is not an object');
  }
};

CanvasManager.canvasParent = function (parent) {
  document.querySelector(parent).appendChild(this._canvas);
};

CanvasManager.get2dContext = function () {
  if(this._canvas) {
    return this._canvas.getContext('2d');
  } else {
    console.error('[LeilaJs] Canvas.get2dContext: no canvas created');
  }
};  

module.exports = CanvasManager;