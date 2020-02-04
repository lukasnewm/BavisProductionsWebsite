$(document).ready(function() {
    facts();
});
var index = 0;

function facts() {
    $.ajax({
        url: "json/facts.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            
            var fact = data.facts[index];
            var html = "";
            console.log(fact);

            html = "<p>" + fact + "</p>";

            index++;

            if (index >= 5)
            {
                index = 0;
            }

            document.getElementById("facts").innerHTML = html;
        }
    });
}