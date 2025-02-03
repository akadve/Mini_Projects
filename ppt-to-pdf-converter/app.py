import os
import subprocess
from flask import Flask, render_template, request, send_file

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = None  # No file size limit

# Create uploads directory if not exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    # Get uploaded file
    file = request.files['file']
    if not file:
        return {'status': 'error', 'message': 'No file uploaded'}

    # Save original file
    ppt_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(ppt_path)

    try:
        # Convert using LibreOffice
        cmd = [
            'libreoffice',
            '--headless',
            '--convert-to', 'pdf',
            '--outdir', app.config['UPLOAD_FOLDER'],
            ppt_path
        ]
        subprocess.run(cmd, check=True)

        # Return PDF path
        pdf_path = os.path.splitext(ppt_path)[0] + '.pdf'
        return {'status': 'success', 'pdf_path': os.path.basename(pdf_path)}

    except Exception as e:
        return {'status': 'error', 'message': str(e)}

@app.route('/download/<filename>')
def download(filename):
    return send_file(
        os.path.join(app.config['UPLOAD_FOLDER'], filename),
        as_attachment=True
    )

if __name__ == '__main__':
    app.run(debug=True)