document.getElementById('send-button').onclick = function() {
  var userInput = document.getElementById('user-input').value;
  document.getElementById('user-input').value = ''; // 입력 필드 초기화

  // 여기에 AI 채팅 봇 API 호출 코드 추가
  // 예: OpenAI의 ChatGPT API를 호출
  fetch('API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      prompt: userInput,
      max_tokens: 50
    })
  })
  .then(response => response.json())
  .then(data => {
    var chatHistory = document.getElementById('chat-history');
    var botResponse = document.createElement('div');
    botResponse.textContent = data.choices[0].text; // API 응답 사용
    chatHistory.appendChild(botResponse);
  })
  .catch(error => console.error('Error:', error));
};
