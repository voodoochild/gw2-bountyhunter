define(['lodash', 'reqwest'],

function(_, reqwest) {
  'use strict';

  var config = {
      apiRoot: 'https://api.guildwars2.com/v1/',
      lang: 'en'
  };

  function get(endpoint, params) {
    var url = config.apiRoot + endpoint + '?' +
                _.map(params, function(value, key) {
                    return key + '=' + encodeURIComponent(value);
                }).join('&');

    return reqwest({
      url: url,
      type: 'json',
      method: 'get',
      crossOrigin: true
    });
  }

  var blc = {
    config: function(opts) {
      config = _.defaults(config, opts);
    },

    events: function(world_id, event_id) {
      var params = {};
      world_id = world_id || false;
      event_id = event_id || false;

      if (world_id) { params['world_id'] = world_id; }
      if (event_id) { params['event_id'] = event_id; }

      return get('events.json', params);
    },

    event_names: function() {
      return get('event_names.json', { lang: config.lang });
    },

    map_names: function() {
      return get('map_names.json', { lang: config.lang });
    },

    world_names: function() {
      return get('world_names.json', { lang: config.lang });
    },

    items: function() {
      return get('items.json');
    },

    item_details: function(item_id) {
      var params = {};
      world_id = world_id || false;
      event_id = event_id || false;

      if (world_id) { params['world_id'] = world_id; }
      if (event_id) { params['event_id'] = event_id; }

      return get('events.json', params);
    },

    recipes: function() {
      return get('recipes.json');
    },

    // recipe_details: function(recipe_id) {},

    wvw: {
      matches: function() {
        return get('matches.json');
      },

      // match_details: function(match_id) {},

      objective_names: function() {
        return get('objective_names.json', { lang: config.lang });
      }
    }
  };

  return blc;
});
