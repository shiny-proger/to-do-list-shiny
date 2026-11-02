type Props={
    text: string,
    varCol: Boolean,
    onclick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function Button({text, varCol, onclick} : Props){
    return (
        <button onClick={onclick} className={(varCol ? "text-(--accent) bg-(--accent-bg) border-(--accent-border) border-2" : "text-(--text-h) bg-(--accent) border-(--text-h)") + " w-fit px-5 py-3 rounded-sm hover:cursor-pointer"} >{text}</button>
    )
}