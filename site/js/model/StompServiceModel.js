/**
 * Creates 'StompServiceModel' model.
 * Receives view (which need to update) in constructor function.
 * inherits the observer and subscribe view to it
 * Receives data from Stomp service and updates the observer
 * @author Sachin Patil (sachinpatil_mca@yahoo.in)
 */

/** 
 * imports Observer module.
 */
let Observer = require("../observer/Observer");
class StompServiceModel extends Observer
    {

 /**
 * Creates an instance of StompServiceModel.
 *
 * @constructor
 * @this {StompServiceModel}
 * @param {view} this view will get subscribe with observer.
 */
        constructor(view)
        {
            super();
            this.view =view; /* assigns view to private variable */
            const URL = "ws://localhost:8011/stomp";/* constant url for data from Stomp service */
            let DEBUG = false; /* variable to set log of Stomp service*/ 
            this.client = Stomp.client(URL);/* private variable which initialise Stomp service client*/
            this.currencyArray=[];/* private variable to store Stomp service data*/
            this.client.debug = function(msg) {
                if (DEBUG) {
                    console.info(msg);
                }
            }
        }

 /**
 *  starts Stomp service.
 *
 * @this {StompServiceModel}
 * @param connect method contains success and erroe callback.
 */
        startService()
        {
            this.client.connect({}, this.connectSuccess.bind(this), this.connectError);
            return;
        }

 /**
 *  this function get calls if Stomp service has error.
 *
 */
        connectError(error)
        {
			this.notifyconnection(false);
            alert(error.headers.message);
             return;
        }

 /**
 *  this function get calls if Stomp service successfully connected
 *
 * @this {StompServiceModel}
 */
        connectSuccess() 
        {
			this.notifyconnection(true);
            this.client.subscribe("/fx/prices", this.successData.bind(this));
             return;
        }

 /**
 *  this function get calls if Stomp service successfully returns data.
 * it parses data to json format.
 * send data to updateArray method which processes data in currencyArray
 * observer notify the subscriber i.e. view
 *
 * @this {StompServiceModel}
 * @param parameter contains returned data from Stomp service.
 */
        successData(msg)
        { 
            let message=JSON.parse(msg.body);
            this.updateArray(message, this.currencyArray);
            this.notifyObserver();
            
        }

 /**
 *  this is utility function process currencyArray.
 * if data is not present in currencyArray it will add it.
 * if data is present in currencyArray it will update it.
 * recent changed data is kept at end of array.
 * mentains recent 10 spark poins for Sparkline.
 *
 * @param parameter contains recent data from Stomp service and array to be update.
 */
        updateArray(obj, list) 
        {
		
            for (let i = 0; i < list.length; i++) 
            {
                 if (list[i].name === obj.name) 
                {
				/* below code will get call if obj is present in list. this will update obj in list array.*/
				
                    obj.sparkArr=list[i].sparkArr;
                    list.splice(i, 1 );
                    list.push(obj);
                    list[i].sparkArr.push((obj.bestBid+obj.bestAsk)/2);
                    if(list[i].sparkArr.length>10)
                    {
                        list[i].sparkArr.shift();
                    }
					
					/* below code will sort list array with respect to objects lastChangeAsk property.*/
					list.sort(function(a, b) {
						if (a.lastChangeAsk < b.lastChangeAsk)
						return 1;
						if (a.lastChangeAsk > b.lastChangeAsk)
						return -1;
						return 0;
					});
                    return;
                }
            }
            
			/* below code will get call if obj is not present in list. this will add obj in list array.*/
			obj.sparkArr=[];
            obj.sparkArr.push((obj.bestBid+obj.bestAsk)/2);
            list.push(obj);
			
			/* below code will sort list array with respect to objects lastChangeAsk property.*/
			list.sort(function(a, b) {
						if (a.lastChangeAsk < b.lastChangeAsk)
						return 1;
						if (a.lastChangeAsk > b.lastChangeAsk)
						return -1;
						return 0;
					});
					
            return;  
        }
    }
/**
 * @exports exports this module
 */
module.exports = StompServiceModel;