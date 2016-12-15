/**
 * Created by Tobias Heinrichs on 12/7/2016.
 */
// Key for using the Google sheets API
var API_Key = '?key=AIzaSyC6kehk2rS9qqQtpBy4S6TmiWkwvk1dgfE';
// Link to the Google sheet URL
var sheetURL = 'https://sheets.googleapis.com/v4/spreadsheets/1hlHOn6I9P23AIdYcBVfzndJEN9qmgthwpNscaH5nrBc/values/';
// Array for mapping the content of the popovers to the corresponding cell in the Google sheet
var elementData1 = [
    ["DPD_AssessProjectRisks", "c3"],
    ["DPD_CreateMilestonesPlan", "c5"],
    ["DPD_PresentRFQchecklist", "c3"],
    ["DPD_SetuptheProjectinMPDBProjX", "c2"],
    ["DPD_InitiateRequirementsCheck", "c7"],
    ["DPD_AnalyzeLessonsLearned", "c4"],
    ["DPD_SetupResourcePlan", "b4"],
    ["DPD_BuildInitialBusinessCaseandFirstQuote", "c1"],
    ["DPD_ConductProjectPhaseReview1", "c4"],
    ["DPD_ConductDraftProductConceptReview", "c4"],
    ["DPD_EstablishQualityandReliabilityObjectives", "c4"],
    ["DPD_SubmitFirstQuote", "c4"],
    ["DPD_AssessInitialFeasability", "c4"],
    ["DPD_ConductKick-off-Meeting", "c4"]
];
// These functions are executed when loading of the document is finished
// At first the function gets the data from the Google sheet, then it appends the result to the popover
// Be careful what you write in the function because it's asynchronous
$(document).ready(function(){
//  PHASE 1
    $.get( sheetURL +
        elementData1[0][1] +
        API_Key, function( data ) {
        $("#DPD_AssessProjectRisks").append(data.values);
    });
    $.get( sheetURL +
        elementData1[1][1] +
        API_Key, function( data ) {
        $("#DPD_CreateMilestonesPlan").append(data.values);
    });
    $.get( sheetURL +
        elementData1[2][1] +
        API_Key, function( data ) {
        $("#DPD_PresentRFQchecklist").append(data.values);
    });
    $.get( sheetURL +
        elementData1[3][1] +
        API_Key, function( data ) {
        $("#DPD_SetuptheProjectinMPDBProjX").append(data.values);
    });
    $.get( sheetURL +
        elementData1[4][1] +
        API_Key, function( data ) {
        $("#DPD_InitiateRequirementsCheck").append(data.values);
    });
    $.get( sheetURL +
        elementData1[5][1] +
        API_Key, function( data ) {
        $("#DPD_AnalyzeLessonsLearned").append(data.values);
    });
    $.get( sheetURL +
        elementData1[6][1] +
        API_Key, function( data ) {
        $("#DPD_SetupResourcePlan").append(data.values);
    });
    $.get( sheetURL +
        elementData1[7][1] +
        API_Key, function( data ) {
        $("#DPD_BuildInitialBusinessCaseandFirstQuote").append(data.values);
    });
    $.get( sheetURL +
        elementData1[8][1] +
        API_Key, function( data ) {
        $("#DPD_ConductProjectPhaseReview1").append(data.values);
    });
    $.get( sheetURL +
        elementData1[9][1] +
        API_Key, function( data ) {
        $("#DPD_ConductDraftProductConceptReview").append(data.values);
    });
    $.get( sheetURL +
        elementData1[10][1] +
        API_Key, function( data ) {
        $("#DPD_EstablishQualityandReliabilityObjectives").append(data.values);
    });
    $.get( sheetURL +
        elementData1[10][1] +
        API_Key, function( data ) {
        $("#DPD_SubmitFirstQuote").append(data.values);
    });
    $.get( sheetURL +
        elementData1[10][1] +
        API_Key, function( data ) {
        $("#DPD_AssessInitialFeasability").append(data.values);
    });
    $.get( sheetURL +
        elementData1[10][1] +
        API_Key, function( data ) {
        $("#DPD_ConductKick-off-Meeting").append(data.values);
    });
});