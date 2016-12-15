/**
 * Created by Tobias Heinrichs on 12/7/2016.
 */
// Link to the Google Sheet with the process data
var googleSheetURL2 = 'https://docs.google.com/spreadsheets/d/1VF-AZcutlXZvmtFl36Yqwq6Yc5-GowKFAYgUhFOSiq4/edit#gid=1553731376';
// Array IDs of the elements in the HTML document of this phase
var HTMLelementIDs = [];
// Process element IDs that are used for creating the query to get the right data
var taskIDs = [
      "'2-0101'"
    , "'2-0201'"
    , "'2-0301'"
    , "'2-1806'"
    , "'2-0804'"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"
    , "''"


   ];

"#CreateProjectSpecificHandbook"
"#BuilddetailedProjectPlan"
"#UpdateRequirementsCheck"
"#DevelopmentAwarddecisionforIntegratedSuppliers"
"#DefineRe-qualificationcontent"
"#DefineProduct"
"#InitiateWabcoSystemFMEA"
"#ConductSystemFMEAReview"
"#ConductIntegratedSupplierWorkshop"
"#InitiateDesignFMEA"
"#SetupAPQPStatusreportQM-Plan"
"#ConductPre-SourcingCommitteeforIntegratedSuppliers"
"#ConductPhase2ProjectPhaseRelease"
"#QuoteReviewwithCustomer"
"#CreateVerificationRequalificationPlan"
"#InitiateTrackingofKeyCharacteristics"
"#InitiateProcessFMEA"
"#ConductConceptReviewWorkshop"
"#ConceptReviewwithintegratedSupplier"
"#ConductSupplierReviewMeeting"
"#DefineManufacturingProcessesjekt2"
"#DefinenitialPackagingConcept"
"#AnalyzeLessonslearnedfromPhase2"
"#AssessProjectRisks"
"#UpdateFeasabilityassessment"
"#GetBusinessCaseApproval"
"#SubmitFinalQuote"
"#ConductSourcingCommitteeforIntegratedSuppliers"
"#ConductDfMA"
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
