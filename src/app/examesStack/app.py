from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF

app = Flask(__name__)
CORS(app)

@app.route('/extract-text', methods=['POST'])
def extract_text():
    if 'pdf' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['pdf']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    pdf_document = fitz.open(stream=file.read(), filetype="pdf")
    text = ""
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        text += page.get_text()

    return jsonify({"text": text})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
