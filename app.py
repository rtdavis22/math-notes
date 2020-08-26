from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/homomorphisms.html')
def homomorphisms():
    return render_template('homomorphisms.html')

@app.route('/cosets.html')
def cosets():
    return render_template('cosets.html')

@app.route('/quotient.html')
def quotient():
    return render_template('quotient.html')

@app.route('/actions.html')
def actions():
    return render_template('actions.html')

@app.route('/conjugation.html')
def conjugation():
    return render_template('conjugation.html')

@app.route('/sylow.html')
def sylow():
    return render_template('sylow.html')

@app.route('/rings.html')
def rings():
    return render_template('rings.html')

@app.route('/ideals.html')
def ideals():
    return render_template('ideals.html')
