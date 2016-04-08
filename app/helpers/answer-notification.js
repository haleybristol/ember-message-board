import Ember from 'ember';

export function answerNotification(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') == 0) {
    return Ember.String.htmlSafe('<br><span class="glyphicon glyphicon-star"></span>No Answer');
  }
}

export default Ember.Helper.helper(answerNotification);
