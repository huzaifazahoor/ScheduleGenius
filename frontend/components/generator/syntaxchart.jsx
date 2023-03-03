export default function SyntaxChar({style,char}){
    return <p className={`inline font-mono font-black text-9xl ${isNaN(char) ? 'text-zinc-300':'text-primary'} ${style}`}>{char}</p>
}