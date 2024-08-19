export type Troom = {
    id?: number, 
    type?: string,
    prix?: number,
    description?: string,
    ville?: string,
    longitude?: string,
    latitude?: string,
    photo?: string,
    proprietaire?: string,
    nbChambre?: number,
    status?: boolean,
    bigCard?: boolean
}

export type Tuser = {
    id?: number,
    nom?: string,
    email?: string,
    telephone?: string,
    password?: string,
    status?: string
}