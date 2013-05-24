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

      var subheading = $('.subheading'),
          world_list = $('[name="world_id"]'),
          loop = null;

      var init = function() {
        populateWorldList();
      };

      var populateWorldList = function() {

        // TODO: check localstorage for cached world_names

        blc.world_names().then(function(response) {

          // TODO: cache in localstorage

          var t = _.template('<option value="<%= id %>"><%= name %></option>'),
              options = _.map(_.sortBy(response, 'name'), t);

          options.unshift(t({ id: 0, name: '' }));
          world_list.html(options.join('\n'))
                    .removeAttr('disabled');
          bean.on(world_list[0], 'change', chooseWorld);
        });
      };

      var chooseWorld = function(e) {
        var world_id = parseInt(world_list.val(), 10);
        clearInterval(loop);

        if (world_id) {
          subheading.html($('option[value="' + world_id + '"]').html());
          updateBountyStatuses(world_id);
          // loop = setInterval(function() {
          //   updateBountyStatuses(world_id);
          // }, 10000);
        } else {
          subheading.html('Choose a World');
          $('.bounties li').removeAttr('data-active')
                           .removeAttr('data-inactive')
                           .removeAttr('data-unknown');
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
                    .removeAttr('data-inactive')
                    .removeAttr('data-unknown');
                } else {
                  el.attr('data-inactive', true)
                    .removeAttr('data-active')
                    .removeAttr('data-unknown');
                }
              } else {
                el.attr('data-unknown', true)
                  .removeAttr('data-active')
                  .removeAttr('data-inactive');
              }
            });
          });
        }
      };

      return {
        init: init
      };
    })();

    domReady(gw2bh.init);

  });
})();


// 1. get world_names, then populate and enable dropdown to select

// 2. once world selected, show table of bounties with no status

// 3. start polling all events every 10 seconds, show active||inactive icon

// var world_id = 2013,
//     event_id = '405DDE0F-621B-4651-9CF1-36382FEE5D88';

// var event_names = blc.event_names();

// blc.events(world_id, event_id).then(function(response) {
//   var event_data = response.events[0];
  // event_names.then(function(response) {
  //   event_data.name = _.find(response, { 'id': event_id }).name;
  //   console.log(event_data);
  // });
// });

// add history api stuff later so that data is loaded automatically for
// a world if it's direct linked

// configure ajax timeout and display message
