space ID: z5o6j50ee2nm;
Content Delivery API - access token: jXRNMlchsHw2R0uUXqrR1WIkGKIpUX70errVYsKYkxk


import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users'; //https://api.github.com/users

const FetchData = () => {
  //use state
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //console.log('suc');
    const fetchUsers = async () => {
      try {
        //loading also you can add spinner here
        // element.innerHTML = `<h4 class="product-loading"> Loading...</h4>`;
        // Await the response of the fetch call
        //console.log(url);
        const response = await fetch(url);
        // Proceed once the first promise is resolved.
        if (!response.ok) {
          setIsError(true);
          throw new Error('Network response was not ok ' + response.statusText);
        }
        // Await the response to be converted into JSON
        const data = await response.json();
        setUsers(data);
        //console.log(data);
        // Proceed once the second promise is resolved.
        return data;
      } catch (error) {
        // Handle any errors
        console.error('There was a problem with the fetch operation:', error);
        setIsError(true);
        // element.innerHTML = `<p class="error">ERROR</p>`;
      } finally {
        setIsLoading(false); // Ensure this is called in both success and error cases
      }
     
    };
    fetchUsers();
    //console.log(users);
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }
// if need distructure property here, example:const { name, avatar_url, company, bio } = user;
  return (
    <>
      <h2>fetch data example</h2>
      <h3>Github users</h3>
      <ul>
        {users.map((el) => {
          const { id, login, avatar_url, html_url } = el;
          return (
            <li key={id}>
              <img
                src={avatar_url}
                alt={login}
              />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchData;