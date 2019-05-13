function isNumber(val) {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
}

var checkedSize = 80;
var checkedFont = "Impact";
var checkedshape = "archimedean";

function changefont(fontstyle) {
  document.getElementById("fontbutton").innerHTML =
    fontstyle + '<span class="mui-caret"></span>';
  checkedFont = fontstyle;
}

function changespiral(shape) {
  document.getElementById("spiralbutton").innerHTML =
    shape + '<span class="mui-caret"></span>';
  checkedshape = shape;
}

function changefontsize(fontstyle, value) {
  document.getElementById("fontsizebutton").innerHTML =
    fontstyle + '<span class="mui-caret"></span>';
  checkedSize = value;
}

function drawWordCloud() {
  document.getElementById("words").innerHTML = "";
  var text_string = document.getElementById("show-text").innerHTML;
  var common =
    "am,also,poop,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,i,in,it,its,itself,they,them,their,theirs,themselves,to,toward,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall";
  if (text_string == "") {
    alert("Please Enter Text First");
    return 0;
  }
  document.getElementById("filter").value = 0;
  document.getElementById("showfilter").style.display = "inline";

  var word_count = {};

  var words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);

  if (words.length == 1) {
    word_count[words[0]] = 1;
  } else {
    words.forEach(function(word) {
      if (!isNumber(word)) {
        var word = word.toLowerCase();
        if (word != "" && common.indexOf(word) == -1 && word.length > 1) {
          if (word_count[word]) {
            word_count[word]++;
          } else {
            word_count[word] = 1;
          }
        }
      }
    });
  }

  var svg_location = "#words";
  var width = 1100;
  var height = 600;

  var fill = d3.scaleOrdinal(d3.schemeSpectral[9]);

  var word_entries = d3.entries(word_count);

  var xScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(word_entries, function(d) {
        return d.value;
      })
    ])
    .range([10, checkedSize]);

  d3.layout
    .cloud()
    .size([width, height])
    .timeInterval(20)
    .words(word_entries)
    .fontSize(function(d) {
      return xScale(+d.value);
    })
    .text(function(d) {
      return d.key;
    })
    .rotate(function() {
      return ~~(Math.random() * 2) * 0;
    })
    .spiral(checkedshape)
    .font("Impact")
    .on("end", draw)
    .start();

  function draw(words) {
    d3.select(svg_location)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", document.getElementById("color").value)
      .style("font-family", checkedFont)
      .append("g")
      .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function(d) {
        return xScale(d.value) + "px";
      })
      .style("fill", function(d, i) {
        return fill(i);
      })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) {
        return d.key;
      });
  }

  d3.layout.cloud().stop();
}

function generatecloud2() {
  vvv = document.getElementById("filter").value;
  document.getElementById("words").innerHTML = "";
  var text_string = document.getElementById("show-text").innerHTML;
  var common =
    "am,also,poop,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,i,in,it,its,itself,they,them,their,theirs,themselves,to,toward,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall";
  if (text_string == "") {
    alert("Please Enter Text First");
    return 0;
  }
  var word_count = {};

  var words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);

  if (words.length == 1) {
    word_count[words[0]] = 1;
  } else {
    words.forEach(function(word) {
      if (!isNumber(word)) {
        var word = word.toLowerCase();
        if (word != "" && common.indexOf(word) == -1 && word.length > 1) {
          if (word_count[word]) {
            word_count[word]++;
          } else {
            word_count[word] = 1;
          }
        }
      }
    });
  }

  var svg_location = "#words";
  var width = 1100;
  var height = 600;

  var fill = d3.scaleOrdinal(d3.schemeSpectral[9]);

  var word_entries = d3.entries(word_count);

  var xScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(word_entries, function(d) {
        return d.value;
      })
    ])
    .range([10, checkedSize]);

  d3.layout
    .cloud()
    .size([width, height])
    .timeInterval(20)
    .words(word_entries)
    .fontSize(function(d) {
      return xScale(+d.value);
    })
    .text(function(d) {
      return d.key;
    })
    .rotate(function() {
      return ~~(Math.random() * 2) * vvv;
    })
    .spiral(checkedshape)
    .font("Impact")
    .on("end", draw)
    .start();

  function draw(words) {
    d3.select(svg_location)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", document.getElementById("color").value)
      .style("font-family", checkedFont)
      .append("g")
      .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function(d) {
        return xScale(d.value) + "px";
      })
      .style("fill", function(d, i) {
        return fill(i);
      })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) {
        return d.key;
      });
  }

  d3.layout.cloud().stop();
}
