$(document).ready(function() {
  function trackMetric(interactionValue){
    if ( window.hasOwnProperty( '_satellite' ) ) {
      var dataObject = {};
      var _satellite = window._satellite;
      var eventLabel = 'respiratory-dasboard-chart';
      var eventValue = interactionValue.replace(/ /g, '-').toLowerCase();

 

      dataObject.ch = 'OADC';
      dataObject.pageName = document.title;
      dataObject.label = eventLabel;
      dataObject.interactionType = 'o';
      dataObject.interactionValue = 'ci-' + eventLabel + ': ' + eventValue;

 

      _satellite.track( 'interaction', dataObject );
    }
  }

  function onSelectChange(e){
    trackMetric('state-select-' + $(e.target).find('option:selected').text());
    if(e.target.id === 'filter-0'){
      setTimeout(function(){
        var $countySelect = $viz.find('#filter-1');
        var select = $countySelect[0];
        $countySelect.val('All');
        Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(select, 'All');
        select.dispatchEvent(new Event('change', { bubbles: true}));
      }, 50);
    }
  }

  function onMoreInfoClick(e){
    if(!e.keyCode || e.keyCode === 13){
      var $moreInfoLink = $viz.find('.dashboard-row:nth-child(2) .dashboard-col:nth-child(2) header');
      if($moreInfoLink.hasClass('show-modal')){
        $moreInfoLink.removeClass('show-modal');
      } else {
        $moreInfoLink.addClass('show-modal');
      }
    }
  }

  function onResetClick(e){
    if(!e.keyCode || e.keyCode === 13){
      var $stateSelect = $viz.find('#filter-0');
      var select = $stateSelect[0];
      $stateSelect.val('United States');
      Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(select, 'United States');
      select.dispatchEvent(new Event('change', { bubbles: true}));
    }
  }

  var $viz = $('.wcms-viz-container[data-config-url="/respiratory-viruses/modules/ed-visits-county-file.json"]')

  var observer = new MutationObserver(function(mutations, observer) {
    var $select = $viz.find('select');
    if($select.length > 0){
      $select.off('change', onSelectChange)
      $select.on('change', onSelectChange)
    }

    var $resetButton = $viz.find('.cove-dashboard-filters:nth-child(3)');
    if($resetButton.length > 0){
      $resetButton.off('click keypress', onResetClick)
      $resetButton.on('click keypress', onResetClick)
    }

    var $moreInfoLink = $viz.find('.dashboard-row:nth-child(2) .dashboard-col:nth-child(2) header');
    if($moreInfoLink.length > 0){
      $moreInfoLink.off('click keypress', onMoreInfoClick)
      $moreInfoLink.on('click keypress', onMoreInfoClick)
    }
  });

  if($viz.length > 0){
    observer.observe($viz[0], {
      subtree: true,
      attributes: true
    });
  }
});

$(document).ready(function() { 
  var $viz = $('.wcms-viz-container[data-config-url="/respiratory-viruses/modules/ed-visits-county-file.json"');
  var hasStateChanged = false;
  var hasCountyChanged = false;
  
  function onMutation(mutations, observer) {
    var $stateSelect = $viz.find('#filter-0');
    var $countySelect = $viz.find('#filter-1');

    var hashVal = window.location.hash ? decodeURIComponent(window.location.hash.replace('#', '')) : '';
    var stateVal
    var countyVal
    if(hashVal.indexOf(',') !== -1){
      stateVal = hashVal.split(',')[0]
      countyVal = hashVal.split(',')[1]
    } else {
      stateVal = hashVal
    }
    
    if(stateVal === 'District Of Columbia') stateVal = 'District of Columbia'; 
    
    if(stateVal && !hasStateChanged && $stateSelect.length > 0){
      var options = $stateSelect.find('option').toArray().map(el => el.value ? el.value.toLowerCase() : '');
      if(stateVal && options.length > 0 && options.indexOf(stateVal.toLowerCase()) !== -1){
        var select = $stateSelect[0];
        $stateSelect.val(stateVal);
        Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(select, stateVal);
        select.dispatchEvent(new Event('change', { bubbles: true}));
        $viz[0].scrollIntoView();

        hasStateChanged = true;
      }
    }
    if(countyVal && !hasCountyChanged && hasStateChanged && $countySelect.length > 0){
      var options = $countySelect.find('option').toArray().map(el => el.value ? el.value.toLowerCase() : '');
      if(options.length > 0 && options.indexOf(countyVal.toLowerCase()) !== -1){
        var select = $countySelect[0];
        $countySelect.val(countyVal);
        Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(select, countyVal);
        select.dispatchEvent(new Event('change', { bubbles: true}));
        $viz[0].scrollIntoView();

        hasCountyChanged = true;
      }

    }
  }

  if($viz.length > 0){
    onMutation();

    var observer = new MutationObserver(onMutation);

    observer.observe($viz[0], {
      subtree: true,
      attributes: true
    });
  }
});

