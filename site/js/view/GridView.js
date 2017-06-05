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
        }
/**
 * this method get called from observer
 * @this {GridView}
 */
        render() 
        {
            let currencyArray=this.stompService.currencyArray
            let str=" <tr><th>Name</th><th>current best bid price</th><th>current best ask price</th><th>Best bid last changed</th><th>Best ask last changed</th><th>mid price</th></tr>";
            for (let i = currencyArray.length-1; i >=0 ; i--) 
            {
                str+="<tr><td>"+currencyArray[i].name+"</td><td>"+currencyArray[i].bestBid+"</td><td>"+currencyArray[i].bestAsk+"</td><td>"+currencyArray[i].lastChangeBid+"</td><td>"+currencyArray[i].lastChangeAsk+"</td><td><span id='example-sparkline"+i+"'</span></td></tr>";
            }
            this.container.innerHTML=str;
            for (let i = 0; i < currencyArray.length; i++) 
            {
                let exampleSparkline=document.getElementById("example-sparkline"+i);
                Sparkline.draw(exampleSparkline, currencyArray[i].sparkArr);
            }
            return;
        }
    }
/**
 * @exports exports this module
 */
module.exports = GridView;