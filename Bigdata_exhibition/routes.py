from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/brochure')
def brochure():
    return render_template('brochure.html')

@app.route('/presentation')
def presentation():
    return render_template('presentation.html')

@app.route('/more-info')
def more_info():
    return render_template('more_info.html')

@app.route('/bibliography')
def bibliography():
    return render_template('bibliography.html')