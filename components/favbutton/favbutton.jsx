import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import './scss/favbutton.scss'

export const FavButton = ({liked, likes, onClick}) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder

    return <button onClick={onClick}><Icon size='32px' /> {likes}</button>
}
