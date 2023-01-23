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
            </div>
            <div className="aether__whataether-container">
                <Feature title='The AI That Simplifies Your Smart Home' text="Managing your smart home can be a hassle, but not with Aether. This AI can control your smart devices, such as lights, thermostats, and security cameras, through simple voice commands, creating a more convenient and streamlined experience. Whether you're at home or on the go, you can easily control your smart devices with Aether, making it easy to create the perfect ambiance or ensure that your home is secure." />
                <Feature title='The AI That Revolutionizes Customer Service' text="Providing excellent customer service is essential for any business, and Aether is here to help. This advanced AI can handle customer inquiries and complaints quickly and accurately, providing personalized responses and improving overall customer satisfaction. Whether it's a question about a product or a complaint about an order, Aether can provide a prompt and accurate response, leaving customers feeling heard and valued. With Aether, businesses can improve their customer service and increase customer loyalty." />
                <Feature title='The AI That Keeps You on Track with To-Do Lists' text="Nowadays, it can be difficult to stay on top of all the tasks we need to complete. But with Aether, keeping track of your to-do list has never been easier. This revolutionary AI personal assistant can help you manage your schedule, set reminders, and make sure nothing falls through the cracks. One of the most powerful features of Aether is its ability to manage to-do lists. With simple voice commands, you can add tasks to your list, set reminders, and even prioritize items. Whether you need to remember to call a client or pick up groceries on the way home, Aether can help you stay on top of it all." />
            </div>
        </div>
    );
};

export default WhatAether;
