//funcionalidades de app
const fs = require("fs");
const tareasJSON = fs.readFileSync("./app-tareas/tareas.json","utf-8");
const path = require('path');

function Tarea(titulo,estado) {
    this.titulo = titulo;
    this.estado = estado;
}


module.exports = {
    //esto nos va devolver la listar de tareas.json
    tareas : JSON.parse(tareasJSON),

    listar: function(tareas = this.tareas){
        console.log("----");
        tareas.forEach(({titulo,estado}) => {
            console.log(`titulo: ${titulo} -estado: ${estado}`.blue);
        });
    },
    //esto busca en tareas.json y escribe dentro del json
     escribirJSON: function(array) {
        fs.writeFile(path.join(__dirname, './app-tareas/tareas.json'), JSON.stringify(array, null, 3), 'utf-8', function(err) {
            if (err) {
                console.error('Error al escribir el archivo JSON:',err.red);
            } else {
                console.log('todo bien crack se guardo.'.green);
            }
        })
    
    },
    // usamos la funcion anterior para pushearle una nueva tarea
    guardarTarea: function(tarea) {
        
    this.tareas.push(tarea)
    this.escribirJSON(this.tareas)
    

    }, 
    // creamos 1 variable y con filter filtramos por estado
    filtrarPorEstado: function(estado){
        const filtrar = this.tareas.filter(tareas => tareas.estado === estado)
        return filtrar
        
    }


    
}

