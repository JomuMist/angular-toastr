(function() {
  'use strict';

  angular.module('toastr')
    .constant('toastrConfig', {
      allowHtml: false,
      autoDismiss: false,
      closeButton: false,
      closeHtml: '<button>&times;</button>',
      containerId: 'toast-container',
      extendedTimeOut: 1000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      maxOpened: 0,
      messageClass: 'toast-message',
      newestOnTop: true,
      onHidden: null,
      onShown: null,
      onTap: null,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      progressBar: false,
      tapToDismiss: true,
      target: 'body',
      templates: {
        toast: '<div class="{{toastClass}} {{toastType}}" ng-click="tapToast()">' +
               '  <div ng-switch on="allowHtml">' +
               '    <div ng-switch-default ng-if="title" class="{{titleClass}}" aria-label="{{title}}">{{title}}</div>' +
               '    <div ng-switch-default class="{{messageClass}}" aria-label="{{message}}">{{message}}</div>' +
               '    <div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div>' +
               '    <div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div>' +
               '  </div>' +
               '  <progress-bar ng-if="progressBar"></progress-bar>' +
               '</div>',
        progressbar: '<div class="toast-progress"></div>'
      },
      timeOut: 5000,
      titleClass: 'toast-title',
      toastClass: 'toast'
    });
}());
