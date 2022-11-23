import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-Success mt-8 font-bold text-5xl text-center'>Blog Related Query</h1>
            </div>
            <div className='mt-5 mx-9 '>
                <h3 className='font-bold text-black text-2xl'> 1. What are the different ways to manage a state in a React application?</h3>
                <br />
                <p className='font-bold text-primary'>Answer: There are four main types of state you need to properly manage in your React apps:

                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state .Local state is data we manage in one or another component.  Global state is data we manage across multiple components. Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters. </p>
                <h3 className='font-bold text-black text-2xl'> 2. How does prototypical inheritance work?</h3>
                <br />
                <p className='font-bold text-primary'>Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object. </p>
                <h3 className='font-bold text-black text-2xl'> 3.  What is a unit test? Why should we write unit tests?</h3>
                <br />
                <p className='font-bold text-primary'>Answer: The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.For Test-Driven Development (TDD), you write unit tests before writing any implementation.This makes your implementation details in your code shorter and easier to understand.In this instance, the best time to write unit tests is immediately.For others, most developers write unit tests after the code's been written. </p>
                <br />
                <h3 className='font-bold text-black text-2xl'> 4. React vs. Angular vs. Vue?</h3>
                <br />
                <p className='font-bold text-primary'>Answer: Vue provides higher customizability and hence is easier to learn than Angular or React.Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.Hence, the transition to Vue from either of the two is an easy option. </p>

            </div>
        </div>
    );
};

export default Blog;