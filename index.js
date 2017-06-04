/**
 * This javascript file will constitute the entry point of your solution.
 * this coantins instances of model and view.
 * @author Sachin Patil (sachinpatil_mca@yahoo.in)
 */

/** 
 *  This is not really required, but means that changes to index.html will cause a reload.
 */
require('./site/index.html')

/** 
 * Apply the styles in style.css to the page.
 */
require('./site/style.css')

/** 
 * imports GridView module.
 */
var GridView = require("./site/js/GridView")

/** 
 * imports StompServiceModel module.
 */
var StompServiceModel = require("./site/js/StompServiceModel")

/** 
 * creates instance of GridView module.
 */
let gridView=document.getElementById('viewTable');
var view = new GridView(gridView);

/** 
 * creates instance of StompServiceModel module.
 * and starts Stomp service.
 */
let stompService=new StompServiceModel(view);
stompService.startService()

