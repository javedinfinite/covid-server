//Given an array containing prices of stock on daily basis, the index+1 of array represents the day
//a number k is given which represents number of transaction allowed.
//you can buy a stock starting from any day  and sell it on any other day.
//before buying another stock you must sell the stock first.
//buying and then selling is considered as one transaction. 
//you need to give output as maximum possible profit under given possible transaction

const getMaxProfit = (price_list, max_ald_tran) =>{

    let totalTradingDays = price_list.length
    //creating 2d matrix where rows will represent each day and column will represent each transaction 
    //and each value will represent profits on the day with max transaction
    var profit = Array(max_ald_tran+1).fill(0).map(row => Array(totalTradingDays).fill(0));

    //the first row needs to be 0  as zero tran means zero profit. (which is already 0)
    //the first column needs to be zero because on day one u can buy but can not sell. (which is already 0)

  

    //starting loop to iterate through all transaction starting from transaction 1
    for(tran=1; tran <= max_ald_tran; tran++)
    {
        //starting loop to iterate through all day for the  transaction number
        for(today =1; today<totalTradingDays; today++)
        {
            let selling_profit = -500000
            let non_selling_profit = profit[tran][today-1]

            //starting loop to find out the best buying old day which will give max profit for today's sell
            for(old_day=0; old_day<today; old_day++ )
            {
                selling_profit =  Math.max(selling_profit, profit[tran-1][old_day]-price_list[old_day])
            }

            profit[tran][today] = Math.max(non_selling_profit, selling_profit+ price_list[today])
        }
    }
    // for(t of profit)
    //     console.log(t)
    return profit[max_ald_tran][totalTradingDays - 1];

 }


var max_ald_tran = 2;
var price_list =  [3,2,6,5,0,3];

console.log(getMaxProfit(price_list, max_ald_tran))
