/**
 * This javascript file will constitute the entry point of your solution.
 * this coantins instances of model and view.
 * @author Sachin Patil (sachinpatil_mca@yahoo.in)
 */

/** 
 *  This is not really required, but means that changes to index.html will cause a reload.
 */
require('./site/index.html');

/** 
 * Apply the styles in style.css to the page.
 */
require('./site/style.css');

/** 
 * imports GridView module.
 */
let GridView = require("./site/js/view/GridView");

/** 
 * imports StompServiceModel module.
 */
let StompServiceModel=require("./site/js/model/StompServiceModel");



/** 
 * creates instance of StompServiceModel module.
 */
let stompService=new StompServiceModel();

/** 
 * creates instance of GridView module.
 */
var view = new GridView(stompService);

/** 
 *  add view to observer for stomp service.
 */
stompService.subscribe(view);

/** 
 *  start stomp service to get the data.
 */
stompService.startService();


