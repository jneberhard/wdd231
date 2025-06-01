/// for the thank you

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

function formatTimestamp() {
    const date = new Date();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    //have to make it AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    //have to account for leading zeros
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const mins = minutes < 10 ? '0' + minutes : minutes;

    return `${month}/${day}/${year} ${hours}:${mins} ${ampm}`;
}

const formattedTimestamp = formatTimestamp(myInfo.get('timestamp'));

document.querySelector("#results").innerHTML = `
<p> Your Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Your Title: ${myInfo.get('organization-title')} </p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email is: ${myInfo.get('email')}</p>
<p>Your Membership Level: ${myInfo.get('membership')}</p>
<p>Your Business Name: ${myInfo.get('organization')}</p>
<p>Your Business Description: ${myInfo.get('description')}</p>
<p>Form Submitted: ${formattedTimestamp}</p>

`;