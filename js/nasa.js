let infoNasa= document.querySelector("#infoNasa")


const fetchNasa= async() =>{

    const response = await fetch("http://developer.netflix.com/blog/read/Changes_to_the_Public");
  const data = await response.json();
 console.log(data)

`
 
 
 `;
 infoNasa.append(spaceInfo);

};

fetchNasa();

