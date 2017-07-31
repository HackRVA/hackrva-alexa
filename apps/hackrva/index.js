'use strict';

	module.change_code = 1;

	var _ = require('lodash');
	var moment = require('moment');
	var Alexa = require('alexa-app');
	var app = new Alexa.app('hackRVA');
	
	app.launch(function(req, res) {

	  var prompt = 'Welcome to HackRVA on Alexa. Intents will be created and developed over the next few months.';
	  var reprompt = 'Stop waiting.  Go make something!';

	  res.say(prompt).reprompt(reprompt).shouldEndSession(false);

	});

	var exitFunction = function(request, response) {
  		response.say('Goodbye!').shouldEndSession(true).send();
	};

	app.intent('AMAZON.StopIntent', exitFunction);
	app.intent('AMAZON.CancelIntent', exitFunction);
	
	app.intent('AMAZON.HelpIntent', function(request, response) {
		var helpText = 'Hack RVA is a maker space in Richmond, Virginia.  We have open house every thursday from 7:00pm to 9:00pm.';
  		response.say(helpText).send();
	});

	module.exports = app;