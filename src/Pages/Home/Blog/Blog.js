import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-5xl text-white my-3 font-bold'>Blogs</h1>
            <h3 className='text-3xl font-bold text-white mt-3 mb-5'>Frequently Asked Questions</h3>
            <div className="collapse bg-base-200 my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary  text-white peer-checked:bg-sky-400 peer-checked:text-white">
                    <h1 className='text-2xl'>Difference between SQL and NoSQL?</h1>
                </div>
                <div className="collapse-content bg-primary text-center text-white peer-checked:bg-sky-500 peer-checked:text-white">
                    <p className='text-xl'>Differences between SQL and NoSQL is: SQL database allows users to query, insert, delete and update records in relational database. It is table based. It uses SQL means Structured Query Language.SQL also allows for complicated logic to be used through the use of dealings and embedded method such as stored functions etc. It is cannot be used with a large ammount of data. On the other hand, NoSQL databases are uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data. NoSQL systems are designed to be more flexible than traditional relational databases and can scale up or down easily to accommodate changes in usage or load. It use with a large ammount of data.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary  text-white peer-checked:bg-sky-400 peer-checked:text-white">
                    <h1 className='text-2xl'>What is JWT, and how does it work?</h1>
                </div>
                <div className="collapse-content bg-primary text-center text-white peer-checked:bg-sky-500 peer-checked:text-white">
                    <p className='text-xl'>JWT (Json Web Token) is an open standard used to share security information between two parties: A Client and A Server. Each JWT (Json Web Token) contains encoded JSON (JavaScript Object Notation) objects. JWT (Json Web Token) check tokens after pasing data. You cannot able to access data after token is issued. JWT authorization works by encoding information into a JSON web token (JWT), which is then passed between the client and server. The client sends users  credentials to the server, that authenticate the user and generate JWT containing user information. And server sends jwt to the client, which stores for future use. When client wants to access, it sends jwt in authorization header of http request, then server checks the token. If token is valid it decode user information and give him access. If user try to access data from the server,  If the user is not authorized, the server returns an error message or if the user is authorized to access the resource, the server returns the requested data. JWT works (Json Web Token) like this and can secure data.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary  text-white peer-checked:bg-sky-400 peer-checked:text-white">
                    <h1 className='text-2xl'>What is the difference between javascript and NodeJS?</h1>
                </div>
                <div className="collapse-content bg-primary text-center text-white peer-checked:bg-sky-500 peer-checked:text-white">
                    <p className='text-xl'>Javascript is a computer programming language. It build scripts for the website and build dynamic HTML (Hyper Text Markup Language) pages with interactive effects on a webpage. It can play with DOM (Document Object Model). It only runs on the browser means it is used in client side. React, Angular and Vue are some JS (JavaScript) frameworks. Node js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine. It is a Javascript runtime enviorment. Node mostly used ouside of browser means server side. With node Javascript can be used in ouside of browser. It is capable to add HTML (Hyper Text Markup Language) tags. Lodash, Express are some node frameworks.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary  text-white peer-checked:bg-sky-400 peer-checked:text-white">
                    <h1 className='text-2xl'>How does NodeJS handle multiple requests at the same time?</h1>
                </div>
                <div className="collapse-content bg-primary text-center text-white peer-checked:bg-sky-500 peer-checked:text-white">
                    <p className='text-xl'>The Issue of threading is threading between systems and using a context switch between two threads is a slow process and cant handle multiple requests at the same time. To address these threading concerns, Node js uses a single thread with an event-loop. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . By using Event Loop, which is infinite loop, that receives requests and processes them. So, By single threading with an event loop node js can handle multiple requests at the same time.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;