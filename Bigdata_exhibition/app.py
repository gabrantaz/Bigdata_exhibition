from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/folleto')
def folleto():
    return render_template('folleto.html')

@app.route('/presentacion')
def presentacion():
    return render_template('presentacion.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/noticias')
def noticias():
    return render_template('noticias.html')

if __name__ == '__main__':
    app.run(debug=True)