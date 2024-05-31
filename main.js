$(document).ready(function() {
    
    $('#task-form').submit(function(event) {
        event.preventDefault(); 

        var taskName = $('#task-input').val();
        if (taskName) {
            var taskItem = $('<li></li>').text(taskName); 
            $('#task-list').append(taskItem); 
            $('#task-input').val(''); 
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
