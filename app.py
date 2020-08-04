from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/homomorphisms.html')
def homomorphisms():
    return render_template('homomorphisms.html')
