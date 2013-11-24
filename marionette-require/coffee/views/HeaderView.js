// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["marionette", "templates"], function(Marionette, templates) {
    var HeaderView, _ref;
    return HeaderView = (function(_super) {
      __extends(HeaderView, _super);

      function HeaderView() {
        _ref = HeaderView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      HeaderView.prototype.template = templates.header;

      HeaderView.prototype.ui = {
        input: "#new-todo"
      };

      HeaderView.prototype.events = {
        "keypress #new-todo": "onInpuKeypress"
      };

      HeaderView.prototype.onInpuKeypress = function(event) {
        var ENTER_KEY, todoText;
        ENTER_KEY = 13;
        todoText = this.ui.input.val().trim();
        if (event.which === ENTER_KEY && todoText) {
          this.collection.create({
            title: todoText
          });
          return this.ui.input.val("");
        }
      };

      return HeaderView;

    })(Marionette.ItemView);
  });

}).call(this);