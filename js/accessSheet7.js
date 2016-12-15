/**
 * Created by Tobias Heinrichs on 12/7/2016.
 */
// Key for using the Google sheets API
var API_Key = '?key=AIzaSyC6kehk2rS9qqQtpBy4S6TmiWkwvk1dgfE';
// Link to the Google sheet URL
var sheetURL = 'https://sheets.googleapis.com/v4/spreadsheets/1hlHOn6I9P23AIdYcBVfzndJEN9qmgthwpNscaH5nrBc/values/';
// Array for mapping the content of the popovers to the corresponding cell in the Google sheet
var elementData7 = [
    ["DPD_PerformLessonlearnedWorkshopwithextendedProjectteam", "c3"],
    ["DPD_ManageHand-OvertoSeries", "c5"],
    ["DPD_UpdateProjectDashBoard", "c3"],
    ["DPD_AssessProjectRisks", "c2"],
    ["DPD_ConductPhase7ProjectPhaseRelease", "c7"],
    ["DPD_StartRe-qualification", "a4"],
    ["DPD_StabilizeProcessContinuousImprovement", "b4"],
    ["DPD_MonitorSupplierPerformance", "c1"],
    ["DPD_Follow-upProjectPE-Support", "c4"],
    ["DPD_FinalizeAPQPStatusreportQM-Plan", "c4"],
    ["DPD_CQP4Meetings", "c4"]
];

// These functions are executed when loading of the document is finished
// At first the function gets the data from the Google sheet, then it appends the result to the popover
// Be careful what you write in the function because it's asynchronous
$(document).ready(function(){
//  PHASE 7 
    $.get( sheetURL +
        elementData7[0][1] +
        API_Key, function( data ) {
        $("#DPD_PerformLessonlearnedWorkshopwithextendedProjectteam").append(data.values);
    });
    $.get( sheetURL +
        elementData7[1][1] +
        API_Key, function( data ) {
        $("#DPD_ManageHand-OvertoSeries").append(data.values);
    });
    $.get( sheetURL +
        elementData7[2][1] +
        API_Key, function( data ) {
        $("#DPD_UpdateProjectDashBoard").append(data.values);
    });
    $.get( sheetURL +
        elementData7[3][1] +
        API_Key, function( data ) {
        $("#DPD_AssessProjectRisks").append(data.values);
    });
    $.get( sheetURL +
        elementData7[4][1] +
        API_Key, function( data ) {
        $("#DPD_ConductPhase7ProjectPhaseRelease").append(data.values);
    });
    $.get( sheetURL +
        elementData7[5][1] +
        API_Key, function( data ) {
        $("#DPD_StartRe-qualification").append(data.values);
    });
    $.get( sheetURL +
        elementData7[6][1] +
        API_Key, function( data ) {
        $("#DPD_StabilizeProcessContinuousImprovement").append(data.values);
    });
    $.get( sheetURL +
        elementData7[7][1] +
        API_Key, function( data ) {
        $("#DPD_MonitorSupplierPerformance").append(data.values);
    });
    $.get( sheetURL +
        elementData7[8][1] +
        API_Key, function( data ) {
        $("#DPD_Follow-upProjectPE-Support").append(data.values);
    });
    $.get( sheetURL +
        elementData7[9][1] +
        API_Key, function( data ) {
        $("#DPD_FinalizeAPQPStatusreportQM-Plan").append(data.values);
    });
    $.get( sheetURL +
        elementData7[10][1] +
        API_Key, function( data ) {
        $("#DPD_CQP4Meetings").append(data.values);
    });
});