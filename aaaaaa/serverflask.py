import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS

conn = psycopg2.connect(
    host="localhost",
    database="Luderia",
    user="postgres",
    password="123",
    port="5432"
)
app = Flask(__name__)

CORS(app)


@app.route('/teste', methods=['GET'])
def get_tabela():
    cur = conn.cursor()
    cur.execute("SELECT * FROM jogos")
    results = cur.fetchall()
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)