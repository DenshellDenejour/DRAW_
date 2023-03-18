window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    context.font = '42px Arial'; 
    context.fillStyle = 'red';
    context.fillText("Denshell Denejour", 200, 100); 
    context.lineWidth = 2;
    context.strokeStyle = "gray";
    context.strokeText("Denshell Denejour", 200, 100);
};
