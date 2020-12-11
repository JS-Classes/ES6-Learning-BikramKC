let par = `As a Chart Nav data architect, I want a process that creates a single view of what is on file at CMS for a diagnosis cluster so that it can be used to assess what is risk adjustable for a member during coding activities.

The RollUp Process in the CN system needs to completely ignore the Allowed/Disallowed flag for Encounter Switch Type 7, 8 and 9 and add any diagnosis values for the MAX(EncounterICN) value as long as the Add or Delete Flag = A (Add) so that all the diags for that max encounter icn which have add or delete flag as A are loaded in the dbo.MAO004_CCI_RollUpSource table and eventually goes downstream after rollup sum calculation in final dbo.MAO004_Rollup table.`

function GetSentence(para){
    let sentence = para.split('.');
    let sentCount =  sentence.length;
    return sentCount;
}
function getWord(sent){
    return sent.split(' ').length;
}
function get(sent){
    return sent.split(' ').length;
}

console.log(GetSentence(par));