/*global QUnit*/

sap.ui.define([
	"com/ui5/child/controller/child.controller"
], function (Controller) {
	"use strict";

	QUnit.module("child Controller");

	QUnit.test("I should test the child controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});