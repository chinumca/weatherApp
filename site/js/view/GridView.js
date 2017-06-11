/**
 * Creates 'GridView' view.
 * updates the dom as per the data received from Observer
 * @author Sachin Patil (sachinpatil_mca@yahoo.in)
 */

class GridView
    {
        
 /**
 * Creates an instance of GridView.
 *
 * @constructor
 * @this {GridView}
 * @param {stompService} model on from which view get data.
 */
        constructor(stompService)
        {  
            this.stompService=stompService;
            this.container=document.getElementById('viewTable');
			this.connectionStatus=document.getElementById('connectionStatus');
			this.connectionStatusIcon=document.getElementById('connectionStatusIcon');
        }
		
/**
 * this method get called from observer
 * @this {GridView}
 */
        render() 
        {
            let currencyArray=this.stompService.currencyArray
            let str=" <tr><th>Name</th><th>Current Best Bid Price</th><th>Current Best Ask Price</th><th>Best Bid Last Changed</th><th>Best Ask Last Changed</th><th>Mid Price</th></tr>";
            for (let i = currencyArray.length-1; i >=0 ; i--) 
            {
                str+="<tr><td>"+currencyArray[i].name+"</td><td>"+(currencyArray[i].bestBid).toFixed(3)+"</td><td>"+(currencyArray[i].bestAsk).toFixed(3)+"</td><td>"+(currencyArray[i].lastChangeBid).toFixed(3)+"</td><td>"+(currencyArray[i].lastChangeAsk).toFixed(3)+"</td><td><span id='example-sparkline"+i+"'</span></td></tr>";
            }
            this.container.innerHTML=str;
            for (let i = 0; i < currencyArray.length; i++) 
            {
                let exampleSparkline=document.getElementById("example-sparkline"+i);
                Sparkline.draw(exampleSparkline, currencyArray[i].sparkArr);
            }
            return;
        }
		
/**
 * this method get called from observer. This will update server connections status.
 * @this {GridView}
 */
		showConnectionStatus(b){
			if(b)
			{
				this.connectionStatus.innerHTML="Connected to Server";
				this.connectionStatusIcon.className ="serverSuccess";
			}
			else
			{
				this.connectionStatus.innerHTML="Error in Connection";
				this.connectionStatusIcon.className ="serverError";
			}
		}
    }
/**
 * @exports exports this module
 */
module.exports = GridView;