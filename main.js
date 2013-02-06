function resetKeywordLabels(adGroup){
  var keywordIterator = adGroup.keywords().get();
  
  while (keywordIterator.hasNext()) { 
    var keyword = keywordIterator.next();
    var keywordLabelIterator = keyword.labels().get();
    
    while (keywordLabelIterator.hasNext()) {
      labelName = keywordLabelIterator.next().getName()
      Logger.log(adGroup.getName()+ ': Removing label '+ labelName + ' from keyword ' +keyword.getText());
      keyword.removeLabel(labelName);
    }
    
  }
  
}

function inheritLabelsDownwards(adGroup){
  var adGroupLabelIterator = adGroup.labels().get();
  
  while (adGroupLabelIterator.hasNext()) {
    var labelName = adGroupLabelIterator.next().getName();
    var keywordIterator = adGroup.keywords().get();
    
    while (keywordIterator.hasNext()) {
      var keyword = keywordIterator.next();
        Logger.log(adGroup.getName()+ ': Applying label '+ labelName + ' to keyword ' +keyword.getText());
        keyword.applyLabel(labelName);
    }
    
  }
    
}

function updateKeywordLabels(){
  var adGroupIterator = AdWordsApp.adGroups()
  .withCondition("LabelNames CONTAINS_ANY ['changed']")
  .get();
  
  while (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    
    //remove 'changed' label beforehand to avoid the keyword inheriting it.
    adGroup.removeLabel('changed');
    
    //clean old keyword labels first
    resetKeywordLabels(adGroup);
    
    //apply ad group labels to keywords 
    inheritLabelsDownwards(adGroup);
  }
  
}

function main() {
  updateKeywordLabels();
}
