/**
 * Trainee model events
 */

'use strict';

import {EventEmitter} from 'events';
var Trainee = require('../../sqldb').Trainee;
var TraineeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TraineeEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Trainee.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    TraineeEvents.emit(event + ':' + doc._id, doc);
    TraineeEvents.emit(event, doc);
    done(null);
  }
}

export default TraineeEvents;
