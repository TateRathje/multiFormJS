angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring out routes
// ==========================================

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// route to show our basic form (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'form.html',
			controller: 'formController'
		})

		// nested states
		// each of these sections will have there own view
		// url will be nested (/form/profile)

		.state('form.profile', {
			url: '/profile',
			templateUrl: 'form-profile.html'
		})

		// url will be /form/skills

		.state('form.skills', {
			url: '/skills',
			templateUrl: 'form-skills.html'
		})

		// url will be /form/help

		.state('form.help', {
			url: '/help',
			templateUrl: 'form-help.html'
		});

		// catch all route
		// send users to the form page
		$urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// ==========================================
.controller('formController', function($scope) {

	// we will store all of our form data in this object
	$scope.formData = {};

	// function to process the form
	$scope.processForm = function() {
		alert('Your help request has been sent!');
	};


});