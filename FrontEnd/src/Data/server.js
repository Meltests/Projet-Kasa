export async function getAppartements() {
   const response = await fetch('http://localhost:8080/api/properties')
   if (!response.ok) {
      throw new Error('Erreur lors du chargement')
   }
   return response.json()
}

export async function getAppartementsById(id) {
   const response = await fetch(`http://localhost:8080/api/properties/${id}`)
   if (!response.ok) {
      throw new Error('Erreur lors du chargement des données')
   }
   return await response.json()
}
