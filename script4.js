/**
 * Created by Gracia on 16/9/6.
 */


var $ = function (id) {
    return document.getElementById(id.substr(1));
};

(function () {
    var data = [],
        city = $('#cityInput'),
        air = $('#airInput'),
        list = {
            cityName: city.value,
            airIndex: air.value
        };

    function addData() {

    }

    function isInteger(x) {
        return x % 1 === 0;
    }   // Check if the number is an integer

    function createNewRow() {
        var newCell = document.createElement('td'),
            newRow = document.createElement('tr'),
            newText = document.createTextNode();

        newCell.appendChild(newText);
        newRow.appendChild(newRow);
        $('#tableData').appendChild(newRow);
    }

    function delBtn() {

    }

    city.addEventListener('blur', function() {
        var p1 = $('#alertP1');

        if (city.validity.valueMissing) {
            p1.innerHTML = 'City name should not be empty.';
        } else if (city.validity.patternMismatch) {
            p1.innerHTML = 'Please enter right name of city.';
        } else {
            p1.innerHTML = '';
        }
    });

    air.addEventListener('blur', function() {
        var p2 = $('#alertP2');

        if (air.validity.valueMissing) {
            p2.innerHTML = 'Air index should not be empty.';
        } else if (isNaN(air.value)) {
            p2.innerHTML = 'Please enter the valid value of air index.';
        } else if (isInteger(air.value) === false ) {
            p2.innerHTML = 'Valid value of air index should be integer.';
        } else {
            p2.innerHTML = '';
        }
    });

    $('#add-btn').addEventListener('click', function () {

    });


})();

