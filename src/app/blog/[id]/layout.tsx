import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className={'pt-[60px] bg-neutral-300 h-screen w-screen'}>
      {children}
    </section>
  )
}
