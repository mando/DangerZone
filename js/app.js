App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('slides', { path: '/slides/:slide_id' });
});

App.Slides = Ember.A([]);

App.Slide = Ember.Object.extend({
  title: null,
  bullets: null,
  id: null,
  init: function() {
    App.Slides.pushObject(this)
  }
});

App.Slide.create({
  id: 1,
  title: "Getting started with Ember",
  bullets: ['Mando Escamilla', 'github.com/mando']
});

App.Slide.create({
  id: 2,
  title: "Now it's SERIOUS"
});


App.SlidesRoute = Ember.Route.extend({
  model: function(params) {
    return App.Slides.findProperty('id', parseInt(params.slide_id))
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("slides", App.Slides[0]);
  }
});
