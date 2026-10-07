// temporary.ts

// Clase que representa al usuario
export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}



export const userEndpoints: string[] = [
  'POST /users',      // Crear usuario
  'GET /users',       // Listar todos los usuarios
  'GET /users/:id',   // Obtener un usuario por ID
  'PUT /users/:id',   // Actualizar usuario por ID
  'DELETE /users/:id' // Eliminar usuario por ID
];
