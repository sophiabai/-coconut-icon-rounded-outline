// if (!('boxShadow' in document.body.style)) {
//     document.body.setAttribute('class', 'noBoxShadow');
// }

// (function() {
//     var fontSize = document.getElementById('fontSize'),
//         testDrive = document.getElementById('testDrive'),
//         testText = document.getElementById('testText');
//     function updateTest() {
//         testDrive.innerHTML = testText.value || String.fromCharCode(160);
//         if (window.icomoonLiga) {
//             window.icomoonLiga(testDrive);
//         }
//     }
//     function updateSize() {
//         testDrive.style.fontSize = fontSize.value + 'px';
//     }
//     fontSize.addEventListener('change', updateSize, false);
//     testText.addEventListener('input', updateTest, false);
//     testText.addEventListener('change', updateTest, false);
//     updateSize();
// }());

$(document).ready(function(){
  $("#search_icon").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $('.glyph').each(function() {
      let iconName = $(this).find('.mls').text().toLowerCase();
      let hide = iconName.indexOf(value) > -1;
      $(this).toggle(hide);
    });
  });

  // Add the Copy the Source Code icon.
  var copySourceCodeIcon = `
    <div class="copy-source-code tooltip">
      <i class="co_icon_code pull-right"></i>
      <span class="tooltiptext">Copy the source code.</span>
    </div>
  `
  $('.glyph').prepend(copySourceCodeIcon);

  // Show the Copy the Source Code on hover.
  $('.glyph').on('mouseenter', function(){
    $(this).find('.copy-source-code').show();
  });

  $('.glyph').on('mouseleave', function(){
    $(this).find('.copy-source-code').hide();
    $(this).find('.copy-source-code').children('.tooltiptext').text('Copy the source code.');
  });

  // Copy the source code on click.
  $('.copy-source-code').on("click", function(){
    var iconName = $(this).next().children('.mls').html();
    var iconCode = '<i class="' + iconName + '"></i>'
    var textArea = document.createElement("textarea");

    // Stylize if it does flash render.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    textArea.value = iconCode;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      var sourceCodeContainer = '<code></code>'
      $(this).find('.tooltiptext').text('Copied: ');
      $(this).find('.tooltiptext').append(sourceCodeContainer);
      $(this).find('.tooltiptext').children('code').text(iconCode);

    } catch (err) {
      $(this).find('.tooltiptext').text('Oops, unable to copy.');
    }

    document.body.removeChild(textArea);
  });

  window.onscroll = function() {
    stickyTop()
  };

  var header = document.getElementById("headerSticky");
  var sticky = header.offsetTop;

  function stickyTop() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

});



// function loadJSON(callback) {
//
//    var xobj = new XMLHttpRequest();
//        xobj.overrideMimeType("application/json");
//    xobj.open('GET', 'selection.json', true); // Replace 'my_data' with the path to your file
//    xobj.onreadystatechange = function () {
//          if (xobj.readyState == 4 && xobj.status == "200") {
//            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//            callback(xobj.responseText);
//          }
//    };
//    xobj.send(null);
// }
//
// loadJSON(function(response) {
//   var json = JSON.parse(response);
// debugger;
// });
