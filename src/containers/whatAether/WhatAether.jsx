import React from 'react';
import './whataether.css';
import {Feature} from "../../components";
const WhatAether = () => {
    return (
        <div className='aether__whataether section__margin' id='waether'>
            <div className='aether__whataether-feature'>
              <Feature title='The Personal Assistant AI That Makes Your Life Easier' text=" In today's fast-paced world, we all need a little help keeping up with our daily tasks. That's where Aether comes in. This revolutionary AI personal assistant can help you manage your schedule, send emails, make phone calls, set reminders, and more, all through simple voice commands. With Aether, you can easily keep track of your to-do list, schedule meetings, and stay on top of your emails, all without ever having to lift a finger." />
            </div>
            <div className='aether__whataether-heading'>
                <h1 className='gradient__text'>Unlock the power of AI with Aether - your personal digital assistant</h1>
                <p>Explore the Library</p>
            </div>
            <div className="aether__whataether-container">
                <Feature title='The AI That Simplifies Your Smart Home' text="Managing your smart home can be a hassle, but not with Aether. This AI can control your smart devices, such as lights, thermostats, and security cameras, through simple voice commands, creating a more convenient and streamlined experience. Whether you're at home or on the go, you can easily control your smart devices with Aether, making it easy to create the perfect ambiance or ensure that your home is secure." />
                <Feature title='The AI That Revolutionizes Customer Service' text="Providing excellent customer service is essential for any business, and Aether is here to help. This advanced AI can handle customer inquiries and complaints quickly and accurately, providing personalized responses and improving overall customer satisfaction. Whether it's a question about a product or a complaint about an order, Aether can provide a prompt and accurate response, leaving customers feeling heard and valued. With Aether, businesses can improve their customer service and increase customer loyalty." />
                <Feature title='The AI That Enhances Your Gaming Experience' text="Are you a gamer looking to take your experience to the next level? Look no further than Aether. This advanced AI can predict your actions in games, providing tips and tricks to help you improve your gameplay. It can also help you connect with other players, making it easy to find teammates or opponents for your next match. With Aether, your gaming experience will be more enjoyable, more engaging and more fun." />
            </div>
        </div>
    );
};

export default WhatAether;
