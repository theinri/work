/**
 * Created by Tobias Heinrichs on 12/7/2016.
 */
// Link to the Google Sheet with the process data
var googleSheetURL2 = 'https://docs.google.com/spreadsheets/d/1VF-AZcutlXZvmtFl36Yqwq6Yc5-GowKFAYgUhFOSiq4/edit#gid=1553731376';
// Array IDs of the elements in the HTML document of this phase
var HTMLelementIDs = [];
// Process element IDs that are used for creating the query to get the right data
var taskIDs = [
      "'1-0601'"
    , "'1-0501'"
    , "'1-0102'"
    , "'1-0201'"
    , "'1-0701'"
    , "'1-0301'"
    , "'1-0901'"
    , "'1-1201'"
    , "'1-1401'"
    , "'1-0803'"
    , "'1-1003'"
    , "'1-1402'"
    , "'1-1101'"
    ,"'1-0201'"];

// These functions are executed when loading of the document is finished
// At first the function gets the data from the Google sheet, then it appends the result to the popover
// Be careful what you write in the function because it's asynchronous

$(document).ready(function(){
    $('.hide').each(function(){
        HTMLelementIDs.push('#' + this.id)
    });
    console.log(HTMLelementIDs);

    for(var i = 0; i < HTMLelementIDs.length; i++){
     $(HTMLelementIDs[i]).children('.DPD').sheetrock({
     url: googleSheetURL2,
     query: "select N where K = " + taskIDs[i] +  " and L = 'WPCP Task'"
     });
    }
    for(var j = 0; j < HTMLelementIDs.length; j++){
        $(HTMLelementIDs[j]).children('.DeliverableTemplate').sheetrock({
            url: googleSheetURL2,
            query: "select N  where K = " + taskIDs[j] +  " and L = 'WPCP Task'"
        });
    }
});
