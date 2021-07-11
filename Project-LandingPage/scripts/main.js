document.addEventListener('DOMContentLoaded', init)




function init() {

    // $.notify('Access Granted', 'success')
    $('body').sakura();
    $('#dateTimeInput').datetimepicker();
    $('.regular').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true
    });

    const sendBtn = document.getElementById('bookHourBtn');
    sendBtn.addEventListener('click', validation)
}


function validation() {

    let name = document.querySelector('#username');
    let lecture = document.getElementsByTagName('select')[0];
    let instructor = document.querySelectorAll('select')[1];
    let dateTime = document.getElementById('dateTimeInput');


    let regex = /^[A-Za-z]\w{3,25}$/gi;

    if (!regex.test(name.value)) {
        $.notify('Username  field incorrect', 'error');
        return;
    }

    if (!name.value || !dateTime.value) {
        $.notify('Please fill all form fields', 'error');
        return;
    }

    let section = document.querySelector('.education article:last-child');

    let ul = section.querySelector('.box-body ul');
    let span = section.querySelector('.box-footer span');


    let [date, time] = dateTime.value.split(' ');
    date = date.slice(5);


    let li = document.createElement('li');
    li.innerHTML = `
      <span>${instructor.value} - ${date} - ${time}</span>
       <i class="fas fa-chevron-circle-right"></i>
    `;


    ul.appendChild(li);


    // increase the span number 
    let num = Number(span.textContent);
    num++;
    span.textContent = num;

    $.notify('Access Granted', 'success');


}