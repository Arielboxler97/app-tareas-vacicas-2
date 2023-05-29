console.clear()
const argv = require('process').argv
const tarea = require('./funcionesDeTareas')
require('colors')

const op = argv[2]

switch(op){

    case "listar":
        tarea.listar()
        break;
    case "crear":
        let titulo = argv[3]
        let estado = argv[4] || 'Pendiente crack'
        
        if(titulo !== undefined){
            
            tarea.guardarTarea({titulo,estado})
        }else{
            console.log("todo mal crack olvidaste llenar algun campo".red);
        }
        break;

        case "filtrar":
            let filtrar =  tarea.filtrarPorEstado(argv[3])
            
            if(!filtrar[0]){
                console.log("necesitas ingresar un criterio para filtrar".yellow);
            }
            tarea.listar(filtrar)
            break;
    default:
        if(op === undefined){
            console.log("Atención-Tienes que pasar una acción.");
            
            break;
        }else{
            console.log("No entiendo qué quieres hacer");
        break;
    }

}