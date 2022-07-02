export interface Movie {
    playback_id: string,
    age_rating: string,
    authors: string[],
    awards: string[],
    cast: string[],
    category: string,
    cover_art: string,
    description: string,
    genre: string,
    id: string,
    isFree: false,
    name: string,
    owner_id: string,
    price: number,
    rate: number,
    trailer: string,
    video: string,
    media_type?: string,
    isPublished?: string,
    dateReleased: string,
    language: string
}

export interface userDetails {
    address: string,
    city: string,
    country: string,
    displayName: string,
    firstName: string,
    lastName: string,
    owner_id: any,
    phone: string
}


export interface newAccountDetails {
    email: string,
    phone?: string,
    owner_id: any
}

export interface PaymentDetails {
    total_amount: string,
    currency: string,
    transaction_id: string,
    return_url: string,
    description?: string,
    purchaseRef?: string,
    name?: string
}