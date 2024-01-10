import React from 'react'

export default function About(props) {
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <header>
                    <h1>About Us</h1>
                </header>
                <section>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lectus quis turpis fermentum
                        consectetur. Sed aliquam tortor vitae urna malesuada, et volutpat ligula tincidunt. Proin vel
                        velit a
                        libero bibendum laoreet vel vel nulla.</p>
                </section>
                <section>
                    <h2>Our Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lectus quis turpis fermentum
                        consectetur. Sed aliquam tortor vitae urna malesuada, et volutpat ligula tincidunt. Proin vel
                        velit a
                        libero bibendum laoreet vel vel nulla.</p>
                </section>
                <section>
                    <h2>Mission and Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lectus quis turpis fermentum
                        consectetur. Sed aliquam tortor vitae urna malesuada, et volutpat ligula tincidunt. Proin vel
                        velit a
                        libero bibendum laoreet vel vel nulla.</p>
                </section>
                <footer>
                    <p>Contact us at: <a href="himanshuoliofficial@gmail.com">himanshuoliofficial@gmail.com</a></p>
                </footer>
            </div>
        </>
    )
}