$(document).ready(function() {
  var suppressedFlags;
  var $viz = $('.wcms-viz-container[data-config-url="/respiratory-viruses/modules/ed-visits-county-file.json"]')
  
  if($viz.length > 0){
    $.get("https://www.cdc.gov/wcms/vizdata/Respitory_Viruses/NSSPSubStateOptOut.json", function( data ) {
      suppressedFlags = data;
    });
    
    setInterval(function(){
      var $select = $viz.find('#filter-0');
      var $countySelect = $viz.find('#filter-1');
      var $targetSelect = $viz.find('#filter-2');
      
      if($select.val() !== $targetSelect.val()){
        setTimeout(function(){
            var targetSelect = $targetSelect[0];
                $targetSelect.val($select.val()).trigger('change');
                Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(targetSelect, $select.val());
                targetSelect.dispatchEvent(new Event('change', { bubbles: true}));
          $select.val($select.val()) 
          
          }, 50);
      }
    }, 200);
  
    var observer = new MutationObserver(function(mutations, observer) {
      var $select = $viz.find('#filter-0');
      var $countySelect = $viz.find('#filter-1');
      var $targetSelect = $viz.find('#filter-2');	  
      
      if($countySelect.find('option').length === 1 && $select.val() !== 'District of Columbia' && $select.val() !== 'United States'){
        $viz.find('.dashboard-row:nth-child(1)').addClass('no-counties');
        $viz.find('.dashboard-row:nth-child(4)').removeClass('county-level').addClass('state-level');
      } else {
        $viz.find('.dashboard-row:nth-child(1)').removeClass('no-counties');
        $viz.find('.dashboard-row:nth-child(4)').removeClass('state-level').addClass('county-level');
      }
      
      if(suppressedFlags){
        var suppressedNode = suppressedFlags.find(function(d){
              if(d['geography'] === $select.val() && d['county'] === $countySelect.val()){
          return true
          }
            });
        if(suppressedNode && suppressedNode['is_hsa_opt_out'] === 'true'){
          $viz.find('.cdc-chart-inner-container').hide()
          $viz.find('.dashboard-row:nth-child(1)').addClass('no-county');
        } else {
          $viz.find('.dashboard-row:nth-child(1)').removeClass('no-county');
          $viz.find('.cdc-chart-inner-container').show()
        }
      } else {
          $viz.find('.dashboard-row:nth-child(1)').removeClass('no-county');
        $viz.find('.cdc-chart-inner-container').show()
      }
      
      var countyAll = $countySelect.find('option[value="All"]')
      if(countyAll.length === 1 && countyAll.index() !== 0){
        countyAll.remove();
        $countySelect.prepend(countyAll);
      }
      
      var stateAll = $select.find('option[value="United States"]')
      if(stateAll.length === 1 && stateAll.index() !== 0){
        stateAll.remove();
        $select.prepend(stateAll);
      }
      
      $viz.find('.dashboard-row:nth-child(4) p').each(function(index, el){
        var className = el.innerText.trim().toLowerCase().replace(' ', '-');
        if(!$(el).hasClass(className)){
          $(el).removeClass('increasing decreasing')
          $(el).addClass(className);
        }
        })
      
      if($viz.find('.dashboard-row:nth-child(4) .dashboard-col').length === 3){
        $viz.find('.dashboard-row:nth-child(4)').prepend('<div class="dashboard-col dashboard-col-4"><div class="cove theme-blue "><header class="cove-component__header theme-blue " style="font-size: 16px;">Respiratory Illness</header><div class="cove-component__content component--has-title no-borders"><div class="cove-component__content-wrap"><p class="decreasing" style="font-size: 16px;">Weekly Trend</p></div></div></div></div>');
      }

      if($viz.find('.dashboard-row:nth-child(2) .dashboard-col:nth-child(2) header').length > 0 && !$viz.find('.dashboard-row:nth-child(2) .dashboard-col:nth-child(2) header').attr('tabindex')){
        $viz.find('.dashboard-row:nth-child(2) .dashboard-col:nth-child(2) header').attr('tabindex', '0');
      }

      if($viz.find('.cove-dashboard-filters:nth-child(3)').length > 0 && !$viz.find('.cove-dashboard-filters:nth-child(3)').attr('tabindex')){
        $viz.find('.cove-dashboard-filters:nth-child(3)').attr('tabindex', '0');
      }
    });
  
    observer.observe($viz[0], {
      subtree: true,
      attributes: true
    });
  }
});