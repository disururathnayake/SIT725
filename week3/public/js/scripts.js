$(document).ready(function () {
    $('#clickMeButton').click(() => {
        $.ajax({
            url: "http://localhost:3040/addTwoNumber?n1=10&n2=2",
            success: function (result) {
                console.log(result.data);
                $('#sample').text(result.data);
            }
        });
    });
});

$(document).ready(function () {
    $('#clickMeDivide').click(() => {
        $.ajax({
            url: "http://localhost:3040/divideTwoNumber?n1=10&n2=2",
            success: function (result) {
                console.log(result.data);
                $('#sample').text(result.data);
            }
        });
    });
});
