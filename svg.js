var xlmns = "http://www.w3.org/2000/svg"
var s = document.getElementById("svg");
var b = document.getElementById("stop");

var prevX;
var prevY;

var clear = function(e) {
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
    prevX = undefined;
    prevY = undefined;
};

var drawCircles = function(e) {
    var c1 = document.createElementNS(xlmns, "circle");
    c1.setAttribute("cx", event.offsetX);
    c1.setAttribute("cy", event.offsetY);
    c1.setAttribute("fill", "lightsteelblue");
    c1.setAttribute("r", 10);
    s.appendChild(c1);
    if (prevX != undefined && prevY != undefined) {
        var l1 = document.createElementNS(xlmns, "line");
        l1.setAttribute("x1", prevX);
        l1.setAttribute("y1", prevY);
        l1.setAttribute("x2", event.offsetX);
        l1.setAttribute("y2", event.offsetY);
        l1.setAttribute("stroke", "black");
        s.appendChild(l1);
    }

    prevX = event.offsetX;
    prevY = event.offsetY;
};

s.addEventListener( "click", drawCircles)
b.addEventListener( "click", clear)
