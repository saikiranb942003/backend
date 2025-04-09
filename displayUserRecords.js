function storeData() {

    const user = {
      userName: document.getElementById('userName').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value
    };
  
    localStorage.setItem('userRecord', JSON.stringify(user));

    /*
    -> JSON.stringify(user) converts the object into a string because Local Storage can only store strings.
   
    */
    alert("Data stored in Local Storage");
  }
  
function retrieveData() {
    const storedUser = localStorage.getItem('userRecord');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      /*
       -> Converts the stored JSON string back into a JavaScript object using JSON.parse().
      */
      document.getElementById('output').innerHTML = `
        <h3>Stored User Record:</h3>
        <p><strong>Username:</strong> ${user.userName}</p>
        <p><strong>First Name:</strong> ${user.firstName}</p>
        <p><strong>Last Name:</strong> ${user.lastName}</p>
        <p><strong>Address:</strong> ${user.address}</p>
      `;
    } 
    else {
      document.getElementById('output').innerHTML = "<p>No data found in local storage.</p>";
    }
  }
  