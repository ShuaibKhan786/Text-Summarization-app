from flask import Flask, request, jsonify
from flask_cors import CORS

import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

app = Flask(__name__)
CORS(app)

# Load English language model
nlp = spacy.load('en_core_web_sm')

# Function to summarize text
def summarize_text(text):
    # Text Preprocessing
    doc = nlp(text)

    # Word Frequency Calculation
    word_freq = {}
    for word in doc:
        if not word.is_stop and not word.is_punct:
            word_text = word.text.lower()
            word_freq[word_text] = word_freq.get(word_text, 0) + 1

    # Normalize Word Frequencies
    max_freq = max(word_freq.values())
    word_freq = {word: freq / max_freq for word, freq in word_freq.items()}

    # Sentence Tokenization
    sent_tokens = [sent for sent in doc.sents]

    # Sentence Scoring
    sent_scores = {}
    for sent in sent_tokens:
        for word in sent:
            if word.text.lower() in word_freq:
                sent_scores[sent] = sent_scores.get(sent, 0) + word_freq[word.text.lower()]

    # Selecting Top Sentences for Summary
    summary_length = min(int(len(sent_tokens) * 0.5), len(sent_tokens))  # Adjust summary length as needed
    summary = nlargest(summary_length, sent_scores, key=sent_scores.get)

    # Formatting Summary as list of sentences
    final_summary = [sent.text for sent in summary]
    return final_summary

# Define endpoint for summarization
@app.route('/summary', methods=['POST'])
def get_summary():
    # Get JSON data from request
    data = request.json
    if 'text' not in data:
        return jsonify({"error": "Text field missing in request"}), 400
    
    text = data['text']
    summary = summarize_text(text)
    
    # Return summary as JSON response
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
