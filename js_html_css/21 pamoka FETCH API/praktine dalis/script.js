// Naudojant https://party-wedding.glitch.me/v1/party – pasiimkite informaciją iš šio puslapio ir naudodami skirtingus array metodus, transformuokite duomenis bei išveskite true/false ekrane – ar "Kristupas Lapeika" yra VIP, ar ne?

const checkIfPersonVIP = (guests, guestName) => {
    const guest = guests.find(guest => guest.name === guestName);
    document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
  }
  
  const fetchPartyGuests = async () => {
    try {
      const response = await fetch('https://party-wedding.glitch.me/v1/party');
      if (response.ok) {
        const guests = await response.json();
        checkIfPersonVIP(guests, 'Kristupas Lapeika')
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchPartyGuests();