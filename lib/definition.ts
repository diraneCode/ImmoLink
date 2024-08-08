export type roomType = {
    id: number, 
    type: string,
    prix: number,
    description: string,
    ville: string,
    longitude?: string,
    latitude?: string,
    photo: string,
    proprietaire?: string,
    staut?: boolean,
    bigCard?: boolean
}

export type Tuser = {
    nom?: string,
    email?: string,
    telephone?: string,
    password?: string
}