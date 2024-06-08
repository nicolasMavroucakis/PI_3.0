# server.py
from flask import Flask, request
from flask_cors import CORS
import PyPDF2

app = Flask(__name__)
CORS(app)

@app.route('/extract-text', methods=['POST'])
def extract_text():
    pdf_file = request.files['pdf']
    pdf_content = pdf_file.read()

    text = extract_text_from_pdf(pdf_content)
    return text

def extract_text_from_pdf(pdf_content):
    text = ""
    pdf_reader = PyPDF2.PdfFileReader(pdf_content)
    for page_num in range(pdf_reader.numPages):
        page = pdf_reader.getPage(page_num)
        text += page.extractText()
    return text

if __name__ == '__main__':
    app.run(debug=True)
