$(document).ready(function() {
  var result = 0;
  var eq = [];
  var evEq;
  var isEval = false;
  
  //AC button 
  $('#clear').on('click', function() {
    $('#numbers').html(0);
    eq = [];
  });
  
  //number input buttons
  if (eq.length <= 16) {
    $('.inpBtn').on('click', function() {
      if (isEval) {
        evEq = undefined;
        $('#numbers').html($(this).text());
        eq = [$(this).text()];
        isEval = false;
      } else {
        eq.push($(this).text());
        $('#numbers').html(eq.join(''));
      }
    });
  } else {
    $('#numbers').html("...");
  }
  
  //calc operation buttons
  $('.calcBtn').on('click', function() {
    let val = $(this).text();
    const regex = /\D/;
    eq.push(val);
    if (regex.test(eq[eq.length-2])) {
      delete eq[eq.length - 2];
    }
    $('#numbers').html(eq.join(''));
  });
  
  //evaluates the temporary array
  $("#equal").on('click', function() {
    eq = eq.join('');
    evEq = eval(eq);
    if (typeof evEq !== "number" || evEq === Infinity) {
      $('#numbers').html("ERROR");
    } else {
      $('#numbers').html(evEq);
    }
    isEval = true;
  });
});