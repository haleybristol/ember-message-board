import Ember from 'ember';

export function answerNotification(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >= 0) {
    return Ember.String.htmlSafe('<br><br><span class="">' + question.get('answers').get('length') + ' Answer(s)</span><br>');
  }
}

export default Ember.Helper.helper(answerNotification);
