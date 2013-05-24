(function() {
  'use strict';

  require.config({
    paths: {
      domReady: 'vendor/domReady',
      lodash: 'vendor/lodash',
      reqwest: 'vendor/reqwest',
      bonzo: 'vendor/bonzo',
      qwery: 'vendor/qwery',
      bean: 'vendor/bean',
      blc: 'libs/blc'
    }
  });

  define('modernizr', [], Modernizr);

  require(['domReady', 'lodash', 'bonzo', 'qwery', 'bean', 'modernizr',
           'blc', 'bounties'],

  function(domReady, _, bonzo, qwery, bean, modernizr, blc, bounties) {

    function $(selector) {
      return bonzo(qwery(selector));
    }

    var gw2bh = (function() {

      var world_list = $('[name="world_id"]'),
          bounty_els = $('[class^="bounty-"]'),
          loop = null;

      var init = function() {
        populateWorldList();
        loadBackgroundImages();
      };

      var populateWorldList = function() {
        blc.world_names().then(function(response) {
          var t = _.template('<option value="<%= id %>"><%= name %></option>'),
              options = _.map(_.sortBy(response, 'name'), t);

          options.unshift(t({ id: 0, name: 'Choose a World' }));
          world_list.html(options.join('\n'))
                    .removeAttr('disabled')
                    .val('0');
          bean.on(world_list[0], 'change', chooseWorld);
        });
      };

      var chooseWorld = function(e) {
        var world_id = parseInt(world_list.val(), 10);
        clearInterval(loop);
        if (world_id) {
          updateBountyStatuses(world_id);
          loop = setInterval(function() {
            updateBountyStatuses(world_id);
          }, 20000);
        } else {
          resetBounties();
        }
      };

      var updateBountyStatuses = function(world_id) {
        if (world_id) {
          _.each(bounties, function(event_id, bounty) {
            blc.events(world_id, event_id).then(function(response) {
              var el = $('.bounty-' + bounty);
              if (response.events.length > 0) {
                if (response.events[0].state === 'Active') {
                  el.attr('data-active', true)
                    .removeAttr('data-inactive');
                } else {
                  el.attr('data-inactive', true)
                    .removeAttr('data-active');
                }
              }
            });
          });
        }
      };

      var resetBounties = function() {
        bounty_els.removeAttr('data-active')
                  .removeAttr('data-inactive')
                  .removeAttr('data-unknown');
      };

      var loadBackgroundImages = function() {
        var t = _.template('url(images/<%= number %>.png)');
        _.each(bounty_els, function(el) {
          el = $(el);
          if (el.data('background')) {
            el.css('background-image', t({ number: el.data('background') }));
          }
        });
      };

      return {
        init: init
      };
    })();

    domReady(gw2bh.init);

  });
})();

// add history api stuff later so that data is loaded automatically for
// a world if it's direct linked

// configure ajax timeout and display message

// need a way to kill unfulfilled promises if requesting again

// cache world names in localstorage if available

// put a loading gif next to the world select whilst updating bounties
