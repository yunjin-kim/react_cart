import React from 'react'
import '../App.css';

export default function Music({album}) {

  return (
    <div className="detailPageWrap">
      <img className="eachAlbumImg" src={album.image[2]['#text']} />
      <p>{album.name} / {album.artist.name}</p>
      <p>가격: {album.playcount*10}원</p>
      <button className="cartBtn">장바구니 담기</button>
    </div>
  )
}
