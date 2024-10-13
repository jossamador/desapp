import os
from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Ruta para obtener los archivos y carpetas
@app.route('/files')
def get_files():
    directory = os.getcwd()  # Puedes cambiar esto a cualquier directorio que desees
    items = []

    for item in os.listdir(directory):
        path = os.path.join(directory, item)
        if os.path.isdir(path):
            items.append({"name": item, "type": "folder"})
        else:
            items.append({"name": item, "type": "file"})

    return jsonify(items)

# Ruta principal para servir el HTML
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
