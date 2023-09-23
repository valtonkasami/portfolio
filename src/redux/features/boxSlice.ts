import { createSlice } from '@reduxjs/toolkit'

export interface BoxState {
    show: boolean
    blur: string,
    title: string,
    img: string,
    description: string
}

const initialState = {
    show: false,
    blur: 'trans',
    title: '',
    img: '',
    description: ""
}

export const box = createSlice({
    name: 'box',
    initialState,
    reducers: {
        setBlur: (state, action) => {
            if (action.payload === 'html') {
                state.title = 'HTML'
                state.img = 'html.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of HTML, the foundation of modern web development. I possess the expertise needed to craft websites with diverse functionality, seamlessly bringing design concepts to life. My core strength lies in HTML, a technology that forms the backbone of the web. I harness its capabilities to create structured and accessible web content, ensuring a seamless user experience. What sets me apart is my ability to tackle a wide range of web projects. I have a proven track record of delivering outstanding results. My in-depth knowledge of HTML's markup language allows for organized and maintainable code, enabling me to handle even the most intricate web endeavors with finesse. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in collaborative environments, readily exchanging ideas and working alongside designers, back-end developers, and stakeholders to guarantee project success. In summary, I am not just an HTML developer; I am a visionary architect of web experiences that transcend expectations. Whether you're launching a new online venture or enhancing an existing digital presence, I am the skilled developer you can rely on to transform your vision into a captivating and functional reality. In a rapidly evolving digital landscape, I stay at the forefront of HTML, ensuring that my projects look good, feel good and function good!"
            } else if (action.payload === 'react') {
                state.title = 'React'
                state.img = 'react.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of React, the front-end framework that drives modern web applications. I possess the expertise needed to create websites with complex functionality, turning innovative design concepts into fully functional web applications. My core strength lies in React, a technology renowned for its power and flexibility in building dynamic and interactive user interfaces. I leverage React's capabilities to their fullest extent, seamlessly translating complex requirements into elegant and user-friendly solutions. What sets me apart is my ability to handle a diverse range of projects. I have a proven track record of delivering exceptional results. My deep understanding of React's component-based architecture allows for efficient code organization and maintainability, making it possible to handle even the most intricate projects with grace. Beyond technical proficiency, I possess strong problem-solving skills and a collaborative spirit. I thrive in multidisciplinary teams, readily communicating ideas and collaborating with designers, back-end developers, and stakeholders to ensure the success of every project. In summary, I am not just a React developer; I am a visionary creator of web experiences that push the boundaries of what is possible. Whether you're looking to bring a new startup idea to life or revamp an existing digital presence, I am the skilled developer you can trust to turn your vision into a captivating and functional reality."
            } else if (action.payload === 'css') {
                state.title = 'CSS'
                state.img = 'css.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of CSS (Cascading Style Sheets), the design language that breathes life and style into modern web interfaces. I possess the expertise needed to create visually stunning and responsive websites, seamlessly translating design concepts into polished user experiences. My core strength lies in CSS, a technology renowned for its ability to shape the visual aesthetics of web content. I harness CSS's capabilities to create layouts, animations, and responsive designs that captivate and engage users. What sets me apart is my ability to bring harmony to the visual aspects of web projects. I have a proven track record of delivering exceptional results. My deep understanding of CSS's styling principles allows for precise control over typography, color schemes, and layout, ensuring a consistent and elegant look across all platforms. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in multidisciplinary teams, readily coordinating with designers, front-end and back-end developers, and stakeholders to ensure the success of every project. In summary, I am not just a CSS developer; I am an artist of web aesthetics, dedicated to creating visually appealing and user-friendly web experiences. Whether you seek to elevate your brand's online presence or provide a seamless user journey, I am the skilled developer you can trust to transform your vision into a visually captivating and cohesive reality."
            } else if (action.payload === 'javascript') {
                state.title = 'Javascript'
                state.img = 'javascript.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of JavaScript, the dynamic scripting language that empowers modern web applications. I possess the expertise needed to create websites with intricate interactivity, seamlessly translating design concepts into fully functional web experiences. My core strength lies in JavaScript, a technology celebrated for its versatility in building dynamic and responsive user interfaces. I harness JavaScript's capabilities to their fullest extent, ensuring seamless user interactions and feature-rich web applications. What sets me apart is my ability to tackle a diverse range of web projects. I have a proven track record of delivering exceptional results. My in-depth understanding of JavaScript's programming concepts allows for efficient code organization and maintainability, enabling me to handle even the most complex projects with precision. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in cross-functional teams, readily sharing ideas and collaborating with designers, back-end developers, and stakeholders to ensure project success. In summary, I am not just a JavaScript developer; I am a visionary architect of web functionality that pushes the boundaries of user experience. Whether you're looking to enhance user engagement or build sophisticated web applications, I am the skilled developer you can rely on to transform your vision into reality."
            } else if (action.payload === 'redux') {
                state.title = 'Redux'
                state.img = 'redux.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of Redux, the state management library that empowers complex and data-driven web applications. I possess the expertise needed to create seamless and maintainable user interfaces, expertly integrating Redux to manage application state effectively. My core strength lies in Redux, a technology celebrated for its ability to handle application state with clarity and precision. I leverage Redux's capabilities to their fullest extent, ensuring robust data flow, predictability, and scalability in web applications. What sets me apart is my ability to architect and orchestrate the flow of data within web projects. I have a proven track record of delivering exceptional results. My deep understanding of Redux's principles and middleware allows for efficient state management, enabling me to tackle even the most intricate data-driven projects with finesse. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in cross-functional teams, readily collaborating with designers, front-end and back-end developers, and stakeholders to ensure the success of every project. In summary, I am not just a Redux developer; I am a conductor of web application data, dedicated to building robust and maintainable user experiences. Whether you aim to create data-intensive dashboards or streamline user interactions, I am the skilled developer you can rely on to transform your vision into reality."
            } else if (action.payload === 'next') {
                state.title = 'Next.js'
                state.img = 'next.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of Next.js, the versatile React framework that accelerates the development of modern web applications. I possess the expertise needed to create high-performance websites with advanced functionality, leveraging Next.js to streamline development and enhance user experiences. My core strength lies in Next.js, a technology celebrated for its ability to simplify server-side rendering, routing, and API integration within React applications. I harness Next.js's capabilities to their fullest extent, ensuring lightning-fast loading times, SEO-friendliness, and seamless client-server communication. What sets me apart is my ability to architect and optimize web projects for performance and scalability. I have a proven track record of delivering exceptional results. My deep understanding of Next.js's architecture and features allows for efficient development, enabling me to handle even the most complex web applications with grace. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in multidisciplinary teams, readily coordinating with designers, back-end developers, and stakeholders to ensure the success of every project. In summary, I am not just a Next.js developer; I am a pioneer of streamlined web development, committed to building high-performance and user-centric web experiences. I am the skilled developer you can trust for fast websites!"
            } else if (action.payload === 'node') {
                state.title = 'Node.js'
                state.img = 'node.png'
                state.description = "I am a highly skilled and proficient web developer with a mastery of Node.js, the server-side JavaScript runtime that powers modern web applications. I possess the expertise needed to create robust and scalable web servers, leveraging Node.js to handle backend operations efficiently. My core strength lies in Node.js, a technology celebrated for its non-blocking, event-driven architecture, and versatility in building server-side applications. I harness Node.js's capabilities to their fullest extent, ensuring high-performance, real-time functionality, and seamless data processing. What sets me apart is my ability to architect and optimize the server-side components of web projects. I have a proven track record of delivering exceptional results. My deep understanding of Node.js's asynchronous programming model allows for efficient handling of concurrent connections and I/O operations, enabling me to develop scalable and responsive server applications. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in cross-functional teams, readily collaborating with front-end developers, database engineers, and stakeholders to ensure the success of every project. In summary, I am not just a Node.js developer; I am an architect of server-side solutions, dedicated to building robust and high-performing web applications. Whether you need to develop APIs, I am the skilled developer you can rely on to transform your vision into a reality."
            } else if (action.payload === 'post') {
                state.title = 'PostgreSQL'
                state.img = 'postgresql.png'
                state.description = "I am an adept web developer with extensive PostgreSQL expertise, specializing in crafting and optimizing versatile, scalable data solutions for modern web applications using PostgreSQL's robust relational database capabilities. My core strength lies in PostgreSQL, a technology renowned for its data integrity, performance, and support for complex queries. I harness PostgreSQL's capabilities to their fullest extent, ensuring efficient data management, retrieval, and scalability. What sets me apart is my ability to design and fine-tune database structures for optimal performance and reliability. I have a proven track record of delivering exceptional results. My deep understanding of PostgreSQL's data modeling, indexing, and query optimization enables me to handle even the most intricate data-related challenges with precision. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in cross-functional teams, readily collaborating with developers, data analysts, and stakeholders to ensure the success of every project. In summary, I am not just a PostgreSQL developer; I am a data architect, dedicated to constructing robust and high-performing data solutions that empower innovation in web applications. Whether you're looking to develop complex data-driven systems, analytics platforms, or business-critical applications, I am the skilled developer you can rely on to transform your data vision into a PostgreSQL-powered reality."
            } else if (action.payload === 'mongo') {
                state.title = 'MongoDB'
                state.img = 'mongo.jpg'
                state.description = "I am a highly skilled and proficient web developer with a mastery of MongoDB, the NoSQL database that revolutionizes data storage for modern web applications. I possess the expertise needed to design and manage databases that enable flexible and scalable data solutions, expertly utilizing MongoDB to unlock the full potential of data-driven applications. My core strength lies in MongoDB, a technology renowned for its document-oriented, schema-less approach, and ability to handle unstructured data seamlessly. I leverage MongoDB's capabilities to their fullest extent, ensuring efficient data storage, retrieval, and scalability. What sets me apart is my ability to architect and optimize databases for performance and versatility. I have a proven track record of delivering exceptional results. My deep understanding of MongoDB's data modeling and querying allows for organized and scalable data structures, enabling me to handle even the most complex data-related challenges with precision. Beyond technical proficiency, I excel in problem-solving and collaboration. I thrive in cross-functional teams, readily collaborating with developers, data analysts, and stakeholders to ensure the success of every project. In summary, I am not just a MongoDB developer; I am a data architect, committed to building flexible and high-performing data solutions that drive innovation in web applications. I am the skilled developer you can trust for a MongoDB Project."
            } else if (action.payload === 1) {
                state.blur = 'blury trans'
                state.show = true
            } else {
                state.show = false
                state.blur = 'trans'
            }
        }
    }
})

export const { setBlur } = box.actions
export default box.reducer