const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card">'+
                    '<div class="card-image">'+
                        '<h3>'+item.title+'</h3>'+
                        '<img src="'+item.path+'" alt="Cute Puppy" height="400px">'+
                    '</div>'+
                    '<div class="card-content">'+
                        '<p>'+item.description+'</p>'+
                    '</div>'+
                    '<div class="card-action">'+
                        '<a href="https://en.wikipedia.org/wiki/Dog" target="_blank">Learn more about dogs</a>'+
                    '</div>'+
                '</div>'+
                '</div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    postCat(formData);
}

function postCat(cat){
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('Dog Post Success');
            }
        }
    });
}

function getAllCats(){
    $.get('/api/cats', (response)=>{
        // response's data is in array format, so we can use it
        if (response.statusCode === 200 && response.data.length > 0) {
            console.log('count ' +  response.data.length)
            addCards(response.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSubmitted();
    });
    $('.modal').modal();
    getAllCats();
});