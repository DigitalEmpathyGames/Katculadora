import React from 'react';
import { Backpack, Browser, Cat, CreditCard, File, Ghost, IceCream, Mug, Planet, SpeechBubble } from 'react-kawaii/lib/native/';


const useEmotes = () => {
    const emotions = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'];
    const colors = ['#FFF0AA','#FFD6A5','#FFB0A0','#F8C8CF','#FCE0E3','#DFD8CC','#F2EDE1','#EEEFBF','#C7F0E0','#DEE0E2']
    
    const obtenerEmote = () => {
        let emotion = emotions[obtenerRandom(6)]
        let colorEmote = colors[obtenerRandom(9)];
        let emote = obtenerRandom(9);
        let porte = 30;
        let emoteListo;
        switch(emote){
            case 0:
                emoteListo = {
                    key : emote,
                    emote:<Backpack size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 1:
                emoteListo = {
                    key : emote,
                    emote:<Browser size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 2:
                emoteListo = {
                    key : emote,
                    emote:<Cat size={porte} mood={emotion} color={colorEmote} />
                }
                 break;
            case 3:
                emoteListo = {
                    key : emote,
                    emote:<CreditCard size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 4:
                emoteListo = {
                    key : emote,
                    emote:<File size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 5:
                emoteListo = {
                    key : emote,
                    emote:<Ghost size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 6:
                emoteListo = {
                    key : emote,
                    emote:<IceCream size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 7:
                emoteListo = {
                    key : emote,
                    emote:<Mug size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 8:
                emoteListo = {
                    key : emote,
                    emote:<Planet size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 9:
                emoteListo = {
                    key : emote,
                    emote:<SpeechBubble size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            default:
                break;
        }

        return(emoteListo);

    }

    const dibujarEmoteFromJSON = (emote) => {
        let emoteListo;
        let porte = emote.props.size;
        let emotion = emote.props.mood;
        let colorEmote = emote.props.color;
        switch(emote.key){
            case 0:
                emoteListo = {
                    key : emote.key,
                    emote:<Backpack size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 1:
                emoteListo = {
                    key : emote.key,
                    emote:<Browser size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 2:
                emoteListo = {
                    key : emote.key,
                    emote:<Cat size={porte} mood={emotion} color={colorEmote} />
                }
                 break;
            case 3:
                emoteListo = {
                    key : emote.key,
                    emote:<CreditCard size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 4:
                emoteListo = {
                    key : emote.key,
                    emote:<File size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 5:
                emoteListo = {
                    key : emote.key,
                    emote:<Ghost size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 6:
                emoteListo = {
                    key : emote.key,
                    emote:<IceCream size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 7:
                emoteListo = {
                    key : emote.key,
                    emote:<Mug size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 8:
                emoteListo = {
                    key : emote.key,
                    emote:<Planet size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            case 9:
                emoteListo = {
                    key : emote.key,
                    emote:<SpeechBubble size={porte} mood={emotion} color={colorEmote} />
                }
                break;
            default:
                break;
        }

        return(emoteListo);
    }

    return {
        obtenerEmote,
        dibujarEmoteFromJSON
    }


}
export default useEmotes;

const obtenerRandom = (toNumber) => {
   return Math.floor(Math.random() * (toNumber + 1));
}