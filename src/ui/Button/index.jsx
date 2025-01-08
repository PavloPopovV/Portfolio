import React from 'react'

const Button = ({text, url, addClass}) => {
  return (
    <a href={url} target='_blank' className={`relative uppercase text-sm py-[10px] px-[30px] border-[1px] border-black after:absolute after:content-[""] after:w-full after:h-full after:bg-yellow-400 after:top-[7px] after:left-[7px] after:z-[-1] after:transition-all hover:after:top-0 hover:after:left-0 ${addClass}`}>{text}</a>
  )
}

export default Button
