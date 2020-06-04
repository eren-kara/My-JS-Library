(function (global, $) {
  let Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  let supportedLangs = ["en", "tr"];

  Greetr.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.langauge) == -1) {
        throw "Invalid Language";
      }
    },

    greeting: function () {
      return greetings[this.langauge] + " " + this.fullName() + "!";
    },

    formalGreetings: function () {
      return formalGreetings[this.langauge] + " " + this.fullName() + "!";
    },

    greet: function (formal) {
      let msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greeting();
      }
      console.log(msg);

      return this;
    },

    setLang: function (langauge) {
      this.validate();
      this.langauge = langauge;
      return this;
    },

    HTMLGreetings: function (selector, formal) {
      let msg;
      if (!$) {
        throw "jQuery not loaded";
      } else {
        if (formal) {
          msg = this.formalGreetings();
        } else {
          msg = this.greeting();
        }
      }

      $(selector).html(msg);
      return this;
    },
  };

  let greetings = {
    en: "Hello",
    tr: "Selam",
  };

  let formalGreetings = {
    en: "Greetings",
    tr: "Esenlikler",
  };

  Greetr.init = function (firstName, lastName, langauge) {
    var self = this;
    self.firstName = firstName || "Eren";
    self.lastName = lastName || "Kara";
    self.langauge = langauge || "tr";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
