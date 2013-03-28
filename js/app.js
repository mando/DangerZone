App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('slides');
});

App.Slide = Ember.Object.extend({
  title: null,
  bullets: null,
  id: null
});

var slide_1 = App.Slide.create({
  title: "Getting started with Ember",
  bullets: ['Mando Escamilla', 'github.com/mando']
});

App.SlidesRoute = Ember.Route.extend({
  model: function() {
    return slide_1;
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("slides");
  }
});
