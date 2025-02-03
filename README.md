# PPT to PDF Converter Web Application

A user-friendly web application for converting PowerPoint presentations to PDF files with accessibility-focused design.

## Features

- **Unlimited File Size Support**: Convert presentations of any size
- **Drag & Drop Interface**: Simple file upload mechanism
- **Accessibility First**:
  - High-contrast color scheme
  - Color-blind friendly design
  - Clear visual feedback
- **Instant Conversion**: Real-time progress indication
- **Direct Download**: One-click PDF download after conversion
- **Cross-Platform Support**: Works with both .ppt and .pptx formats

## Prerequisites

- Python 3.6+
- LibreOffice
- Flask
- Modern web browser

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akadve/ppt-to-pdf-converter.git
   cd ppt-to-pdf-converter
   ```

2. **Install Python dependencies**
   ```bash
   pip install flask
   ```

3. **Install LibreOffice**
   - **Windows**: Download from [LibreOffice.org](https://www.libreoffice.org/)
   - **MacOS**:
     ```bash
     brew install libreoffice
     ```
   - **Ubuntu/Debian**:
     ```bash
     sudo apt-get install libreoffice
     ```

## Usage

1. **Start the application**
   ```bash
   python app.py
   ```

2. **Access the web interface**  
   Open `http://localhost:5000` in your browser

3. **Convert your files**
   - Drag & drop a PowerPoint file into the designated area
   - Wait for conversion to complete (typically <1 minute per 10MB)
   - Click the download button to save your PDF

## Technical Stack

- **Backend**: Python Flask
- **Frontend**: Vanilla JavaScript + CSS3
- **Conversion Engine**: LibreOffice Headless
- **Accessibility**: WCAG 2.1 compliant design

## Design Philosophy

1. **Accessibility**:
   - AAA contrast ratio (14:1)
   - No color-dependent information
   - Clear typography (16px base font)
   
2. **Performance**:
   - Zero external dependencies (except LibreOffice)
   - Minimal resource usage
   - Streamlined conversion process

3. **Security**:
   - Temporary file storage
   - Automatic cleanup after conversion
   - Input sanitization

## Troubleshooting

**Conversion fails**:
- Verify LibreOffice installation
- Check file permissions in `uploads/` directory
- Ensure file is not password protected

**Large file handling**:
- Conversion time scales linearly with file size
- Browser may show "Waiting" status for files >100MB

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request


---

**Note**: This application requires LibreOffice to be installed and accessible in the system PATH. Conversion times may vary based on system specifications and file complexity.
```
