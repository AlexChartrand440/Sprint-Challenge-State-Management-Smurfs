1. What problem does the context API help solve?
Prevents the need to pass data down through props, allowing access to the data via the context.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?  
The state is maintained by the 'store'. Reducers are a means of managing the state in a controlled and predictable way. Actions are what prompt a change in the state and are passed into reducers.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and can be used by any component, whereas component state is local and only accessible by that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


5. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API. It feels simpler and more straight forward.
