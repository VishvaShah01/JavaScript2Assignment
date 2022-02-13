let getJsonObject = $.getJSON("team.json").done(function (dataValue) {
    $.each(dataValue.members, function (key, val) {
        console.log("data key: ", key, " and data value: ", val);

        $('#team').append(`<div>
            <h2 id= "Employee Name">${val.name}</h2>
            <h5 id= "Employee Position">${val.position}</h5>
            <p id= "Employee Bio">${val.bio}</p>
        </div>`);
    });
    console.log("The Data are ", getJsonObject);
}).fail(function(){
    $("#team").text("Can't display the data.. There is something wrong!!");
});
$.get(
    "team.json",
    function (dataValue) {
      console.log("The return data is: ", dataValue);
      $("#team").html(dataValue);
    },
    "html",
    "css"
  );
    
