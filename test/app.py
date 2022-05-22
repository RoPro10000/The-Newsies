from flask import Flask, render_template, request, send_file
from get_news import get_news

app = Flask(__name__)
@app.route("/main")
@app.route("/")
def index():
    return render_template('main.html')
@app.route('/getnews', methods=['POST'])
def analyse():
    try:
        key_word = request.form['keyword']
        return get_news(key_word)
    except:
        return "Can't find news"
@app.route('/news.js', methods=['GET'])
def getNews():
    return send_file('news.js')

@app.route('/technology')
def technology_page():
    return render_template('technology.html')
@app.route('/business')
def business_page():
    return render_template('business.html')
    
@app.route('/sports')
def sports_page():
    return render_template('sports.html')


@app.route('/entertainment')
def entertainment_page():
    return render_template('entertainment.html')

@app.route('/games')
def games_page():
    return render_template('games.html')
#------------------------------------------------------------------------#

if __name__ == "__main__": 
    app.run(debug=True)