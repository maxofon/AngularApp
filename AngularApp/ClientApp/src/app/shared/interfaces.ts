export interface User {
  email: string,
  password: string,
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string,
  expiresIn: string
}

export interface Product {
  id?: string,
  name: string,
  company: string,
  price: string
}

export interface FbCreateResponse {
  name: string
}
