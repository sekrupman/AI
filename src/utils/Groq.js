import {Groq} from 'groq-sdk'
const groqApi = process.env.REACT_APP_GROQ_API_KEYS
const groq = new Groq({
  apiKey: groqApi,
  dangerouslyAllowBrowser:true
})

const requestToGroq = async (content) => {
  try {
    const reply = await groq.chat.completions.create({
      messages: [{
        role: 'user',
        content: content
      }],
      model: 'llama3-8b-8192'
    });
    return reply.choices[0].message.content;
  } catch (error) {
    throw new Error(`Error in requestToGroq: ${error.message}`);
  }
};

export { requestToGroq };



