document.addEventListener('DOMContentLoaded', function() {
  const sendMessage = (text, sender = 'user') => {
    const chatMessages = document.querySelector('.chat-messages');
    const msgElement = document.createElement('div');
    msgElement.classList.add('message', sender);
    msgElement.textContent = text;
    chatMessages.appendChild(msgElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  document.querySelectorAll('.sidebar a[data-bot-name]').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedBotName = this.getAttribute('data-bot-name');
      document.querySelector('.chat-header h2').textContent = 'Chat with ' + selectedBotName;
      document.querySelector('.chat-messages').innerHTML = '';
      sendMessage('Hello, how can I assist you today?', 'bot');
    });
  });

  document.querySelector('.chat-input button').addEventListener('click', function() {
    const inputField = document.querySelector('.chat-input input');
    const messageText = inputField.value.trim();
    if (messageText) {
      sendMessage(messageText, 'user');
      inputField.value = '';
      // 여기에 AI 응답 로직을 구현하세요...
    }
  });
});
