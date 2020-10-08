import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these EPIC Destinations!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis           </p>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/adv1.jpeg'
                        text='Explore the Mountains of Everest. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem 
                        src='/images/adv2.jpg'
                        text='Explore the Mountains of Everest. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/adv3.jpg'
                        text='Explore the Mountains of Everest. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem 
                        src='/images/adv4.jpg'
                        text='Explore the Mountains of Everest. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem 
                        src='/images/adv5.jpg'
                        text='Explore the Mountains of Everest. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
