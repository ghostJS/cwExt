//"use strict";

services
angular.module('popup', 'backgroundModule', [
  'popup.services',
  'popup.controllers',
  'backgroundModule.services',
  'backgroundModule.controllers'
]);
