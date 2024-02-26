// Function to send a message to the server and update the chat history



function sendMessage() {
    var query = $('#query-input').val();
    var chatHistory = $('#chat-history').html();
    $.ajax({
        type: 'POST',
        url: '/chatbot/',
        data: {
            'query': query,
            'chat_history[]': chatHistory.split('<br>').filter(Boolean)
        },
        success: function (data) {
            // Update the chat history
            //$('#chat-history').html(data.chat_history.join('<br>'));

            // Display the response
       //   $('#chat-history').append('<div style="  float:left; margin-top: 10px; background: #724ae8; font-size: 0.95rem; color: #fff; border-radius: 10px 10px 10px 0; white-space: pre-wrap; padding: 12px 16px; max-width: 75%;"><strong>You  :</strong> ' + query + '</div>');
       //   $('#chat-history').append('<div style="float:right; margin-top: 10px;  background: #4150648C; font-size: 0.95rem; color: #fff; border-radius: 10px 10px 0 10px; white-space: pre-wrap; padding: 12px 16px; max-width: 75%;"><strong>Chatbot :</strong> ' + data.response + '</div>');
        //  $('#query-input').val('');

        $('#chat-history').append('<div style=" display: block; width:50%; clear:both; float:left; margin-top: 10px; background-color: rgb(179, 27, 182); font-size: 0.95rem; color: #fff; border-radius: 10px 10px 10px 0; white-space: pre-wrap; padding: 12px 16px;"><strong>You  :</strong> ' + query + '</div>');
        $('#chat-history').append('<div style="clear:both; float:right; margin-top: 10px;  background-color: #575357;; font-size: 0.95rem; color: #fff; border-radius: 10px 10px 0 10px; white-space: pre-wrap; padding: 12px 16px; max-width: 75%;"><strong>Chatbot :</strong> ' + data.response + '</div>');
        $('#query-input').val('');
     

           
        }
    });
}



/*
function sendMessage() {
    var query = $('#query-input').val();
    var chatHistory = $('#chat-history').html();
    $.ajax({
        type: 'POST',
        url: '/chatbot/',
        data: {
            'query': query,
            'chat_history[]': chatHistory.split('<br>').filter(Boolean)
        },
        success: function (data) {
            // Update the chat history
            //$('#chat-history').html(data.chat_history.join('<br>'));

            // Display the response
            chatHistory.append('<div class="user-message"><strong>You:xx/strong> ' + query + '</div>');
            chatHistory.append('<div class="bot-message"><strong>Chatbot:xxx</strong> ' + data.response + '</div>');
            $('#query-input').val('');
           
        }
    });
}


*/





// Function to clear the chat history
function clearChat() {
    $('#chat-history').html('');
    $('#query-input').val('');
}

// Event listener for the submit button
$('#submit-btn').click(function () {
    sendMessage();
});

// Event listener for the clear button
$('#clear-btn').click(function () {
    clearChat();
});
