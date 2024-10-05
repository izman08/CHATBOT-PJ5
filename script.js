const chatBox = document.getElementById( 'chat-box' );
const userInput = document.getElementById( 'user-input' );


const responses = {
    "hello": "Hi there! How can I assist you?",
    "how are you": "I'm just a bot, but I'm functioning well! How about you?",
    "what is your name": "I'm a simple chatbot designed to assist you.",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I didn't understand that. Could you rephrase?"
};


function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();

    if ( userMessage === "" ) {
        return;
    }


    addMessage( userMessage, 'user' );


    const botMessage = responses[ userMessage ] || responses[ "default" ];


    setTimeout( () => {
        addMessage( botMessage, 'bot' );
    }, 500 );
    userInput.value = "";
}

function addMessage( message, sender ) {
    const messageElement = document.createElement( 'div' );
    messageElement.classList.add( 'message', sender );
    messageElement.textContent = message;
    chatBox.appendChild( messageElement );
    chatBox.scrollTop = chatBox.scrollHeight;
}


function handleKeyPress( event ) {
    if ( event.key === "Enter" ) {
        sendMessage();
    }
}
