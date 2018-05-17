$(document).ready(function()
{
  $("#sortableNotStarted").sortable({
      connectWith: "#sortableInProgress", 
      handle: ".panel-heading",
      cancel: ".panel-toggle",
      revert: true
  });
  $("#sortableInProgress").sortable({
    connectWith: "#sortableDone, #sortableNotStarted", 
    handle: ".panel-heading",
    cancel: ".panel-toggle",
    revert: true
    });
    $("#sortableDone").sortable({
        connectWith: "#sortableInProgress, #sortableNotStarted", 
        handle: ".panel-heading",
        cancel: ".panel-toggle",
        revert: true
    });

  $( ".panel" )
  .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
  .find( ".tools" )
  .addClass( "ui-widget-header ui-corner-all" )
  .prepend( "<span class='icon s7-less panel-toggle'></span>");

  $( ".panel-toggle" ).on( "click", function() {
  var icon = $( this );
  icon.toggleClass( "icon s7-less  icon s7-more" );
  icon.closest( ".panel" ).find( ".panel-body" ).toggle();
  });

});