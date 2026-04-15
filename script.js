function openAI() {
  document.getElementById('ai-panel').classList.add('open');
  document.getElementById('ai-overlay').classList.add('open');
  
  // Only add the greeting if this is the first time opening the chat
  if (document.getElementById('ai-messages').children.length === 0) {
    const name = document.getElementById('username').value.trim() || 'there';
    addMessage('assistant', `Hi ${name}! I'm your ArriveReady coach. How can I help you optimize your commute today?`);
  }
  
  setTimeout(() => document.getElementById('ai-input').focus(), 300);
}