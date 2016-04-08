import Ember from 'ember';

export function answerNotification(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >= 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty">Not Been Answered</span>');
  }
}

export default Ember.Helper.helper(answerNotification);
