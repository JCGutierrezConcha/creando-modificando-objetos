/* 
1. Crear una función constructora para cada objeto.
2. Crear los getters y setters de cada objeto.
3. Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre
 y otro método que permita mostrar todos los datos de los usuarios registrados.
 */

//Función constructora Consultorio.

class Consultorio {
    #nombre;
    #pacientes;
    constructor(nombre, pacientes = []) {
        this.#nombre = nombre;
        this.#pacientes = pacientes;
    }

    //Getters y Setters Clase Consultorio

    get nombre() {
        return this.#nombre;
    }


    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get pacientes() {
        return this.#pacientes;
    }

    set pacientes(newPaciente) {
        this.#pacientes.push(newPaciente);
    }

    //Método para buscar los datos por nombre de paciente registrado.
    buscarPacientePorNombre(nombrePaciente) {
        const pacienteCoincide = this.pacientes.find((item) => item.nombre == nombrePaciente);
        return `Nombre: ${pacienteCoincide.nombre}, Edad: ${pacienteCoincide.edad}, Rut: ${pacienteCoincide.rut}, Diagnóstico: ${pacienteCoincide.diagnostico}`;
    }

    //Método para mostrar los datos de todos los pacientes registrados.
    mostrarTodosPacientes() {
        let datosTodos = "";
        this.pacientes.forEach(function (item) {
            datosTodos += `Nombre: ${item.nombre}, Edad: ${item.edad}, Rut: ${item.rut}, Diagnóstico: ${item.diagnostico}\n`;
        })
        return datosTodos;
    }
}

//Función constructora Clase Paciente

class Paciente {
    #nombre;
    #edad;
    #rut;
    #diagnostico;
    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#rut = rut;
        this.#diagnostico = diagnostico;
    }

    //Getters y Setters Paciente

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(newEdad) {
        this.#edad = newEdad;
    }

    get rut() {
        return this.#rut;
    }

    set rut(newRut) {
        this.#rut = newRut;
    }

    get diagnostico() {
        return this.#diagnostico;
    }

    set diagnostico(newDiagostico) {
        this.#diagnostico = newDiagostico;
    }
}

//4. Instanciar cada objeto utilizando la instrucción new.

//Instancias Paciente

const paciente1 = new Paciente("Gabriel Gonzalez", 47, "12.175.922-4", "Gastritris");
const paciente2 = new Paciente("Carlos Trujillo", 53, "21.544.889-7", "Hernia");
const paciente3 = new Paciente("Ximena Gomez", 39, "14.234.543-3", "Rinitis Alérgica");
const paciente4 = new Paciente("Juan Facuse", 28, "17.877.532-4", "Migraña");
const paciente5 = new Paciente("Clarice Berger", 56, "10.215-874-5", "Diabetes");
const paciente6 = new Paciente("Andrea Contreras", 81, "2.838.876-6", "Hipertensión");

//Instancia Consultorio

const consultorio1 = new Consultorio("Consultorio Eloísa Díaz");

//Pruebas del código

// Agregar pacientes
consultorio1.pacientes = paciente1;
consultorio1.pacientes = paciente2;
consultorio1.pacientes = paciente3;
consultorio1.pacientes = paciente4;
consultorio1.pacientes = paciente5;
consultorio1.pacientes = paciente6;

//Nombre del Consultorio.
console.log(consultorio1.nombre);

//Nombre del paciente 1.
console.log(paciente1.nombre);

//Edad del paciente 3.
console.log(paciente3.edad);

//Rut del paciente 4.
console.log(paciente4.rut);

//Diagnóstico del paciente 5.
console.log(paciente5.diagnostico);

//Registro de pacientes (Array de Objetos).
console.log(consultorio1.pacientes);

//Función búsqueda de un paciente por su nombre.
console.log(consultorio1.buscarPacientePorNombre("Gabriel Gonzalez"));

//Función mostrar todos los pacientes del consultorio.
console.log(consultorio1.mostrarTodosPacientes());