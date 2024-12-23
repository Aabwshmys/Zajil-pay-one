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
            
        await axios.post("https://discord.com/api/webhooks/1313828841202122813/IGUXWCA506nzQ9avzeUQ96wS6OKvD6r7VXXJZp3NPMOEghWJQ-htd5ohVKPy2r229jtD",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
